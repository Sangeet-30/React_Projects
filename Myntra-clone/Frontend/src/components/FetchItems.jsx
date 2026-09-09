import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchingStatusSlice";

const FetchItems = () => {
  const fetchDone = useSelector((store) => store.fetchStatus.fetchDone);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone) return;

    const controller = new AbortController();

    const fetchItems = async () => {
      dispatch(fetchStatusActions.markFetchingStarted());

      try {
        const response = await fetch("http://localhost:8080/items", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch items: ${response.status}`);
        }

        const data = await response.json();

        dispatch(itemsActions.addInitialItems(data.items));
        dispatch(fetchStatusActions.markFetchDone());
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch(
            fetchStatusActions.markFetchFailed(
              error.message || "Failed to fetch items",
            ),
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          dispatch(fetchStatusActions.markFetchingFinished());
        }
      }
    };

    fetchItems();

    return () => {
      controller.abort();
    };
  }, [fetchDone, dispatch]);

  return null;
};

export default FetchItems;

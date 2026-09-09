import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : fetchStatus.fetchError ? (
        <main className="container text-center py-5">
          <h2>Could not load items</h2>
          <p className="text-muted">
            Please start the backend server and refresh the page.
          </p>
        </main>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
}

export default App;

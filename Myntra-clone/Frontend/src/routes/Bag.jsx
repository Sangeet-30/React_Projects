import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);

  const finalItems = items.filter((item) => bagItems.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        {finalItems.length === 0 ? (
          <div className="empty-bag">
            <h2>Your Bag is Empty</h2>
            <p>Add some products to your bag to see them here.</p>
          </div>
        ) : (
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;

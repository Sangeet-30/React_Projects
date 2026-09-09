import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  const CONVENIENCE_FEES = 99;

  const totalItems = finalItems.length;

  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  const convenienceFee = totalItems > 0 ? CONVENIENCE_FEES : 0;

  const finalPayment = totalMRP - totalDiscount + convenienceFee;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItems} Items)</div>

        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>

          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>

          <span className="price-item-value">
            {convenienceFee === 0 ? "₹0" : `₹${convenienceFee}`}
          </span>
        </div>

        <hr />

        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>

          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>

      <button
        type="button"
        className="btn-place-order"
        disabled={totalItems === 0}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default BagSummary;

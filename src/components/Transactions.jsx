import { useContext, useEffect } from "react";
import { expand, download, successful, unsuccessful } from "../assets";
import { useTransactionsQuery } from "../requests/useTransactionsQuery";
import { FilterContext, ModalContext } from "../App";
import filterList from "../helpers/filterList";

const Transactions = () => {
  const { isPending, isError, data } = useTransactionsQuery();
  const { showModal, setShowModal } = useContext(ModalContext);
  const { filters } = useContext(FilterContext);

  console.log("filters: ", filters);

  let transactionData;

  if (data) {
    const { status, data: data_ } = data;
    if (status == 200)
      transactionData = data_.map((item, id) => {
        if (id === 4) {
          item["status"] = "failed"; // manually convert a single object in data to allow for filter by status (successful)
          return item;
        } else {
          return item;
        }
      });
  }

  const filteredData = filterList(transactionData, filters);

  return (
    <div className="transactions">
      <div className="transactions__header">
        <div className="transactions__header__group">
          <p className="transactions__header__group__text">
            {filteredData?.length || 0} Transactions
          </p>
          <p>Your transactions for the past 7 days</p>
        </div>

        <div className="transactions__header__filter-group">
          <div onClick={() => setShowModal(!showModal)}>
            <p>Filter</p>
            <img src={expand} alt="expand icon" />
          </div>

          <div>
            <p>Export List</p>
            <img src={download} alt="download icon" />
          </div>
        </div>
      </div>

      <div className="transactions__list">
        {isPending ? (
          <p className="transactions__list__text">Fetching...</p>
        ) : isError ? (
          <p className="transactions__list__text">
            Unable to fetch transaction list.
          </p>
        ) : (
          filteredData?.map(({ amount, metadata, status, type, date }, id) => (
            <div key={id} className="transactions__list__item">
              <div className="transactions__list__item__left">
                <div
                  className={`icon ${
                    status === "successful" ? "successful" : "unsuccessful"
                  }`}
                >
                  <img
                    src={status === "successful" ? successful : unsuccessful}
                    alt="icon"
                  />
                </div>

                <div className="transactions__list__item__left__group">
                  <p className="product-name">{metadata?.product_name}</p>
                  <p className="name">{metadata?.name}</p>
                </div>
              </div>

              <div className="transactions__list__item__right">
                <p className="amount">USD {amount}</p>
                <p className="date">{date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Transactions;

import { useQuery } from "@tanstack/react-query";
import { CSVLink } from "react-csv";
import getTransactions from "../requests/getTransactions";
import { useEffect, useState } from "react";
import { expand, download, successful, unsuccessful } from "../assets";

const Transactions = () => {
  const [transactionData, setTransactionData] = useState([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["transactionData"],
    queryFn: getTransactions,
  });

  useEffect(() => {
    if (data) {
      const { status, data: transactionData } = data;
      if (status == 200) setTransactionData(transactionData);
    }
  }, [data]);

  return (
    <div className="transactions">
      <div className="transactions__header">
        <div className="transactions__header__group">
          <p className="transactions__header__group__text">
            {transactionData?.length || 0} Transactions
          </p>
          <p>Your transactions for the past 7 days</p>
        </div>

        <div className="transactions__header__filter-group">
          <div>
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
        ) : error ? (
          <p className="transactions__list__text">
            Unable to fetch transaction list.
          </p>
        ) : (
          transactionData?.map(
            ({ amount, metadata, status, type, date }, id) => (
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
            )
          )
        )}
      </div>
    </div>
  );
};

export default Transactions;

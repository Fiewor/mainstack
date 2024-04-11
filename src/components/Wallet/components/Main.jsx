import { line } from "../../../assets";
import { useState } from "react";
import { useEffect } from "react";
import { useWalletQuery } from "../../../requests/useWalletQuery";

const Main = () => {
  const { isPending, isError, data } = useWalletQuery();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (data) {
      const {
        status,
        data: { balance },
      } = data;
      if (status == 200) setBalance(balance);
    }
  }, [data]);

  return (
    <div className="main">
      <div className="main__top">
        <div className="main__top__group">
          <p className="main__top__group__text">Available Balance</p>
          <p className="main__top__group__sub-text">
            {isPending
              ? "Fetching..."
              : isError
              ? "Unable to fetch"
              : `USD ${balance}`}
          </p>
        </div>

        <button className="main__top__button">Withdraw</button>
      </div>

      <div className="main__bottom">
        <img src={line} alt="line graph" />

        <div className="main__bottom__group">
          <p>Apr 1, 2022</p>
          <p>Apr 30, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Main;

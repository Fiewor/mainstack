import { useQuery } from "@tanstack/react-query";
import getWallet from "../../../requests/getWallet";
import { info } from "../../../assets";
import { useEffect, useState } from "react";

const Aside = () => {
  const [figures, setFigures] = useState({
    total_payout: 0,
    total_revenue: 0,
    pending_payout: 0,
    ledger_balance: 0,
  });
  const { isPending, error, data } = useQuery({
    queryKey: ["walletData"],
    queryFn: getWallet,
  });

  useEffect(() => {
    if (data) {
      const {
        status,
        data: { total_payout, total_revenue, pending_payout, ledger_balance },
      } = data;
      if (status == 200)
        setFigures({
          total_payout,
          total_revenue,
          pending_payout,
          ledger_balance,
        });
    }
  }, [data]);

  return (
    <div className="aside">
      <div className="aside__group">
        <div className="aside__group__heading">
          <p>Ledger Balance</p>
          <img src={info} alt="info icon" />
        </div>

        <p className="aside__group__text">USD {figures?.ledger_balance}</p>
      </div>

      <div className="aside__group">
        <div className="aside__group__heading">
          <p>Total Payout</p>
          <img src={info} alt="info icon" />
        </div>

        <p className="aside__group__text">USD {figures?.total_payout}</p>
      </div>

      <div className="aside__group">
        <div className="aside__group__heading">
          <p>Total Revenue</p>
          <img src={info} alt="info icon" />
        </div>

        <p className="aside__group__text">USD {figures?.total_revenue}</p>
      </div>

      <div className="aside__group">
        <div className="aside__group__heading">
          <p>Pending Payout</p>
          <img src={info} alt="info icon" />
        </div>

        <p className="aside__group__text">USD {figures?.pending_payout}</p>
      </div>
    </div>
  );
};

export default Aside;

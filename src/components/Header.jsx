import { useEffect, useState } from "react";
import {
  logo,
  home,
  chart,
  payments,
  group,
  widgets,
  notifications,
  chat,
  menu,
} from "../assets";
import { useUserQuery } from "../requests/useUser";

const Header = () => {
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });

  const { isPending, isError, data } = useUserQuery();

  useEffect(() => {
    if (data) {
      const { status, data: userData } = data;
      if (status == 200) setUserData(userData);
    }
  }, [data]);

  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />

      <div className="header__group one">
        <div className="header__group__item">
          <img src={home} alt="home icon" />
          <p>Home</p>
        </div>

        <div className="header__group__item">
          <img src={chart} alt="chart icon" />
          <p>Analytics</p>
        </div>

        <div className="header__group__item dark">
          <img src={payments} alt="payments icon" />
          <p>Revenue</p>
        </div>

        <div className="header__group__item">
          <img src={group} alt="group icon" />
          <p>CRM</p>
        </div>

        <div className="header__group__item">
          <img src={widgets} alt="widgets icon" />
          <p>Apps</p>
        </div>
      </div>

      <div className="header__group">
        <img src={notifications} alt="notifications icon" />
        <img src={chat} alt="chat icon" />

        <div className="header__group__toggle">
          <div className="header__group__toggle__circle">
            <p className="username">{`${userData.first_name[0]}${userData.last_name[0]}`}</p>
          </div>
          <img src={menu} alt="menu icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;

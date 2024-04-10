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

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />

      <div className="header__group">
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
        <img src={notifications} alt="" />
        <img src={chat} alt="" />

        <div className="header__group__toggle">
          <div className="header__group__toggle__circle">
            <p>OJ</p>
          </div>
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

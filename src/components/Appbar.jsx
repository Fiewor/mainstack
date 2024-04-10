import { sidebar1, sidebar2, sidebar3, sidebar4 } from "../assets";

const Appbar = () => {
  return (
    <div className="app-bar">
      <img src={sidebar1} alt="icon" />
      <img src={sidebar2} alt="icon" />
      <img src={sidebar3} alt="icon" />
      <img src={sidebar4} alt="icon" />
    </div>
  );
};

export default Appbar;

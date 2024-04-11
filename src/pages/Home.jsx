import { useContext } from "react";

import Appbar from "../components/Appbar";
import Header from "../components/Header";
import Transactions from "../components/Transactions";
import Wallet from "../components/Wallet";
import { ModalContext } from "../App";
import FilterModal from "../components/FilterModal";

const Home = () => {
  const { showModal } = useContext(ModalContext);

  return (
    <>
      {!showModal ? (
        <div className="home">
          <Header />

          <div className="home__main">
            <div className="home__main__side">
              <Appbar />
            </div>

            <div className="home__main__content">
              <Wallet />
              <Transactions />
            </div>
          </div>
        </div>
      ) : (
        <FilterModal />
      )}
    </>
  );
};

export default Home;

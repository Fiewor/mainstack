import Appbar from "../components/Appbar";
import Header from "../components/Header";
import Transactions from "../components/Transactions";
import Wallet from "../components/Wallet";

const Home = () => {
  return (
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
  );
};

export default Home;

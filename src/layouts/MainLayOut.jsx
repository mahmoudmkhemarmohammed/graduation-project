import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header"
import Footer from "../components/common/Footer/Footer"
const MainLayOut = () => {
  return (
    <>
      <Header />
      <main className="heightLayout">
      <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayOut;

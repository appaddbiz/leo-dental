import { useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const hideFooterRoutes = [
    "/best-dental-clinic-in-hsr-layout",
    "/best-dental-clinic-in-nellore",
    "/best-dental-clinic-in-tirupathi",
    "/best-dental-clinic-in-whitefield",
  ];

  return (
    <>
      <Layout />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

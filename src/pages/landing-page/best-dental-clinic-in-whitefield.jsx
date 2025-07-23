import { useEffect } from "react";
import Whitefield from "../../components/landing-page/Whitefield";

function BestDentalClinicInWhitefield() {
  useEffect(() => {
    document.body.classList.add("hide-scrollbar");
    return () => document.body.classList.remove("hide-scrollbar");
  }, []);
  return (
    <div>
      <Whitefield />
    </div>
  );
}

export default BestDentalClinicInWhitefield;

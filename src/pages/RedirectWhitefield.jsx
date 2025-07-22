// RedirectWhitefield.js
import { useEffect } from "react";

export default function RedirectWhitefield() {
  useEffect(() => {
    window.location.href =
      "https://clinic.leodental.co.in/best-dental-clinic-in-whitefield/";
  }, []);

  return <p>Redirecting to our Whitefield dental clinic page...</p>;
}

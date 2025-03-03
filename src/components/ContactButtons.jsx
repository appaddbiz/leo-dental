const ContactButtons = () => {
  return (
    <div style={{ position: "fixed", bottom: 0, zIndex: 999, width: "100vw" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "60px",
        }}
      >
        <div style={{ width: "25%" }}>
          <a
            href="https://wa.link/ho0ne6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textDecoration: "none",
              paddingTop: "10px",
              gap: "10px",
              backgroundColor: "#ed1e24",
            }}
          >
            <img
              src="/contact-images/whatsapp.png"
              alt="WhatsApp"
              height={25}
              width={25}
            />
            <p style={{ fontSize: "12px", color: "white", fontWeight: "600" }}>
              WHATSAPP
            </p>
          </a>
        </div>
        <div style={{ width: "25%" }}>
          <a
            href="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textDecoration: "none",
              paddingTop: "10px",
              gap: "10px",
              backgroundColor: "#727070",
            }}
          >
            <img
              src="/contact-images/google-maps.png"
              alt="WhatsApp"
              height={25}
              width={25}
            />
            <p style={{ fontSize: "12px", color: "white", fontWeight: "600" }}>
              LOCATE US
            </p>
          </a>
        </div>

        <div style={{ width: "25%" }}>
          <a
            href="tel:+919347108123"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "10px",
              gap: "10px",
              textDecoration: "none",
              backgroundColor: "rgb(223, 223, 223)",
            }}
          >
            <img
              src="/contact-images/smartphone.png"
              alt="Call"
              height={25}
              width={25}
            />
            <p
              style={{ fontSize: "12px", color: "#1B2251", fontWeight: "600" }}
            >
              CALL
            </p>
          </a>
        </div>

        <div style={{ width: "25%" }}>
          <a
            href="tel:+919347108123"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "10px",
              gap: "10px",
              textDecoration: "none",
              backgroundColor: "#fff6ca",
            }}
          >
            <img
              src="/contact-images/medical-appointment.png"
              alt="Appointment"
              height={25}
              width={25}
            />
            <p
              style={{ fontSize: "12px", color: "#1B2251", fontWeight: "600" }}
            >
              APPOINTMENT
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;

import React, { useState } from "react";
import { motion } from "framer-motion";
const isMobile = window.innerWidth < 600;

export default function DateNightRSVP() {
  const [main, setMain] = useState("");
  const [wine, setWine] = useState("");
  const [date, setDate] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (!main || !wine || !date) {
      alert("Please complete all selections 💌");
      return;
    }

    setSending(true);

    const subject = encodeURIComponent("Date Night RSVP ❤️");
    const body = encodeURIComponent(
      `Hi Terry,

Here are my choices:
- Starter: Vietnamese Spring Rolls with Prawns and Peanut Satay Sauce
- Main: ${main}
- Wine: ${wine}
- Date: ${date}

Can’t wait ❤️`
    );

    const mailtoLink = `mailto:tscottsk@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setSending(false);
    }, 1200);
  };

  const optionStyle = (selected) => ({
    display: "block",
    marginBottom: "10px",
    padding: "12px",
    borderRadius: "8px",
    background: selected
      ? "rgba(212,175,55,0.25)"
      : "rgba(212,175,55,0.1)",
    border: selected
      ? "1px solid #d4af37"
      : "1px solid rgba(212,175,55,0.4)",
    cursor: "pointer",
    transition: "all 0.2s ease"
  });


  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0f14",
        fontFamily: "Georgia, serif",
        color: "#f8f6f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: isMobile ? "20px" : "40px"
``
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "620px",
          background: "linear-gradient(145deg,#0d1b22,#122c36)",
          borderRadius: "16px",
          boxShadow: "0 0 40px rgba(212,175,55,0.25)",
          overflow: "hidden"
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", padding: isMobile ? "25px 20px" : "45px"
 }}>
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "#d4af37",
              textShadow: "0 0 12px rgba(212,175,55,0.6)",
              letterSpacing: "2px"
            }}
          >
            A Private Seafood Affair
          </h1>
          <p
            style={{
              marginTop: "12px",
              fontSize: isMobile ? "14px" : "16px",

              color: "#dbe7ec"
            }}
          >
            An evening of elegance, crafted just for you
          </p>
        </div>

        <div
          style={{ height: "1px", background: "rgba(212,175,55,0.3)" }}
        ></div>
        {/* Content */}
        <div style={{ padding: isMobile ? "25px 20px" : "35px 45px" }}>
          <h3 style={{ color: "#d4af37" }}>🍤 Starter</h3>
          <p>Vietnamese Spring Rolls with Prawns and Peanut Satay Sauce</p>

          {/* Main */}
          <h3 style={{ color: "#d4af37", marginTop: "25px" }}>
            🐟 Choose Your Main
          </h3>
          <div style={{ marginTop: "10px" }}>
            {["Tuna Ceviche", "Tuna Poke Bowl"].map((option) => (
              <div
                key={option}
                onClick={() => setMain(option)}
                style={optionStyle(main === option)}
              >
                 {option}
              </div>
            ))}
          </div>


          {/* Wine */}
          <h3 style={{ color: "#d4af37", marginTop: "30px" }}>
            🍷 Choose Your Wine
          </h3>
          <div style={{ marginTop: "10px" }}>
            {["Wooded Chardonnay", "Sauvignon Blanc"].map((option) => (
              <div
                key={option}
                onClick={() => setWine(option)}
                style={optionStyle(wine === option)}
              >
                 {option}
              </div>
            ))}
          </div>


          {/* Date */}
          <h3 style={{ marginTop: "25px" }}>📅 Your Perfect Date</h3>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid rgba(212,175,55,0.4)",
              marginTop: "8px",
              background: "#fff",
              color: "#000"
            }}
          />


          <p style={{ fontSize: "14px", color: "#cfe3ea" }}>
            Select your choices, then send them with one click 💌
          </p>


          {/* Button */}
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              style={{
                background: "linear-gradient(90deg,#d4af37,#f5deb3)",
                color: "#000",
                padding: "14px 28px",
                borderRadius: "30px",
                fontWeight: "bold",
                boxShadow: "0 0 18px rgba(212,175,55,0.7)",
                border: "none",
                cursor: "pointer"
              }}
            >
              {sending
                ? "Preparing your invitation... ✨"
                : "Send My Choices "}
            </motion.button>
          </div>
        </div>


        {/* Footer */}
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p
            style={{
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#e8f1f5"
            }}
          >
            I can't wait to spoil you and create a night that shows just how
            much you mean to me.
          </p>

          <p
            style={{
              marginTop: "15px",
              fontSize: "16px",
              color: "#d4af37"
            }}
          >
            Love, Terry ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

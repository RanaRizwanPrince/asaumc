import React, { useEffect, useState } from "react";
const HospitalPreloader = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showIcons, setShowIcons] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          setShowIcons(true);
          document.body.style.overflow = "auto";
          setTimeout(() => setFadeOut(true), 3000);
          setTimeout(() => {
            setShowIcons(false);
            setFadeOut(false);
          }, 4000);
        }, 500);
        return 100;
      });
    }, 30);
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);
  if (loading) {
    return (
      <div style={styles.loaderWrapper}>
        <div style={styles.barWrapper}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }} />
        </div>
        <div style={styles.percentage}>{progress}%</div>
        <p style={styles.text}>Loading ASAUMC Website...</p>
      </div>
    );
  }
  return (
    <>
      {showIcons &&
        [...Array(50)].map((_, i) => {
          const medicalIcons = ["💊", "🩺", "🩹", "🩻", "❤️"];
          return (
            <div
              key={i}
              style={{
                ...styles.icon,
                left: `${Math.random() * 100}%`,
                fontSize: `${16 + Math.random() * 24}px`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: fadeOut ? 0 : 1,
                transition: "opacity 1s ease",
              }}
            >
              {medicalIcons[Math.floor(Math.random() * medicalIcons.length)]}
            </div>
          );
        })}
      {children}
    </>
  );
};
const styles = {
  loaderWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    background: "#e0f7fa", // calming hospital blue
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  barWrapper: {
    width: "60%",
    height: "20px",
    background: "#B0BEC5",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  progressBar: {
    height: "100%",
    background: "#00796B", // teal hospital color
    transition: "width 0.3s ease",
  },
  percentage: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#00796B",
  },
  text: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#004d40",
  },
  icon: {
    position: "fixed",
    top: "-50px",
    animation: "fall 3s linear forwards",
    zIndex: 9998,
  },
};
// Keyframes for falling medical icons
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 1; }
  }`,
  styleSheet.cssRules.length
);
export default HospitalPreloader;
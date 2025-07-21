import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SeletedPollContext } from "../context/SeletedPoll";

export default function ThankYou() {

  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="thank-you-page" style={styles.container}>
      <h1 style={styles.heading}>Thankyou for Voting!</h1>
      <p style={styles.subtext}>
        Redirecting to results in <span style={styles.count}>{countdown}</span> seconds...
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "4rem",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#5c3d99",
  },
  subtext: {
    fontSize: "1.25rem",
  },
  count: {
    fontWeight: "bold",
    color: "#e91e63",
  },
};

import { useEffect, useState } from "react";
export default function Countdown() {
    // ⏳ Today + 5 Years
    const END_TIME = Date.now() + 5 * 365 * 24 * 60 * 60 * 1000;
    const [timeLeft, setTimeLeft] = useState(END_TIME - Date.now());
    const [isLive, setIsLive] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1000) {
                    clearInterval(interval);
                    setIsLive(true);
                    return 0;
                }
                return prev - 1000; // ⏱ 1 second decrease
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // 🎉 Website Live
    if (isLive) {
        return (
            <div className="live-container">
                <h1>🎉 Website Is Live</h1>
                <p>Welcome to our official website</p>
            </div>
        );
    }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    return (
        <div className="countdown-wrapper">
            <div className="timer">
                <TimeBox value={days} label="Days" />
                <TimeBox value={hours} label="Hours" />
                <TimeBox value={minutes} label="Minutes" />
                <TimeBox value={seconds} label="Seconds" />
            </div>
        </div>
    );
}
function TimeBox({ value, label }) {
    return (
        <div className="time-box">
            <h1>{value}</h1>
            <p>{label}</p>
        </div>
    );
}
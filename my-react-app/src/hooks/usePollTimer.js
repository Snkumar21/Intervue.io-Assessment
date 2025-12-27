import { useEffect, useState } from "react";

export const usePollTimer = (startTime, duration) => {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (!startTime) return;

        const interval = setInterval(() => {
            const elapsed = Math.floor(
                (Date.now() - new Date(startTime)) / 1000
            );
            const remaining = duration - elapsed;
            setTimeLeft(Math.max(remaining, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime, duration]);

    return timeLeft;
};
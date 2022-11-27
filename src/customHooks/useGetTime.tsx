import { useEffect, useState } from "react";

// returns a div containing the current time
// updates every minute

export const useGetTime: React.FC = () => {
  const initialTimestamp = new Date();
  const initialTime =
    initialTimestamp.getHours() +
    ":" +
    String(initialTimestamp.getMinutes()).padStart(2, "0");

  const [time, setTime] = useState<string>(initialTime);

  // update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date();
      setTime(
        timestamp.getHours() +
          ":" +
          String(timestamp.getMinutes()).padStart(2, "0")
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
};

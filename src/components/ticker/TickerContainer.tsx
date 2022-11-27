import { Ticker } from "./Ticker";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { headlines } from "../../interface/interface";

interface TickerContainer {
  headlinesUrl: string;
}

export const TickerContainer: React.FC<TickerContainer> = ({
  headlinesUrl,
}) => {
  const [headlines, setHeadlines] = useState<headlines[] | null>(null);

  useEffect(() => {
    async function getHeadlines() {
      await fetch(headlinesUrl)
        .then((res) => res.json())
        .then((data) => setHeadlines((prev) => data));
    }

    getHeadlines();
  }, [headlinesUrl]);

  return <Ticker headlines={headlines} logoURL={logo} />;
};

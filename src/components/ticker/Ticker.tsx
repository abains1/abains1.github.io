import * as React from "react";
import { useGetTime } from "../../customHooks/useGetTime";
import { headlines } from "../../interface/interface";
import "./Ticker.scss";

interface Ticker {
  logoURL: string;
  headlines: headlines[] | null;
}

export const Ticker: React.FC<Ticker> = ({ logoURL, headlines }) => {
  const time = useGetTime({});
  const animationDuration = headlines != null ? headlines.length * 15 : 0;

  return (
    <div className="Ticker">
      <div className="Banner">
        <img className="Logo" src={logoURL} />
        <div className="Time">{time}</div>
        <div className="Marquee">
          {headlines != null ? (
            <p
              className="msg"
              style={
                {
                  animation: `marquee ${animationDuration}s linear infinite`,
                } as React.CSSProperties
              }
            >
              {headlines.map((headline, index) => {
                return (
                  <>
                    <a
                      href={headline.link}
                      style={{ textDecoration: "none", color: "black" }}
                      target="_blank"
                    >
                      <span key={index + "headline"}>{headline.headline}</span>
                    </a>
                    <span key={index + "span"} className="divider">
                      BREAKING NEWS
                    </span>
                  </>
                );
              })}
              {headlines.map((headline, index) => {
                return (
                  <>
                    <a
                      href={headline.link}
                      style={{ textDecoration: "none", color: "black" }}
                      target="_blank"
                    >
                      <span key={index + "headline2"}>{headline.headline}</span>
                    </a>
                    <span key={index + "span2"} className="divider">
                      BREAKING NEWS
                    </span>
                  </>
                );
              })}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="Footer"></div>
    </div>
  );
};

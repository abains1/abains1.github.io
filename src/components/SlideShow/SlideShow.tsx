import { useEffect, useState } from "react";
import { story } from "../../interface/interface";
import { SlideContent } from "./SlideContent";
import "./SlideShow.scss";

interface SlideShow {
  stories: story[] | null;
  heading: string;
}

export const SlideShow: React.FC<SlideShow> = ({ stories, heading }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setIndex((prev) => 0);
  }, [stories]);

  //   increment slide every 10s and return to heading slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      if (stories != null) {
        if (index == stories.length - 1) {
          setIndex((prev) => 0);
        } else {
          setIndex((prev) => prev + 1);
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="SlideShow">
      <div className="HeadingContainer">
        <div className="Heading">{heading}</div>
      </div>
      {stories != null &&
      index != stories.length &&
      stories[index].title != null ? (
        <div className="Slide">
          <div className="SlideContent">
            <SlideContent
              heading={stories[index].title}
              source={stories[index].source}
              date={stories[index].date}
              imgURL={stories[index].image_url}
              description={stories[index].description}
              link={stories[index].link}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import { story } from "../../interface/interface";
import { SlideShow } from "./SlideShow";

interface SlideShowContainer {
  storiesURL: string;
  heading: string;
}

export const SlideShowContainer: React.FC<SlideShowContainer> = ({
  storiesURL,
  heading,
}) => {
  const [stories, setStories] = useState<story[] | null>(null);

  useEffect(() => {
    async function getStories() {
      await fetch(storiesURL)
        .then((res) => res.json())
        .then((data) => setStories((prev) => data as story[]));
    }

    getStories();
  }, [storiesURL]);

  return (
    <>
      {stories != null ? (
        <SlideShow stories={stories} heading={heading} />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

import "./SlideContent.scss";

interface StoryContent {
  heading: string;
  source: string;
  date: string;
  imgURL: string;
  description: string;
  link: string;
}

export const SlideContent: React.FC<StoryContent> = ({
  heading,
  source,
  date,
  imgURL,
  description,
  link,
}) => {
  return (
    <div className="SlideContent">
      <div className="Heading">
        <div className="Title">
          <a
            href={link}
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            {heading}
          </a>
        </div>
        <div className="SourceDateContainer">
          <div className="Source">{source}</div>
          <div className="Date">{date}</div>
        </div>
      </div>
      <div className="ImageContainer">
        <a
          href={link}
          style={{ textDecoration: "none", color: "black" }}
          target="_blank"
        >
          <img src={imgURL} />
        </a>
      </div>
      <div className="DescriptionContainer">
        <a
          href={link}
          style={{ textDecoration: "none", color: "black" }}
          target="_blank"
        >
          <div className="Description">{description}</div>
        </a>
      </div>
    </div>
  );
};

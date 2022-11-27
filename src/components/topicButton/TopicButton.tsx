import "./TopicButton.scss";

interface TopicButton {
  setTopicIndex: React.Dispatch<React.SetStateAction<number>>;
  topicIndex: number;
  numberTopics: number;
}

export const TopicButton: React.FC<TopicButton> = ({
  setTopicIndex,
  topicIndex,
  numberTopics,
}) => {
  function handleClick() {
    if (topicIndex == numberTopics - 1) {
      setTopicIndex((prev) => 0);
    } else {
      setTopicIndex((index) => index + 1);
    }
  }

  return (
    <div className="TopicButton" onClick={handleClick}>
      Change Channel
    </div>
  );
};

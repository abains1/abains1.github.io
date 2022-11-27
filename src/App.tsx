import { useState } from "react";
import "./App.css";
import { SlideShowContainer } from "./components/SlideShow/SlideShowContainer";
import { TickerContainer } from "./components/ticker/TickerContainer";
import { TopicButton } from "./components/topicButton/TopicButton";

function App() {
  const topics = ["ukraine", "Covid"];
  const headings = ["War in Ukraine", "COVID-19"];
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number>(0);

  return (
    <div className="App">
      <TopicButton
        setTopicIndex={setSelectedTopicIndex}
        topicIndex={selectedTopicIndex}
        numberTopics={topics.length}
      />
      <SlideShowContainer
        storiesURL={`${process.env.news_api}/stories/${topics[selectedTopicIndex]}`}
        heading={headings[selectedTopicIndex]}
      />
      <TickerContainer
        headlinesUrl={`${process.env.news_api}/headlines/${topics[selectedTopicIndex]}`}
      />
    </div>
  );
}

export default App;

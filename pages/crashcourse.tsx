import styles from "../components/CrashCourse.module.css";
import Link from "next/link";

export default function crashCourse() {
  // Lesson Slides need backend integration in the form of {slideName: [datePublished, SlideSummary, LinkToSlide]}
  // Found below is sample static input
  var date = new Date();
  var current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const debateSlides = {
    SlideName: [current_date, "SlideInfo", "SlideLink"],
    SlideName2: [current_date, "SlideInfo2", "SlideLink"],
  };
  const lessonSlides = Object.entries(debateSlides).map(
    ([slideTitle, slideData], index) => (
      <div className={styles.slideBox} key={index}>
        <h1>{slideTitle}</h1>
        <h2>{slideData[0]}</h2>
        <p>{slideData[1]}</p>
        <p>
          {" "}
          <b>Link: </b>{" "}
          <a href={slideData[2]}>
            <u>Slideshow</u>
          </a>
        </p>
      </div>
    )
  );

  // Debate Topics need Backend Integration in the form of {debateTopicName: [TopicSummary, LinkToDebateRoom]}
  // Note: *LinkToDebateRoom* must be in Type: String
  // Found below is sample static input
  const debateTopics = {
    "Why Jaival is Supreme": ["TopicSummary", "LinkToRoom"],
    "Why Jaival is the Best": ["TopicSummary", "LinkToRoom"],
    "Why Jaival is the best MMA Fighter at Turner": [
      "TopicSummary",
      "LinkToRoom",
    ],
  };
  const sampleTopics = Object.entries(debateTopics).map(
    ([debateTopic, debateRoomLst], index) => (
      <div className={styles.topicBox} key={index}>
        <h1>{debateTopic}</h1>
        <h2>{debateRoomLst[0]}</h2>
        <p>
          <b>Link to Debate Room: </b>{" "}
          <a href={debateRoomLst[1]}>
            <u>Room</u>
          </a>
        </p>
      </div>
    )
  );

  return (
    <div>
      <div className={styles.grid_container}>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <div className={styles.lessonSlides}>
          <h1> Sample Debate Slides</h1>
          {lessonSlides}
        </div>

        <div className={styles.sampleDebateTopics}>
          <h1> Sample Debate Topics</h1>
          {sampleTopics}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link href="/">
          <button
            style={{
              backgroundColor: "black",
              border: "1px solid black",
              padding: "20px",
              width: "200px",
              color: "white",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Return Home
          </button>
        </Link>
        <div>
          <p
            style={{
              marginTop: "50px",
              color: "gray",
              fontSize: "12px",
              padding: "10px",
            }}
          >
            2022/2023 TFSS Debate Society{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

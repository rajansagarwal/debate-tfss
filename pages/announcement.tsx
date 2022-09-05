import styles from "../components/Announcement.module.css";
import Link from "next/link";

export default function announcementBoard() {
  // Announcement Board in the Form of {AnnouncementTitle: [date, content]}
  // Backend Connection Required
  var date = new Date();
  var current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const sampleAnnouncements = {
    AnnouncementTitleTest: [current_date, "Sample Announcement Data"],
    AnnouncementTitleTest2: [current_date, "Sample Announcement Data"],
  };
  const AnnouncementList = Object.entries(sampleAnnouncements).map(
    ([announcementTitle, announcementData], index) => (
      <div className={styles.announcementBox} key={index}>
        <h1> {announcementTitle}</h1>
        <h2>{announcementData[0]}</h2>
        <p>{announcementData[1]}</p>
      </div>
    )
  );

  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className={styles.TitleBox}>
        <div className={styles.TitleFont}>
          <h1>Announcements</h1>
        </div>
        <div className={styles.SubTitleFont}>
          <h3> What&#39;s Going in Debate? </h3>
        </div>
        <br />
      </div>
      <br />

      {AnnouncementList}
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

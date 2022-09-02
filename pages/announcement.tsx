import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin';
import styles from '../components/Announcement.module.css'

export default function announcementBoard() {


    // Announcement Board in the Form of {AnnouncementTitle: [date, content]}
    // Backend Connection Required
    var date = new Date()
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    const sampleAnnouncements = {'AnnouncementTitleTest': [current_date, 'Sample Announcement Data'], 'AnnouncementTitleTest2': [current_date, 'Sample Announcement Data']}
    const AnnouncementList = Object.entries(sampleAnnouncements).map( ([announcementTitle, announcementData]) => 
    <div className={styles.announcementBox}>
        <h1> {announcementTitle}</h1>
        <h2>{announcementData[0]}</h2>
        <p>{announcementData[1]}</p>
    </div>

    )
        
        
    

    return (
        <div>
        <div className={styles.TitleBox}>
            <div className={styles.TitleFont}>
                <h1>Announcements</h1>
            </div>
            <div className={styles.SubTitleFont}>
                <h3> What's Going in Debate? </h3>
            </div>
            <br />
        </div>
        <br />
        
        {AnnouncementList}
        </div>
    )
}

import styles from "../components/Exec.module.css";
import Link from 'next/link'


export default function exec() {


    const grid_picture = (
        <div className = {styles.grid_picture}>
            <p>  </p>
        </div>
    )

    const title_headers = (name: any) => {
        return (
            <div className={styles.down}>
                <p><u>{name}</u></p>
            </div>
        )
    }

    return (
        <div className={styles.HomeExec}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className={styles.ExecutiveTitle}>
            <div className={styles.ExecutiveTitleFont}>
                <h1> Executive Team </h1>
            </div>

            <div className={styles.ExecutiveSubTitleFont}>
                
                <p> Your 2023 Executive Team to Guide Your Journey in Debate </p>
            </div>
            
            <div className={styles.ViewExecButton}>
                <button className={styles.sample_button}> <p>View Your 2023 Execs</p></button>
            
                {title_headers("Presidents")}

                <div className={styles.executive_grid_container}>
                    <div className = {styles.grid_president1}>
                        <h2> Jeevan Brar </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Jeevan is leading the exceutive team to make sure that the 2022/2023 chapter is the best chapter yet. 
                                    His love for debate has encouraged every single one of the executives and hopes to spread the same amount passion 
                                    to TFSS this year.
                                 </p>
                            </div>

                            {grid_picture}
                        </div>
                    </div>
    
                    <div className={styles.grid_president2}>
                        <h2> Japnam Dhaliwal </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Japnam is leading the exceutive team to make sure that the 2022/2023 chapter is the best chapter yet. 
                                    His love for debate and intellect reasoning has allowed him to share thought-provoking arguments in the past. He 
                                    aims to encourage the exploration of the truth throughout TFSS this year!
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>

                    
                </div>
                
                {title_headers("Directors of Education")}

                <div className={styles.executive_grid_container}>
                    <div className={styles.grid_president1}>
                        <h2> Aditya Makkar </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Aditya is in charge of creating the educational content the members will learn about Debate. His in-depth 
                                    knowledge and past experience has allowed him to understand what is needed to become a successful debater. His goal is 
                                    to make members enjoy the art of creating arguments and finding the right answer.
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>
    
                    <div className={styles.grid_president2}>
                        <h2> Sara Bale </h2>
                        <div className = {styles.grid_text}>
                            
                            <div className= {styles.text}>
                                <p>Sara is in charge of creating the educational content the members will learn about Debate. Her in-depth 
                                    knowledge and past experience has allowed her to understand what is needed to become a successful debater. Her goal is 
                                    to make members strong debaters not just for competitions, but for life.
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>

                </div>

                {title_headers("Heads of Communications")}

                <div className={styles.executive_grid_container}>
                    <div className={styles.grid_president1}>
                        <h2> Ashlene Metley </h2>

                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Ashlene is in charge of the planning and executing of communication between the TFSS Debate Society and all members. 
                                 She has been with the Debate Team with over 2 years and is excited to share her passion for debate this year for the 2022/23 Chapter!
                                 </p>
                            </div>
                            {grid_picture}
                        </div>

                    </div>
    
                    <div className={styles.grid_president2}>
                        <h2> Shweta Menon </h2>
                        
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Shweta is in charge of drafting emails to chapter members, organizing events, and creating presentations for our general chapter meetings. 
                                 She loves to debate and is determined to make the 2022/2023 chapter the best one yet!
                                 </p>
                            </div>
                            {grid_picture}
                        </div>

                    </div>

                </div>

                {title_headers("Heads of Promotions")}

                <div className={styles.executive_grid_container}>
                    <div className={styles.grid_president1}>
                        <h2> Pious Hunjan </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Pious loves to debate and her goal is to spread the interest of debate throughout TFSS.
                                    She will be creating social media posts, interacting with potential chapter members, finding other creative outputs to promote our chapter, and announcing chapter news.
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>
    
                    <div className={styles.grid_president2}>
                        <h2> Dilnazz Matharu </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Dilnazz loves to debate and her goal is to spread the interest of debate throughout TFSS.
                                    She will be creating social media posts, interacting with potential chapter members, finding other creative outputs to promote our chapter, and announcing chapter news.
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>

                    <div className={styles.grid_president3}>
                        <h2> Tanisha Gottemukula </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Tanisha loves to debate and her goal is to spread the interest of debate throughout TFSS.
                                    She will be creating social media posts, interacting with potential chapter members, finding other creative outputs to promote our chapter, and announcing chapter news.
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>

                </div>

                {title_headers("Education Team")}

                <div className={styles.executive_grid_container}>
                    <div className={styles.grid_president1}>
                        <h2> 

                            Anhad Kaur </h2>
                            <div className={styles.grid_text}>
                            
                                <div className={styles.text}>
                                    <p>Anhad is experienced with debating and her passion for the discipline has allowed her to teach
                                        teaching weekly debate lessons to a class of students alongside other education team members and working with Directors of Education on educational planning. 

                                        
                                     </p>
                                </div>
                                <div className={styles.grid_picture}>
                                    <p> </p>
                                </div>
                            </div>
                    </div>
                    
    
                    <div className={styles.grid_president2}>
                        <h2> 

                            Mansi Arora </h2>
                            <div className={styles.grid_text}>
                            
                                <div className={styles.text}>
                                    <p>Mansi is experienced with debating and her passion for the discipline has allowed her to teach
                                        teaching weekly debate lessons to a class of students alongside other education team members and working with Directors of Education on educational planning. 

                                        
                                     </p>
                                </div>
                                {grid_picture}
                            </div>
                    </div>

                    <div className={styles.grid_president2}>
                        <h2> 
                            Saachi Kohli </h2>
                        
                            <div className={styles.grid_text}>
                            
                                <div className = {styles.text}>
                                    <p>Saachi is experienced with debating and her passion for the discipline has allowed her to teach
                                        teaching weekly debate lessons to a class of students alongside other education team members and working with Directors of Education on educational planning. 

                                        
                                     </p>
                                </div>
                                {grid_picture}
                            </div>
                    </div>

                    <div className={styles.grid_president2}>
                        <h2> 
                            Elena Campos Perez </h2>
                            <div className={styles.grid_text}>
                            
                                <div className={styles.text}>
                                    <p>Elena is experienced with debating and her passion for the discipline has allowed her to teach
                                        teaching weekly debate lessons to a class of students alongside other education team members and working with Directors of Education on educational planning. 

                                        
                                     </p>
                                </div>
                                {grid_picture}
                            </div>
                    </div>
                    
                    <div className={styles.grid_president2}>
                        <h2> Ester Campos Perez </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Ester is experienced with debating and her passion for the discipline has allowed her to teach
                                    teaching weekly debate lessons to a class of students alongside other education team members and working with Directors of Education on educational planning. 

                                    
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>

                    <div className={styles.grid_president2}>
                        <h2> 
                            Maanya Dahiya </h2>
                            <div className={styles.grid_text}>
                            
                                <div className={styles.text}>
                                    <p>Maanya is experienced with debating and her passion for the discipline has allowed her to teach
                                        teaching weekly debate lessons to a class of students alongside other education team members and working with Directors of Education on educational planning. 

                                        
                                     </p>
                                </div>
                                {grid_picture}
                            </div>
                            
                    </div>

                    <div className={styles.grid_president3}>
                        <h2> Amreen Sandhu </h2>
                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Amreen is experienced with debating and her passion for the discipline has allowed her to teach
                                    teaching weekly debate lessons to a class of students alongside other education team members and working with Directors of Education on educational planning. 

                                    
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>

                </div>

                {title_headers("Web & Tech")}

                <div className={styles.executive_grid_container}>
                    <div className={styles.grid_president1}>
                        <h2> Jaival Patel </h2>

                        <div className={styles.grid_text}>
                            
                            <div className={styles.text}>
                                <p>Jaival is in charge of the &quot;tech-based stuff&quot; of Debate. He hopes that his passion for technology allows 
                                    members to make the most out of the Debate Club. From getting recent information at their fingertips to lessons,
                                    Jaival will ensure that the tools are available for the members to explore the art of debate.
                                 </p>
                            </div>
                            {grid_picture}
                        </div>
                    </div>
    
                    <div className={styles.grid_president2}>
                        <h2> Rajan Aggarwal </h2>
                        
                            <div className={styles.grid_text}>
                            
                                <div className={styles.text}>
                                    <p> Rajan Aggarwal is in charge with the creation, maintenance, and upkeep of all TFSS Debate online work (websites, large virtual meetings, google classrooms.) 
                                        His goal is to make sure that communications between the members and the club are smooth and accessible.
                                     </p>
                                </div>
                                {grid_picture}
                            </div>

                        
                    </div>


                </div>

                
                <Link href="/"><button style={{backgroundColor: 'black', border: '1px solid black', padding: '20px', width: '200px', color: 'white', fontWeight: '700', fontSize: '16px'}}>Return Home</button></Link>
                <div>
                    <p style={{marginTop: "50px", color:"gray", fontSize: "12px", padding:"10px"}}>2022/2023 TFSS Debate Society </p>
                </div>

            </div>

        
        </div>
        
    
        
    </div>
  );
}
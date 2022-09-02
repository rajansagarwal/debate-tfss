import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import exec from "./exec"
import Link from 'next/link' 
import announcementBoard from "./announcement";


export default function Home() {



  // b290f5
  // A984F5
  //https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619b0e63179ab20e6c9d3bfd_blog-post.svg
  return (
    <main className={styles.main}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div
        style={{
          height: "70vh",
          display: "flex",
          width: "100vw",
          fontWeight: "300",
        }}
      >
        <div
          style={{
            backgroundColor: "#ccb6fa",
            padding: "5vw",
            paddingRight: '10vw',
            border: "3px solid black",

            margin: 'none'
          }}
          className="half"
          id="half-1"
        >
          <div>
          <h3 style={{fontSize: "60px", fontWeight: "500", margin: 'none', padding: 'none' }}>Debate Competition and Active Education</h3>
          <p style={{fontSize: "25px", fontWeight: "300", marginTop: '-40px', padding: 'none' }} >Elevating the world's conciousness since 2020.</p>
          <div style={{ display: 'flex', gap: '30px', marginTop: '60px'}}>
            <button style={{ backgroundColor: 'black', border: '1px solid black', padding: '20px', width: '200px', color: 'white', fontWeight: '700', fontSize: '16px' }}>Crash Course</button>
            <button style={{ backgroundColor: 'transparent', border: '1px solid black', padding: '20px', width: '200px', color: 'black', fontWeight: '700', fontSize: '16px' }}>Apply Now</button>
          </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#b290f5", border: "3px solid black" }}
          className="half"
          id="half-2"
        >
          <img
            style={{ border: "4px solid black" }}
            src="https://file.rajanagarwal.xyz/debateteam.png"
            height="500px"
          />
        </div>
      </div>
      <div
        style={{
          minHeight: "30vh",
          width: "100vw",
          backgroundColor: "#d0bef7",
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          border: '3px solid black'
        }}
        className="full"
      >
        <div>
          <h3 style={{fontSize: "40px", fontWeight: "500", margin: 'none', padding: 'none' }}>Knowledge At Your Fingertips.</h3>
          <p style={{fontSize: "30px", fontWeight: "300", padding: 'none' }} id="fancy" >Providing debate education to Turner Fenton's finest since 2020.</p>
          <Link href="/exec"><button style={{ backgroundColor: 'transparent', border: '1px solid black', padding: '20px', width: '200px', color: 'black', fontWeight: '700', fontSize: '16px' }}>Executives</button></Link>
          <Link href="/announcement"><button style={{ backgroundColor: 'transparent', border: '1px solid black', padding: '20px', width: '200px', color: 'black', fontWeight: '700', fontSize: '16px' }}>Announcement</button></Link>
      </div>
      </div>
    </main>
  );
};

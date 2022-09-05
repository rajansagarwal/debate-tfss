import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TFSS Debate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header id="top" title=""/>

      <main>
        <Hero
          title="Debate Competition and Active Education"
          subtitle="Educating Turner Fenton's finest since 2019."
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="When is it ready?"
        />

        <Highlights
          title="Knowledge At Your Fingertips"
          subtitle="All your debate content for lessons and self-study, native to TFSS Debate."
        />

        <Benefits
          background="alternate"
          title="Our Stellar Team"
          subtitle="Each one of our team members are dedicated to creating accessible and synthesized debate content for Turner Fenton students."
          benefits={[
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Jeevan Brar', text:'President'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Japnam Dhaliwal', text:'Vice President'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Sara Bale', text:'Director of Education'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Aditya Makkar', text:'Director of Education'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Ashlene Metley', text:'Head of Communication'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Shweta Menon', text:'Head of Communication'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Pious Hunjan', text:'Head of Promotions'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Dilnazz Matharu', text:'Head of Promotions'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Tanisha Gottemukula', text:'Head of Promotions'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Anhad Kaur', text:'Head of Promotions'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Mansi Arora', text:'Head of Promotions'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Saachi Kohli', text:'Head of Promotions'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Elena Campos Perez', text:'Education Team'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Ester Campos Perez', text:'Education Team'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Maanya Dahiya', text:'Education Team'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Amreen Sandhu', text:'Education Team'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Rajan Agarwal', text:'Education Team'},
            {illustration:'https://file.rajanagarwal.xyz/debateteam.png', title:'Jaival Patel', text:'Education Team'},
          ]}
        />

        {/*<Break
          title="Risk Reduction: Try Product free for 14 days"
          subtitle="This is an in-betwen CTA for visitors that already got convinced."
          illustration=""
          action="When is it ready?"
          onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}
        />

        <Features
          background="alternate"
          title="But wait, there is more"
          subtitle="Describe the full extent of your product"
          features={[
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
          ]}
        />

        <Epilogue
          title="Ask if your visitor wants to solve problem X today"
          subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="When is it ready?"
        />*/}
      </main>

    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script';

export default function HowItWorks() {
  return (

    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - How It Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="js/navigation.js" type="text/javascript"></Script>
      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl">How it works</h1>
          <div className="content py-1">
            <h2>What you need to do:</h2>
            <ol>
              <li>Sign up with SolCapture and we&apos;ll analyze the Solana blockchain on your behalf.</li>
            </ol>
            <h2>What we will do:</h2>
            <ol>
              <li>We apply accounting protocols to the Solana blockchain.</li>
              <li>We compute results applying different cost basis methodologies.</li>
              <li>We provide cost basis using Specific Lot Identification, Average Cost Basis, FIFO, or LIFO.</li>
              <li>We list the transaction in such a way to allow using FIFO or LIFO accounting principles.</li>
              <li>We generate a history of your transactions for you.</li>
              <li>We generate reports on a weekly, monthly, or annual basis.</li>
            </ol>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}

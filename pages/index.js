import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  // pexels-photo-935756, 853151, 6893801
  // image_1, simu-liu-stock-image-tweet-copy
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0;" />
      </Head>
      <Script src="js/navigation.js" type="text/javascript"></Script>
      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-slide">
            <img src="img/slide/simu-liu-stock-image-tweet-copy.jpeg" alt="" />
            <div className="s-fade-txt text-white bg-gray-800 text-center">
              <div className="textHolder">
                <h3 className="text-4xl px-8 py-2 bold">Track staking rewards earned on Solana</h3>
                <h2 className="text-3xl px-8 py-2">All you need is a stake address & an email address</h2>
                <h3 className="text-3xl py-2">
                  <Link href="/contact" passHref>
                    <a className="px-8 py-2 duration-200 cursor-pointer transition-colors hover:bg-gray-400">Get Started Now</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}

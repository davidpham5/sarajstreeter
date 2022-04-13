import Footer from '@components/Footer'
import Header from '@components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sara J. Streeter</title>
        <link rel="icon" href="../public/favicon.ico" />
        <link href="../styles/global.css" rel="stylesheet"></link>
      </Head>

      <main>
        <Header title="Sara J. Streeter" />
        <p className="description">
          A Writer.
        </p>
      </main>

      <Footer />
    </div>
  )
}

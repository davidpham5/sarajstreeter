import Header from '@components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sara J. Streeter</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main>
        <Header title="Listening" />
        <p>Clap  your hands if you're working too hard</p>
      </main>
    </div>
  )
}

import Card from '@components/Card'
import Contact from '@components/Contact'
import Header from '@components/Header'
import Intro from '@components/Intro'
import Head from 'next/head'
import content from './api/data.json'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sara J. Streeter</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div className="mx-20 grid grid-cols-2">
        <aside className="">
          <div className='w-1/2 h-full m-0 flex flex-col space-between'>
            <div className='mb-64'>
              <Intro content={content.intro} />
            </div>

          </div>

        </aside>
        <section className="work">
          <div className='flex flex-col mb-96'>
            <Header title={content.writing.title} />
            <Card content={content.writing} />
          </div>

          <div className="flex flex-col">
            <Header title={content.about.title}/>
            <div className='max-w-3xl'>
              <Card content={content.about} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

import Card from '@components/Card'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Intro from '@components/Intro'
import Head from 'next/head'
import content from './api/data.json'

export default function Home() {
  return (
    <div className="flex flex-col justify-center content-center px-4">
      <Head>
        <title>Sara J. Streeter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:mx-20 flex flex-col sm:grid grid-cols-2 z-10">
        <aside className="_intro _footer">
          <div className='w-full lg:w-1/2 h-full m-0 flex flex-col justify-between'>
            <div className='mb-12 sm:mb-64'>
              <Intro content={content.intro} />
            </div>
            <div className='hidden md:flex'>
              <Footer/>
            </div>
          </div>
        </aside>
        <section className="work">
          <div className='flex flex-col mb-12 sm:mb-28'>
            <Header title={content.writing.title} />
            <Card content={content.writing.content} />
          </div>

          <div className="flex flex-col">
            <Header title={content.about.title}/>
            <div className='max-w-3xl'>
              <Card content={content.about.content} />
            </div>
          </div>
        </section>
      </div>
      <div className="flex sm:hidden mt-12">
      <Footer />
      </div>
    </div>
  )
}

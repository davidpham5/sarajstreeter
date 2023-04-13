import BoldList from '@components/BoldList'
import Card from '@components/Card'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Intro from '@components/Intro'
import client from 'lib/sanityClient'
import Head from 'next/head'
import content from './api/data.json'
import CardAlt from '@components/CardAlt'

export default function Home({publishedWork, elsewhere, nominations, about}) {

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
          <div className="w-full sm:-ml-64">
           <div className='flex flex-col sm:flex-row mb-12 sm:mb-28'>
              <h1 className="min-w-[265px] mt-3 text-2xl text-black mb-2 uppercase flex flex-row sm:flex-row-reverse mr-2">Nominations</h1>
              <BoldList content={nominations} />
            </div>
            <div className='flex flex-col sm:flex-row mb-12 sm:mb-28'>
              <h1 className="min-w-[265px] mt-3 text-2xl text-black mb-2 uppercase flex flex-row sm:flex-row-reverse mr-2">Published Work</h1>
              <CardAlt content={content.writing.content} />
            </div>
            {content.writing.forthComing > 0 && (
              <div className='flex flex-col sm:flex-row mb-12 sm:mb-28'>
                <h1 className="min-w-[265px] mt-3 text-2xl text-black mb-2 uppercase mr-1">Forthcoming Work</h1>
                <Card content={content.writing.forthComing} />
              </div>
            )}

            <div className='flex flex-col sm:flex-row mb-12 sm:mb-28'>
              <h1 className="min-w-[240px] mt-3 text-2xl text-black mb-2 uppercase flex flex-row sm:flex-row-reverse mr-2">Elsewhere</h1>
              <BoldList content={elsewhere} />
          </div>
          </div>
          <div className="flex flex-col ml-2">
            <Header title={content.about.title}/>
            <div className='max-w-3xl'>
              <Card content={about} />
            </div>
          </div>
        </section>
      </div>
      <div className="flex sm:hidden mt-12 relative z-10">
        <Footer />
      </div>
    </div>
  )
}

// fetch published work from Sanity
export async function getStaticProps() {
  try {
    const about = await client.fetch(`*[_type == "about"]{title, body, _id}`)
    const publishedWork = await client.fetch(`*[_type == "published-work"]{title, url, publishedAt, publication, body, _id, _createdAt}`)
    publishedWork.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
    const elsewhere = await client.fetch(`*[_type == "elsewhere"]{title, url, publishedDate, _createdAt, _id}`)
    const nominations = await client.fetch(`*[_type == "nominations"]{title, url, publishedDate, publication, _createdAt, _id}`)

    return {
      props: {publishedWork, elsewhere, nominations, about},
    }
  } catch (error) {
    console.log(error)
  }
}

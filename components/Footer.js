import Contact from './Contact'
import Image from 'next/image';
import Header from './Header'
import content from '../pages/api/data.json'
import sjs_profile from '../public/sara-streeter.png'
export default function Footer() {
  return (
    <div className="flex">
      <footer className="flex text-xs text-gray-500">
        <div className="relative w-28 h-42 mr-4 rounded-md">
          <Image src={sjs_profile} />
        </div>
        <div className="flex flex-col">
          <Header title={content.stayInTouch.title}/>
          <div className='max-w-3xl'>
            <Contact content={content.stayInTouch.content} />
          </div>
        </div>
      </footer>
    </div>
  )
}

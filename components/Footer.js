import Contact from './Contact'
import styles from './Footer.module.css'
import Header from './Header'
import content from '../pages/api/data.json'
export default function Footer() {
  return (
    <div className="flex ml-40 max-w-[1536px]">
      <footer className="text-xs text-gray-500">
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

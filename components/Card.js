
import Header from "./Header";
import Link from 'next/link'
export default function Card ({content}) {
  return (
    <div className="">
      <div className="w-full">
        {content.map((item, index) => {
          return item.title
            ? <span className="hover:underline decoration-indigo-700" key={index}><Link href={item.link}>{item.title}</Link></span>
            : <p className="mb-4" key={index}>{item}</p>
        })}
      </div>
    </div>
  )
}
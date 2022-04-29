
import Header from "./Header";
import Link from 'next/link'
export default function Card ({content}) {
  return (
    <div className="">
      <div className="w-full">
        {
          Array.isArray(content)
            ? content.map((item, index) => {
              return item.title
                ? <span className="hover:underline decoration-indigo-700" key={index}><a href={item.link} target="_blank" >{item.title}</a></span>
                : <p className="mb-4" key={index}>{item}</p>
              })
            : <div dangerouslySetInnerHTML={{__html: content }}></div>
        }
      </div>
    </div>
  )
}
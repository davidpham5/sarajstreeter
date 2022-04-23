
import Header from "./Header";

export default function Card ({content}) {
  return (
    <div className="">
      <div className="w-full">
        {content.content.map((item, index) => {
          return (<p className="">{item}</p>)
        })}
      </div>
    </div>
  )
}
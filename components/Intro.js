import { content } from "tailwind.config";

export default function Intro ({content}) {
  return (
    <div className="flex flex-col">
      {content.title.map((item, index) => {
        return (
          <h2 className="text-4xl">
            {item}
          </h2>
        )
      })}
      <ul>
      {content.content.map((item, index) => {
        return (
          <li className="flex text-xl ml-56 tracking-wide">
            {item}
          </li>
        )
      })}
      </ul>
    </div>
  )
}
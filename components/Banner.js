export default function Banner({ title, link }) {
  console.log(title, link)
  return (
    <div className="flex justify-center w-full bg-sky-200 ">
      <div className="flex">
        <h1 className="font-bold text-2xl tracking-one-and-half text-sky-800 py-4"><a href={link} target="_blank">{title}</a></h1>
      </div>
    </div>
  )
}
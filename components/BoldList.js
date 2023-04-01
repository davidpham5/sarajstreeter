export default function BoldList ({content}) {
  return (
    <div className="">
      <div className="w-full">
        <p className='font-bold text-3xl leading-60px tracking-one-and-half'>
          /{" "}
          {content.map((item, index) => {
            return (
              <span>
              <a className='underline decoration-A73090 hover:underline decoration-indigo-700' href={item.url} target='blank'>{item.title}.</a><span class='italic'>{item.publication}</span> / {item.publishedAt} / </span>
            )
          })}
        </p>
      </div>
    </div>
  )
}
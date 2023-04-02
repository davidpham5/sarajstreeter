export default function BoldList ({content}) {

  return (
    <div className="">
      <div className="w-full">
        <p className='font-bold text-3xl leading-60px tracking-one-and-half'>
          /{" "}
          { // sort by created date
            content
              .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
              .map((item, index) => (
                  <span key={item._id}>
                    <a className='underline decoration-A73090 hover:underline decoration-indigo-700' href={item.url} target='blank'>{item.title}.</a>
                    <span class='italic'> {item.publication}</span> / {item.publishedAt || item.publishedDate}{" "}
                  </span>
                )
              )
          }
        </p>
      </div>
    </div>
  )
}
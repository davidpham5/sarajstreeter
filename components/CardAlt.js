
export default function CardAlt ({content}) {
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
            : <div className='text-2xl leading-[30px] tracking-[1.25px]' dangerouslySetInnerHTML={{__html: content }}></div>
        }
      </div>
    </div>
  )
}
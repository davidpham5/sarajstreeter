import {PortableText} from '@portabletext/react'

const components = {
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a className='underline decoration-[#A73090] hover:underline decoration-indigo-700' href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
  block: {
    normal: ({children}) => <p className="mb-4">{children}</p>,
  }
}
export default function Card ({content}) {
  return (
    <div className="">
      <div className="w-full">
        {
          Array.isArray(content)
            ? content.map((item, index) => (
                <div className='text-2xl leading-[30px] tracking-[1.25px]' key={index}>
                  <PortableText value={item.body} components={components} />
                </div>
              ))
            : <div>Loading ...</div>
        }
      </div>
    </div>
  )
}
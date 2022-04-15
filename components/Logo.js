import Image from 'next/image'

export default function Logo () {
  return (
    <div className="flex flex-col items-center justify-center relative py-8">
      <div className="-ml-16 ">
      <Image  src="/sjs_logo.svg"  width={400} height={100} alt="Sara J. Streeter" />
      <h1 className='mt-2 font-serif flex justify-center'>A Writer</h1>
      </div>
    </div>
  )
}
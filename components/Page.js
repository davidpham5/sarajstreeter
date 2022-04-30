import Footer from './Footer';


export default function Page({ children }) {
  return (
    <div className="">
      <div className="w-full relative">
        <div className='absolute w-full h-full m-auto z-0 flex flex-col justify-center content-center items-center self-center'>
          <div className='circle w-[800px] h-[800px] mt-20 bg-gradient-to-r from-[#E5A9EE] to-[#C3DC4D] rounded-full'></div>
        </div>
        <main className=''>{children}</main>
      </div>

    </div>
  );
}
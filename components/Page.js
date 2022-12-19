import Image from 'next/image';
import content from '../pages/api/data.json'
import sjs_shape from '../public/sjs_shape.svg';
import Banner from './Banner';
import Credit from './Credit';

export default function Page({ children }) {
  return (
    <div>
      {
        // <Banner link={content.stayInTouch.content.substack.link} title={"Sign up for my newsletter on Substack"} />
      }
      <div className="relative">
        <div className="w-full">
          <main className='py-20 px-4 lg:flex flex-col justify-center items-center'>{children}</main>
        </div>
        <div className='absolute top-0 flex flex-col justify-center w-full h-full m-auto'>
          <div className="circle w-3/4 h-3/4 flex flex-col self-center">
            <Image src={sjs_shape} layout="responsive"/>
          </div>
        </div>
        <div className='w-full flex justify-center mt-20'>
          <Credit />.{" "}
          © Copyright {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
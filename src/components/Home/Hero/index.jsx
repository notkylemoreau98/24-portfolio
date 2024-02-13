import ArrowDownLineIcon from 'remixicon-react/ArrowDownLineIcon';
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import FileTextLineIcon from 'remixicon-react/FileTextLineIcon';
import Headshot from '../../../assets/headshot_fox.jpeg';
import CurvedArrow from '../../../assets/curved-arrow.svg';
import RandomLines from '../../../assets/random-lines.svg';
import Resume from '../../../assets/Resume_2_7_24.pdf';
import '../../../App.css';

const Hero = () => {
  return (
    <section className='pt-0 p-10 ' id='home'>
      <div className='max-w-[1250px] block mx-auto'>
        <div className='flex flex-col-reverse md:flex-row justify-center md:mt-10'>
          <div className='flex flex-col justify-center text-xl flex-1'>
            <div className='text-center md:text-left md:pl-10'>
              <h1 className='text-5xl md:text-6xl font-bold'>Kyle Moreau</h1>

              <p className='my-6 text-2xl md:text-3xl font-semibold'>
                Web Developer
              </p>
            </div>
            <a
              href='#about'
              className='block w-[max-content] mt-5 md:mt-10 mx-auto text-sm'
            >
              <div className='bg-black text-white w-9 h-9 flex items-center justify-center text-xl cursor-pointer transition-all duration-[400ms]'>
                <ArrowDownLineIcon
                  style={{
                    animation: 'scrollDown 3s infinite',
                  }}
                />
              </div>
            </a>
          </div>

          <div className='relative flex-1 flex flex-col-reverse md:flex-row z-10'>
            <div className='flex h-[fit-content] static my-5 md:my-auto mx-0 md:grid gap-10 md:gap-6 items-center justify-center md:mr-3'>
              <a
                href='https://www.linkedin.com/in/kyle-moreau/'
                target='_blank'
                rel='noopener noreferrer'
                className='h-10 w-10'
              >
                <LinkedinBoxLineIcon className='h-full w-full text-white bg-[#7c7c7c] p-1 transition-bg duration-300 hover:bg-black' />
              </a>
              <a
                href='https://github.com/notkylemoreau98'
                target='_blank'
                rel='noopener noreferrer'
                className='h-10 w-10'
              >
                <GithubLineIcon className='h-full w-full text-white bg-[#7c7c7c] p-1 transition-bg duration-300 hover:bg-black' />
              </a>
              <a
                href={Resume}
                target='_blank'
                rel='noopener noreferrer'
                className='h-10 w-10'
              >
                <FileTextLineIcon className='h-full w-full text-white bg-[#7c7c7c] p-1 transition-bg duration-300 hover:bg-black' />
              </a>
            </div>

            <div className='flex-1 flex justify-center'>
              <img
                className='relative z-10 rounded-md md:rounded-none'
                src={Headshot}
                alt='Headshot'
              />

              <div className='hidden md:inline w-100 h-100 absolute bottom-[-0.75rem] right-[-0.75rem] bg-[#4682b4] border-4 border-black z-[5] top-3 w-[220px] md:w-[90%]'></div>

              <img
                src={CurvedArrow}
                className='hidden md:inline absolute invert w-[50px] transition-filter duration-[400ms] left-[40%] bottom-[-4rem]'
                alt='Arrow'
              />
              <img
                src={RandomLines}
                className='hidden md:inline absolute invert w-[50px] transition-filter duration-[400ms] right-[-2rem] bottom-[-0.5rem] z-0'
                alt='Arrow'
              />

              <div className='absolute w-[20px] h-[20px] bg-orange-600 rotate-[-30deg] top-[2.5rem] left-[-0.7rem] z-10 after:content-[""] after:absolute after:w-[20px] after:h-[20px] after:border-[3px] after:border-black after:left-[-5px] after:top-[-5px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

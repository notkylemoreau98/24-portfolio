import SendPlaneLineIcon from 'remixicon-react/SendPlaneLineIcon';
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon';
import FileTextLineIcon from 'remixicon-react/FileTextLineIcon';
import AboutHeadshot from '../../../assets/kylemoreau_about_placeholder.png';
import RandomLines from '../../../assets/random-lines.svg';
import Resume from '../../../assets/Resume_2_7_24.pdf';

const About = () => {
  return (
    <section
      id='about'
      className='p-10 md:p-20 bg-[#f7f7f7] transition-colors duration-[400ms ]'
    >
      <div className='max-w-[1250px] block mx-auto'>
        <h2 className='relative text-5xl w-full text-center font-bold margin-[0.75rem auto 2rem] pb-12 pt-4'>
          About me.
        </h2>

        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='flex flex-1 justify-center relative'>
            <img
              src={AboutHeadshot}
              className='w-full max-w-[425px] rounded-lg shadow-lg border-white border-4'
              alt='About Kyle Moreau'
            />

            <div className='absolute w-[20px] h-[20px] bg-orange-600 rotate-[-30deg] top-[2.5rem] left-0 z-10 after:content-[""] after:absolute after:w-[20px] after:h-[20px] after:border-[3px] after:border-black after:left-[-5px] after:top-[-5px]'></div>
            <img
              className='absolute invert w-[50px] transition-filter duration-[400ms] right-0 bottom-[-0.5rem] z-0'
              src={RandomLines}
              alt='Random Lines'
            />
          </div>

          <div className='flex-1 leading-8 text-lg p-6'>
            <p className='my-5'>
              Hello! I am a developer based out of Los Angeles, CA with a
              passion for crafting digital experiences, one line of code at a
              time.
            </p>

            <p className='mb-5'>
              Originating as a self-taught developer, I have spent the last 3
              years honing my skills from front-end to full-stack at Fox Dealer.
            </p>

            <p className='mb-10'>
              My goals are to continue engaging with new and challenging
              projects from their inception all the way through deployment,
              while learning new tools and collaborating with new colleagues
              along the way.
            </p>

            <div className='flex flex-col items-center md:flex-row gap-5 text-center pb-5 md:text-left'>
              <a
                className='bg-black text-white py-4 px-6 transition-colors duration-300 border-2 border-black flex gap-3 w-fit hover:bg-transparent hover:text-black'
                href='#contact'
              >
                <SendPlaneLineIcon /> Contact Me
              </a>

              <div className='h-[fit-content] static my-auto mx-0 flex gap-3 items-center justify-center'>
                <a
                  href='https://www.linkedin.com/in/kyle-moreau/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='h-10 w-10'
                >
                  <LinkedinBoxLineIcon className='h-full w-full text-white bg-[#7c7c7c] p-1 transition-bg duration-300 hover:bg-black' />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

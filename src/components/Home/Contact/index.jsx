import MailLineIcon from 'remixicon-react/MailLineIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import FileList3LineIcon from 'remixicon-react/FileList3LineIcon';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';
import Resume from '../../../assets/Resume_2_7_24.pdf';

const Contact = () => {
  return (
    <section id='contact' className='text-white bg-[#23212a] p-12'>
      <h2 className='relative text-5xl w-full text-center font-bold margin-[0.75rem auto 2rem] pt-4 pb-6'>
        Get in Touch
      </h2>
      <div className='block mx-auto bg-[#EA580D] w-[12rem] h-1 border-r-[16px 0] skew-x-[-40deg] text-center mb-12 '></div>

      <div className='flex justify-center space-x-8 lg:space-x-24'>
        <div>
          <a
            href='mailto:williamkylemoreau@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <MailLineIcon className='h-16 w-16 lg:h-24 lg:w-24 transition-all duration-300 hover:text-[#EA580D] hover:skew-x-[-3deg]' />
          </a>
        </div>

        <div>
          <a
            href='https://www.linkedin.com/in/kyle-moreau/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedinFillIcon className='h-16 w-16 lg:h-24 lg:w-24 transition-all duration-300 hover:text-[#EA580D] hover:skew-x-[-3deg]' />
          </a>
        </div>

        <div>
          <a href='https://github.com/notkylemoreau98'>
            <GithubLineIcon className='h-16 w-16 lg:h-24 lg:w-24  transition-all duration-300 hover:text-[#EA580D] hover:skew-x-[-2deg]' />
          </a>
        </div>

        <div>
          <a href={Resume} target='_blank' rel='noopener noreferrer'>
            <FileList3LineIcon className='h-16 w-16 lg:h-24 lg:w-24  transition-all duration-300 hover:text-[#EA580D] hover:skew-x-[-2deg]' />
          </a>
        </div>
      </div>

      <div className='mt-16'>
        <a href='#home' className='block w-[max-content] my-0 mx-auto text-sm'>
          <div className='relative z-10 bg-[#EA580d] text-white w-9 h-9 flex items-center justify-center text-xl cursor-pointer transition-all duration-[400ms] rounded-sm hover:h-12'>
            <ArrowUpLineIcon
              style={{
                animation: 'scrollUp 3s infinite',
              }}
            />
          </div>
        </a>

        <p className='mt-10 text-center'>
          © 2024 Kyle Moreau. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;

import FoxLogo from '../../assets/Fox_Dealer_Logo.png';

const Experience = () => {
  return (
    <section className='bg-[#F7F7F7] px-5 py-10 md:p-20' id='experience'>
      <div className='max-w-[1250px] block mx-auto'>
        <h2 className='relative text-5xl w-full text-center font-bold margin-[0.75rem auto 2rem] pb-12 pt-4'>
          Experience.
        </h2>

        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='flex-1 flex flex-col items-center justify-center'>
            <img
              className='w-64 h-64 object-contain'
              src={FoxLogo}
              alt='Fox Dealer'
            />
            <h3 className='font-semibold mt-5 text-2xl'>
              Software Engineer III
            </h3>
            <p className='font-semibold mt-2 text-lg'>August 2021 - Present</p>
          </div>

          <div className='flex-[2] p-6 md:p-10'>
            <h3 className='text-xl font-semibold mb-4 text-center md:text-left'>
              Responsibilites
            </h3>
            <ul className='space-y-5 leading-8 font-[500]'>
              <li className='text-sm'>
                Spearheaded the implementation of a standardized peer-to-peer
                code review system department-wide through Bitbucket, resulting
                in a reduction of client-reported code bugs by over 40%. This
                initiative significantly enhanced code quality and streamlined
                development processes.
              </li>
              <li className='text-sm'>
                Orchestrated the successful migration of the company's codebase
                from WordPress to React, leading to a 45% reduction in load
                times and improved scalability of the platform. These
                enhancements contributed to a 30-40 point increase in Google
                Lighthouse performance scores.
              </li>
              <li className='text-sm'>
                Played a pivotal role in strengthening the partnership with GMC
                Canada by developing 5 Tier 1 vehicle reservation websites using
                Next.js. These websites, utilized by 100+ dealerships throughout
                Canada, successfully reserved over 750 Electric Vehicles and
                drove a 6-figure increase in revenue.
              </li>
              <li className='text-sm'>
                Consistently delivered technical support by resolving over 3,650
                tasks across 400+ WordPress and React websites, thereby
                contributing to enhanced customer satisfaction and retention.
              </li>
              <li className='text-sm'>
                Pioneered a comprehensive documented training program, providing
                structure to the onboarding and mentorship of 5 new software
                developers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import FoxLogo from '../../assets/Fox_Dealer_Logo.png';

const Experience = () => {
  return (
    <section className='bg-[#F7F7F7] px-5 py-10 md:p-20'>
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
            <ul className='space-y-5 leading-8'>
              <li className='text-sm'>
                Spearheaded the implementation of a standardized peer-to-peer
                code review system, streamlining development processes and
                enhancing code quality.
              </li>
              <li className='text-sm'>
                Orchestrated a successful migration of the company's codebase
                from Wordpress to React in collaboration with an offshore team,
                reducing maintenance overhead and improving scalability.
              </li>
              <li className='text-sm'>
                Delivered exceptional technical support by resolving over 2,750
                tasks across 400+ websites, contributing to enhanced customer
                satisfaction and retention.
              </li>
              <li className='text-sm'>
                Played a pivotal role in the development of Tier 1 vehicle
                reservation websites for leading brands like Toyota and GMC,
                utilized by over 100 dealerships, driving increased sales and
                brand engagement.
              </li>
              <li className='text-sm'>
                Established a comprehensive training program, facilitating the
                onboarding and mentorship of 5 new software developers,
                resulting in accelerated team growth and productivity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

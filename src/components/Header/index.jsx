import { useEffect, useState, useCallback } from 'react';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import MenuIcon from 'remixicon-react/Menu4LineIcon';
import navData from '../../data/nav';
import debounce from '../../utils/debounce';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const webKitStyles = {
    WebkitTextStroke: '1px black',
    color: 'white',
  };

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    debounce(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky w-full top-0 left-0 bg-white z-20 transition ${
        isScrolled && 'shadow-md opacity-[98%]'
      }`}
    >
      <div className='relative h-20 md:h-24 flex justify-between items-center w-100 px-5 md:px-10 lg:px-20'>
        <a
          className='flex items-center font-semibold'
          style={{ columnGap: '0.5rem' }}
          href='/'
        >
          <span className='w-8 h-8 md:w-10 md:h-10 bg-black text-white flex items-center justify-center rounded-full'>
            K
          </span>
          <span className='md:text-xl md:ml-2'>Kyle Moreau.</span>
        </a>

        <nav className='hidden space-x-12 md:flex'>
          {navData.navItems.map((navItem) => (
            <div>
              <a
                href={navItem.navLink}
                style={
                  activeSection === navItem.sectionId ? webKitStyles : undefined
                }
                className={
                  'relative text-xl font-semibold transition-colors duration-300'
                }
                key={`desktop-${navItem.sectionId}`}
              >
                {navItem.navTitle}
              </a>
            </div>
          ))}
        </nav>

        <nav
          className={`fixed ${
            isMenuOpen ? 'top-0' : 'top-[-100%]'
          } left-0 transition-top duration-[400ms] px-20 py-8 w-screen backdrop-blur text-center text-white bg-[rgba(0,0,0,.9)] md:hidden`}
        >
          <span className='text-sm font-semibold block mb-10'>Menu</span>
          <h3 className='relative w-full mb-10 font-bold text-xl before:content-[""] before:w-[40px] before:h-[1px] before:bg-white before:absolute before:top-[50%] before:left-0 after:content-[""] after:w-[40px] after:h-[1px] after:bg-white after:absolute after:top-[50%] after:right-0'>
            Kyle Moreau
          </h3>
          <ul className='flex flex-col space-y-7'>
            {navData.navItems.map((navItem) => (
              <li onClick={handleMenuToggle}>
                <a
                  href={navItem.navLink}
                  className='relative text-[#dcdcdc] text-lg font-semibold transition-colors duration-300 hover:text-white'
                  key={`mobile-${navItem.sectionId}`}
                >
                  {navItem.navTitle}
                </a>
              </li>
            ))}
          </ul>

          <div
            className='absolute top-4 right-6 cursor-pointer'
            onClick={handleMenuToggle}
          >
            <CloseLineIcon className='scale-150' />
          </div>
        </nav>

        <div className='md:hidden'>
          <div
            className='w-8 h-8 bg-black text-white flex items-center justify-center text-lg cursor-pointer md:hidden'
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

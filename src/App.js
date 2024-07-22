
import {useState} from 'react';

import usePreline from './hooks/usePreline'

// Icons
import { FiMenu } from "react-icons/fi";
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { FaCross } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { RiContactsBook2Fill } from "react-icons/ri";

// Resources
import logo from './resources/Logo.png'

// Components 
import NavOffCanvas from './components/NavOffCanvas';
import ParallaxHero from './components/ParallaxHero';
import Scrollspy from 'react-scrollspy';
import AboutAccordion from './components/AboutAccordion';
import FourSpiritualLaws from './components/FourSpiritualLaws';

function App() {

  usePreline();

  const [links, setLinks] = useState([
    {
        name: "Home",
        id: "hero",
        icon: <FaHome size={20}/>,
        active: true
    },
    {
        name: "About",
        id: "about",
        icon: <FaCross size={20}/>,
        active: false
    },
    {
        name: "Events",
        id: "event",
        icon: <FaCalendarAlt size={20}/>,
        active: false
    },
    {
        name: "Services",
        id: "service",
        icon: <MdWork size={20}/>,
        active: false
    },
    {
        name: "Ministries",
        id: "ministry",
        icon: <HiUserGroup size={20}/>,
        active: false
    },
    {
        name: "Contact Us",
        id: "contact",
        icon: <RiContactsBook2Fill size={20}/>,
        active: false
    }
])

  const changeActiveLink = (id) => {
      setLinks(links.map(link => (
          link.id === id ? {...link, active: true} : {...link, active: false}
      )))
  }

  return (
    <div className="App w-full h-full bg-freedom-white">
      <main className='w-full h-full'>
        <header className='w-full px-5 py-3 lg:py-4 fixed top-0 left-0 z-[100] bg-neutral-950'>
            <nav className='md:container md:mx-auto'>
              <div className='flex items-center justify-between'>
                <img src={logo} alt="Freedom Logo" className='w-12 h-12 md:w-14 md:h-14 object-cover object-center user-select-none' />
                <button 
                type='button'
                className='p-1.5 lg:hidden text-freedom-white rounded-md'
                data-hs-overlay="#nav-links"
                >
                  <FiMenu size={22}/>
                </button>
                <Scrollspy
                items={links.map(link => link.id)}
                className='hidden lg:flex items-start text-lg gap-x-7 lg:gap-x-8 xl:gap-x-12'
                onUpdate={(el) => el && changeActiveLink(el.id)}
                >
                  {
                      links.map((link, index) => (
                        <li key={index}>
                          <a 
                          className={`hover:text-freedom-light-blue ${link.active ? "text-freedom-light-blue font-extrabold" : "text-freedom-white font-bold"} transition-colors ease-in-out delay-75 duration-200`} 
                          href={`#${link.id}`}
                          onClick={() => changeActiveLink(link.id)}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))
                  }
                </Scrollspy>
                <NavOffCanvas links={links} changeActiveLink={changeActiveLink}/>
              </div>
            </nav>
        </header>

        <section id="hero" className='w-full h-dvh relative border border-freedom-gray'>
          <ParallaxHero changeActiveLink={changeActiveLink}/>
          <FourSpiritualLaws/>
        </section>

        <section id="about" className='w-full min-h-max px-5 py-20 md:px-10 md:py-24 lg:py-36 lg:px-14 xl:py-40 xl:px-32'>
          <div>
            <h1 className='font-extrabold tracking-widest text-[2.5rem] md:text-6xl lg:text-7xl mb-3 md:mb-7 lg:mb-10 xl:mb-14'>WHO WE ARE?</h1>
            <p className='text-justify md:text-xl lg:text-2xl xl:text-3xl leading-7'>
              At Freedom Christian Fellowship, we are a vibrant community dedicated to living out the teachings of Jesus Christ. 
              Our goal is to create a welcoming environment where everyone can experience God's love and grace. 
              We believe in the power of faith, fellowship, and service to transform lives and make a positive impact in our community and beyond.
              <br/> <br/>
              Join us as we worship, grow, and serve together, building strong connections and supporting one another in our spiritual journeys. 
              Whether you are new to faith or looking to deepen your relationship with God, you are welcome here.
            </p>
            <hr className="border-freedom-gray my-5 md:mt-14 lg:mt-20 xl:mt-24" />
            <div className="hs-accordion-group">
              <AboutAccordion/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;


import {useState} from 'react';

import usePreline from './hooks/usePreline'

// Icons
import { FiMenu } from "react-icons/fi";
import { FaHome, FaCalendarAlt, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaCross } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

// Resources
import logo from './resources/Logo.png'

// Components 
import NavOffCanvas from './components/NavOffCanvas';
import ParallaxHero from './components/ParallaxHero';
import Scrollspy from 'react-scrollspy';
import AboutAccordion from './components/AboutAccordion';
import FourSpiritualLaws from './components/FourSpiritualLaws';
import AnnouncementCarousel from './components/AnnouncementCarousel';
import Ministry from './components/Ministry';
import ContactUs from './components/ContactUs';

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
    },
    {
      name: "Forms",
      id: "form",
      icon: <IoIosPaper size={20}/>,
      items: [
        {
          name: "Join D-Group",
          link: "https://forms.gle/cWiLw71tkKGz43o99"
        },
        {
          name: "Tithes",
          link: ""
        },
        {
          name: "Discipleship Information Form",
          link: "https://forms.gle/3BWtu6KXdhYrCHmh9"
        }
      ]
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
                        link.id !== "form"
                        ?
                        (
                          <li key={index}>
                            <a 
                            className={`hover:text-freedom-light-blue ${link.active ? "text-freedom-light-blue font-extrabold" : "text-freedom-white font-bold"} transition-colors ease-in-out delay-75 duration-200`} 
                            href={`#${link.id}`}
                            onClick={() => changeActiveLink(link.id)}
                            >
                              {link.name}
                            </a>
                          </li>
                        )
                        :
                        (
                          <li className='hs-dropdown [--trigger:hover] relative inline-flex' key={index}>
                            <button 
                            id="hs-dropdown-hover-event"
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded="false" 
                            aria-label="Form Dropdown"
                            className="hs-dropdown-toggle hover:text-freedom-light-blue text-freedom-white font-bold inline-flex items-center gap-x-3 transition-colors ease-in-out delay-75 duration-200"
                            >
                              {link.name}
                              <MdKeyboardArrowDown/>
                            </button>
                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                              {
                                link.items.map((form, index) => (
                                  <a 
                                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" 
                                  href={form.link}
                                  key={index}
                                  target='_blank'
                                  rel="noreferrer"
                                  >
                                    {form.name}
                                  </a>
                                ))
                              }
                              
                            </div>
                          </li>
                        )
                        
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
            <h1 className='font-extrabold tracking-widest text-[2.5rem] md:text-6xl mb-3 md:mb-7 lg:mb-10 xl:mb-14'>WHO WE ARE?</h1>
            <p className='text-justify md:text-xl lg:text-2xl leading-7'>
              At Freedom Christian Fellowship, we are a vibrant community dedicated to living out the teachings of Jesus Christ. 
              Our goal is to create a welcoming environment where everyone can experience God's love and grace. 
              We believe in the power of faith, fellowship, and service to transform lives and make a positive impact in our community and beyond.
              <br/> <br/>
              Join us as we worship, grow, and serve together, building strong connections and supporting one another in our spiritual journeys. 
              Whether you are new to faith or looking to deepen your relationship with God, you are welcome here.
            </p>
            <div className="hs-accordion-group w-full lg:w-10/12 mx-auto">
              <hr className="border-freedom-gray my-5 md:mt-14 lg:mt-20 xl:mt-24" />
              <AboutAccordion/>
            </div>
          </div>
        </section>

        <section id="event" className='w-full'>
          <blockquote className='w-full px-5 md:px-7 lg:px-10 xl:px-20 py-14 lg:text-xl xl:text-2xl bg-freedom-yellow select-none'>
            <p className="text-freedom-violet text-center">
              <em>
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, 
                20 and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."
              </em>
            </p>

            <footer className="mt-6 text-center">
              <div className="text-base font-semibold text-gray-800">Matthew 28:19-20</div>
            </footer>
          </blockquote>
          <div className='md:container md:mx-auto'>
            <div className='py-20 md:py-24 lg:py-36 xl:py-40'>
              <AnnouncementCarousel/>
            </div>
            
          </div>
        </section>

        <section id="ministry" className='w-full bg-zinc-100'>
          <blockquote className='w-full px-5 md:px-7 lg:px-10 xl:px-20 py-14 lg:text-xl xl:text-2xl bg-freedom-yellow select-none'>
            <p className="text-freedom-violet text-center">
              <em>
                "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God, to mature manhood, to the measure of the stature of the fullness of Christ."
              </em>
            </p>

            <footer className="mt-6 text-center">
              <div className="text-base font-semibold text-gray-800">Ephesians 4:11-13</div>
            </footer>
          </blockquote>

          <div className='md:container md:mx-auto px-5 py-20 md:py-24 lg:py-36 xl:py-40'>
            <div className='w-full flex items-center justify-center mb-8 md:mb-10 lg:mb-14 xl:mb-24'>
              <h1 className='text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight'>Ministries</h1>
            </div>
            <Ministry/>
          </div>
        </section>

        <footer id="contact" className='w-full bg-neutral-700'>
          <div className='md:container md:mx-auto px-5 py-14 md:py-16 lg:py-20'>
            <ContactUs/>
          </div>

          <div className='w-full bg-neutral-900'>
            <div className='md:container md:mx-auto px-5 py-8'>
                <div className='font-semibold text-sm md:text-base text-freedom-white flex items-center justify-between gap-x-3'>
                  <h2>© Freedom Christian Fellowship. All Rights Reserved.</h2>
                  <div className='flex items-center gap-x-5 lg:gap-x-7 xl:gap-x-10'>
                    <a className='text-freedom-blue' href="https://www.facebook.com/profile.php?id=100009815023687" target="_blank" rel="noreferrer"><FaFacebook size={27}/></a>
                    <a className='text-gray-300' href="tel:+639969347564"><FaPhoneAlt size={22}/></a>
                  </div>
                </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

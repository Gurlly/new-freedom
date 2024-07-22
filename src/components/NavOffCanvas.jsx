
import { LiaTimesSolid } from "react-icons/lia";
import Scrollspy from "react-scrollspy";

const NavOffCanvas = ({links, changeActiveLink}) => {

    return (
        <>
            <div id="nav-links" className=" hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[10] bg-white" tabIndex="-1">
                <div className="flex justify-between items-center px-3 py-5 border-b-2 border-b-freedom-gray bg-freedom-blue">
                    <h3 className="font-bold text-2xl text-freedom-white">
                        Freedom
                    </h3>
                    <button 
                    type="button" 
                    className="flex justify-center items-center size-7 text-sm rounded-full cursor-pointer text-gray-800 hover:bg-gray-100" data-hs-overlay="#nav-links">
                        <span className="sr-only">Close modal</span>
                        <LiaTimesSolid size={20}/>
                    </button>
                </div>
                <div className="w-full h-full bg-zinc-50">
                    <Scrollspy 
                    items={links.map(link => link.id)}
                    className="w-full flex flex-col"
                    onUpdate={(el) => el && changeActiveLink(el.id)}
                    >
                    {
                        links.map((link, index) => (
                            <li className="w-full border-y border-neutral-300" key={index}>
                                <a 
                                className={`w-full inline-flex items-center gap-x-3.5 p-4 hover:text-freedom-violet hover:bg-freedom-yellow ${link.active ? "font-bold text-freedom-violet bg-freedom-yellow" : "text-neutral-900 font-medium"} -mt-px transition-colors ease-in-out delay-75 duration-300`}
                                href={`#${link.id}`}
                                onClick={() => changeActiveLink(link.id)}
                                >
                                    {link.icon}
                                    <p className="text-sm">{link.name}</p>
                                </a>
                            </li>
                        ))
                    }
                    </Scrollspy>
                </div>
            </div>
        </>
  )
}

export default NavOffCanvas
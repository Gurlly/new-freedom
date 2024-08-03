import { LiaTimesSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";

import Scrollspy from "react-scrollspy";

const NavOffCanvas = ({ links, changeActiveLink }) => {
  return (
    <>
      <div
        id="nav-links"
        className=" hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[10] bg-white"
        tabIndex="-1"
      >
        <div className="flex justify-between items-center px-3 py-5 border-b-2 border-b-freedom-gray bg-freedom-blue">
          <h3 className="font-bold text-2xl text-freedom-white">Freedom</h3>
          <button
            type="button"
            className="flex justify-center items-center size-7 text-sm rounded-full cursor-pointer text-gray-800 hover:bg-gray-100"
            data-hs-overlay="#nav-links"
          >
            <span className="sr-only">Close modal</span>
            <LiaTimesSolid size={20} />
          </button>
        </div>
        <div className="w-full h-full bg-zinc-50">
          <Scrollspy
            items={links.map((link) => link.id)}
            className="w-full flex flex-col"
            onUpdate={(el) => el && changeActiveLink(el.id)}
          >
            {links.map((link, index) =>
              link.id !== "form" ? (
                <li className="w-full border-y border-neutral-300" key={index}>
                  <a
                    className={`w-full inline-flex items-center gap-x-3.5 p-4 hover:text-freedom-violet hover:bg-freedom-yellow ${
                      link.active
                        ? "font-bold text-freedom-violet bg-freedom-yellow"
                        : "text-neutral-900 font-medium"
                    } -mt-px transition-colors ease-in-out delay-75 duration-300`}
                    href={`#${link.id}`}
                    onClick={() => changeActiveLink(link.id)}
                  >
                    {link.icon}
                    <p className="text-sm">{link.name}</p>
                  </a>
                </li>
              ) : (
                <li
                  className="w-full border-y border-neutral-300 hs-accordion-group"
                  key={index}
                  data-hs-accordion-always-open="false"
                >
                  <div className="hs-accordion" id="hs-forms">
                    <button
                      aria-expanded="false"
                      aria-controls="form-group"
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-freedom-violet hs-accordion-active:bg-freedom-yellow hs-accordion-active:font-bold w-full inline-flex items-center justify-between p-4 hover:text-freedom-violet hover:bg-freedom-yellow -mt-px transition-colors ease-in-out delay-75 duration-300"
                    >
                      <div className="inline-flex items-center gap-x-3.5">
                        {link.icon}
                        <p className="text-sm">{link.name}</p>
                      </div>
                      <MdKeyboardArrowDown />
                    </button>
                    <div
                      id="form-group"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-forms"
                    >
                      <ul>
                        {link.items.map((form, index) => (
                          <li
                            className="w-full border-t border-neutral-300"
                            key={index}
                          >
                            <a
                              className="w-full text-sm text-freedom-blue inline-flex items-center p-4"
                              href={form.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {form.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            )}
          </Scrollspy>
        </div>
      </div>
    </>
  );
};

export default NavOffCanvas;

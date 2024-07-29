import { React, useState }from 'react'
import { useForm, ValidationError } from '@formspree/react';

import { FaLocationDot } from "react-icons/fa6";

const outreaches = [
    {
        name: "Pateros",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9160112254012!2d121.0736807758533!3d14.546795385933223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c983fe270339%3A0x3f255f02c096e5cf!2sFreedom%20Christian%20Fellowship!5e0!3m2!1sen!2sph!4v1721800914790!5m2!1sen!2sph",
        id: "pateros"
    },
    {
        name: "Caloocan",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.4033220232945!2d121.03192617585637!3d14.746292785757504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b04ac6dc2085%3A0xd6059cfc01b55278!2sFreedom%20Christian%20Fellowship%20North%20Caloocan!5e0!3m2!1sen!2sph!4v1721827140066!5m2!1sen!2sph",
        id: "caloocan"
    },
    {
        name: "Taguig",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.2731883398287!2d121.0566059!3d14.526359999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8c81e9e4b57%3A0xf90dff546d2ba18f!2sThe%20Fisher%20Valley%20College!5e0!3m2!1sen!2sph!4v1721828275611!5m2!1sen!2sph",
        id: "taguig"
    }
]

const ContactUs = () => {

    const [outreach, setOutreach] = useState(outreaches[0]);
    
    const changeLocation = (id) => {
        setOutreach(outreaches.find(outreach => outreach.id === id));
    }

    const [state, handleSubmit] = useForm("mnnanzbd");

  return (
    <>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-8 md:gap-x-5'>
            <div className='lg:col-start-1 lg:col-end-6'>
                <iframe 
                src={outreach.location}
                className='w-full min-h-96 md:h-[26.25rem] xl:h-[29rem]'
                allowFullScreen="" 
                loading="lazy" 
                title={`Freedom ${outreach.name} Location`}
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className='lg:col-start-7 lg:col-end-13'>
                <div className='w-full min-h-96 md:h-[26.25rem] xl:h-[29rem] flex flex-col border border-neutral-800 rounded-md bg-freedom-white'>
                    <div className='p-5 flex items-center justify-between bg-freedom-yellow border-b-2 border-freedom-gray'>
                        <h2 className='text-xl font-bold text-neutral-900'>Contact Us</h2>
                        
                        <div className="hs-dropdown relative inline-flex">
                            <button 
                            id="location-menu" 
                            type="button" 
                            className="hs-dropdown-toggle p-1.5 bg-freedom-white text-freedom-blue rounded-lg border border-gray-200 shadow-sm hover:bg-neutral-100 transition-colors ease-linear" 
                            aria-haspopup="menu" 
                            aria-expanded="false" 
                            aria-label="Dropdown">
                                <FaLocationDot/>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="location-menu">
                                {
                                    outreaches.map((freedom, index) => (
                                        <button 
                                        type="button"
                                        className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" 
                                        onClick={() => changeLocation(freedom.id)}
                                        key={index}
                                        >
                                            {freedom.name}
                                        </button>
                                    ))  
                                }
                            </div>
                        </div>
                    </div>

                    <form 
                    className='h-full flex flex-col flex-1 justify-between p-5 bg-freedom-white gap-y-2 rounded-b-lg'
                    action="/"
                    onSubmit={handleSubmit}
                    >
                        <div className='w-full'>
                            <section className="w-full space-y-3">
                                <input 
                                type="email" 
                                className="py-3 px-4 mb-2 block w-full border border-neutral-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" 
                                placeholder="Email"
                                required
                                id="client-email"
                                name="client-email"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="client-email"
                                    errors={state.errors}
                                />
                            </section>
                            <section className="w-full">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-white">Message:</label>
                                <textarea
                                className="py-3 px-4 block w-full h-32 lg:h-36 xl:h-44 border border-neutral-500 resize-none rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" 
                                placeholder="Write a message..."
                                id="client-message"
                                name="client-message"
                                required
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="client-message"
                                    errors={state.errors}
                                />
                            </section>
                        </div>
                
                        <button
                        type="submit"
                        className='px-6 py-2 self-start rounded-lg bg-neutral-900 text-freedom-white hover:bg-neutral-600 transition-colors ease-linear'
                        disabled={state.submitting}
                        >
                            Send Message
                        </button>
                    </form> 
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs
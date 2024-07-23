import {React, useState, useEffect} from 'react'

import { LiaTimesSolid } from "react-icons/lia";

// Pages
import FirstPage from './FourSLPages/FirstPage';
import SecondPage from './FourSLPages/SecondPage';
import ThirdPage from './FourSLPages/ThirdPage';
import FourthPage from './FourSLPages/FourthPage';
import FifthPage from './FourSLPages/FifthPage';
import SixthPage from './FourSLPages/SixthPage';
import SeventhPage from './FourSLPages/SeventhPage';

const pages = [
    <FirstPage/>,
    <SecondPage/>,
    <ThirdPage/>,
    <FourthPage/>,
    <FifthPage/>,
    <SixthPage/>,
    <SeventhPage/>,
];

const FourSpiritualLaws = () => {

    const [pageNum, setPageNum] = useState(1);
    const [currentPage, setCurrentPage] = useState(pages[0]);

    useEffect(() => {
        setCurrentPage(pages[pageNum - 1]);
    }, [pageNum])

  return (
    <>
        <div id="four-spiritual-laws" className="hs-overlay hidden size-full fixed top-0 start-0 z-[200] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex="-1" aria-labelledby="four-spiritual-laws-label">
            <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full flex flex-col bg-zinc-50 border shadow-sm rounded-xl pointer-events-auto">
                    <div className="flex justify-between rounded-t-xl items-center bg-freedom-blue py-3 px-4 border-b border-b-freedom-gray">
                        <h3 id="four-spiritual-laws-label" className="font-bold text-freedom-white">
                        Four Spiritual Laws
                        </h3>
                        <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full" aria-label="Close" data-hs-overlay="#four-spiritual-laws">
                            <span className="sr-only">Close</span>
                            <LiaTimesSolid size={20}/>
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                        {currentPage}
                    </div>
                    <div className={`flex ${pageNum === 1 ? "justify-end" : pageNum === pages.length ? "justify-start" : "justify-between"} items-center py-3 px-4 border-t border-t-freedom-gray`}>
                        <button 
                        type="button" 
                        className={`w-32 py-2 px-3 ${pageNum === 1 ? "hidden" : "inline-flex"} items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-freedom-violet text-freedom-white`}
                        onClick={() => setPageNum(pageNum - 1)}
                        >
                            <span>&larr;</span> Previous
                        </button>
                        <button 
                        type="button" 
                        className={`w-32 py-2 px-3 ${pageNum === pages.length ? "hidden" : "inline-flex"} items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-freedom-violet text-freedom-white`}
                        onClick={() => setPageNum(pageNum + 1)}
                        >
                            Next <span>&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FourSpiritualLaws
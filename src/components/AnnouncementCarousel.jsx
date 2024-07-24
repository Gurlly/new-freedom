
import React from "react";

const AnnouncementCarousel = () => {
  return (
    <>
      <div
        data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "isAutoPlay": true,
            "speed": 5000
        }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-[26rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] bg-white shadow-md lg:rounded-md shadow-neutral-600">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            
            <div className="hs-carousel-slide">
              <div className="w-full h-full announcement" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/drive-viewer/AKGpihZlkQKp-ePJ17nh_Bgm9AiXTG0CI0NJmoMIAvdfYXMTWjMBW4lDz7jiDpNzxZ9-ZyGuDWC8Te7aNv_3yhQ05L7HsL5WRIyOyA=s1600-rw-v1')"}}>
                <div className="w-full h-full p-2.5 backdrop-blur-[2px] flex flex-col items-center justify-center gap-y-3 lg:gap-y-5 tracking-tighter select-none">
                    <h1 className="text-5xl text-center font-extrabold text-freedom-white text-shadow md:text-7xl lg:text-8xl">Sunday Service</h1>
                    <p className="text-lg text-freedom-yellow font-semibold text-shadow lg:text-xl">Sunday: <time dateTime="9:00">9:00am</time> - <time dateTime="11:30">11:30am</time></p>
                </div>
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="w-full h-full announcement" style={{ backgroundImage:"url('https://lh3.googleusercontent.com/drive-viewer/AKGpihZmuuT1i-dpTF_Ptv7ULwZ7fz8LnrA5Xu_uWBRY1ZaSaPYpoeoqWzRnkHZ4UIAwwjBGroOyhADx-1yiL9i349HbHyqmC6Cwyxc=s1600-rw-v1')"}}>
                <div className="w-full h-full p-2.5 backdrop-blur-[2px] flex flex-col items-center justify-center gap-y-3 lg:gap-y-5 tracking-tighter select-none">
                    <h1 className="text-5xl text-center font-extrabold text-freedom-white text-shadow md:text-7xl lg:text-8xl">Women of Worth</h1>
                    <p className="text-lg text-freedom-yellow font-semibold text-shadow lg:text-xl">4th Wednesday: <time dateTime="18:00">6:00pm</time></p>
                </div>
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="w-full h-full announcement" style={{ backgroundImage:"url('https://lh3.googleusercontent.com/drive-viewer/AKGpihZqrDb9zGawzPtH0hX_9cmawhU71RN8pwZYdgK7qfuBm5y9AmjP0uLnCyatiAzed0bYlb57CZy40FoJLcPV13i71QJ-cbiTiII=s1600-rw-v1')"}}>
                <div className="w-full h-full p-2.5 backdrop-blur-[2px] flex flex-col items-center justify-center gap-y-3 lg:gap-y-5 tracking-tighter select-none">
                    <h1 className="text-5xl text-center font-extrabold text-freedom-white text-shadow md:text-7xl lg:text-8xl">Prayer Night</h1>
                    <p className="text-lg text-freedom-yellow font-semibold text-shadow lg:text-xl">Monday: <time dateTime="19:30">7:30pm</time></p>
                </div>
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="w-full h-full announcement" style={{ backgroundImage:"url('https://lh3.googleusercontent.com/drive-viewer/AKGpihbzvKdc-ESZTJ1LLq5bc8HDOdx4rbKZNw_kM8MS1UUtstq3UbYgBXAHmRVUaBw_b96Bqw0goX0xOxJfDU7AglGp7lvXJvuSAw=s1600-rw-v1')"}}>
                <div className="w-full h-full p-2.5 backdrop-blur-[2px] flex flex-col items-center justify-center gap-y-3 lg:gap-y-5 tracking-tighter select-none">
                    <h1 className="text-5xl text-center font-extrabold text-freedom-white text-shadow md:text-7xl lg:text-8xl">Youth Fellowship</h1>
                    <p className="text-lg text-freedom-yellow font-semibold text-shadow lg:text-xl">3rd Saturday: <time dateTime="16:00">4:00pm</time></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementCarousel;

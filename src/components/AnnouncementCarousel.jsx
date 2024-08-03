import React from "react";

const announcements = [
  {
    name: "Sunday Service",
    day: "Every Sunday",
    time: "9:00am",
    src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZlkQKp-ePJ17nh_Bgm9AiXTG0CI0NJmoMIAvdfYXMTWjMBW4lDz7jiDpNzxZ9-ZyGuDWC8Te7aNv_3yhQ05L7HsL5WRIyOyA=s1600-rw-v1",
    dateTime: "9:00",
  },
  {
    name: "Women of Worth",
    day: "Every 4th Wednesday",
    time: "6:00pm",
    src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZmuuT1i-dpTF_Ptv7ULwZ7fz8LnrA5Xu_uWBRY1ZaSaPYpoeoqWzRnkHZ4UIAwwjBGroOyhADx-1yiL9i349HbHyqmC6Cwyxc=s1600-rw-v1",
    dateTime: "18:00",
  },
  {
    name: "Prayer Night",
    day: "Every Monday",
    time: "7:30pm",
    src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZqrDb9zGawzPtH0hX_9cmawhU71RN8pwZYdgK7qfuBm5y9AmjP0uLnCyatiAzed0bYlb57CZy40FoJLcPV13i71QJ-cbiTiII=s1600-rw-v1",
    dateTime: "19:30",
  },
  {
    name: "Youth Fellowship",
    day: "Every 3rd Saturday",
    time: "4:00pm",
    src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbzvKdc-ESZTJ1LLq5bc8HDOdx4rbKZNw_kM8MS1UUtstq3UbYgBXAHmRVUaBw_b96Bqw0goX0xOxJfDU7AglGp7lvXJvuSAw=s1600-rw-v1",
    dateTime: "16:00",
  },
];

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
        <div className="hs-carousel relative overflow-hidden w-full min-h-dvh bg-white shadow-md shadow-neutral-600">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {announcements.map((announcement, index) => (
              <div className="hs-carousel-slide" key={index}>
                <div
                  className="w-full h-full announcement"
                  style={{ backgroundImage: `url(${announcement.src})` }}
                >
                  <div className="w-full h-full p-2.5 backdrop-blur-[2px] flex flex-col items-center justify-center gap-y-3 lg:gap-y-5 tracking-tighter select-none">
                    <h1 className="text-[calc(3.5rem+2dvw)] text-center font-extrabold text-freedom-white text-shadow">
                      {announcement.name}
                    </h1>
                    <p className="text-[calc(0.65rem+2dvw)] text-freedom-yellow font-semibold text-shadow">
                      {announcement.day} -{" "}
                      <time dateTime={announcement.dateTime}>
                        {announcement.time}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementCarousel;

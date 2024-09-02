import React from "react";

// Announcement Images
import SundayService from '../images/announcements/sundayService.jpg'
import PrayerNight from '../images/announcements/prayerNight.png'
import Wow from '../images/announcements/wow.jpg'
import Youth from '../images/announcements/youth.jpg'

const announcements = [
  {
    name: "Sunday Service",
    day: "Every Sunday",
    time: "9:00am",
    src: SundayService,
    dateTime: "9:00",
  },
  {
    name: "Women of Worth",
    day: "Every 4th Wednesday",
    time: "6:00pm",
    src: PrayerNight,
    dateTime: "18:00",
  },
  {
    name: "Prayer Night",
    day: "Every Monday",
    time: "7:30pm",
    src: Wow,
    dateTime: "19:30",
  },
  {
    name: "Youth Fellowship",
    day: "Every 3rd Saturday",
    time: "4:00pm",
    src: Youth,
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
            "speed": 10000
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
                    <h1 className="text-[calc(3.0rem+2dvw)] text-center font-extrabold text-freedom-white text-shadow">
                      {announcement.name}
                    </h1>
                    <p className="text-[calc(0.7rem+1.5dvw)] text-freedom-yellow font-semibold text-shadow">
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

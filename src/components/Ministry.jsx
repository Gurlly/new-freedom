import React from "react";

// Ministry Images
import Worship from '../images/ministries/worship.jpg'
import Communication from '../images/ministries/media.jpg'
import Pastoral from '../images/ministries/pastoral.jpg'
import Kid from '../images/ministries/kids.jpg'
import Missionary from '../images/ministries/mission.jpg'
import Youth from '../images/ministries/youth.jpg'

const ministries = [
  {
    name: "Worship Team",
    description:
      "The Worship Ministry is dedicated to leading the congregation in worship through music and other forms of creative expression. This team works to create an atmosphere that invites people into a deeper connection with God during services and special events.",
    src: Worship,
    alt: "worship",
    form: "",
  },
  {
    name: "Communication Team",
    description:
      "The Communication (Media) Team manages the church’s media and communication channels, including social media, websites, newsletters, and multimedia production. Their goal is to effectively share the church's message and engage the community through various digital platforms.",
    src: Communication,
    alt: "comm",
    form: "",
  },
  {
    name: "Pastoral Team",
    description:
      "The Pastoral Team provides spiritual guidance, support, and counseling to the congregation. They are responsible for preaching, teaching, and overseeing the spiritual well-being of the church members, ensuring that everyone is nurtured in their faith journey.",
    src: Pastoral,
    alt: "pastoral",
    form: "",
  },
  {
    name: "Kid's Ministry",
    description:
      "The Kid's Ministry focuses on the spiritual development and growth of children. Through age-appropriate teaching, activities, and events, this ministry aims to introduce kids to the love of Jesus and help them build a strong foundation in their faith.",
    src: Kid,
    alt: "kids",
    form: "",
  },
  {
    name: "Missionary",
    description:
      "The Missionary Ministry is dedicated to spreading the gospel and serving communities both locally and globally. This team organizes mission trips, supports missionaries, and engages in various outreach projects to make a positive impact in the world.",
    src: Missionary,
    alt: "mission",
    form: "",
  },
  {
    name: "Youth Ministry",
    description:
      "The Youth Ministry caters to the spiritual and social needs of teenagers and young adults. Through Bible studies, group activities, and mentorship programs, this ministry helps young people grow in their faith, develop leadership skills, and form meaningful relationships.",
    src: Youth,
    alt: "youth",
    form: "",
  },
];

const Ministry = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 xl:gap-x-8 xl:gap-y-12">
        {ministries.map((ministry, index) => (
          <a
            className="flex flex-col group bg-white border shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition"
            href={ministry.form}
            key={index}
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-lg overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-lg"
                src={ministry.src}
                alt={ministry.alt}
              />
            </div>
            <div className="h-full p-4 md:p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg 2xl:text-xl font-bold text-neutral-800">
                  {ministry.name}
                </h3>
                <p className="mt-1 2xl:mt-3 mb-5 2xl:mb-10 text-neutral-700 text-justify">
                  {ministry.description}
                </p>
              </div>
              <a
                className="border px-10 py-1.5 lg:py-2 self-start inline-flex rounded-lg bg-freedom-blue hover:bg-blue-500 text-freedom-white transition-colors ease-in-out delay-75 duration-300"
                href={ministry.src}
              >
                Join Now
              </a>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Ministry;

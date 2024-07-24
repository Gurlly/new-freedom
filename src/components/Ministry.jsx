import React from 'react'

const ministries = [
    {
      name: "Worship Team",
      description: "The Worship Ministry is dedicated to leading the congregation in worship through music and other forms of creative expression. This team works to create an atmosphere that invites people into a deeper connection with God during services and special events.",
      src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbUUvn98zXbHd6mNClYj5BlKAj9sSy86l1nGyoMQYj5_bYAabgSpfVcfWDEOBMOy1h9UDHgNQlfeVYR2eZo-Hmorur-X_sorD8=s1600-rw-v1",
      alt: "worship",
      form: ""
    },
    {
      name: "Communication Team",
      description: "The Communication (Media) Team manages the church’s media and communication channels, including social media, websites, newsletters, and multimedia production. Their goal is to effectively share the church's message and engage the community through various digital platforms.",
      src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbzOpd2ielBmFjQCbhsyflIi38Co-ldtN2T1m3Ey64aaIBbm5OSunscxbmuTbMkudXeXQDaybUA8vf3wbBHLeMZy5W97pbsUg=s1600-rw-v1",
      alt: "comm",
      form: ""
    },
    {
      name: "Pastoral Team",
      description: "The Pastoral Team provides spiritual guidance, support, and counseling to the congregation. They are responsible for preaching, teaching, and overseeing the spiritual well-being of the church members, ensuring that everyone is nurtured in their faith journey.",
      src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYt7Ls7KixWDW2O6WYkOGvQmVkQX8MEsKPFvP_qnUfGdBZ40ThLzMQikeuJY0_LwhKBwkuMQGSBkJX-8zurRrvaBKBU25URJ6s=s1600-rw-v1",
      alt: "pastoral",
      form: ""
    },
    {
      name: "Kid's Ministry",
      description: "The Kid's Ministry focuses on the spiritual development and growth of children. Through age-appropriate teaching, activities, and events, this ministry aims to introduce kids to the love of Jesus and help them build a strong foundation in their faith.",
      src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYQM8ylFrO5ExX7KG0NL7viyfLM79Mc--kMHz7apCMJkYznbS-Z9UxJORAZ5e23et7eda4kEWLbiChgj7O6WBlEBpPHjC8hLCg=s1600-rw-v1",
      alt: "kids",
      form: ""
    },
    {
      name: "Missionary",
      description: "The Missionary Ministry is dedicated to spreading the gospel and serving communities both locally and globally. This team organizes mission trips, supports missionaries, and engages in various outreach projects to make a positive impact in the world.",
      src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbK4A0CtZsCLy8FxzDPSrOj7eWxODtrea51FOOs-RU9W9kvSdcSp0wvCzR78JQV2w_vMAewhOk_2SwsYpAKglDxZT-01eInHg=s1600-rw-v1",
      alt: "mission",
      form: ""
    },
    {
      name: "Youth Ministry",
      description: "The Youth Ministry caters to the spiritual and social needs of teenagers and young adults. Through Bible studies, group activities, and mentorship programs, this ministry helps young people grow in their faith, develop leadership skills, and form meaningful relationships.",
      src: "https://lh3.googleusercontent.com/drive-viewer/AKGpihY25nREjTE0dwgP4U3bznYOhVG3lTCRNI2bKEkP5WDRCS1HN8wfagQyXOWoqAN5sZcK53uLWclPsvXem8oFBai_Y2B2cj9Di0g=s1600-rw-v1",
      alt: "youth",
      form: ""
    },
    
]

const Ministry = () => {
  return (
    <> 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 xl:gap-x-8 xl:gap-y-12'>
            {
                ministries.map((ministry, index) => (
                    <a 
                    className="flex flex-col group bg-white border shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition" 
                    href={ministry.form}
                    key={index}
                    >
                        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-lg overflow-hidden">
                            <img 
                            className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-lg"
                            src={ministry.src}
                            alt={ministry.alt} />
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
                            className='border px-10 py-1.5 lg:py-2 self-start inline-flex rounded-lg bg-freedom-blue hover:bg-blue-500 text-freedom-white transition-colors ease-in-out delay-75 duration-300'
                            href={ministry.src}
                            >
                                Join Now
                            </a>
                        </div>
                    </a>
                ))
            }
        </div>
    </>
  )
}

export default Ministry
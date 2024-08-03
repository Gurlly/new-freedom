import React from "react";

const AboutAccordion = () => {
  return (
    <>
      <div className="hs-accordion -mt-px" id="missionVision">
        <button
          className="hs-accordion-toggle lg:text-2xl hs-accordion-active:text-freedom-light-blue inline-flex items-center justify-center gap-x-3 w-full font-bold text-xl text-neutral-900 px-5 pb-5 lg:pb-6 lg:pt-1 xl:pb-7 xl:pt-2 hover:text-freedom-light-blue transition-colors ease-linear duration-300"
          aria-controls="mission-vision"
        >
          Mission & Vision
        </button>
        <div
          id="mission-vision"
          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
          aria-labelledby="missionVision"
        >
          <div className="pt-0 p-5 lg:px-16 lg:pb-10 lg:pt-6 lg:text-xl xl:text-2xl leading-7">
            <h5 className="font-bold">Mission:</h5>
            <p className="text-justify mb-3 lg:mb-7 xl:mb-10">
              Transforming lives changing life.
            </p>
            <h5 className="font-bold">Vision:</h5>
            <p className="text-justify">
              Church in every barangay in the Philippines.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-freedom-gray mb-5" />

      <div className="hs-accordion -mt-px" id="coreValues">
        <button
          className="hs-accordion-toggle lg:text-2xl hs-accordion-active:text-freedom-light-blue inline-flex items-center justify-center gap-x-3 w-full font-bold text-xl text-neutral-900 px-5 pb-5 lg:pb-6 lg:pt-1 xl:pb-7 xl:pt-2 hover:text-freedom-light-blue transition-colors ease-linear duration-300"
          aria-controls="core-values"
        >
          Core Values
        </button>
        <div
          id="core-values"
          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
          aria-labelledby="coreValues"
        >
          <div className="pt-0 p-5 lg:px-16 lg:pb-10 lg:pt-6 lg:text-xl xl:text-2xl leading-7">
            <ul>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="inline font-bold">Faith: </h5>
                <p className="inline">
                  We believe in the power of faith in Jesus Christ as the
                  foundation of our lives and community. Our faith guides us in
                  all we do, inspiring us to live out God’s word daily.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="inline font-bold">Love: </h5>
                <p className="inline">
                  We are committed to showing Christ-like love to everyone. This
                  includes loving God with all our heart, soul, and mind, and
                  loving our neighbors as ourselves.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="inline font-bold">Service: </h5>
                <p className="inline">
                  Serving others is at the heart of our mission. We strive to
                  make a positive impact in our community and beyond through
                  acts of kindness, compassion, and support.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="inline font-bold">Integrity: </h5>
                <p className="inline">
                  We are dedicated to living with honesty, transparency, and
                  ethical principles. We seek to honor God in our actions and
                  decisions, both individually and collectively.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="inline font-bold">Community: </h5>
                <p className="inline">
                  We foster a sense of belonging and unity within our church
                  family. We believe that strong relationships and mutual
                  support are essential to spiritual growth and well-being.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="inline font-bold">Worship: </h5>
                <p className="inline">
                  Worship is central to our fellowship. We gather regularly to
                  praise, pray, and experience the presence of God together,
                  growing deeper in our relationship with Him.
                </p>
              </li>
              <li className="text-justify">
                <h5 className="inline font-bold">Growth: </h5>
                <p className="inline">
                  We are committed to spiritual growth and personal development.
                  We encourage continuous learning, discipleship, and the
                  pursuit of God’s purpose for our lives.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-freedom-gray mb-5" />

      <div className="hs-accordion -mt-px" id="statementOfFaith">
        <button
          className="hs-accordion-toggle lg:text-2xl hs-accordion-active:text-freedom-light-blue inline-flex items-center justify-center gap-x-3 w-full font-bold text-xl text-neutral-900 px-5 pb-5 xl:pb-7 xl:pt-2 hover:text-freedom-light-blue transition-colors ease-linear duration-300"
          aria-controls="statement-of-faith"
        >
          Statement of Faith
        </button>
        <div
          id="statement-of-faith"
          className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
          aria-labelledby="statementOfFaith"
        >
          <div className="pt-0 p-5 lg:px-16 lg:pb-10 lg:pt-6 lg:text-xl xl:text-2xl leading-7">
            <ul>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="font-bold">The Bible: </h5>
                <p>
                  We believe the Bible is the inspired, infallible, and
                  authoritative Word of God. It is our ultimate guide for faith
                  and practice, providing the foundation for our beliefs and the
                  principles by which we live.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="font-bold">The Holy Trinity: </h5>
                <p>
                  We believe in one God, eternally existent in three persons:
                  Father, Son, and Holy Spirit. God the Father is the Creator
                  and Sustainer of all things. Jesus Christ, the Son, is our
                  Lord and Savior who was conceived by the Holy Spirit, born of
                  the Virgin Mary, lived a sinless life, was crucified, died,
                  and was buried. He rose again on the third day, ascended into
                  heaven, and will come again to judge the living and the dead.
                  The Holy Spirit indwells and empowers believers to live a
                  godly life, guiding, teaching, and equipping us for service
                  and witness.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="font-bold">Salvation: </h5>
                <p>
                  We believe that salvation is a gift from God, received by
                  grace through faith in Jesus Christ. It is not earned by human
                  efforts but given through repentance and faith in Christ's
                  atoning sacrifice. This salvation results in a transformed
                  life, characterized by a personal relationship with Jesus
                  Christ and the indwelling presence of the Holy Spirit.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="font-bold">The Church: </h5>
                <p>
                  We believe in the universal church, the body of Christ,
                  composed of all believers. The local church is a community of
                  believers who gather for worship, fellowship, discipleship,
                  and service. The church exists to glorify God, edify
                  believers, and make disciples of all nations.
                </p>
              </li>
              <li className="text-justify mb-3 lg:mb-7 xl:mb-10">
                <h5 className="font-bold">Christian Living: </h5>
                <p>
                  We believe that God’s grace and power enable us to live a life
                  of holiness, integrity, and love, reflecting the character of
                  Christ in all we do. We are called to love God with all our
                  heart, soul, and mind, and to love our neighbors as ourselves.
                  We strive to live out our faith through acts of compassion,
                  justice, and service to others.
                </p>
              </li>
              <li className="text-justify">
                <h5 className="font-bold">Eternal Destiny: </h5>
                <p>
                  We believe in the bodily resurrection of both the saved and
                  the lost. The saved will experience eternal life with God,
                  enjoying His presence forever. The lost will face eternal
                  separation from God. This belief motivates us to share the
                  gospel and the hope of salvation with all people.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-freedom-gray mb-5" />
    </>
  );
};

export default AboutAccordion;

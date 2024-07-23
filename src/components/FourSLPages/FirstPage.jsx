import React from 'react'

const FirstPage = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='flex items-center gap-x-2'>
          <h1 className='text-5xl font-extrabold'>1</h1>
          <h2 className=' leading-tight font-semibold text-lg text-justify'>God loves you and offers a wonderful plan for your life</h2>
        </div>
        <div className='my-7'>
          <h3 className='mb-1.5 font-medium uppercase'>God's Love</h3>
          <p className='text-justify'>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life <span className='text-freedom-blue'>(John 3:16)</span>.</p>
          <h3 className='mt-3 mb-1.5 font-medium uppercase'>God's Plan</h3>
          <p className='text-justify'>[Christ speaking] ...I am come that they might have life, and that they might have it more abundantly <span className='text-freedom-blue'>(John 10:10)</span>.</p>
        </div>
        <div>
          <p className='text-justify font-semibold'>Why is it that many people are not experiencing an abundant life? Because...</p>
        </div>
      </div>
    </>
  )
}

export default FirstPage
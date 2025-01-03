import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-purple-500'>
          Shiza Shamim : Crafting Digital Experiences That Inspire and Connect.
        </h2>

        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md-12 lg:mb-16 animate-fade-in-up delay-100'>
        Shiza Shamim is a dynamic web developer, insightful blog writer, and expert SEO engineer
        with a knack for blending creativity and strategy. Her journey in the digital world is
        marked by a passion for crafting responsive websites, writing compelling content, and 
        implementing innovative SEO techniques to boost online presence. With a deep understanding
        of user behavior, Shiza's work not only connects with audiences but also delivers 
        measurable results. Their dedication to continuous learning ensures they stay ahead in the
        ever-evolving digital landscape.
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-purple-600 animate-colorchange'> Explore our Categories</h1>

  <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
  {[
    "Web Development",
    "SEO Strategies",
    "Content Marketing",
    "Social Media Mastery",
    "Digital Analytics",
    "Trends and Innovations"
  ].map((category, index) => (
    <div key={index}
    className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-green-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
      <p className='text-center text-lg font-semibold'>{category}</p>
      <div className='absolte insert-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'></div>
    </div>
  ))}
  </div>          
        </div>
      </section>
    </div>
  );
}

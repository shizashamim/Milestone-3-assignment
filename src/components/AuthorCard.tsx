import React from 'react';

export default function AuthorCard() {
  return (
    <div className= "bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className= "flex items-center animation-fadeIn">


<img 
className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-green-500"
src="../images/author.jpg"
alt="Author Image"
/>

<div>
<h3 className='text-xl font-bold'> Shiza Shamim </h3>
<p className='text-purple-500'>
  {" "}
  SEO Engineer | Web Developer | Blog Writer| {" "}
  </p>
</div>
      </div>



<p className='mt-4 text-black leading-relaxed'>
Shiza Shamim is a skilled web developer, passionate blog writer, and SEO engineer dedicated to crafting digital experiences that resonate. With a flair for storytelling and technical expertise, they create engaging content and optimize websites to drive growth and visibility.
</p>

<div className='mt-4 flex space-x-3'>
  <a 
  href='shizashamim18@gmail.com'
  className='px-4 py-2 text-white bg-green-500 rounded-md hover:bg-purple-500 transition duration-300'>
    Email
  </a>

  <a 
  href='https://www.linkedin.com/in/shiza-shamim-57417927a'
  className='px-4 py-2 text-white bg-green-500 rounded-md hover:bg-purple-500 transition duration-300'>
    Linkedin
  </a>

  <a 
  href='https://github.com/shizashamim'
  className='px-4 py-2 text-white bg-green-500 rounded-md hover:bg-purple-500 transition duration-300'>
    Github
  </a>

</div>
    </div>
  );
}

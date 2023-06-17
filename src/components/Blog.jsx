import React from 'react'

const Blog = () => {
  return (
<section class="px-4 bg-gray-100 py-8" id='blog'>
  <h2 class="text-3xl font-bold mb-6">Latest Blogs</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div class="bg-white shadow-md rounded-lg p-6">
      <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Blog Image" class="w-full h-48 object-cover mb-4" />
      <h3 class="text-xl font-bold mb-2">How to learn Computer packages</h3>
      <p class="text-gray-600 mb-4">A comprehensive detail about how to learn computer packages is provided in our description. Enroll with us today.</p>
      <a href="#" class="text-blue-500 hover:underline">Read More</a>
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Blog Image" class="w-full h-48 object-cover mb-4" />
      <h3 class="text-xl font-bold mb-2">How to secure your VISA</h3>
      <p class="text-gray-600 mb-4">We'll help you with some tips here on how to successifully secure your VISA to any country. </p>
      <a href="#" class="text-blue-500 hover:underline">Read More</a>
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Blog Image" class="w-full h-48 object-cover mb-4" />
      <h3 class="text-xl font-bold mb-2">Cracking your exam</h3>
      <p class="text-gray-600 mb-4">Want to know more about booking your examinations? We got you covered. Contact us now.</p>
      <a href="#" class="text-blue-500 hover:underline">Read More</a>
    </div>
  </div>
</section>


  )
}

export default Blog

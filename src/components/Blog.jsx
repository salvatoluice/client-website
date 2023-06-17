import React from 'react'

const Blog = () => {
  return (
<section class="px-4 bg-gray-100 py-8">
  <h2 class="text-3xl font-bold mb-6">Latest Blogs</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div class="bg-white shadow-md rounded-lg p-6">
      <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Blog Image" class="w-full h-48 object-cover mb-4" />
      <h3 class="text-xl font-bold mb-2">Blog Title 1</h3>
      <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" class="text-blue-500 hover:underline">Read More</a>
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Blog Image" class="w-full h-48 object-cover mb-4" />
      <h3 class="text-xl font-bold mb-2">Blog Title 2</h3>
      <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" class="text-blue-500 hover:underline">Read More</a>
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Blog Image" class="w-full h-48 object-cover mb-4" />
      <h3 class="text-xl font-bold mb-2">Blog Title 3</h3>
      <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" class="text-blue-500 hover:underline">Read More</a>
    </div>
  </div>
</section>


  )
}

export default Blog

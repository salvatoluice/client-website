import React from 'react'

const Works = () => {
  return (
    <div class="bg-gray-100 py-10">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-2 text-center">Our Successful Works</h2>
      <p className='text-center mb-4'>Below all our achievements so far. Proud of what we have done</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Work 1 --> */}
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Work 1" class="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
          <div class="absolute inset-0 flex flex-col text-white gap-2 items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-center text-xl font-bold">Work no 6</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis corrupti cum necessitatibus! Debitis rem, ut necessitatibus animi eius minima deserunt.</p>
          </div>
        </div>
        
        {/* <!-- Work 2 --> */}
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Work 2" class="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
          <div class="absolute inset-0 flex flex-col text-white gap-2 items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-center text-xl font-bold">Work no 6</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis corrupti cum necessitatibus! Debitis rem, ut necessitatibus animi eius minima deserunt.</p>
          </div>
        </div>
        
        {/* <!-- Work 3 --> */}
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Work 3" class="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
          <div class="absolute inset-0 flex flex-col text-white gap-2 items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-center text-xl font-bold">Work no 6</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis corrupti cum necessitatibus! Debitis rem, ut necessitatibus animi eius minima deserunt.</p>
          </div>
        </div>
        
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Work 4" class="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
          <div class="absolute inset-0 flex flex-col text-white gap-2 items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-center text-xl font-bold">Work no 6</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis corrupti cum necessitatibus! Debitis rem, ut necessitatibus animi eius minima deserunt.</p>
          </div>
        </div>
        
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Work 5" class="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
          <div class="absolute inset-0 flex flex-col text-white gap-2 items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-center text-xl font-bold">Work no 6</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis corrupti cum necessitatibus! Debitis rem, ut necessitatibus animi eius minima deserunt.</p>
          </div>
        </div>
        
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Work 6" class="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
          <div class="absolute inset-0 flex flex-col text-white gap-2 items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-center text-xl font-bold">Work no 6</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis corrupti cum necessitatibus! Debitis rem, ut necessitatibus animi eius minima deserunt.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Works

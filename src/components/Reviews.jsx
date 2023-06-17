import React from 'react'

const Reviews = () => {
  return (
<div class="bg-gray-100 py-10" id='reviews'>
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold  text-center">Customer Reviews</h2>
    <p className='mb-4 text-center pt-2 font-semibold'>What our clients say about us.</p>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      {/* <!-- Review 1 --> */}
      <div class="w-full md:w-1/3">
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Customer 1" class="w-16 h-16 rounded-full" />
          </div>
          <p class="text-lg text-center mt-4">"This is the best agency to help you secure your VISA. They  have a very smooth process."</p>
          <p class="text-center mt-2">- Ayande Vova</p>
          <div class="flex justify-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="w-full md:w-1/3">
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Customer 2" class="w-16 h-16 rounded-full" />
          </div>
          <p class="text-lg text-center mt-4">"I took my computer packages classes here. Best quality so far. Amazing"</p>
          <p class="text-center mt-2">- Bosibori Dwkins</p>
          <div class="flex justify-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="w-full md:w-1/3">
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Customer 3" class="w-16 h-16 rounded-full" />
          </div>
          <p class="text-lg text-center mt-4">"For a better experience, be sure to choose high-flyer consultancy. You will thank me."</p>
          <p class="text-center mt-2">- Sarah Johnson</p>
          <div class="flex justify-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0l3.09 6.32L20 7.23l-4.47 4.36L15 20l-5.01-2.53L5 20l-1.53-4.36L0 7.23l6.91-0.91L10 0zm0 17.42V6.18L6.09 4.47 8 1.07l4 3.9 4-3.9 1.91 3.4-3.91 1.71v11.25l-3.07-1.54L10 17.42z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Reviews

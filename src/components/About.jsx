import React from 'react'

const About = () => {
  return (
    <div class="bg-gray-100 py-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 md:pr-8">
            <h1 class="mb-4 text-blue-500">Who We Are</h1>
            <p class="mb-4 text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non semper sapien, et elementum ipsum.</p>
            <div class="flex space-x-4">
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
              <button class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Contact Us</button>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-8">
            <div class="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 class="text-xl font-bold mb-2">
                <i class="fas fa-bullseye mr-2 text-blue-500"></i> Our Mission
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non semper sapien, et elementum ipsum.</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-4">
              <h2 class="text-xl font-bold mb-2">
                <i class="fas fa-eye mr-2 text-blue-500"></i> Our Vision
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non semper sapien, et elementum ipsum.</p>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-8">
            <div class="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 class="text-xl font-bold mb-2">
                <i class="fas fa-users mr-2 text-blue-500"></i> Our Team
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non semper sapien, et elementum ipsum.</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-4">
              <h2 class="text-xl font-bold mb-2">
                <i class="fas fa-building mr-2 text-blue-500"></i> Our Office
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non semper sapien, et elementum ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About

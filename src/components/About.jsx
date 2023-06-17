import React from 'react'

const About = () => {
  return (
    <div class="bg-gray-100 py-10">
      <div class="container mx-auto px-4 gap-2">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 md:pr-8">
            <h1 class="mb-4 text-blue-500">Who We Are</h1>
            <p class="mb-4 text-2xl font-bold">we are a passionate and innovative education and training institution dedicated to empowering individuals and transforming lives. Join us on a transformative journey to unlock your potential and shape a brighter future.</p>
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
              <p>Our mission is to provide high-quality education and training programs that empower individuals to achieve their goals and unlock their full potential. We strive to offer comprehensive and personalized learning experiences that equip our students with the necessary skills and knowledge to excel in their chosen fields.</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-4">
              <h2 class="text-xl font-bold mb-2">
                <i class="fas fa-eye mr-2 text-blue-500"></i> Our Vision
              </h2>
              <p>Our vision is to be a leading provider of innovative and transformative education solutions globally. We envision a future where everyone has access to exceptional learning opportunities that foster personal and professional growth, enabling individuals to make a positive impact in their communities.</p>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-8">
            <div class="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 class="text-xl font-bold mb-2">
                <i class="fas fa-users mr-2 text-blue-500"></i> Our Team
              </h2>
              <p>Our team consists of dedicated professionals who are passionate about education and committed to our students' success. We have a diverse group of instructors, advisors, and support staff who bring their expertise and enthusiasm to create a supportive and enriching learning environment. More Testimonials have been said so far</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-4">
              <h2 class="text-xl font-bold mb-2">
                <i class="fas fa-building mr-2 text-blue-500"></i> Our Office
              </h2>
              <p>Located in a vibrant and accessible area, our office serves as a hub for learning, collaboration, and student support. With modern facilities and a welcoming atmosphere, our office is designed to facilitate effective teaching and learning experiences. Our dedicated staff members are always available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About

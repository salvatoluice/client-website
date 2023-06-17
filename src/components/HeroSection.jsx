import React from 'react';
import video from '../assets/bg.mp4'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const HeroSection = () => {
  const imgUrl = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

  return (
  <section class="relative h-screen">
  <div class="absolute h-[80vh] inset-0">
  <video class="w-full h-full object-cover" autoplay='autoplay' muted loop='loop'>
      <source src={video} type="video/mp4" />
  </video>
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div class="relative container mx-auto my-auto px-4 py-24">
    <h1 class="text-6xl font-bold text-white mb-8">Welcome to <span className='italic'>'My Travel International'</span></h1>
    <p class="text-lg text-white mb-8">We value your needs and thats why we exist. We offer a variety of services, <br /> including computer packages. Check them out in the section below.</p>
    <div class="flex items-center space-x-4 mb-8">
      <a href="#" class="text-white hover:text-gray-200 transition duration-300">< FaFacebookF /></a>
      <a href="#" class="text-white hover:text-gray-200 transition duration-300"><AiOutlineTwitter /></a>
      <a href="#" class="text-white hover:text-gray-200 transition duration-300"><AiOutlineInstagram /></a>
    </div>
    <div class="flex space-x-4">
      <a href="#" class="inline-block bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200 transition duration-300">Learn More</a>
      <a href="#" class="inline-block bg-transparent border border-white text-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition duration-300">Contact Us</a>
    </div>
  </div>
</section>

  
  );
};

export default HeroSection;

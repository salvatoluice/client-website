import React from 'react';
import video from '../assets/bg.mp4'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const HeroSection = () => {

  return (
  <section class="relative h-[90vh]">
  <div class="absolute h-[90vh] inset-0">
  <video class="w-full h-full object-cover" autoplay='autoplay' muted loop='loop'>
      <source src={video} type="video/mp4" />
  </video>
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div class="relative container mx-auto my-auto px-4 py-24">
    <h1 class="text-6xl font-bold text-white mb-8">Empowering Growth and Success.</h1>
    <p class="text-lg text-white mb-8">Unlock Your Potential with Comprehensive Education and Training Solutions. With our dedicated team and high-quality programs, we empower individuals to excel in their endeavors and turn their dreams into reality.</p>
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

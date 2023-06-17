import React from 'react'

const Footer = () => {
  return (
<footer class="bg-gray-800 text-gray-300 py-10">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="col-span-2">
        <h3 class="text-2xl font-bold mb-4 italic">High-Flyer Internantional Consultancy</h3>
        <p class="mb-4 w-[330px]">We stay at the forefront of education, anticipating trends and adapting our offerings to ensure exceptional experiences. </p>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-300 hover:text-gray-100">Home</a></li>
          <li><a href="#" class="text-gray-300 hover:text-gray-100">About</a></li>
          <li><a href="#" class="text-gray-300 hover:text-gray-100">Services</a></li>
          <li><a href="#" class="text-gray-300 hover:text-gray-100">Projects</a></li>
          <li><a href="#" class="text-gray-300 hover:text-gray-100">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4">Contact</h3>
        <p class="mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Khetias Building, 5th floor</p>
        <p class="mb-2"><i class="fas fa-envelope mr-2"></i> info@example.com</p>
        <p class="mb-2"><i class="fas fa-phone mr-2"></i>+254 700 000 000</p>
        <p class="mb-2"><i class="fas fa-clock mr-2"></i>Mon-Fri: 8:00 AM - 6:00 PM</p>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4">Follow Us On</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-gray-100"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-gray-300 hover:text-gray-100"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-gray-300 hover:text-gray-100"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-gray-300 hover:text-gray-100"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <hr class="border-gray-600 my-8" />
    <div class="flex flex-wrap justify-between items-center">
      <p class="text-sm">© 2023 Company Name. All rights reserved.</p>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-300 hover:text-gray-100">Privacy Policy</a></li>
        <li><a href="#" class="text-gray-300 hover:text-gray-100">Terms of Service</a></li>
        <li><a href="#" class="text-gray-300 hover:text-gray-100">Cookies Policy</a></li>
      </ul>
    </div>
  </div>
</footer>


  )
}

export default Footer

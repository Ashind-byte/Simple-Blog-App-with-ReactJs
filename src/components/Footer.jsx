import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-200 text-center lg:text-left mx-3">
    
    <div>
      <div className='m-3 text-center'>
      <h1>Socials</h1>
      <li ><a href="https://github.com/Ashind-byte"><i  className="fa-brands fa-linkedin"></i></a></li>
      <li><a href="https://www.linkedin.com/in/ashind-c-863b8018b/"><i  className="fa-brands fa-github"></i></a></li>
      </div>
    </div>
    <div>
         <p className="text-center text-gray-800 dark:text-black">© Ashind 2022 - All rights reserved</p>
    </div>
  </footer>
  )
}

export default Footer
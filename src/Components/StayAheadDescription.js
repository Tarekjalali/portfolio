import React from 'react'

const StayAheadDescription = () => {
  return (
    <div style={{paddingLeft : '40px' , paddingRight : '40px', width :'790px'}}>
        <h3 class="mb-4 text-3xl font-extrabold text-gray-700 dark:text-white md:text-3xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Stay Ahead</span> </h3>
        <p>Stay Ahead is a powerful and intuitive task management platform designed to help you stay organized and productive. Easily create, track, and edit tasks while setting clear deadlines. With automated email reminders and a sleek user interface, Stay Ahead ensures you never miss a deadline.
             (Hover the images for more details)
        
        </p>
        <p>
        <b>Explore the platform:</b>{' '}
        <a
          href="https://stayahead.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Stay Ahead
        </a>
      </p>
      <p>
        <b>GitHub Repository:</b>{' '}
        <a
          href="https://github.com/Tarekjalali/stayAhead"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          https://github.com/Tarekjalali/stayAhead
        </a>
      </p>
        
        <h4>Key Technologies used</h4>
        <div style={{display :'flex' , gap :'120px'}}>
        <ul style={{listStyle :'disc' , marginLeft :'20px'}}>
            <li><b>Front End</b></li>
            <li>React</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>Flowbite</li>
        </ul>
        <ul style={{listStyle :'disc' , marginLeft :'20px'}}>
            <li><b>Back End</b></li>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Mongoose / MongoDB</li>
            <li>Nodemailer and node-cron for scheduling emails</li>
        </ul>
        </div>

        </div>
  )
}

export default StayAheadDescription
import React from 'react'

const GameRallyDescription = () => {
  return (
    <div style={{paddingLeft : '40px' , paddingRight : '40px', width :'790px'}}>
        <h3 class="mb-4 text-3xl font-extrabold text-gray-700 dark:text-white md:text-3xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">GameRally</span> </h3>
        <p>GameRally is an interactive platform designed to bring gamers together by organizing exciting gaming events, including tournaments and challenges. The platform allows users to engage with their community, participate in events, and stay updated with the latest gaming news.
            (Hover the images for more details)
        </p>
        <h4>Key Technologies used</h4>
        <div style={{display :'flex' , gap :'120px'}}>
        <ul style={{listStyle :'disc' , marginLeft :'20px'}}>
            <li><b>Front End</b></li>
            <li>React</li>
            <li>Redux</li>
            <li>RAWG API for fetching data</li>
            <li>Flowbite</li>
        </ul>
        <ul style={{listStyle :'disc' , marginLeft :'20px'}}>
            <li><b>Back End</b></li>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Mongoose / MongoDB</li>
            <li>RESTful APIs</li>
        </ul>
        </div>

        </div>
  )
}

export default GameRallyDescription
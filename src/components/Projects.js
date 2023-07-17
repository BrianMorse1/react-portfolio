import React from 'react';

const Projects= () => {
  return (
    <div id='project-gallery'>
      <h2>Projects Page</h2>
      <p>Below is a selection of projects that I've completed myself or contributed to. Please look at any that interest you. Projects that are deployed will be identified in their description. </p>
      
      <div className="card">
        <h3>Password Generator</h3>
       <a href="https://brianmorse1.github.io/brian-morse-password-generator1/"> <img className="card-img" src="../assets/password-img.jpg" alt="Image of password generator website including output area for passwords"></img></a> 
       <p>This is a password generator that will generate a random password based on user input. The password's length and types of characters are set by user input. Users can choose to include at least one of each of the following: lowercase letters, uppercase letters, numbers, and special characters. The deployed app can be found at: <a href="https://brianmorse1.github.io/brian-morse-password-generator1/"> https://brianmorse1.github.io/brian-morse-password-generator1/</a>. To view associated code, please see my github profile at:<a href="https://github.com/BrianMorse1/brian-morse-password-generator1">https://github.com/BrianMorse1/brian-morse-password-generator1</a>.</p>

    </div>

    <div className="card">
        <h3>National Parks Weather Forecast</h3>
       <a href="https://bootcamp-mo.github.io/National-Park-Search-Resource/results.html"> <img className="card-img" src="../assets/weather-img.jpg" alt="Image of National Parks Weath Forecast homepage showing search area"></img></a> 
       <p>This was a group project that used multiple API's to obtain information on National Parks by state and provide the current and upcoming weather. The app accepts user input to select the desired state then obtains the location of National Parks within that state from the National Parks API. The location is then submitted to OpenWeather API to obtain a forecast. The deployed app can be found at: <a href="https://bootcamp-mo.github.io/National-Park-Search-Resource/results.html"> https://bootcamp-mo.github.io/National-Park-Search-Resource/results.html</a>. To view associated code, please see the project's repo on github at:<a href=" https://github.com/bootcamp-Mo/National-Park-Source-Resouce"> https://github.com/bootcamp-Mo/National-Park-Source-Resouce</a>.</p>
    </div>

    <div className="card">
        <h3>README Generator</h3>
       <a href="https://github.com/BrianMorse1/brian-morse-node-readme/tree/main/Develop"> <img className="card-img" src="../assets/README-img.jpg" alt="Image of README generated with this app in IDE"></img></a> 
       <p>This app is designed to streamline README creation. It uses CLI to gather the necessary information for the README through prompts and then generates the file with appropriate information in the appropriate section including a badge for the type of license applicable to the project. This project runs locally and is not deployed. To view associated code, please see the project's repo on github at: <a href="https://github.com/BrianMorse1/brian-morse-node-readme/tree/main/Develop">https://github.com/BrianMorse1/brian-morse-node-readme/tree/main/Develop</a>.</p>
    </div>

    <div className="card">
        <h3>Information Management System</h3>
       <a href="https://github.com/BrianMorse1/brian-morse-content-management-system"> <img className="card-img" src="../assets/content-management-img.jpg" alt="Image of code from information management system in IDE"></img></a> 
       <p>This app allows information in a database to be accessed using Node.js and mysql2. It allows for CRUD operations to be performed on information contained in mysql tables. This project runs locally and is not deployed. To view associated code, please see the project's repo on github at:<a href='https://github.com/BrianMorse1/brian-morse-content-management-system'> https://github.com/BrianMorse1/brian-morse-content-management-system</a>.</p>
    </div>

       <div className="card">
        <h3>E-Commerce Routing</h3>
       <a href="https://github.com/BrianMorse1/ecomerce-back-end"> <img className="card-img" src="../assets/ecommerce-img.jpg" alt="Image of code from ecommerce routes in IDE"></img></a> 
       <p>This app was a student project that utilized starter code provided by the University of Oregon Coding Bootcamp. It allows for CRUD operations to be performed on information contained in mysql tables. While starter code was provided, I created all of the routing for this project. This project runs locally and is not deployed. To view associated code, please see the project's repo on github at:<a href='https://github.com/BrianMorse1/ecomerce-back-end'> https://github.com/BrianMorse1/ecomerce-back-end</a>.</p>
    </div>
    
    <div className="card">
        <h3>BrainSync</h3>
       <a href=" https://murmuring-thicket-05712.herokuapp.com/login"> <img className="card-img" src="../assets/brainsync-img.jpg" alt="Image of BrainSync login page"></img></a> 
       <p>This was a group project app that creates an environemt for students to study together. Utilizing mysql databases, users can login securely, create private rooms to study specific subjects, schedule events on a calendar and communicate with each other in real time. Future development for this project includes adding Dropbox functionality for file sharing. The deployed app can be found at: <a href="https://murmuring-thicket-05712.herokuapp.com/login">  https://murmuring-thicket-05712.herokuapp.com/login</a>. To view associated code, please see the project's repo on github at:<a href= "https://github.com/BrianMorse1/group-project-chat">  https://github.com/BrianMorse1/group-project-chat</a>.</p>
    </div>
    
</div>
  );
}

export default Projects;

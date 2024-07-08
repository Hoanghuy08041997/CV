import React from 'react';

const WorkExperience = () => {
  return (
    <div className="my-4 container">
      <h3 className="title-in mb-4">Work Experience</h3>

      <div className="timeline-item mb-4">
        <div className="timeline-content">
          <h4>Programming software, Software engineering with NodeJS and Discord.js on Discord community.</h4>
          <p>March 2020 to August 2022</p>
          <ul>
            <li>Sold more than 50 bots in Discord community.</li>
            <li>4.5 stars from buyers.</li>
            <li>Modifiers and updates for discord.js module for the community.</li>
          </ul>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h4>Freelancer for coding, support Project</h4>
          <p>From 2022 to now</p>
          <ul>
            <li>Coding web.</li>
            <li>Coding back-end.</li>
            <li>Coding SQL.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

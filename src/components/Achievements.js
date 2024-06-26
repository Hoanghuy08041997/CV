import React from 'react';

const Achievements = () => {
  const achievements = [
    { id: 1, name: 'Discord Bot Development', description: 'Developed and sold over 50 bots in the Discord community.' },
    { id: 2, name: 'Discord Community', description: 'Active participant in community activities related to JavaScript and Discord.js.' },
    { id: 3, name: 'IT Competitions', description: 'Achieved 3rd place in the best student exam for Information Technology in Ha Tinh Province.' },
  ];

  return (
    <div className="achievements my-5 title">
      <h3 className="text-left title-in">Achievements</h3>
      <div className="row">
        {achievements.map(achievement => (
          <div className="col-md-4" key={achievement.id}>
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-">
                  <h4 className="card-id">{achievement.id}</h4>
                </div>                
                <h5 className="card-title">{achievement.name}</h5>
                <p className="card-text">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

import React from 'react';

const Project = () => {
  const projects = [
    { id: 1, name: 'Sale Course', description: 'Sell online course for Everyone to study', link: 'https://github.com/Hoanghuy08041997/SellCourse'},
    { id: 2, name: 'Food Sale And Delivery Platform', description: 'Sell Food for Customer. Create a platform for Merchant. More work for Unemployee people. (This project is private because contains secret-key.)', link: 'https://github.com/Hoanghuy08041997/FoodAndDeliveryPlatform/'},
    { id: 3, name: 'Manage Library Application with JavaSwing', description: 'An application manage Library.', link: 'https://github.com/Hoanghuy08041997/AppLibrary'},
    { id: 4, name: 'Manage Library Application base in Java', description: 'An application manage Library.', link: 'https://github.com/Hoanghuy08041997/javaLibrary'},
    { id: 5, name: 'Application to compute Number(Number Converter) base in C#', description: "Let's compute a number!!!", link: 'https://github.com/Hoanghuy08041997/NumberConverter'},
    { id: 6, name: 'In the future', description: "Let's create more Apps!!!", link: ''},
  ];
  
  return (
    <div className="projects my-5 title">
      <h3 className="text-left title-in">Projects</h3>
      <div className="row">
        {projects.map(project => (
          <div className="col-md-4 d-flex align-items-stretch" key={project.id}>
            <div className="card mb-4 w-100">
              <div className="card-body d-flex flex-column">
                <div className="card-">
                  <h4 className="card-id">{project.id}</h4>
                </div>
                {project.link ? (
                  <a title="Github" href={project.link} target="_blank" rel="noopener noreferrer">
                    <h5 className="card-title">{project.name}</h5>
                  </a>
                ) : (
                  <h5 className="card-title" title="Coming soon">{project.name}</h5>
                )}
                <p className="card-text flex-grow-1">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

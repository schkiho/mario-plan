import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            blanditiis corrupti harum aut quaerat. Laborum optio rerum maiores
            adipisci, necessitatibus nulla, alias tenetur maxime dolorum,
            ratione fugiat quas beatae! Iste?
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Daniel Schmidt</div>
          <div>24th February, 3pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

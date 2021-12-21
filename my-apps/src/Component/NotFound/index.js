import React  from 'react';
import './index.css'

const NotFound = () =>(
    <div className="not-found-component">
      <img
        src="https://res.cloudinary.com/dgahohki4/image/upload/v1636698000/Group_7484_d8dbn4.png"
        alt="NotFound"
        className="image"
      />
      <h1 className="not-found-heading">PAGE NOT FOUND</h1>
      <p className="not-found-description">
        we’re sorry, the page you requested could not be found 
      </p>

    </div>
)
export default NotFound
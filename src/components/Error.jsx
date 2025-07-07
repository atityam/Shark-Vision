import React from "react";
import { AiOutlineWarning } from "react-icons/ai"; 

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-icon">
          <AiOutlineWarning className="icon-react" />
        </div>
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-description">
          We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
        </p>
        <a href="/" className="notfound-button">Go Back To Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;

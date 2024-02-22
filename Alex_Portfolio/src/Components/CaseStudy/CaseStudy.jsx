import React from 'react';
import './CaseStudy.css'; // Your custom CSS file for styling

const CaseStudy = ({ title, content }) => {
  return (
    <div className="case-study-template">
      <h2 className="case-study-title">{title}</h2>
      <div className="case-study-timeline">
        <h3>Timeline</h3>
        <ul>
          <li>
            <span className="date">January 2023 - March 2023</span>
            <p>Research and planning phase</p>
          </li>
          <li>
            <span className="date">April 2023 - June 2023</span>
            <p>Design and prototyping</p>
          </li>
          <li>
            <span className="date">July 2023 - September 2023</span>
            <p>Development and testing</p>
          </li>
          <li>
            <span className="date">October 2023 - December 2023</span>
            <p>Deployment and final adjustments</p>
          </li>
        </ul>
      </div>
      <div className="case-study-content">
        <h3>Work Allocation</h3>
        <ul>
          <li>
            <strong>UI Design:</strong> John Doe
          </li>
          <li>
            <strong>Frontend Development:</strong> Jane Smith
          </li>
          <li>
            <strong>Backend Development:</strong> Michael Johnson
          </li>
          <li>
            <strong>QA Testing:</strong> Emily Williams
          </li>
        </ul>
        <h3>Description</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CaseStudy;

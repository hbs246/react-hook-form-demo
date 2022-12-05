import React from "react";

export const Card = ({ children, cardText, cardTitle }) => {
  return (
    <div className="card mt-4 col-12">
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        {cardText && <p className="card-text">{cardTitle}</p>}
        {children}
      </div>
    </div>
  );
};

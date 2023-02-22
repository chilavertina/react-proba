import React from "react"; //importujemo react kako bi program razumeo jsx

const Card = () => {
  return (
    <div>
      <img alt="robots" src="https://robohash.org/test?200x200" />
      <div>
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;

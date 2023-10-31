import React from "react";

const MyClass = ({ course }) => {
  return (
    <div>
      <div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F9UC9DY-vIU?si=2V3IKmgh_ZbkiW1Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <ul>
          <li>Class 1</li>
          <li>Class 2</li>
          <li>Class 3</li>
          <li>Class 1</li>
          <li>Class 4</li>
        </ul>
      </div>
    </div>
  );
};

export default MyClass;

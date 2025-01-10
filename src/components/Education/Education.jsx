import React from "react";
import "./style_edu.css"

export default function Education({ content }) {
  return (
    <section className="cv-education">
      <p>Education</p>
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            {item.degree || item.certificate} <hr />
            {item.duration || item.details} <hr />
            {item.institution || item.organization}
          </li>
        ))}
      </ul>
    </section>
  );
}

import React from "react";
import "./style_skil.css"

export default function Skills({ content }) {
  return (
    <section className="cv-skills">
      <p>Skills</p>
      <ul>
        <u>Programming Languages</u>
        {content["Programming Languages"].map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        <u>Frameworks & Libraries</u>
        {content["Frameworks & Libraries"].map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        <u>Tools & Platforms</u>
        {content["Tools & Platforms"].map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </section>
  );
}

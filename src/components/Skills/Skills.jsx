import React from "react";
import "./style_skil.css"

export default function Skills({ content }) {
  return (
    <section className="cv-skills">
      <p>Skills</p>
      <ul>
        <i>Programming Languages</i>
        {content["Programming Languages"].map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        <i>Frameworks & Libraries</i>
        {content["Frameworks & Libraries"].map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        <i>Tools & Platforms</i>
        {content["Tools & Platforms"].map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </section>
  );
}

import React from "react";

export default function ProfessionalSummary({ content }) {
  return (
    <section className="cv-summary">
      <p>Professional Summary</p>
      <span>{content}</span>
    </section>
  );
}

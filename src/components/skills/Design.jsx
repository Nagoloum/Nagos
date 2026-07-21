import React from 'react';
const skills = [
  'Git / GitHub', 'Docker', 'Vercel', 'Linux (bases)', 'Postman', 'Figma', 'Canva',
  'VS Code', 'Android Studio', 'Claude Code (Anthropic)', 'API Claude / Gemini',
  'Unity (C#)', 'Jira / Notion', 'Agile / Scrum',
];
const Design = () => (
  <div className="skills__content reveal-scale d3">
    <h3 className="skills__title"><i className="uil uil-wrench skills__title-icon" />Outils, DevOps & IA</h3>
    <div className="skills__tags">
      {skills.map(name => <span key={name} className="skills__tag">{name}</span>)}
    </div>
  </div>
);
export default Design;

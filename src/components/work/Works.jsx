import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import Workitems from './Workitems';

const Works = () => {
  const [item, setItem]       = useState({ name: 'Tous' });
  const [projects, setProjects] = useState([]);
  const [active, setActive]   = useState(0);

  useEffect(() => {
    setProjects(item.name === 'Tous' ? projectsData : projectsData.filter(p => p.category === item.name));
  }, [item]);

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span key={index}
            onClick={e => { setItem({ name: e.target.textContent }); setActive(index); }}
            className={`${active === index ? 'active-work' : ''} work__item`}
          >{navItem.name}</span>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map(project => <Workitems item={project} key={project.id} />)}
      </div>
    </div>
  );
};
export default Works;

import React, { useMemo, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import Workitems from './Workitems';

const Works = () => {
  const [active, setActive] = useState('Tous');

  const projects = useMemo(
    () => (active === 'Tous' ? projectsData : projectsData.filter(p => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="work__filters" role="group" aria-label="Filtrer les projets">
        {projectsNav.map(({ name }) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === name}
            onClick={() => setActive(name)}
            className={`${active === name ? 'active-work' : ''} work__item`}
          >{name}</button>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map(project => <Workitems item={project} key={project.id} />)}
      </div>
    </div>
  );
};
export default Works;

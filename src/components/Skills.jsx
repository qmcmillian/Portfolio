import React from 'react'
import SectionTile from './SectionTile';
import SkillsCard from './SkillsCard';
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='py-20 align-element' id="skills">
      <SectionTile text='Tech Stack' />
      <div className='py-16 grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
        {skills.map((skill, index) => (
          <SkillsCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
import React from 'react'
import SectionTile from './SectionTile';
import aboutSvg from '../components/main/icons/product-teardown.svg';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='About' className='w-full h-64' />
        <article>
          <SectionTile text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I’m a versatile Software Engineer with a background in JavaScript (ES5/ES6+), ReactJS, React Native, Node.js, and AWS. Recently, I completed the Post Graduate Program in Artificial Intelligence & Machine Learning: Business Applications at the University of Texas, where I gained hands-on experience with AI frameworks like TensorFlow, PyTorch, and scikit-learn.

            I’m passionate about creating innovative solutions, whether it’s refining user interfaces for seamless interactions or tackling complex backend challenges. My growing expertise in AI and ML is driving me to explore new ways to build intelligent systems and unlock data-driven insights.

            When I’m not coding, I enjoy working out, traveling, and spending time with family. I thrive on challenges and am always eager to learn something new.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About;
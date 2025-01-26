import React from 'react';
import SectionTile from './SectionTile';
import Form from './Form';
import working from '../components/main/icons/working.svg';

const Contact = () => {
  return (
    <section className='bg-violet-200 py-12' id='contact'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 px-8'>
        <article className="flex justify-center">
          <Form />
        </article>
        <article className="flex flex-col items-center text-center md:text-left">
          <SectionTile text='Contact Me' />
          <img src={working} alt='About' className='w-full max-w-md h-auto' />
        </article>
      </div>
    </section>
  );
}

export default Contact;
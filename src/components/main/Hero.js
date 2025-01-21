import heroImg from './icons/web-dev.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-violet-200 py-24'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-7xl font-bold tracking-wider'>
                        I'm Quentin
                    </h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        Full-Stack Developer
                    </p>
                    <TypeAnimation
                        sequence={[
                            'Turning Ideas Into Interactive Reality', 1000,
                        ]}
                        wrapper="p"
                        speed={50}
                        style={
                            {
                                marginTop: '0.5rem',
                                fontSize: '1.125rem',
                                lineHeight: '1.75rem',
                                color: '#334155',
                                letterSpacing: '0.025em'

                            }
                        }
                        repeat={Infinity}
                    />
                    <div className='flex gap-x-4 mt-4'>
                        <a href='https://github.com/qmcmillian' target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href='https://www.linkedin.com/in/qmcmillian/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href='https://x.com/TechQue4' target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                    </div>
                </article>
                <article>
                    <img src={heroImg} alt='Hero' className='h-80 lg:h-96' />
                </article>
            </div>
        </div>
    )
}

export default Hero;

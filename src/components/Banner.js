import React from 'react';

//imagens

import Image from '../assets/eu.png'

//icons
import { FaGithub, FaBehance, FaInstagram } from 'react-icons/fa'

//Animation
import { TypeAnimation } from 'react-type-animation'
//Motion
import { motion } from 'framer-motion'
//variantes
import { fadeIn } from '../variants'


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>

        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              FELIPE <span>NENEU</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-2 text-white'> Eu sou um</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Social Medias',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity} />

            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Bem vindos a minha pagina.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button href='https://w.app/vTWJ1z' className='btn btn-lg' >Contate-me</button>
              <a href='https://w.app/vTWJ1z' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaBehance />
              </a>
              <a href='#'>
                <FaInstagram />
              </a>
            </motion.div>

          </div>

          {/* img */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden" whileInView={'show'}

            className='hidden lg:flex flex-1 w-[482px] h-[516px] fill-none mx-auto'
          >
            <img src={Image} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

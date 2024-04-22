import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion'
//variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0 h-screen'>
          {/** Img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-screen bg-top'>
          </motion.div>
          {/** text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 2 years of experience. </h3>
            <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan dignissim consectetur. Ut imperdiet non eros sodales consectetur.
              Aliquam iaculis molestie lacinia. In quis convallis lorem. Donec at tristique quam, nec tincidunt eros. Suspendisse eu elit ac tellus tincidunt bibendum.
              Vestibulum posuere, est in euismod facilisis, metus ligula congue ligula, id auctor enim enim at velit. Maecenas eu consectetur dui. Aenean ac faucibus risus.
              Mauris felis dolor, suscipit eget velit sed, porttitor dapibus ipsum.</p>
            {/** stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]' >Years of <br />
                  Experience</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  K+
                </div>
                <div className='font-primary text-sm tracking-[2px]' >Projects <br />
                  Completados</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  K+
                </div>
                <div className='font-primary text-sm tracking-[2px]' >Clientes <br />
                  Satisfeitos</div>
              </div>
            </div>
            <div>
              <button className='btn btn-lg'>Entre em Contato</button>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
};

export default About;

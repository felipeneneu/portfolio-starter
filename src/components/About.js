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
            className='flex-1 bg-about bg-contain bg-no-repeat lg:h-[640px] h-auto mix-blend-screen bg-top'>
          </motion.div>
          {/** text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mim</h2>
            <h3 className='h3 mb-4'>Sou Desenvolvedor, Designer e Social Media. Freelancer com mais de 2 anos de experiência. </h3>
            <p className='mb-6'>Felipe Neneu é designer, developer e especialista em marketing digital, e cursa Analise e desenvolvimento de sistemas.
              Trabalha com redes sociais, produção de conteúdo, mídia paga e performance desde 2014,
              onde começou sua carreira na área de criação de uma agência.
              Hoje é estou estudando programação para ser o melhor marketeiro digital.</p>
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

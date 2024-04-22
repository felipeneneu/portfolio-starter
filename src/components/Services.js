import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs'
//motion
import { motion } from 'framer-motion'
//variant
import { fadeIn } from '../variants'

//services data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Interfaces, bonitas e inovadoras, baseadas no que o mercado pede hoje. Figma, Photoshop e Ilustrator',
    link: 'Saiba Mais',
  }, {
    name: 'Social Medias',
    description: 'Arts para redes sociais, tanto motion quanto artes de post',
    link: 'Saiba Mais',
  }, {
    name: 'Landing Pages',
    description: 'Paginas responsiva, que geram a captação da venda',
    link: 'Saiba Mais',
  }, {
    name: 'Identidade Visual',
    description: 'Identidade visual impactante — Design de marcas e identidade visual para você deixar a sua marca. Projetos personalizados. Sua marca não pode ficar esquecida.',
    link: 'Saiba Mais',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:p'>
          {/** Text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>O que eu faço:</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Faço Designer para social media, ui/ux design, Landing Pages </h3>
          </motion.div>
          <button></button>

          {/** services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/** services */}
            <div>
              {services.map((service, index) => {
                //destructor 
                const { name, description, link } = service

                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default Services;

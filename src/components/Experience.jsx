/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { staggerContainer, textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={<div><img src={experience.icon} alt={experience.company_name} className="p-3"/></div>}
    >
      <div className="group">
        <div>
          <h3>{experience.title}</h3>
          <p className="text-gray-500">{experience.company_name}</p>
        </div>
        <ul className="mt-5 overflow-y-hidden space-y-2 transition-all duration-500 h-full group-hover:max-h-96 group-active:max-h-96 max-h-0">
          {experience.points.map((point, index) => (
            <li
              key={`${experience.title}-point-${index}`}
              className="text-[14px] text-gray-500"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-7xl p-6 mx-auto py-20"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}

export default Experience
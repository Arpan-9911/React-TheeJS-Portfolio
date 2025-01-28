/* eslint-disable react/no-unescaped-entities */
import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { staggerContainer, textVariant } from "../utils/motion"
import { motion } from "framer-motion"
import { styles } from "../styles"

const Tech = () => {
  return (
    <motion.section
      id="tech"
      className="max-w-7xl p-6 mx-auto py-20"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Technologies I've Worked With</p>
        <h2 className={styles.sectionHeadText}>Skills and Technologies.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap justify-center sm:gap-10 gap-4">
        {technologies.map((technology) => (
          <div className="sm:w-28 sm:h-28 relative w-14 h-14" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Tech
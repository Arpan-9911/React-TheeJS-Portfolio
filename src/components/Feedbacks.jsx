/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { Tilt } from "react-tilt"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <Tilt options={{scale: 1.01}}>
      <motion.div
        variants={fadeIn("right", "spring", 0.25*index, 0.75)}
        className="w-full bg-gradient-to-r from-purple-900 to-black/20 p-5 h-88 overflow-hidden rounded-2xl shadow-2xl"
      >
        <p className="text-7xl leading-auto">"</p>
        <div>
          <p>{testimonial}</p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p><span className="text-blue-300">@</span> {name}</p>
              <p className="text-[12px] text-gray-300">{designation} of {company}</p>
            </div>
            <img src={image} alt={`feedback by ${name}`} className="w-10 h-10 rounded-full object-cover" />
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Feedbacks = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <motion.section
      id="feedbacks"
      className="max-w-7xl p-6 mx-auto sm:p-20"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    > 
      <div className="bg-gradient-to-r rounded-2xl from-purple-900/20 to-purple-950/50 p-10">
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>What Others Say</p>
          <h2 className={styles.sectionHeadText}>Testimonals.</h2>
        </motion.div>
        <div className="sm:mt-20 mt-5">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name}  className="w-92 sm:p-4">
                <FeedbackCard index={index} {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  )
}

export default Feedbacks
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { slideIn, staggerContainer } from "../utils/motion"
import { close } from "../assets"

// templateID = template_7vr9ypp
// ServiceID = service_tbmf5d7
// Public Key = dKo9VH6zeG1fYZeMa

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_tbmf5d7',
      'template_7vr9ypp',
      {
        from_name: form.name,
        to_name: 'Arpan',
        from_email: form.email,
        to_email: 'arpanks1263@gmail.com',
        message: form.message,
      },
      'dKo9VH6zeG1fYZeMa'
    ).then(() => {
      setLoading(false);
      setMessage('Email sent successfully!');
      setShowMessage(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false);
      console.error('Failed to send email: ', error);
      setMessage('Failed to send email. Please try again later.');
      setShowMessage(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    })
  };

  return (
    <>
      {showMessage && (
        <div className="fixed flex justify-between items-center gap-10 top-24 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white p-4 rounded shadow-lg sm:min-w-96 w-[90%] z-50">
          <p>{message}</p>
          <img
            src={close}
            alt="close"
            className="cursor-pointer"
            onClick={() => {
              setShowMessage(false);
              setMessage("");
            }}
          />
        </div>
      )}
      <motion.section
        id="contact"
        className="max-w-7xl p-6 mx-auto sm:py-20 flex sm:flex-row flex-col-reverse sm:gap-10 overflow-hidden"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-1 bg-black/30 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="outline-none border-none bg-gray-900 py-2 px-4 rounded-lg"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="outline-none border-none bg-gray-900 py-2 px-4 rounded-lg"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Message</span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="outline-none border-none bg-gray-900 py-2 px-4 rounded-lg"
              >
              </textarea>
            </label>
            <button
              type="submit"
              className="bg-gray-900 py-3 px-8 outline-none w-fit font-bold shadow-md rounded-lg"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="sm:flex-1 xl:h-auto md:h-[550px] h-[250px]"
        >
          <EarthCanvas />
        </motion.div>
      </motion.section>
    </>
  )
}

export default Contact
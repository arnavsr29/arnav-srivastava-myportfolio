import { motion } from "framer-motion";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant(0)} className="text-center">
        <p className="sectionSubText">My Achievements</p>
        <h2 className="sectionHeadText">Certificates.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.6)}
            whileHover={{ scale: 1.03 }}
            className="bg-tertiary p-5 rounded-2xl w-[300px] shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img
              src={certificate.image} alt={certificate.name}
              className="w-full h-[160px] object-cover rounded-xl"
            />

            <h3 className="text-white font-bold text-[18px] mt-4">
              {certificate.name}
            </h3>

            <p className="text-secondary text-[14px]">
              {certificate.issuer}
            </p>

            <p className="text-white-400 text-[14px] mt-2">
              {certificate.description}
            </p>

            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 text-[12px] inline-block mt-2"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
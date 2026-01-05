import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X } from "lucide-react";

import certHackerrank from "@/assets/cert-hackerrank.jpg";
import certSql from "@/assets/cert-sql.jpg";
import certEcpc from "@/assets/cert-ecpc.jpg";

const certificates = [
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2023",
    description: "Certified in problem solving and algorithms on HackerRank platform.",
    image: certHackerrank,
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2023",
    description: "Certified in SQL fundamentals including queries, joins, and database operations.",
    image: certSql,
  },
  {
    title: "ECPC Contestant",
    issuer: "Egyptian Collegiate Programming Contest",
    date: "2023",
    description: "Participated in ECPC competitive programming contest, demonstrating problem-solving and algorithmic skills.",
    image: certEcpc,
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="certificates" className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Certificates
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and achievements
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-1">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {cert.description}
                    </p>
                    <p className="text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view full certificate
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default Certificates;

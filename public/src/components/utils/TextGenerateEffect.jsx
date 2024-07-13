import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import "../styles/Home.css";
import { Container } from '@mui/material';


function TextGenerateEffect({ words, wordsHighlighted, className }) {

  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {opacity: 1},
      {duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

 const renderWords = () => {
  return (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className={` ${wordsHighlighted.includes(word) ? "purple" : "nonPurple"} opacity-0 `}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  )
 }

  return (
    <div className="textEffect" style={{ fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem' }}>
      <Container>
        <div style={{ color: 'black', lineHeight: '3.8rem', letterSpacing: '0.01rem' }}>
          {renderWords()}
        </div>
      </Container>
    </div>
  );
}

export default TextGenerateEffect;
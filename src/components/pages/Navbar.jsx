import { Box, Grid, Link, Typography, Toolbar, AppBar, IconButton, Container } from '@mui/material';
import Logo from '../assets/Logo.png';
import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';

function Navbar() {
    const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = !current - !scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (

    <section id="navbar">
        <AnimatePresence  mode="wait">
        {visible && (
        <motion.div
            initial={{ 
                opacity: 1, 
                y: -100 
            }}
            animate={{ 
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="navbar"
            style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            {/* <AppBar position="static" color="transparent" style={{ boxShadow:'none' }}>
                 */}
                {/* <div> */}
                    <Toolbar className="container">
                        <IconButton className="logo" edge="start" size="small" color="inherit" aria-label="menu">
                            <Link href="/">
                                <img src={Logo} alt="Logo" className="logo" />
                            </Link>
                        </IconButton>

                        <Typography id="div" variant="h6" color="white" component={motion.a} href="/" whileHover={{ scale: 1.1 }}>
                            <span className=" text-sm !cursor-pointer">Home</span>
                        </Typography>
                    
                        <Typography id="div" variant="h6" component={motion.a} whileHover={{ scale: 1.1 }}>
                          <span className=" text-sm !cursor-pointer">
                            <Link href="https://tuka-alsharief.notion.site/Tuka-s-Work-1684d81354574305bc8d8b6ff5855d3e" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit', '&:visited': {color: 'inherit',},}}>
                              Work
                            </Link>
                          </span>
                        </Typography>

                        <Typography id="div" variant="h6" component={motion.a} whileHover={{ scale: 1.1 }}>
                          <span className=" text-sm !cursor-pointer">
                            <Link href="https://tuka-alsharief.notion.site/Testimonials-234c25f44651478fb7a0291183d65d38" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit', '&:visited': {color: 'inherit',},}}>
                              Testimonials
                            </Link>
                          </span>
                        </Typography>
                    
                        <Typography id="div" variant="h6" component={motion.a} href="#about" whileHover={{ scale: 1.1 }}>
                            <span className=" text-sm !cursor-pointer">About</span>
                        </Typography>
                </Toolbar>
            {/* </AppBar> */}
            {/* </div> */}
          </motion.div>)}
        </AnimatePresence>
    </section>
  );
}

export default Navbar;
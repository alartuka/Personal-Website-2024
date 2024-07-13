import React, { useEffect, useRef } from 'react';
import { init } from "ityped";
import { FaLocationArrow } from "react-icons/fa6";
import '../styles/Home.css';
import { motion } from 'framer-motion';
import { Container, Typography, Link, Grid, Box, Button, Card, CardMedia, CardContent } from '@mui/material';
import BlueMoon from "../assets/BlueMoon.png";
import TextGenerateEffect from "../utils/TextGenerateEffect";
import skills from "../assets/Data/skills";

function Home() {
    const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      loop: true,
      showCursor: false,
      backSpeed: 150,
      startDelay: 200,
      backDelay: 2000,
      strings: ["Student", "Developer", "Wonderer"],
    })
  }, []);

  const path = "M0,100 Q50,50 100,100 Q150,150 200,100";

  return (
    <>
      <section id="/">
        <Container className="moon">
          <motion.img
            className="moon"
            src={BlueMoon}
            alt="moon"
            animate={{ path: path }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </Container>

        <Box className="hero">
          <Container className="container">
            <Container className="header">

              <TextGenerateEffect
                words="A Sense of Wonder in a World Gone Mad"
                wordsHighlighted={["Sense", "Wonder", "World"]}
                className="textEffect"
              />

              <Container className="intro">
                <Typography variant="h4">
                  Hi! I&apos;m Tuka, a 
                </Typography>

                <Container className="attributes" >
                  <Typography ref={textRef} variant="h3"/>
                </Container>
              </Container>

              <Box mt={36} mb={5} display="flex" justifyContent="center">
                <Button className="button" href="#skills" variant="outlined" color="secondary">
                  Show my work <FaLocationArrow />
                </Button>
              </Box>
            </Container>
          </Container>
        </Box>
      </section>

      <section id="skills">
        <Container className="skills">
          <Typography variant="h2">
            Skills
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              {/* <Grid item xs={4}> */}
                {skills.map(({ id, name, desc, img }) => {
                  return (
                    <Grid item key={id} xs={4}>
                        <Card className="card">
                          <CardMedia className="cardimg" image={img} title={name} />
                          <CardContent>
                            <Typography  variant="h5">
                              {name}
                            </Typography>
                            <Typography variant="p">
                              {desc}
                            </Typography>
                          </CardContent>
                        </Card> 
                        </Grid>
                  )
                })}
              {/* </Grid> */}
            </Grid>
          </Box>
          <Container>
          <Link href="https://tuka-alsharief.notion.site/Tuka-s-Work-1684d81354574305bc8d8b6ff5855d3e" target="_blank" rel="noopener noreferrer">
            <Button className="button" variant="outlined" color="secondary">
                Check out my portfolio and other projects <FaLocationArrow />
            </Button>
          </Link>
          </Container>
        </Container>
      </section>

      <section id="about">
        <Container className="about">
          <h1>ABOUT ME</h1>
          <div>
            ....
          </div>
        </Container>
      </section>
      </>
  );
}

export default Home;
import React, { useEffect, useState } from "react";
import "../styles/Footer.css";
import Logo from "../assets/Logo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip, Zoom, Link, Box, Grid } from "@mui/material";


function Footer() {
  // const [visible, setVisible] = useState(false);

  // const checkScroll = () => {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', checkScroll);
  //   return () => window.removeEventListener('scroll', checkScroll);
  // }, []);

  return (
    <div>
      {/* {visible &&  */}
        <Box className="footer">
          <Grid container className="footer_container" spacing={2}>
            <Grid item xs={12} className="footer__logo">
              <Link to="/"><img src={Logo} alt='Logo' /></Link>
              <p>2024 &copy; </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="footer__social">
              <Tooltip TransitionComponent={Zoom} title="Connect with me on Linkedin!" arrow>
                  <Link href="http://www.linkedin.com/in/tukaalarbi"
                  target="_blank" >
                  <LinkedInIcon />
                  </Link>
              </Tooltip>

              <Tooltip TransitionComponent={Zoom} title="Check out my GitHub!" arrow>
                  <Link href="http://www.github.com/alartuka"
                  target="_blank" >
                  <GitHubIcon />
                  </Link>
              </Tooltip>

            </Grid>
          </Grid>
        </Box>
      {/* }; */}
    </div>
  );
};

export default Footer;
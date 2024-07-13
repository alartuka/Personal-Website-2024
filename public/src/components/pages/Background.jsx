import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";

import "../styles/Background.css";

function Background() {

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadAll(engine);
        await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(
      () => ({
        autoPlay: true,
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        background: {
          color: {
            value: "#000"
        },
        opacity: 0,  
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 500,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 250,
            enable: false, // ==== DISABLED ====
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: true,
            speed: { min: 0, max: 0.15 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 450,
          },
          opacity: {
            value: { min: 0.5, max: 1.5 },
          },
          shape: {
            type: "star",
          },
          size: {
            value: { min: 0.1, max: 3 },
            anim: {
                enable: true,
                speed: 0.1
            }
          },
        },
        detectRetina: true,
      }),
      [],
    );
  
    if (init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      );
    }

  return null;
}

export default Background;

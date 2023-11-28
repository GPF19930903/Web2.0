import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return (
     <div style={{overflowX:'hidden'}}>
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.5,
          },
          move: {
            direction: "right",
            speed:0,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 10,
              opacity_min: 0.5,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
            />
        </div>
  );
}

export default Particle;

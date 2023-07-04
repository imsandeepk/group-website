import React from 'react';
import { NavLink } from 'react-router-dom';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
export default function Header() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);


  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        height: '30vh',
        backgroundImage: "url('/banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        
      }}
    >
      <div style={{ position: 'relative' }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 400,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#800000',
              },
              links: {
                color: '#FFFF00',
                distance: 150,
                enable: true,
                opacity: 0.9,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 100,
              },
              opacity: {
                value: 0.9,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      
      <div className="container-fluid h-100 d-flex flex-column justify-content-end">
      <h1 className="text-center fw-bolder fs-1" style={{ color: '#FFF700', fontFamily: "Pacifico",textShadow: '2px 2px 4px #000000' }}>
          Digital Chemistry Group @Birmingham
        </h1>
        <div className="navbar-nav justify-content-center text-white" style={{ color: '#FFD800',fontFamily:"Lobster" }}>
          <NavLink className="nav-link mx-3 text-white" exact to="/" activeClassName="active-link">
            Home
          </NavLink>
          <a
            className="nav-link mx-4 text-white"
            href="https://scholar.google.co.uk/citations?hl=en&user=dpNRB8sAAAAJ"
          >
            Publications
          </a>
          <NavLink className="nav-link mx-4 text-white" to="/team" activeClassName="active-link">
            Group
          </NavLink>
          <NavLink className="nav-link mx-4 text-white" to="/contact" activeClassName="active-link">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

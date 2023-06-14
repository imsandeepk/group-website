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
        height: '35vh',
        backgroundImage: "url('/back.png')",
        backgroundAttachment: 'fixed',
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
                value: '#e3f2fd',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.1,
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
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: 'square',
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
      <h1 className="text-center fw-bolder fs-1" style={{ color: '#ffffff' }}>
          PROFESSOR LINJIANG CHEN
        </h1>
        <div className="navbar-nav justify-content-center text-white" style={{ color: '#FFD800' }}>
          <NavLink className="nav-link mx-3 text-white" exact to="/" activeClassName="active-link">
            Home
          </NavLink>
          <NavLink className="nav-link mx-4 text-white" to="/about" activeClassName="active-link">
            Linjiang Chen
          </NavLink>
          <a
            className="nav-link mx-4 text-white"
            href="https://scholar.google.co.uk/citations?user=ZprWaMkAAAAJ&hl=en"
          >
            Publications
          </a>
          <NavLink className="nav-link mx-4 text-white" to="/CV" activeClassName="active-link">
            CV
          </NavLink>
          <NavLink className="nav-link mx-4 text-white" to="/team" activeClassName="active-link">
            Group
          </NavLink>
          <NavLink className="nav-link mx-4 text-white" to="/contact" activeClassName="active-link">
            Contact US
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

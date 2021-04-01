import React from 'react';
import Particles from 'react-particles-js';

const ParticlesStyle = () => {

    return (
        
        <Particles
        params={{
            "particles": {
                "number": {
                  "value": 100,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 10,
                    "height": 10
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 300,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "bottom",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 0.5
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 1
                  },
                  "repulse": {
                    "distance": 300,
                    "duration": 0.8
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 3
                  }
                }
              },
              "retina_detect": true
        }} />
    
    );
};

export default ParticlesStyle;
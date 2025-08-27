tsParticles.load("tsparticles", {
  background: {
    color: { value: "#000011" } // arka plan rengi
  },
  particles: {
    number: {
      value: 150,
      density: { enable: true, area: 800 }
    },
    color: { value: "#ffffff" }, // beyaz yıldızlar
    shape: { type: "circle" },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: 2,
      random: true
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: true
    }
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false }
    }
  }
});

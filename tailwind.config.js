module.exports = {
  theme: {
    boxShadow: {
      default: "2px 2px 0 0 rgba(0, 0, 0, .05)",
      glow: "0 0 20px 0 rgba(0, 0, 0, 0.4)",
      "inner-glow": "inset 0 0 20px 0 rgba(0, 0, 0, 0.4)"
    },
    fontFamily: {
      base: ["Inter", "sans-serif"],
      modern: ["Inter", "sans-serif"],
      "modern-secondary": ["Inter", "sans-serif"],
      classic: ["Libre Baskerville", "sans-serif"],
      "classic-secondary": ["Lora", "sans-serif"],
      futuristic: ["Poppins", "sans-serif"],
      "futuristic-secondary": ["Montserrat", "sans-serif"],
      averta: ["Averta-Black", "normal"]
    },
    extend: {
      spacing: {
        one: "1px",
        two: "2px",
        three: "3px",
        six: "6px"
      },
      zIndex: {
        5: "5"
      },
      padding: {
        7: "1.75rem",
        9: "2.25rem",
        13: "3.25rem",
        14: '4rem',
      },
      lineHeight: {
        small: "1.5",
        medium: "1.38",
        large: "1.33"
      },
      height: {
        12.5: "3.125rem",
        14: "3.5rem",
        18: '4.5rem',
        25: "25vh",
        30: "30rem",
        36: '9rem',
        50: "50vh",
        60: "15rem",
        72: "20rem",
        75: "75vh",
        100: "100vh",
        66: "264px",
        69: "273px"
      },
      borderRadius: {
        xl: ".75rem"
      },
      fontSize: {
        '2.5xl': '1.75rem',
        "3.5xl": "2rem",
        '12': '3rem',
        lg: "51px",
        "7xl": "70px",
        '16': '4rem',
      },
      width: {
        "max-gallery-width": "720px",
        20: "5rem",
        22: "5.5rem",
        141: "564px",
        36: "9rem",
        20: "20rem",
        30: "120px",
        77: "304px",
        78: '19.5rem',
        152: "608px",
        auto: "auto",
        p50: '50%',
        75: "300px"
      },
      maxWidth: {
        50: "50%",
        69: '17.25rem',
        72: '20rem',
        78: '19.5rem',
        90: '22.5rem',
        100: '25rem',
        104: '26rem',
        112: '28rem',
        180: '45rem',
      },
      minWidth: {
        24: "6rem"
      },
      inset: {
        1: "1rem"
      },
      colors: {
        gray: {
          "100": "#F8F8F8",
          "200": "#F5F2EF",
          "300": "#EFEFEF",
          "400": "#D8D8D8",
          "500": "#979797",
          "600": "#545454",
          "700": "#938d87",
          "800": "#bdb9b5"
        },
        indigo: {
          "100": "#ebf4ff",
          "300": "#a3bffa",
          "400": "#9297CB",
          "500": "#9297CB",
          "600": "#9297CB",
          "700": "#6B6E94",
          dark: "#5d55fa"
        },
        blue: {
          "300": "#147efb",
          "100": "#f2f3f9",
          "400": "#cdcfe7",
          "500": "#0e7dff"
        },
        purple: {
          "400": "#9297cb",
          "500": "#7023ec",
          click: "#e7e8f2"
        },
      }
    },
  },
  variants: {
    backgroundColor: ["hover", "focus", "active"],
    textColor: ["hover", "focus", "active"],
    borderWidth: ["hover", "focus", "active"],
    boxShadow: ['hover', 'focus', 'active'],
    transitionProperty: ["responsive"],
    transitionDuration: ["responsive"],
    transitionTimingFunction: ["responsive"],
    transitionDelay: ["responsive"],
    willChange: ["responsive"]
  },
  plugins: [require("tailwindcss-transitions")()]
};

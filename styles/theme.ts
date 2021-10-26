const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1200,
  xl: 1600,
}

const theme = {
  aspectRatios: {
    "9-16": 9 / 16,
  },
  breakpoints,
  colors: {
    black: "#000",
    grey: "#343434",
    red: "#FF0000",
    white: "#fff",
  },
  fontSizes: {
    body: 14,
    h2: 32,
    h3: 24,
    h: 36,
  },
  space: {
    none: 0,
    xs: 8,
    sm: 16,
    md: 32,
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 300,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    navbar: 80,
    container: 1200,
  },
}

export default theme

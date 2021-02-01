// THEME

const breakpoints = ["576px", "768px", "1200px", "1980px"];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const theme = {
  colors: {
    white: "#FAFAFA",
    black: "#232121",
    primary: "#5447EF",
    secondary: "#D0248C",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: breakpoints,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
};

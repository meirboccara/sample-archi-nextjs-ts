const palette = {
  violet: "#865D78",
  darkViolet: "#791A59",
  orange: "#F19169",
  darkOrange: "#FA6324",
  grey: "#707070",
  white: "#FFFFFF",
  darkGrey: "#848484",
  cGrey: "#e2e3e5",
  red: "#e53935",
  darkRed: "#b71c1c",
};

export const theme = {
  colors: {
    primary: palette.violet,
    primaryDark: palette.darkViolet,
    secondary: palette.orange,
    secondaryDark: palette.darkOrange,
    danger: palette.red,
    dangerDark: palette.darkRed,
    background: palette.white,
    middleground: palette.cGrey,
    foreground: palette.darkGrey,
    text: palette.grey,
    white: palette.white,
  },
  font: {
    base: "Nunito",
    size: "1rem",
    sizeLarge: "1.182rem",
  },
};

const general = {
  white: "#FFF",
  black: "#000",
  gray: "gray",
  buttonTextBlue: "#29A8FF",
};

const lightTheme = {
  ...general,
  bg: "#E2F6FC",
  text: "#FFF",
  textBlack: "#424242",
  innerColor: "#E8F4FE",
  altInnerColor: "#BCDFFE",
  border: "#FFF",
};

const darkTheme = {
  ...general,
  bg: "#17181A",
  text: "#29A8FF",
  darkInnerColor: "#616161",
  innerColor: "#303136",
  altInnerColor: "#005DB2",
  border: "#17181A",
};

export const Colors = { lightTheme, darkTheme };

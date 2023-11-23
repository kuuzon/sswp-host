import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const styledLabel = style({
  display: "none",
})

export const styledInput = style({
  margin: "2rem 0",
  textAlign: "center",
  fontWeight: vars.fontWeights.bolder,
  fontSize: "0.9em",
  letterSpacing: "0.1em",
  outline: "none",
  border: "2px solid rgba(0, 0, 0, 0.02)",
  borderRadius: "1rem",
  color: vars.colors.complementary,
  background: "rgba(136, 126, 126, 0.04)",
  transition: "all 0.2s",

  ":focus": {
    border: `2px solid ${vars.colors.grey400}`,
    boxShadow: "none",
    transform: "scale(1.01)"
  }
})

export const userNav = style({
  marginTop: "1rem",
  paddingTop: "1rem",
  fontSize: "0.9em",
  fontStyle: "italic",
})

globalStyle(`${userNav} a`, {
  textDecoration: "none",
  color: vars.colors.brand,
});

globalStyle(`${userNav} a:hover`, {
  color: vars.colors.brandDark,
  textDecoration: "underline"
});
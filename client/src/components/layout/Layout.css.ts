import { style } from "@vanilla-extract/css";
import { vars } from '../../styles/themes.css';

export const app = style({
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
})

export const appContent = style({
  margin: `${vars.space["2x"]} 0`,
  flex: 1
})
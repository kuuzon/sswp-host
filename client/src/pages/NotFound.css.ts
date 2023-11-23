import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css';

export const notFoundBox = style({
  marginTop: "1rem",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}) 

export const twinBox = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
})

globalStyle(`${twinBox} h1`, {
  margin: 0,
  padding: vars.space['4x'],
  borderRight: `2px solid ${vars.colors.grey300}`,
  fontSize: vars.fontSizes['4x'],
  fontWeight: vars.fontWeights.normal,
  color: vars.colors.complementary,
});

globalStyle(`${twinBox} a`, {
  padding: vars.space['4x'],
  fontSize: vars.fontSizes['0x'],  
  fontWeight: vars.fontWeights.normal,
  color: vars.colors.complementary,
  textDecoration: "none",
});

globalStyle(`${twinBox} a:hover`, {
  color: vars.colors.brandDark
});
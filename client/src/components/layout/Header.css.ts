import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navbar = style({
  fontFamily: vars.fonts.brand,
  backgroundColor: vars.colors.primary,
  padding: `${vars.space['3x']} 0`,
  transition: "background 0.2s ease-in, color 0.2s ease-in",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
})

export const brandLink = style({
  display: 'flex',
  flexDirection: "row",
  gap: vars.space['2x'],
  alignItems: "center",
  color: vars.colors.complementary,
  textTransform: "uppercase",
})

export const logo = style({
  width: 60,
})

export const logoTextBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
})

export const brand = style({
  fontSize: vars.fontSizes["4x"],
  fontWeight: vars.fontWeights.bolder,
  lineHeight: "20px"
})

export const brandSub = style({
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.light,
})

export const navLink = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes["3x"],
  textTransform: "uppercase",
  transition: "0.2s ease-in",

  ":hover": {
    color: vars.colors.brand
  }
})
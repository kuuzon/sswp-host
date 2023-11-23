import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const generalForm = style({
  minWidth: "60vw"
})

export const authForm = style({
  minWidth: "25vw"
})

export const container = style({
  marginTop: "1rem",
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column"
})

export const leadCard = style({
  background: vars.colors.primary,
  color: vars.colors.complementary,
  margin: "auto",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
})

export const cardTitle = style({
  color: vars.colors.brand,
  paddingBottom: "1rem",
  fontSize: "2em",
  fontWeight: vars.fontWeights.bold
})
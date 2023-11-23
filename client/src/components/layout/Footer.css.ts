import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  padding: vars.space["3x"],
  borderTop: `1px solid ${vars.colors.grey300}`,
  textAlign: "center"
})
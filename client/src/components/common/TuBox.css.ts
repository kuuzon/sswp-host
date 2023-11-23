import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const boxSetting = style({
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  textAlign: "center",
  margin: vars.space['1x'],
  padding: vars.space['4x'],
})

export const boxTitle = style({
  fontWeight: vars.fontWeights.bolder,
  fontSize: "4em"
})

export const boxPara = style({
  fontWeight: vars.fontWeights.light,
  fontSize: vars.fontSizes['4x'],
  margin: `${vars.space['4x']} 0`,
})
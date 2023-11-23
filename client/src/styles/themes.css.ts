import { createGlobalTheme } from "@vanilla-extract/css";
import twColors from 'tailwindcss/colors';

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Montserrat, apple-system, sans-serif",
    body: "Open Sans, apple-system, sans-serif",
  },
  colors: {
    // Semantic tokens
    primary: twColors.white,
    complementary: twColors.black,
    brand: twColors.emerald[600],
    brandLight: twColors.emerald[400],
    brandDark: twColors.emerald[700],

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],
  },
  space: {
    none: '0',
    '1x': '8px',
    '2x': '16px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
  },
  fontSizes: {
    '1x': '8px',
    '2x': '12px',
    '3x': '16px', 
    '4x': '20px', 
    '5x': '24px', 
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  }
})

export const vars = { ...root };
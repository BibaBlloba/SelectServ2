import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

// colors


// #d90368 accent
// #242424
// #161719

export const tokens = (mode) => ({
  ...(mode === 'dark')
    ? {
      accent: {
        100: "#f9d7e7",
        200: "#f2a5c9",
        300: "#e972aa",
        400: "#e23c8a",
        500: "#d90368",
        600: "#ad0253",
        700: "#82023e",
        800: "#6a0133",
        900: "#560129",
        950: "#320118"
      },
      custom_grey: {
        100: "#dcdcdc",
        200: "#b1b1b1",
        300: "#858585",
        400: "#555555",
        500: "#242424",
        600: "#1d1d1d",
        700: "#161616",
        800: "#111111",
        900: "#0e0e0e",
        950: "#080808"
      },
      custom_black: {
        100: "#dadada",
        200: "#acadad",
        300: "#7d7d7e",
        400: "#4a4b4d",
        500: "#161719",
        600: "#121314",
        700: "#0e0e0f",
        800: "#0b0c0c",
        900: "#09090a",
        950: "#050506"
      },
    } : {
      accent: {
        100: "#f9d7e7",
        200: "#f2a5c9",
        300: "#e972aa",
        400: "#e23c8a",
        500: "#d90368",
        600: "#ad0253",
        700: "#82023e",
        800: "#6a0133",
        900: "#560129",
        950: "#320118"
      },
      custom_grey: {
        100: "#080808",
        200: "#0e0e0e",
        300: "#111111",
        400: "#161616",
        500: "#1d1d1d",
        600: "#242424",
        700: "#555555",
        800: "#858585",
        900: "#b1b1b1",
        950: "#dcdcdc"
      },
      custom_black: {
        100: "#050506",
        200: "#09090a",
        300: "#0b0c0c",
        400: "#0e0e0f",
        500: "#121314",
        600: "#161719",
        700: "#4a4b4d",
        800: "#7d7d7e",
        900: "#acadad",
        950: "#dadada"
      },
    },
})

export const themeSettings = (mode) => {
  const colors = tokens(mode)

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: {
            main: colors.accent[500],
          },
          secondary: {
            main: colors.custom_grey[500],
          },
          neutral: {
            dark: colors.custom_black[700],
            main: colors.custom_black[500],
            light: colors.custom_black[100],
          },
          background: {
            default: "#161719",
          }
        } : {
          primary: {
            main: colors.accent[500],
          },
          secondary: {
            main: colors.custom_grey[500],
          },
          neutral: {
            dark: colors.custom_black[700],
            main: colors.custom_black[500],
            light: colors.custom_black[100],
          },
          background: {
            default: "#F2F3F2",
          }
        }
      ),
    },
    topography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    }
  }
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {
  }
})

export const useMode = () => {
  const [mode, setMode] = useState("dark")

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light"))
    }), []
  )
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]))

  return [theme, colorMode]
}

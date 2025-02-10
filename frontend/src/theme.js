import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

// colors


// accent
// #1F2937 bg
// 

export const tokens = () => ({
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
  custom_back: {
    100: "#dbdddf",
    200: "#b0b3b8",
    300: "#81878f",
    400: "#515964",
    500: "#1F2937",
    600: "#19212c",
    700: "#121921",
    800: "#0f141b",
    900: "#0c1016",
    950: "#07090d"
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

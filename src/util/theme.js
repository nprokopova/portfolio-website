import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  useTheme,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createLocalStorageStateHook } from "use-local-storage-state";

const themeConfig = {
  // Light theme
  light: {
    palette: {
      type: "light",
      primary: {

        main: colors.indigo["500"],

      },
      secondary: {
        main: colors.pink["500"],
      },
      background: {

        default: "#fff",

        paper: "#fff",
      },
    },
  },

  // Dark theme
  dark: {
    palette: {
      type: "dark",
      primary: {

        main: colors.indigo["500"],
      },
      secondary: {
        main: colors.pink["500"],
      },
      background: {
        default: colors.grey["900"],
        paper: colors.grey["800"],
      },
    },
  },

  // Values for both themes
  common: {
    typography: {
      fontSize: 14,
      fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',

    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1920,
      },
    },
    // Override component styles
    overrides: {
      // Global styles
      MuiCssBaseline: {
        "@global": {
          "#__next": {

            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",

            "& > *": {
              flexShrink: 0,
            },
          },
        },
      },
    },
  },
};

function getTheme(name) {

  return createTheme({
    ...themeConfig[name],

    ...themeConfig.common,
    overrides: {

      ...(themeConfig[name] && themeConfig[name].overrides),
      ...(themeConfig.common && themeConfig.common.overrides),
    },
  });
}


const useDarkModeStorage = createLocalStorageStateHook("isDarkMode");

export const ThemeProvider = (props) => {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  let [isDarkModeStored, setIsDarkModeStored] = useDarkModeStorage();

  
  const hasHydrated = useHasHydrated();
  if (!hasHydrated) {
    isDarkModeStored = undefined;
  }

  const isDarkMode =
    isDarkModeStored === undefined ? prefersDarkMode : isDarkModeStored;

  // Get MUI theme object
  const themeName = isDarkMode ? "dark" : "light";
  const theme = getTheme(themeName);


  theme.palette.toggle = () => setIsDarkModeStored((value) => !value);


  return (
    <MuiThemeProvider theme={theme}>

      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};


export function useDarkMode() {

  const theme = useTheme();

  const isDarkMode = theme.palette.type === "dark";

  return { value: isDarkMode, toggle: theme.palette.toggle };
}


function useHasHydrated() {
  const [hasHydrated, setHasHydrated] = useState(false);

  const isServer = typeof window === "undefined";

  const useEffectFn = isServer ? useEffect : useLayoutEffect;

  useEffectFn(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
}

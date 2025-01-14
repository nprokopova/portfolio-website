import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  useTheme,
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import * as colors from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createLocalStorageStateHook } from "use-local-storage-state";

const themeConfig = {
  // Light theme
  light: {
    palette: {
      mode: "light",
      primary: {
        main: colors.grey["600"],
      },
      secondary: {
        main: colors.pink["500"],
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
      hoverBg: {
        default: colors.grey["100"],
      },
    },
  },

  // Dark theme
  dark: {
    palette: {
      mode: "dark",
      primary: {
        main: colors.grey["800"],
      },
      secondary: {
        main: colors.pink["500"],
      },
      background: {
        default: colors.grey["900"],
        paper: colors.grey["800"],
      },
      hoverBg: {
        default: colors.grey["800"],
      },
    },
  },

  // Values for both themes
  common: {
    typography: {
      fontSize: 14,
      fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
    },
    // Override component styles
    components: {
      // Global styles
      MuiCssBaseline: {
        styleOverrides: {
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
    components: {
      ...(themeConfig[name] && themeConfig[name].styleOverrides),
      ...(themeConfig.common && themeConfig.common.styleOverrides),
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
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export function useDarkMode() {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

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

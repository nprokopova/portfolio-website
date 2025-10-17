import { useEffect, useLayoutEffect, useState } from "react";
import {
  useTheme,
  createTheme,
  ThemeOptions,
  Theme as MuiTheme,
} from "@mui/material/styles";
import * as colors from "@mui/material/colors";
import { createLocalStorageStateHook } from "use-local-storage-state";

interface Theme extends MuiTheme {
  palette: MuiTheme["palette"] & {
    toggle: () => void;
  };
}

const themeConfig: Record<string, ThemeOptions> = {
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

export function getTheme(name: string) {
  const namedConfig = themeConfig[name] || {};
  const commonConfig = themeConfig.common || {};

  return createTheme({
    ...namedConfig,
    ...commonConfig,
    components: {
      ...namedConfig.components,
      ...commonConfig.components,
    },
  });
}

export const useDarkModeStorage =
  createLocalStorageStateHook<boolean>("isDarkMode");

export function useDarkMode() {
  const theme = useTheme() as Theme;

  const isDarkMode = theme.palette.mode === "dark";

  return { value: isDarkMode, toggle: theme.palette.toggle };
}

export function useHasHydrated() {
  const [hasHydrated, setHasHydrated] = useState(false);

  const isServer = typeof window === "undefined";

  const useEffectFn = isServer ? useEffect : useLayoutEffect;

  useEffectFn(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
}

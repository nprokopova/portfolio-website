import React, { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useDarkModeStorage, useHasHydrated, getTheme } from "../util/theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
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
  const muiTheme = getTheme(themeName);

  const theme = {
    ...muiTheme,
    palette: {
      ...muiTheme.palette,
      toggle: () => setIsDarkModeStored((value) => !value),
    },
  };

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

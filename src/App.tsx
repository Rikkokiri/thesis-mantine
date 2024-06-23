import { Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { useEffect } from "react";
import { Flex, MantineProvider } from "@mantine/core";
import { cssResolver, themeOverride } from "./theme";
import { useColorScheme } from "@mantine/hooks";
import { AppFooter } from "./layout/footer";

function App() {
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();

  useEffect(() => {
    setActiveTheme(prefersDarkMode);
  }, [prefersDarkMode, setActiveTheme]);

  const colorScheme = useColorScheme();

  return (
    <MantineProvider
      theme={{
        ...themeOverride,
        primaryColor: colorScheme === "light" ? "blueBlack" : "gray",
      }}
      cssVariablesResolver={cssResolver}
      defaultColorScheme="auto"
    >
      <Toolbar />
      <Flex direction="column" h="calc(100% - 72px)">
        <Flex
          component="main"
          direction="column"
          style={{
            flex: "1 0 auto",
            placeItems: "center flex-start",
          }}
        >
          <Outlet />
        </Flex>
        <AppFooter />
      </Flex>
    </MantineProvider>
  );
}

export default App;

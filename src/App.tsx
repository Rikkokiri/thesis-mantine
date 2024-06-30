import { Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Flex, MantineProvider } from "@mantine/core";
import { cssResolver, themeOverride } from "./theme";
import { AppFooter } from "./layout/footer";

function App() {
  // const colorScheme = useColorScheme();

  return (
    <MantineProvider
      theme={{
        ...themeOverride,
        // Found it easier to not use primaryColor in theme
        // as it generated CSS variables I did not need
        // primaryColor: colorScheme === "light" ? "blueBlack" : "gray",
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

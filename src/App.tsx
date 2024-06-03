import { Link, Outlet } from "react-router-dom";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toolbar } from "./components/Toolbar/Toolbar";

function App() {
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setActiveTheme(prefersDarkMode);
  }, [prefersDarkMode, setActiveTheme]);

  return (
    <>
      <Toolbar />
      <div id="main-wrapper">
        <main>
          <Outlet />
        </main>
        <footer id="app-footer">
          <div className="footer-links">
            <Link to="/">{t("footer.frontPageLink")}</Link>
            <a href="https://vaalit.yle.fi/vaalikone/presidentinvaali2024">
              Ylen vaalikone presidentivaaleissa 2024
            </a>
            {/* TODO: Link to source code */}
          </div>
          {/* TODO: Language menu */}
        </footer>
      </div>
    </>
  );
}

export default App;

"use client";

// providers
import { useDarkMode } from "@/providers/ThemeProvider";
// cmp
import { Button } from "../ui/button";
import { SolarMoonBoldDuotone, SolarSun2BoldDuotone } from "../svg";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button onClick={toggleDarkMode} variant="icon" type="button">
      {darkMode ? <SolarSun2BoldDuotone /> : <SolarMoonBoldDuotone />}
    </Button>
  );
};

export default DarkModeToggle;

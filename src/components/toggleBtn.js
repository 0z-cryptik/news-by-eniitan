import { ThemeIconButton } from "react-simple-animated-dark-mode-button";
import { useList } from "./myHooks";

export const ModeToggle = () => {
  const { dark, setDark } = useList();

  return (
    <span className="absolute right-[6rem] top-[1rem]">
      <ThemeIconButton
        isDarkMode={dark}
        onClick={() => setDark(!dark)}
      />
    </span>
  );
};

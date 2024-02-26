import { useList } from "../hooks&functions/myHooks";

export const Overlay = () => {
    const {viewMenu, setViewMenu} = useList()
  if (viewMenu) {
    return (
      <div
        onClick={() => setViewMenu(false)}
        id="overlay"
        className="z-20 lg:hidden"></div>
    );
  }
};

import { Bars } from "react-loader-spinner";
import { useList } from "./myHooks";

const BarLoader = () => {
  const { dark } = useList();
  return (
    <div
      className={`${
        dark
          ? "bg-black h-screen flex items-center"
          : "h-screen flex items-center"
      }`}>
      <Bars
        wrapperClass="mx-auto"
        color="blue"
      />
    </div>
  );
};

export default BarLoader;

import { Bars } from "react-loader-spinner";
import { useList } from "../hooks&functions/myHooks";

const BarLoader = () => {
  const { dark } = useList();
  return (
    <div
      className={`h-screen flex items-center ${dark ? "bg-black  " : ""}`}>
      <Bars
        wrapperClass="mx-auto"
        color="blue"
      />
    </div>
  );
};

export default BarLoader;

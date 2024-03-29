import { useList } from "../hooks&functions/myHooks";
import { Oval } from "react-loader-spinner";
import { Bars } from "react-loader-spinner";

export const ImageLoader = () => {
  const { dark } = useList();

  return (
    <div
      className={`w-full h-[14rem] flex justify-center items-center mb-5 ${
        dark ? "bg-gray-600" : "bg-gray-300"
      }`}>
      <Oval
        color="white"
        secondaryColor="gray"
      />
    </div>
  );
};

export const ImageUnLoader = () => {
  const { dark } = useList();

  return (
    <div
      className={`text-sm w-full h-[14rem] flex justify-center items-center mb-5 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}>
      <p>unable to load image</p>
    </div>
  );
};

export const BarLoader = () => {
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

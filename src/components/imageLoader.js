import { useList } from "./myHooks";
import { Oval } from "react-loader-spinner";

export const ImageLoader = () => {

    const { dark } = useList()

    return <div className={`w-full h-[14rem] flex justify-center items-center ${dark ? 'bg-gray-600' : 'bg-gray-300'}`}>
        <Oval color="white" secondaryColor="gray" />
    </div>
}
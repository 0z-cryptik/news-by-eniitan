import { useList } from "./myHooks";
import { Oval } from "react-loader-spinner";

export const ImageLoader = () => {

    const { dark } = useList()

    return <div className="w-full h-[14rem] flex justify-center items-center bg-gray-600">
        <Oval color="white" secondaryColor="gray" />
    </div>
}
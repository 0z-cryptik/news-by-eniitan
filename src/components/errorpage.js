import { useList } from "../hooks&functions/myHooks";
import { useNavigate } from "react-router";

export const ErrorPage = () => {
  const { dark } = useList();
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col px-6 text-center justify-center items-center h-[100vh] w-[100vw] ${
        dark ? "text-white bg-black" : "text-black"
      }`}>
      <h1 className="text-6xl font-bold">Error 404</h1>

      <p className="text-xl mt-6">
        Sorry, the page you seem to be looking for doesn't exist.
      </p>

      <button
        id="btns"
        onClick={() => navigate("/general")}
        className={`bg-transparent h-[3rem] w-[13rem] text-center mt-[6rem] rounded-md border ${
          dark
            ? "border-white hover:text-red-700 hover:border-red-700"
            : "border-black hover:text-blue-700 hover:border-blue-700"
        }`}>
        Go Back To The Homepage
      </button>
    </div>
  );
};

export const EmptyListPage = () => {
  const { dark } = useList();

  return (
    <div
      className={`flex flex-col px-6 text-center justify-center items-center h-[100vh] w-[100vw] ${
        dark ? "text-white bg-black" : "text-black"
      }`}>
      <h1 className="text-6xl font-bold">Oops</h1>
      <p className="text-xl mt-6">
        our API seems to be having difficulty handling this request, please
        check your network connection and retry in a minute
      </p>
    </div>
  );
};

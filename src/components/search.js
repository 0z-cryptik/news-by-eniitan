import { useRef, useEffect } from "react";
import { useList } from "./myHooks";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSubmit, val, onChange }) => {
  let { dark } = useList();
  let text = useRef();

  useEffect(() => {
    text.current.focus();
  }, []);

  const submitHandler = (e) => {
    onSubmit(e);
    text.current.blur();
  };

  return (
    <center>
      <div
        className={`${
          dark ? `w-full bg-black xl:py-5` : `w-full xl:py-5`
        }`}>
        <form
          onSubmit={submitHandler}
          className={`${
            dark
              ? `bg-black w-[60%] pl-2 h-[3rem] border rounded-xl my-5`
              : `bg-white w-[60%] h-[3rem] pl-2 border rounded-xl my-5`
          }`}>
          <input
            type="text"
            ref={text}
            value={val}
            placeholder="search anything..."
            onChange={onChange}
            className={`${
              dark
                ? "w-[75%] md:w-[85%] h-[90%] bg-black text-white focus:outline-none rounded-xl"
                : "w-[75%] md:w-[85%] h-[90%] focus:outline-none rounded-xl"
            }`}
          />

          <button
            id="btns"
            type="submit"
            className={`${
              dark
                ? "bg-[#243744] border rounded-xl w-[25%] md:w-[15%] h-full lg:hover:bg-[#0C3758] lg:hover:text-white text-gray-400"
                : `bg-blue-300 border rounded-xl w-[25%] md:w-[15%] h-full lg:hover:bg-gradient-to-r from-blue-200 to-blue-600 lg:hover:text-white`
            }`}>
            <FaSearch className="mx-auto" />
          </button>
        </form>
      </div>
    </center>
  );
};

export { Search };

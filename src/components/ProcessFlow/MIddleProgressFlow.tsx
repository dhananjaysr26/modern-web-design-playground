import { useEffect, useRef, useState } from "react";

const MiddleProcessFlow: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      let per = parseInt(percent.toFixed(0));
      const height = per > 50 && per < 60 ? per-25 :per-25;
      setScrollPercentage(height);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrollPercentage);
  return (
    <div className="w-screen h-screen px-24 bg-slate-100 border-y-2 flex justify-center items-center flex-col">
      <h1 className="text-black text-3xl text-center">Middle Progress</h1>
      <div className="flex justify-center items-center">
        <img
          src="https://cdn.pixabay.com/animation/2022/08/22/06/27/06-27-28-539_512.gif"
          className=" max-w-none max-h-none"
          style={{ height: `${scrollPercentage}rem`, maxHeight: "100vh" }}
        />
      </div>
    </div>
  );
};

export default MiddleProcessFlow;

import { useEffect, useRef, useState } from "react";

const MiddleProcessFlow: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight, clientWidth } =
        document.documentElement;
      const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      let per = parseInt(percent.toFixed(0));
      let h: any = null;
      if (clientHeight > 400) {
        h = per > 50 && per < 60 ? per - 25 : per - 25;
      } else {
        h = per > 50 && per < 60 ? per - 45 : per - 45;
      }
      setScrollPercentage(h);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrollPercentage);
  return (
    <div className="w-screen h-screen px-4 md:px-24 bg-slate-100 border-y-2 max-w-[1200px] mx-auto flex justify-center items-center flex-col">
      <h1 className="text-black text-3xl text-center">Middle Progress</h1>
      <div className="flex justify-center items-center max-w-[100vw]">
        <img
          src="https://cdn.pixabay.com/animation/2022/08/22/06/27/06-27-28-539_512.gif"
          style={{
            height: `${scrollPercentage}rem`,
            width: `${scrollPercentage}rem`,
            maxHeight: "100vh",
          }}
        />
      </div>
    </div>
  );
};

export default MiddleProcessFlow;

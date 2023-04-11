import { useEffect, useState } from "react";

const ProcessFlow: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setPrevScrollPos(currentScrollPos);
      if (currentScrollPos < 10) {
        setIsScrollingDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <div className=" w-screen h-screen px-24 ">
      <h1 className=" text-black text-3xl">Hello</h1>
      <img
        src="/gif/airplane.gif"
        className={` h-12 w-12 ${
          isScrollingDown ? "rotate-180" : ""
        } sticky top-20 -translate-x-6 z-40 transition-all duration-[2000ms] ease-out`}
      />
      <div className="flex h-full items-center justify-center ">
        <div className=" w-[30%] flex flex-col border-black/40 border-l-2 h-[80%] justify-center pl-12 ">
          <h1 className=" text-black">Info</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            fuga, eum aperiam quidem vero, quisquam sequi sunt nulla, eius
            tenetur ut rerum nemo molestiae perspiciatis necessitatibus nostrum
            repellendus voluptatum ipsam?
          </p>
        </div>
        <div className=" w-[70%] flex  justify-center ">
          <img
            src="https://i.pinimg.com/originals/a1/79/b5/a179b58b285b1f8baed84e9a10daea7e.gif"
            className={`${
              prevScrollPos < 100
                ? ""
                : isScrollingDown
                ? "rotate-[20deg]"
                : "-rotate-[20deg]"
            }  transition-all duration-500 ease-in`}
          />
        </div>
      </div>
    </div>
  );
};
export default ProcessFlow;

import { useRef, useState } from "react";

const MiddleProcessFlow: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(0); 
  const myElementRef = useRef<HTMLDivElement>(null);


  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const newZoomLevel = zoomLevel + (event.deltaY > 0 ? -10 : 10); 
    setZoomLevel(Math.min(Math.max(newZoomLevel, 0), 100)); 
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const height = element.clientHeight;
    const offset = element.getBoundingClientRect().top;
    const position = offset + height;

    if (offset <= 0 && position >= 0) {
      const progress = (height + offset) / height;
      const newZoomLevel = progress * 100; 
      setZoomLevel(newZoomLevel);
    } else if (offset > 0) {
      setZoomLevel(0);
    } else {
      setZoomLevel(100);
    }
  };

  return (
    <div
      className="w-screen h-screen px-24 bg-slate-100 border-y-2 "
      onWheel={handleWheel}
      onScroll={handleScroll}
      style={{ overflowY: "scroll" }} 
    >
        <span >h</span>
      <h1 className="text-black text-3xl text-center">Middle Progress</h1>
      <div className="flex justify-center items-center">
        <img
          src="https://cdn.pixabay.com/animation/2022/08/22/06/27/06-27-28-539_512.gif"
          style={{ width: `${zoomLevel}%` }} 
        />
      </div>
    </div>
  );
};

export default MiddleProcessFlow;

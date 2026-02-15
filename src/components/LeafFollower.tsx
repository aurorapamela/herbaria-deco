import {useEffect, useRef} from "react";

export default function LeafFollower() {
  const leafRef = useRef(null);

  useEffect(() => {
    let x = 0;
    let y = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const loop = () => {
      if (leafRef.current) {
        leafRef.current.style.transform = `translate(${x + 12}px, ${y + 12}px)`;
      }
      requestAnimationFrame(loop);
    };

    loop();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={leafRef} className="leaf-follower">
      <img
        src={
          document.documentElement.classList.contains("dark")
            ? "/leaf-light.svg"
            : "/leaf-dark.svg"
        }
        alt="leaf cursor"
      />
    </div>
  );
}

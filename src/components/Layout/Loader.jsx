// import React from "react";
// import Lottie from "react-lottie";
// import animationData from "../../Assests/animations/24151-ecommerce-animation.json";

// const Loader = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <Lottie options={defaultOptions} width={300} height={300} />
//     </div>
//   );
// };

// export default Loader;


import React, { useEffect, useRef } from "react";
import animationData from "../../Assests/animations/24151-ecommerce-animation.json";
import lottie from "lottie-web";

const Loader = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy(); // Clean up animation when component unmounts
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div ref={animationContainer} style={{ width: 300, height: 300 }}></div>
    </div>
  );
};

export default Loader;


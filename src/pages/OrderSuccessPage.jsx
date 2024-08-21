// import React from "react";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import Lottie from "react-lottie";
// import animationData from "../Assests/animations/107043-success.json";

// const OrderSuccessPage = () => {
//   return (
//     <div>
//       <Header />
//       <Success />
//       <Footer />
//     </div>
//   );
// };

// const Success = () => {
//   const defaultOptions = {
//     loop: false,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <div>
//       <Lottie options={defaultOptions} width={300} height={300} />
//       <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
//         Your order is successful 😍
//       </h5>
//       <br />
//       <br />
//     </div>
//   );
// };

// export default OrderSuccessPage;
import React, { useEffect, useRef } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import animationData from "../Assests/animations/107043-success.json";
import lottie from "lottie-web"; // Import "lottie-web"

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Use the appropriate renderer (canvas or svg)
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={animationContainer}></div>
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};
export default OrderSuccessPage;
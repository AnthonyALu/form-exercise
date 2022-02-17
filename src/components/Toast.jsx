/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Tick from "../common/tick.png";

const slideDown = keyframes`

 0%, 100% {
   transform: translate3d(0, 0, 0);
 }

 20%, 80% {
   transform: translate3d(0, 100px, 0);
 }


`;

const ToastContainer = styled.div((props) => ({
  position: "absolute",
  backgroundColor: props.bgColor,
  top: "-100px",
  width: "100%",
  textAlign: "center",
  padding: "16px",
  color: "white",
  fontWeight: "600",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: props.animate && `${slideDown} 8s`,
}));

const ImageContainer = styled.div((props) => ({
  width: "16px",
  height: "16px",
  marginRight: "10px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${Tick})`,
}));

const Toast = ({ animate, setAnimate }) => {
  return (
    <ToastContainer
      bgColor="#287664"
      animate={animate}
      onAnimationEnd={() => setAnimate(false)}
    >
      <ImageContainer img={Tick} />
      <p>Changes have been saved successfully</p>
    </ToastContainer>
  );
};

export default Toast;

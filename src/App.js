/** @jsxImportSource @emotion/react */
import Form from "./components/Form";
import { bgStyles } from "./components/EmotionStyles";
import Toast from "./components/Toast";
import { useState } from "react";

function App() {
  const [toastAnimate, setToastAnimate] = useState(false);
  return (
    <div css={bgStyles}>
      <Toast
        animate={toastAnimate}
        setAnimate={setToastAnimate}
        text="Changes have been saved successfully"
      />
      <Form setToastAnimate={setToastAnimate} />
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import { Container } from "./EmotionStyles";
import { labelStyles } from "./EmotionStyles";
import React, { useState } from "react";
import styled from "@emotion/styled";
import avatar from "../common/avatar.png";
import { css } from "@emotion/react";

const ImageContainer = styled.div((props) => ({
  cursor: "pointer",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  marginTop: "30px",
  marginBottom: "8px",
  border: "4px solid lightgray",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: props.avatar ? `url(${props.avatar})` : `url(${avatar})`,
}));

const SmallTextButton = styled.p({
  fontSize: "0.8em",
  cursor: "pointer",
});

const Badge = styled.div({
  float: "right",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundImage: `url(https://thumbs.dreamstime.com/b/photo-icon-black-background-black-flat-style-vector-illustration-photo-icon-black-background-black-flat-style-vector-170442033.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

const ImageUpload = ({ avatar, setAvatar }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element when the Button component is clicked
  const handleUpload = (e) => {
    hiddenFileInput.current.click();
  };

  const handleRemove = (e) => {
    setAvatar(null);
  };

  const changeHandler = (e) => {
    //create a temporary URL for the uploaded image
    const fileUploaded = URL.createObjectURL(e.target.files[0]);
    //set image url as the avatar
    setAvatar(fileUploaded);
  };

  return (
    <Container textAlign="center">
      <p css={labelStyles}>IMAGE</p>
      <ImageContainer avatar={avatar} onClick={handleUpload}>
        <Badge />
      </ImageContainer>
      {avatar === null ? (
        <>
          <SmallTextButton onClick={handleUpload}>UPLOAD</SmallTextButton>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={changeHandler}
            style={{ display: "none" }}
          ></input>
        </>
      ) : (
        <SmallTextButton onClick={handleRemove}>Remove</SmallTextButton>
      )}
    </Container>
  );
};

export default ImageUpload;

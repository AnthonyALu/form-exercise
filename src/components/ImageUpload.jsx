/** @jsxImportSource @emotion/react */
import { Container } from "./EmotionStyles";
import { labelStyles } from "./EmotionStyles";
import React from "react";
import styled from "@emotion/styled";
import Avatar from "../common/avatar.png";
import { css } from "@emotion/react";

const ImageContainer = styled.div((props) => ({
  cursor: "pointer",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  margin: "30px auto 8px auto",
  border: "4px solid lightgray",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: props.avatar ? `url(${props.avatar})` : `url(${Avatar})`,
}));

const SmallTextButton = styled.p({
  fontSize: "0.9em",
  fontWeight: "600",
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

const DropZone = styled.input({
  position: "relative",
  top: "-30px",
  borderRadius: "50%",
  width: "100%",
  height: "100%",
  opacity: "0",
});

const ImageUpload = ({ avatar, setAvatar }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element when the Button component is clicked
  const handleUpload = (e) => {
    if (avatar === null) {
      hiddenFileInput.current.click();
    }
  };

  //remove avatar
  const handleRemove = (e) => {
    setAvatar(null);
  };

  const validateImage = (file) => {
    // Validate file is of type Image
    let fileType = file.type.split("/")[0];
    if (fileType !== "image") {
      console.log("Not an image file");
    } else {
      imageUpload(file);
    }
  };

  const changeHandler = (e) => {
    e.preventDefault();
    validateImage(e.target.files[0]);
  };

  const imageUpload = (file) => {
    //create a temporary URL for the uploaded image
    const blobFile = URL.createObjectURL(file);
    //set image url as the avatar
    setAvatar(blobFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    validateImage(file);
  };

  const dropZoneClick = (e) => {
    //prevents normal image upload functionality
    e.preventDefault();
  };

  return (
    <Container
      textAlign="center"
      marginTop="0px"
      css={css`
        flex-shrink: 1;
      `}
    >
      <p css={labelStyles}>IMAGE</p>
      <ImageContainer avatar={avatar}>
        <Badge />
        <DropZone type="file" onClick={dropZoneClick} onDrop={handleDrop} />
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

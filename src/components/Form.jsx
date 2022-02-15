/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  formStyles,
  FlexContainer,
  Container,
  labelStyles,
} from "./EmotionStyles";
import ImageUpload from "./ImageUpload";
import InputField from "./InputField";

const Form = () => {
  //input that will be received by the user
  const inputFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "dateOfBirth",
    "bio",
  ];
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    dateOfBirth: null,
    bio: "",
  });

  const [avatar, setAvatar] = useState(null);

  return (
    <div css={formStyles}>
      <Container marginBottom="40px">
        <h2>Settings</h2>
      </Container>
      <FlexContainer>
        <div>
          <FlexContainer direction="column">
            {inputFields.map((e) => (
              <div>
                <InputField />
              </div>
            ))}
          </FlexContainer>
        </div>
        <ImageUpload avatar={avatar} setAvatar={setAvatar} />
      </FlexContainer>
    </div>
  );
};

export default Form;

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { formStyles, FlexContainer, Container } from "./EmotionStyles";
import ImageUpload from "./ImageUpload";
import FormInput from "./FormInput";
import DatePicker from "./DatePicker";
import { css } from "@emotion/react";
import { LineDivider } from "./LineDivider";
import { Button } from "./EmotionStyles";
import { userData } from "../utils/UserData";

const Form = ({ setToastAnimate }) => {
  //input that will be received by the user
  //can also add regex for input validation if needed
  const inputFields = [
    { id: 1, label: "FIRST NAME*", name: "firstName", type: "text" },
    { id: 2, label: "LAST NAME*", name: "lastName", type: "text" },
    { id: 3, label: "EMAIL*", name: "email", type: "email" },
    {
      id: 4,
      label: "PHONE*",
      name: "phone",
      type: "tel",
    },
  ];
  const [avatar, setAvatar] = useState(userData.avatar);

  const [dateOfBirth, setDateOfBirth] = useState(userData.dateOfBirth);
  const bio = {
    label: "BIO*",
    name: "bio",
    type: "textarea",
  };

  //saved values
  const [values, setValues] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    bio: userData.bio,
  });

  //set values on change
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBirthdayChange = (date) => {
    setDateOfBirth(date);
  };

  //discard function
  const handleDiscard = (e) => {
    //prevent default function
    e.preventDefault();
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      bio: "",
    });
  };

  //save form data
  const saveData = () => {
    //log data that is about to be saved
    console.log({ ...values, dateOfBirth: dateOfBirth, avatar: avatar });
    //animate toast
    setToastAnimate(true);
  };

  //submit function
  const handleSubmit = (e) => {
    //prevent default function
    e.preventDefault();
    //save or use other validations
    saveData();
  };

  return (
    <div css={formStyles}>
      <Container marginBottom="40px">
        <h2>Settings</h2>
      </Container>
      <FlexContainer>
        <div>
          <FlexContainer
            direction="column"
            css={css`
              width: 40vw;
            `}
          >
            <form onSubmit={handleSubmit}>
              {inputFields.map((e) => (
                <FormInput
                  key={e.id}
                  {...e}
                  value={values[e.name]}
                  onChange={handleInputChange}
                />
              ))}
              <DatePicker
                dateOfBirth={dateOfBirth}
                setDate={handleBirthdayChange}
              />
              <FormInput
                {...bio}
                value={values[bio.name]}
                onChange={handleInputChange}
              />
              <LineDivider />
              <FlexContainer>
                <Button
                  gradient="linear-gradient(to right, #27b08a, #317f6d)"
                  hoverGradient="linear-gradient(to top right, #27b08a, #317f6d)"
                  type="submit"
                >
                  Save Changes
                </Button>
                <Button
                  onClick={handleDiscard}
                  bgColor="#63686f"
                  hoverColor="#525457"
                >
                  Discard
                </Button>
              </FlexContainer>
            </form>
          </FlexContainer>
        </div>

        <ImageUpload avatar={avatar} setAvatar={setAvatar} />
      </FlexContainer>
    </div>
  );
};

export default Form;

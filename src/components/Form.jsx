/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { formStyles, FlexContainer, Container } from "./EmotionStyles";
import ImageUpload from "./ImageUpload";
import FormInput from "./FormInput";
import DatePicker from "./DatePicker";

const Form = () => {
  //input that will be received by the user
  //can also add regex for input validation if needed
  console.log(new Date().getFullYear() + 1);
  const inputFields = [
    { id: 1, label: "FIRST NAME*", name: "firstName", type: "text" },
    { id: 2, label: "LAST NAME*", name: "lastName", type: "text" },
    { id: 3, label: "EMAIL*", name: "email", type: "email" },
    { id: 4, label: "PHONE*", name: "phone", type: "text" },
    {
      id: 5,
      label: "SELECT YOUR DATE OF BIRTH*",
      name: "dateOfBirth",
      type: "date",
    },
    { id: 6, label: "BIO*", name: "bio", type: "textarea" },
  ];
  const [avatar, setAvatar] = useState(null);
  const today = new Date();
  const [dateOfBirth, setDateOfBirth] = useState(
    `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
  );

  //saved values
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    dateOfBirth: null,
    bio: "",
    avatar: null,
  });

  //set values on change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //submit function
  const handleSubmit = (e) => {
    //prevent default function
    e.preventDefault();
  };

  return (
    <div css={formStyles}>
      <Container marginBottom="40px">
        <h2>Settings</h2>
      </Container>
      <FlexContainer>
        <div>
          <FlexContainer direction="column">
            {inputFields.map((e) => (
              <FormInput
                key={e.id}
                {...e}
                value={values[inputFields.name]}
                onChange={handleChange}
              />
            ))}
            <DatePicker date={dateOfBirth} setDate={setDateOfBirth} />
          </FlexContainer>
        </div>
        <ImageUpload avatar={avatar} setAvatar={setAvatar} />
      </FlexContainer>
    </div>
  );
};

export default Form;

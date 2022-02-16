/** @jsxImportSource @emotion/react */
import {
  FlexContainer,
  labelStyles,
  Container,
  inputFieldHover,
  InputContainer,
} from "./EmotionStyles";
import styled from "@emotion/styled";
import { useState } from "react";
import { css } from "@emotion/react";

const formSize = css`
  width: 30vw;
`;

const ErrorText = styled.p(({ valid }) => ({
  fontSize: "0.7em",
  color: "#c52735",
  marginTop: "4px",
  display: valid ? "none" : "inline",
}));

const FormInput = ({ label, onChange, value, ...inputProps }) => {
  const [focus, setFocus] = useState(false);
  const [valid, setValid] = useState(true);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = (e) => {
    setFocus(false);
    //validate by checking whether the field has a value in it
    setValid(e.target.value.length > 0);
  };
  return (
    <Container css={formSize} marginLeft="0px" marginBottom="32px">
      <FlexContainer direction="column">
        <Container marginLeft="0">
          <label css={labelStyles}>{label}</label>
        </Container>
        <InputContainer
          focus={focus}
          onFocus={onFocus}
          onBlur={onBlur}
          {...inputProps}
          onChange={onChange}
          required
          valid={valid}
          css={inputFieldHover}
        />
        <ErrorText valid={valid}>This field is required</ErrorText>
      </FlexContainer>
    </Container>
  );
};

export default FormInput;

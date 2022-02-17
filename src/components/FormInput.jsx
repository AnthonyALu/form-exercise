/** @jsxImportSource @emotion/react */
import { FlexContainer, labelStyles, Container } from "./EmotionStyles";
import styled from "@emotion/styled";
import { useState } from "react";
import { css } from "@emotion/react";

const formSize = css`
  width: 80%;
`;

const InputContainer = styled.input((props) => ({
  margin: "4px auto auto auto",
  padding: "12px",
  backgroundColor: "#2a2e35",
  border: props.focus
    ? "1px solid #27987b"
    : props.valid
    ? "1px solid gray"
    : "1px solid #c52735",
  borderRadius: "5px",
  color: props.focus ? "white" : "#a8afb6",
  width: "100%",
  ":hover": {
    border: "1px solid white",
    color: "white",
  },
}));

const TextAreaContainer = styled.textarea((props) => ({
  margin: "4px auto auto auto",
  padding: "12px",
  backgroundColor: "#2a2e35",
  border: props.focus
    ? "1px solid #27987b"
    : props.valid
    ? "1px solid gray"
    : "1px solid #c52735",
  borderRadius: "5px",
  color: props.focus ? "white" : "#a8afb6",
  width: "100%",
  ":hover": {
    border: "1px solid white",
    color: "white",
  },
}));

const ErrorText = styled.p(({ valid }) => ({
  fontSize: "0.7em",
  color: "#c52735",
  marginTop: "4px",
  display: valid ? "none" : "inline",
}));

const FormInput = ({
  label,
  onChange,
  value,
  type,
  errorMessage,
  pattern,
  ...inputProps
}) => {
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
        {type === "textarea" && (
          <TextAreaContainer
            focus={focus}
            onFocus={onFocus}
            onBlur={onBlur}
            {...inputProps}
            onChange={onChange}
            required
            valid={valid}
            value={value}
            pattern={pattern}
          />
        )}
        {type !== "textarea" && (
          <InputContainer
            focus={focus}
            onFocus={onFocus}
            onBlur={onBlur}
            {...inputProps}
            onChange={onChange}
            required
            valid={valid}
            value={value}
            type={type}
          />
        )}
        <ErrorText valid={valid}>{"This field is required"}</ErrorText>
      </FlexContainer>
    </Container>
  );
};

export default FormInput;

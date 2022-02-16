/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

export const bgStyles = css`
  background-color: #22262d;
`;

export const labelStyles = css`
  color: gray;
  font-size: 0.8em;
  font-weight: 700;
`;

export const formStyles = css`
  width: 60vw;
  padding: 120px 24px;
  margin: auto;
  color: white;
`;

export const inputFieldHover = css`
  &:hover {
    border: 1px solid white;
  }
`;

export const FlexContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: props.direction ? props.direction : "row",
}));

export const Container = styled.div`
  margin-top: ${(props) => props.marginTop || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  margin-right: ${(props) => props.marginRight || "auto"};
  text-align: ${(props) => props.textAlign || "left"};
`;

export const InputContainer = styled.input((props) => ({
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
}));

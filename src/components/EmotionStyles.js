/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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

export const Button = styled.button((props) => ({
  backgroundImage: props.gradient,
  backgroundColor: props.bgColor,
  backgroundPosition: props.bgPosition,
  padding: "12px 20px",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  color: "white",
  marginTop: "20px",
  marginRight: "10px",
  ":hover": {
    backgroundColor: props.hoverColor,
    backgroundImage: props.hoverGradient,
  },
}));

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

export const bgStyles = css`
  background-color: #22262d;
`;

export const labelStyles = css`
  color: gray;
  font-size: 0.8em;
`;

export const formStyles = css`
  width: 40vw;
  padding: 120px 24px;
  margin: auto;
  color: white;
`;

export const FlexContainer = styled.div((props) => ({
  display: "flex",
  justifyContent: props.justify ? props.justify : "space-between",
  flexDirection: props.direction ? props.direction : "row",
}));

export const Container = styled.div`
  margin-top: ${(props) => props.marginTop || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  margin-right: ${(props) => props.marginRight || "auto"};
  text-align: ${(props) => props.textAlign || "left"};
`;

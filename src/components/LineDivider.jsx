import styled from "@emotion/styled";

export const LineDivider = styled.div((props) => ({
  backgroundColor: "#3b3f46",
  height: 2,
  width: props.width || "80%",
}));

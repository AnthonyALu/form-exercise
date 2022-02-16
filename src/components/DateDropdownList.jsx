/** @jsxImportSource @emotion/react */
import { inputFieldHover, Container } from "./EmotionStyles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const SelectContainer = styled.select((props) => ({
  margin: "4px auto auto 0px",
  padding: "12px",
  backgroundColor: "#2a2e35",
  border: props.focus ? "1px solid #27987b" : "1px solid gray",
  borderRadius: "5px",
  color: props.focus ? "white" : "#a8afb6",
}));

const MonthPicker = () => {
  return (
    <SelectContainer value="grapefruit" css={inputFieldHover}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </SelectContainer>
  );
};

const DatePicker = () => {
  return (
    <SelectContainer value="grapefruit" css={inputFieldHover}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </SelectContainer>
  );
};

const YearPicker = () => {
  return (
    <SelectContainer value="grapefruit" css={inputFieldHover}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </SelectContainer>
  );
};

const DateDropdownList = ({ format }) => {
  switch (format) {
    case "month":
      return <MonthPicker />;
    case "day":
      return <DatePicker />;
    case "year":
      return <YearPicker />;
  }
};

export default DateDropdownList;

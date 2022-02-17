/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";
import ArrowDown from "../common/arrowDown.png";
import ArrowUp from "../common/arrowUp.png";
import { FlexContainer } from "./EmotionStyles";
import "./DateDropdownList.css";

const SelectHeaderContainer = styled.div((props) => ({
  marginTop: "4px",
  padding: "12px 16px",
  backgroundColor: "#2a2e35",
  border: props.toggled ? "1px solid #27987b" : "1px solid gray",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  color: props.toggled ? "#63686f" : "white",
  ":hover": {
    border: "1px solid white",
    color: "white",
  },
}));

const ArrowContainer = styled.div((props) => ({
  backgroundImage: props.toggled ? `url(${ArrowUp})` : `url(${ArrowDown})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "12px",
}));

const OptionList = styled.div((props) => ({
  padding: "12px",
  backgroundColor: "#3a3f46",
  marginTop: "12px",
  borderRadius: "5px",
  display: props.toggled ? "block" : "none",
  height: props.height || "256px",
  overflow: "auto",
  width: "100%",
}));

const listStyles = css`
  list-style-type: none;

  > li {
    margin: 8px auto;
    padding: 4px;
    &:hover {
      background-color: #696b6f;
      cursor: default;
    }
  }
`;
const SelectorContainer = ({
  width,
  onClick,
  toggled,
  format,
  selected,
  height,
  optionSelected,
  arr,
}) => {
  return (
    <FlexContainer
      direction="column"
      css={css`
        width: ${width};
      `}
    >
      <SelectHeaderContainer onClick={onClick} toggled={toggled}>
        <div>{toggled ? format : arr[selected]}</div>
        <ArrowContainer toggled={toggled} />
      </SelectHeaderContainer>
      <OptionList
        className="scrollbar-hidden-background"
        toggled={toggled}
        height={height}
      >
        <ul css={listStyles}>
          {arr.map((e, index) => (
            <li key={index} onClick={() => optionSelected(index)}>
              {e}
            </li>
          ))}
        </ul>
      </OptionList>
    </FlexContainer>
  );
};

const DateDropdownList = ({
  format,
  handleChange,
  arr,
  selected,
  height,
  width,
}) => {
  const [toggled, setToggled] = useState(false);

  //toggle options list
  const toggleSelect = () => {
    setToggled(!toggled);
  };
  //option is selected
  const optionSelected = (v) => {
    handleChange(v);
    toggleSelect();
  };

  return (
    <SelectorContainer
      format={format}
      width={width}
      onClick={toggleSelect}
      toggled={toggled}
      arr={arr}
      height={height}
      optionSelected={optionSelected}
      selected={selected}
    />
  );
};

export default DateDropdownList;

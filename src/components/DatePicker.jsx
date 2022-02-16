/** @jsxImportSource @emotion/react */
import { FlexContainer, labelStyles, Container } from "./EmotionStyles";
import DateDropdownList from "./DateDropdownList";
import { useState } from "react";
import { css } from "@emotion/react";

const DatePicker = ({ date, setDate }) => {
  const [dateFormat, setDateFormat] = useState(date.split("/"));
  const handleChange = () => {};
  const marginRight = css`
    margin-right: 40px;
    background-color: white;
  `;
  const formSize = css`
    width: 30vw;
  `;

  return (
    <Container marginLeft="0px">
      <label css={labelStyles}>SELECT YOUR DATE OF BIRTH*</label>{" "}
      <FlexContainer css={formSize}>
        <DateDropdownList
          format="month"
          today={dateFormat[0]}
          handleChange={handleChange}
          css={marginRight}
        />
        <DateDropdownList
          format="day"
          today={dateFormat[1]}
          handleChange={handleChange}
        />
        <DateDropdownList
          format="year"
          today={dateFormat[2]}
          handleChange={handleChange}
        />
      </FlexContainer>
    </Container>
  );
};

export default DatePicker;

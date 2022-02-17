/** @jsxImportSource @emotion/react */
import { FlexContainer, labelStyles, Container } from "./EmotionStyles";
import DateDropdownList from "./DateDropdownList";
import { useState } from "react";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { dateToArray, splitDate } from "../utils/DateFunctions.js";

const DatePicker = ({ dateOfBirth, setDate }) => {
  //get array with date values
  const dateFormat = dateToArray(new Date());
  const userBirthday = splitDate(dateOfBirth);
  //generate array of months
  const months = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {
      month: "long",
    });
  });

  //generate array of days
  const days = Array.from(Array(32).keys());
  //remove number 0
  days.shift();

  //generate array of years from 70 years ago to current date
  const years = Array.from({ length: 71 }, (e, i) => {
    return dateFormat[2] + i - 70;
  });
  //set date of birthday
  const [month, setMonth] = useState(userBirthday[0] - 1);
  const [day, setDay] = useState(userBirthday[1] - 1);
  const [year, setYear] = useState(
    years.findIndex((e) => e === parseInt(userBirthday[2]))
  );

  useEffect(() => {
    setDate([month + 1, day + 1, years[year]].join("/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, day, year]);

  const formSize = css`
    width: 80%;
  `;
  const flexJustify = css`
    justify-content: space-between;
  `;

  return (
    <Container marginLeft="0px" marginBottom="40px" css={formSize}>
      <label css={labelStyles}>SELECT YOUR DATE OF BIRTH*</label>
      <FlexContainer css={flexJustify}>
        <DateDropdownList
          format="Month"
          selected={month}
          handleChange={setMonth}
          arr={months}
          height="220px"
          width="36%"
        />
        <DateDropdownList
          format="Day"
          selected={day}
          handleChange={setDay}
          arr={days}
          width="20%"
        />
        <DateDropdownList
          format="Year"
          selected={year}
          handleChange={setYear}
          arr={years}
          width="26%"
        />
      </FlexContainer>
    </Container>
  );
};

export default DatePicker;

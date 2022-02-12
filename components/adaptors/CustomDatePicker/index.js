import { renderDateString } from "@helpers/component";
import { fas } from "@icons";
import { Col, DatePicker } from "antd";
import dynamic from "next/dynamic";
import React from "react";
import classes from "./CustomDatePicker.module.scss";

const CustomIcon = dynamic(() => import("@components/adaptors/CustomIcon"), {
  ssr: false,
});

const CustomDatePicker = (props) => {
  const { label, ...rest } = props;

  return (
    <Col className={classes.customDatePicker}>
      {label && <label className={classes.datePickerLabel}>{label}</label>}
      <DatePicker
        {...rest}
        format={renderDateString}
        className={classes.datePicker}
        dropdownClassName={classes.datePickerDropdown}
        getPopupContainer={(trigger) => trigger.parentElement}
        suffixIcon={<CustomIcon icon={fas.faChevronDown} />}
      />
    </Col>
  );
};

export default CustomDatePicker;

import { Checkbox } from "antd";
import classes from "./CustomCheckBox.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const CustomCheckBox = (props) => {
  const { label, customClass, ...rest } = props;

  return (
    <Checkbox
      {...rest}
      className={classNames(classes.customCheckbox, customClass)}
    >
      {label}
    </Checkbox>
  );
};

CustomCheckBox.propTypes = {
  label: PropTypes.string,
  customClass: PropTypes.string,
};

CustomCheckBox.defaultProps = {
  label: "",
  customClass: "",
};

export default CustomCheckBox;

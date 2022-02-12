import InlineMessage from "@components/InlineMessage";
import { fas } from "@icons";
import { variants } from "@variants";
import { Col, Select } from "antd";
import classNames from "classnames";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import classes from "./CustomSelect.module.scss";

const CustomIcon = dynamic(() => import("@components/adaptors/CustomIcon"), {
  ssr: false,
});

const { Option } = Select;

const CustomSelect = (props) => {
  const {
    label,
    options,
    error,
    errorMessage,
    handleSelect,
    customClass,
    ...rest
  } = props;

  return (
    <Col className={classes.customSelectWrapper}>
      {label && <label className={classes.selectLabel}>{label}</label>}
      <Select
        {...rest}
        className={classNames(classes.customSelectBox, customClass)}
        dropdownClassName={classes.selectDropdown}
        suffixIcon={<CustomIcon icon={fas.faChevronDown} />}
        getPopupContainer={(trigger) => trigger.parentElement}
      >
        {options.map((option, i) => (
          <Option value={option.value} key={`option-index-${i}`}>
            {option.value}
          </Option>
        ))}
      </Select>
      {error && (
        <InlineMessage
          variant={variants.errorInlineMessage}
          message={errorMessage}
          icon={<CustomIcon icon={fas.faInfoCircle} />}
        />
      )}
    </Col>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  showSearch: PropTypes.bool,
  onChange: PropTypes.func,
  handleSelect: PropTypes.func,
  customClass: PropTypes.string,
};

CustomSelect.defaultProps = {
  label: "",
  options: [],
  error: false,
  errorMessage: "",
  showSearch: false,
  onChange: () => {},
  handleSelect: () => {},
  customClass: "",
};

export default CustomSelect;

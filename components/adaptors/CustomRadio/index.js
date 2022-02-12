import { useState } from "react";
import { Radio, Typography } from "antd";
import { Fragment } from "react";
import classNames from "classnames";
import classes from "./CustomRadio.module.scss";
import PropTypes from "prop-types";

const { Text } = Typography;

const CustomRadioRegular = (props) => {
  const { label, helperText, regular, withBase, ...rest } = props;
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <Fragment>
      {regular && (
        <Radio {...rest} className={classes.customRadioRegular}>
          {label}
          {helperText && (
            <Text className={classes.helperText}>({helperText})</Text>
          )}
        </Radio>
      )}
      {!regular && withBase && (
        <Radio
          {...rest}
          className={classNames(
            classes.customRadioWithBase,
            selected && classes.baseSelected
          )}
          onChange={handleSelect}
          checked={selected}
        >
          {label}
          {helperText && (
            <Text className={classes.helperText}>({helperText})</Text>
          )}
        </Radio>
      )}
    </Fragment>
  );
};

CustomRadioRegular.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  regular: PropTypes.bool,
  withBase: PropTypes.bool,
};

CustomRadioRegular.defaultProps = {
  label: "",
  helperText: "",
  regular: false,
  withBase: false,
};

export default CustomRadioRegular;

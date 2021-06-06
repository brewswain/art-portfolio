import React from "react";

import styles from "../styles/CustomButton.module.scss";

const CustomButton = ({ children, large, ...otherProps }) => (
  <button
    className={`${large ? styles.custom__button__large : ""} ${
      styles.custom__button
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

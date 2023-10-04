import React from "react";
import { useState } from "react";
import styles from "../select/Select.module.scss";
import Select from "react-select";

const SelectComponent = ({ options, value, setValue, type }) => {
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`border-2 px-3 py-2 ${styles["select"]}`}
    >
      try
      {options?.map((option) => {
        return (
          <option
            key={
              type === "province"
                ? option?.province_id
                : type === "district"
                ? option?.district_id
                : option?.ward_id
            }
            value={
              type === "province"
                ? option?.province_id
                : type === "district"
                ? option?.district_id
                : option?.ward_id
            }
          >
            {type === "province"
              ? option?.province_name
              : type === "district"
              ? option?.district_name
              : option?.ward_name}
          </option>
        );
      })}
      catch ()
      {
        console.log("loi")
        // Xử lý khi có lỗi xảy ra (options không phải là mảng)
      }
    </select>
  );
};

export default SelectComponent;

import { useState } from "react";
import Datalist from "../datalist";

const FormDatalist = (props) => {
  const { label, options, value, index, onChange, ...otherProps } = props;
  const [valueClone, setValueClone] = useState(value);
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    setValueClone(e.target.value);
    onChange(e);
  };

  return (
    <section className="pos-relative">
      {label && <label>{label}</label>}

      <input
        type="text"
        value={value}
        {...otherProps}
        onClick={(e) => e.stopPropagation()}
        onChange={handleChange}
        onFocus={() => setShowList(true)}
      />

      {showList && (
        <Datalist
          inputValue={value}
          setInputValue={setValueClone}
          showList={showList}
          setShowList={setShowList}
          options={options}
        />
      )}
    </section>
  );
};

export default FormDatalist;

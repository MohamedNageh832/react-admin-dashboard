import { Close } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import SerialFormConfirm from "./SerialFormConfirm";

const closeBtnProps = {
  type: "button",
  className: "serial__close",
};

const inputProps = {
  className: "serial__input",
  type: "number",
  required: true,
};

const SerialForm = ({ onSubmit, setShowForm }) => {
  const [confirmBtn, setConfirmBtn] = useState(false);
  const [showError, setShowError] = useState(false);
  const serialRef = useRef();
  const formRef = useRef();

  const handleSave = () => {
    if (serialRef.current.value !== "") {
      setConfirmBtn(true);
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      ref={formRef}
      className="table__serial"
      onSubmit={(e) => onSubmit(e, serialRef.current.value)}
    >
      <section className="space-between">
        <h4>ادخل سريال الفاتورة</h4>
        <button onClick={() => setShowForm(false)} {...closeBtnProps}>
          <Close />
        </button>
      </section>
      <input
        ref={serialRef}
        onChange={() => setShowError(false)}
        {...inputProps}
      />
      {showError && <p className="fs-1">ادخل سريال الفاتورة</p>}
      <section className="mt-2">
        {!confirmBtn && (
          <button className="serial__btn" type="button" onClick={handleSave}>
            حفظ
          </button>
        )}

        {confirmBtn && <SerialFormConfirm />}
      </section>
    </form>
  );
};

export default SerialForm;

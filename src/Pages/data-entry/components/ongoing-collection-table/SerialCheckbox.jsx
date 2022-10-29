import { useState } from "react";
import Checkbox from "../../../../Components/form/Checkbox";
import SerialForm from "./SerialForm";

const SerialCheckbox = ({ clientData, selected, setSelected, readOnly }) => {
  const [showForm, setShowForm] = useState(false);
  const { clientId } = clientData;

  const isSelected =
    selected.filter((el) => el.clientId == clientId).length > 0;

  const handleCheckbox = () => {
    const item = selected.filter((el) => el.clientId == clientId);
    const isSelected = item.length > 0;

    if (isSelected) {
      const newSelected = selected.filter((el) => el.clientId !== clientId);
      setSelected(newSelected);
    } else {
      setShowForm((prev) => !prev);
    }
  };

  const handleSubmit = (e, serialNum) => {
    e.preventDefault();

    const newSelected = [...selected, { ...clientData, serialNum }];

    setSelected(newSelected);
    setShowForm(false);
  };

  return (
    <>
      <Checkbox
        checked={isSelected}
        onChange={readOnly ? undefined : handleCheckbox}
        readOnly={readOnly}
      />
      {showForm && (
        <SerialForm setShowForm={setShowForm} onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default SerialCheckbox;

import { HorizontalRule } from "@mui/icons-material";
import { useEffect } from "react";

const DateBounds = ({ values, setValues }) => {
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const dateBoundsFrom = new Date(values["dateFrom"]).getTime();
    const dateBoundsTo = new Date(values["dateTo"]).getTime();

    if (dateBoundsFrom > dateBoundsTo) {
      const dateTo = values["dateFrom"];
      const dateFrom = values["dateTo"];

      setValues({ ...values, dateFrom, dateTo });
    }
  }, [values]);

  return (
    <section className="date-bounds">
      <input
        name="dateFrom"
        value={values["dateFrom"]}
        onChange={onChange}
        className="date-bounds__input"
        type="date"
      />
      <HorizontalRule />
      <input
        name="dateTo"
        value={values["dateTo"]}
        onChange={onChange}
        className="date-bounds__input"
        type="date"
      />
    </section>
  );
};

export default DateBounds;

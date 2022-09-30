const TableForm = ({ tableForm }) => {
  return tableForm.formData.map((data, i) => (
    <tr key={i * 50} className="table__form">
      {data.map((item, i) => (
        <td key={i * 200}>
          {item.element === "input" ? (
            <input
              className="table__input"
              placeholder="اكتب..."
              {...item}
              onChange={tableForm.onChange}
            />
          ) : (
            <select
              className="table__input"
              {...item.props}
              onChange={tableForm.onChange}
            >
              {item.options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          )}
        </td>
      ))}
    </tr>
  ));
};

export default TableForm;

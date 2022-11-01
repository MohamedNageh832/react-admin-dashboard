const TableHead = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <thead
      className={`table__thead ${className ? className : ""}`}
      {...otherProps}
    >
      <tr className="thead__space-in-print">
        <td></td>
      </tr>
      {children}
    </thead>
  );
};

export default TableHead;

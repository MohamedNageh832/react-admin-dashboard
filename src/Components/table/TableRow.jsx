const TableRow = ({ className, children }) => {
  return <tr className={`${className ? className : ""}`}>{children}</tr>;
};

export default TableRow;

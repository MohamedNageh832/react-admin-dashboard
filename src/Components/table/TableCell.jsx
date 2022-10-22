const TableCell = ({ children, ...otherProps }) => {
  return <td {...otherProps}>{children}</td>;
};

export default TableCell;

const TableBody = ({ children, className }) => {
  return <tbody className={`table__tbody ${className}`}>{children}</tbody>;
};

export default TableBody;

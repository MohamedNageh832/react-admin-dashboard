const Table = ({ children, className, ...otherProps }) => {
  return (
    <table {...otherProps} className={`table ${className ? className : ""}`}>
      {children}
    </table>
  );
};

export default Table;

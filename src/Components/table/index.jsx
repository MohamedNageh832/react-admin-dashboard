const Table = ({ children, ...otherProps }) => {
  return (
    <div className="table-holder">
      <table {...otherProps} className="table">
        {children}
      </table>
    </div>
  );
};

export default Table;

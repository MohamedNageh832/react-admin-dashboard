const TableHead = ({ children }) => {
  return (
    <thead className="table__thead">
      <tr className="thead__space-in-print">
        <td></td>
      </tr>
      {children}
    </thead>
  );
};

export default TableHead;

const TableHead = ({ children }) => {
  return (
    <thead className="table__thead">
      <tr class="thead__space-in-print">
        <td></td>
      </tr>
      {children}
    </thead>
  );
};

export default TableHead;

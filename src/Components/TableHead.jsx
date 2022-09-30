const TableHead = ({ thead, tableOptions }) => {
  return (
    <thead className="table__thead">
      <tr>
        {thead.map((header, i) => (
          <td key={i}>{header}</td>
        ))}
        {tableOptions && <td>الخيارات</td>}
      </tr>
    </thead>
  );
};

export default TableHead;

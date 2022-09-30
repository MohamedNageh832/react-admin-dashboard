const NestedTable = ({ thead, rows }) => {
  return (
    <td colSpan={thead.length}>
      <table>
        <thead>
          <tr>
            {thead.map((header) => (
              <td>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr>
              {row.map((column) => (
                <td>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </td>
  );
};

export default NestedTable;

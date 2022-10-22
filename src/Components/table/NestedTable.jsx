import TableBody from "./TableBody";
import TableHead from "./TableHead";

const NestedTable = ({ thead, rows, colspan }) => {
  return (
    <td className="nested-table-holder" colSpan={colspan}>
      <table className="table nested-table">
        <TableHead thead={thead} />
        <TableBody rows={rows} />
      </table>
    </td>
  );
};

export default NestedTable;

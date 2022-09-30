import { Link } from "react-router-dom";
import NestedTable from "./NestedTable";
import TableOptions from "./TableOptions";

const TableBody = ({ rows, nestedTable, tableOptions }) => {
  return (
    <tbody className="table__tbody">
      {rows.map((row, i) => (
        <tr key={i * 100}>
          {row.map((column, i) =>
            typeof column === "object" && !Array.isArray(column) ? (
              <td className="link" key={i}>
                <Link to={`${column.route}/${column.id}`}>{column.value}</Link>
              </td>
            ) : (
              <td key={i}>
                {Array.isArray(column) ? column.join(" - ") : column}
              </td>
            )
          )}
          {tableOptions && (
            <td>
              <TableOptions options={tableOptions} />
            </td>
          )}
          {nestedTable && <NestedTable {...nestedTable} />}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

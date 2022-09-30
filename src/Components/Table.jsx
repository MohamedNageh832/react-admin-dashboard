import TableBody from "./TableBody";
import TableFoot from "./TableFoot";
import TableForm from "./TableForm";
import TableHead from "./TableHead";
import TablePagination from "./TablePagination";

const Table = ({ data, pagination, options, tableForm }) => {
  const { thead, rows, nestedTable } = data;

  return (
    <div className="table-holder">
      {pagination && <TablePagination numberOfPages={pagination} />}
      <table className="table">
        <TableHead thead={thead} tableOptions={options} />
        {rows && (
          <TableBody
            rows={rows}
            nestedTable={nestedTable}
            tableOptions={options}
          />
        )}
        <tfoot>{tableForm && <TableForm tableForm={tableForm} />}</tfoot>
      </table>
    </div>
  );
};

export default Table;

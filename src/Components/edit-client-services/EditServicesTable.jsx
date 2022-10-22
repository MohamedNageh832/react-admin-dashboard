import TableHead from "../table/TableHead";

const EditServicesTable = ({ thead, children }) => {
  return (
    <table className="table">
      <TableHead thead={thead} />

      <tfoot>{children}</tfoot>
    </table>
  );
};

export default EditServicesTable;

import TablePagination from "../table/TablePagination";
import { useState, useEffect, useRef } from "react";
import Table from "../table";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHead from "../table/TableHead";
import TableRow from "../table/TableRow";
import useFetch from "../../Hooks/useFetch";
import TableOptions from "../clients-table-options";
import Ajax from "../../utils/Ajax";
import { Link } from "react-router-dom";
import { CancelOutlined, EditOutlined } from "@mui/icons-material";
import Option from "../dropdown/Option";

const ajax = Ajax();

const CurrentContractsTable = (props) => {
  const { tableData, printData } = props || {};
  const [data, setData] = useState(tableData);
  const [nestedTables, setNestedTable] = useState([]);
  const [showServicesTable, setShowServicesTable] = useState(false);

  const handleNestedTable = async (clientId) => {
    const dataById = nestedTables.filter((el) => el.clientId === clientId);
    const dataExists = dataById.length > 0;

    if (dataExists) {
    }

    const data = await ajax.post("", { clientId });
  };

  const handleEditServices = () => {
    setShowServicesTable(true);
  };

  const handleCancelContract = (clientId) => {
    ajax.post("", { clientId });
  };

  // Handle pagination
  return (
    <div className="table-holder">
      <Table>
        <TableHead>
          <TableRow>
            {printData.contractSerial && (
              <th className="table__heading">{data.thead.contractSerial}</th>
            )}
            <th className="table__heading">{data.thead.clientName}</th>
            {printData.phone && (
              <th className="table__heading">{data.thead.phone}</th>
            )}
            {printData.area && (
              <th className="table__heading">{data.thead.area}</th>
            )}
            {printData.services && (
              <th className="table__heading">{data.thead.services}</th>
            )}
            {printData.status && (
              <th className="table__heading">{data.thead.status}</th>
            )}
            {printData.receiptNumber && (
              <th className="table__heading">{data.thead.receiptNumber}</th>
            )}

            <th className="table__heading">الخيارات</th>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.rows.length > 0 &&
            data.rows.map((row, i) => (
              <TableRow key={i + 200} className="table__row">
                {printData.contractSerial && (
                  <TableCell className="table__cell">
                    {row.contractSerial}
                  </TableCell>
                )}

                <TableCell className="table__cell">
                  <Link
                    className="link"
                    to={`/staff/data-entry/get-client-Profile/${row.clientId}`}
                  >
                    {row.clientName}
                  </Link>
                </TableCell>

                {printData.phone && (
                  <TableCell className="table__cell">{row.phone}</TableCell>
                )}

                {printData.area && (
                  <TableCell className="table__cell">{row.area}</TableCell>
                )}

                {printData.services && (
                  <TableCell className="table__cell">
                    {row.services.join(" - ")}
                  </TableCell>
                )}

                {printData.status && (
                  <TableCell className="table__cell">{row.status}</TableCell>
                )}

                {printData.receiptNumber && (
                  <TableCell className="table__cell">
                    {row.receiptNumber}
                  </TableCell>
                )}
                <TableCell className="table__cell">
                  <TableOptions>
                    <Option
                      icon={<EditOutlined />}
                      onClick={handleEditServices}
                    >
                      تعديل الخدمات
                    </Option>
                    <Option
                      icon={<CancelOutlined />}
                      onClick={() => handleCancelContract(row.clientId)}
                    >
                      الغاء التعاقد
                    </Option>
                  </TableOptions>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CurrentContractsTable;

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
    <Table>
      <TableHead>
        <TableRow>
          {printData.contractSerial && <th>{data.thead.contractSerial}</th>}
          <th>{data.thead.clientName}</th>
          {printData.phone && <th>{data.thead.phone}</th>}
          {printData.area && <th>{data.thead.area}</th>}
          {printData.services && <th>{data.thead.services}</th>}
          {printData.status && <th>{data.thead.status}</th>}
          {printData.receiptNumber && <th>{data.thead.receiptNumber}</th>}

          <th>الخيارات</th>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.rows.length > 0 &&
          data.rows.map((row, i) => (
            <TableRow key={i + 200}>
              {printData.contractSerial && (
                <TableCell>{row.contractSerial}</TableCell>
              )}

              <TableCell>
                <Link
                  className="link"
                  to={`/staff/data-entry/get-client-Profile/${row.clientId}`}
                >
                  {row.clientName}
                </Link>
              </TableCell>

              {printData.phone && <TableCell>{row.phone}</TableCell>}

              {printData.area && <TableCell>{row.area}</TableCell>}

              {printData.services && (
                <TableCell>{row.services.join(" - ")}</TableCell>
              )}

              {printData.status && <TableCell>{row.status}</TableCell>}

              {printData.receiptNumber && (
                <TableCell>{row.receiptNumber}</TableCell>
              )}
              <TableCell>
                <TableOptions>
                  <Option icon={<EditOutlined />} onClick={handleEditServices}>
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
  );
};

export default CurrentContractsTable;

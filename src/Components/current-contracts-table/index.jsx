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
import EditClientServices from "../edit-client-services";

const ajax = Ajax();

const CurrentContractsTable = (props) => {
  const { tableData, printData } = props || {};
  const [data, setData] = useState(tableData);
  const [editServices, setEditServices] = useState(null);

  const startEditServices = async (clientId) => {
    const data = await ajax.post("", { clientId });

    setEditServices(data);
  };

  const handleEditServices = async (servicesData) => {
    const data = await ajax.post("", servicesData);
    setEditServices(null);
  };

  const handleCancelContract = (clientId) => {
    ajax.post("", { clientId });
  };

  // Handle pagination
  return (
    data && (
      <>
        <div className="table-holder">
          <Table>
            <TableHead>
              <TableRow>
                {printData.contractSerial && (
                  <th className="table__heading">
                    {data.thead.contractSerial}
                  </th>
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

                    <TableCell className="table__cell table__cell--clickable">
                      <Link
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
                      <TableCell className="table__cell">
                        {row.status}
                      </TableCell>
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
                          onClick={() => startEditServices(row.clientId)}
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
        {editServices && (
          <EditClientServices
            clientName={editServices.clientName}
            servicesData={editServices.services}
            onSave={handleEditServices}
            setShowList={setEditServices}
          />
        )}
      </>
    )
  );
};

export default CurrentContractsTable;

import TablePagination from "../../../../Components/table/TablePagination";
import { useState } from "react";
import Table from "../../../../Components/table";
import TableBody from "../../../../Components/table/TableBody";
import TableCell from "../../../../Components/table/TableCell";
import TableHead from "../../../../Components/table/TableHead";
import TableRow from "../../../../Components/table/TableRow";
import x from "../../../../Components/test";
import useFetch from "../../../../Hooks/useFetch";
import TableOptions from "../../../../Components/clients-table-options";
import SerialCheckbox from "./SerialCheckbox";
import Ajax from "../../../../utils/Ajax";
import { Link } from "react-router-dom";
import { CancelOutlined, EditOutlined } from "@mui/icons-material";
import Checkbox from "../../../../Components/form/Checkbox";
import Option from "../../../../Components/dropdown/Option";
import { useEffect } from "react";
import PrintTable from "./PrintForm";
import TableFoot from "../../../../Components/table/TableFoot";
import EasyPrint from "../../../../Components/print";
const ajax = Ajax();

const CollectionRequestTable = ({ tableData }) => {
  // const { isPending, error, data } = useFetch("");
  const [isPending, setIsPending] = useState(false);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [nestedTables, setNestedTable] = useState([]);
  const [showServicesTable, setShowServicesTable] = useState(false);
  const [printData, setPrintData] = useState({
    date: true,
    phone: true,
    area: true,
    collector: "",
  });

  const clientsNum = data.rows.length;
  const numberOfPages = Math.ceil(clientsNum / 20);
  const pages = numberOfPages < 1 ? 1 : numberOfPages;

  const AllIsSelected = selected.length === data.rows.length;

  const handleSelectAll = () => {
    if (AllIsSelected) {
      setSelected([]);
    } else {
      setSelected(data.rows);
    }
  };

  console.log(selected);
  const handleCheckboxes = (clientId) => {
    const item = selected.filter((el) => el.clientId === clientId);
    const isSelected = item.length > 0;

    if (isSelected) {
      const newSelected = selected.filter((el) => el.clientId !== clientId);
      setSelected(newSelected);
    } else {
      const newSelected = data.rows.filter((el) => el.clientId === clientId);

      setSelected([...selected, ...newSelected]);
    }
  };

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
    <>
      <PrintTable data={printData} setData={setPrintData} />
      <section
        className="widget widget--table"
        data-print={`المحصل/ ${printData.collector}`}
      >
        {isPending && (
          <div className="overlay overlay--loading">
            <span className="spinner"></span>
          </div>
        )}
        <section className="widget__header">
          <h5 className="clients-num">{clientsNum} عميل</h5>
          <TablePagination
            numberOfPages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
        <EasyPrint>
          <Table>
            <TableHead>
              <TableRow>
                <th className="table__cell--checkbox">
                  <Checkbox
                    checked={AllIsSelected}
                    onChange={handleSelectAll}
                  />
                </th>

                {printData.date && <th>{data.thead.date}</th>}
                <th>{data.thead.clientName}</th>
                {printData.phone && <th>{data.thead.phone}</th>}
                {printData.area && <th>{data.thead.area}</th>}
                <th>{data.thead.deserved}</th>

                <th>الخيارات</th>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.rows.map((row, i) => (
                <TableRow key={i + 200}>
                  <TableCell className="table__cell--checkbox">
                    <Checkbox
                      checked={
                        selected.filter((el) => el.clientId === row.clientId)
                          .length > 0
                      }
                      onChange={() => handleCheckboxes(row.clientId)}
                    />
                  </TableCell>

                  {printData.date && <TableCell>{row.date}</TableCell>}

                  <TableCell>
                    <Link to={``}>{row.clientName}</Link>
                  </TableCell>

                  {printData.phone && <TableCell>{row.phone}</TableCell>}

                  {printData.area && <TableCell>{row.area}</TableCell>}

                  <TableCell onClick={() => handleNestedTable(row.clientId)}>
                    {row.deserved}
                  </TableCell>
                  <TableCell>
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
        </EasyPrint>
      </section>
    </> // TableFoot is necessary for printing
  );
};

export default CollectionRequestTable;

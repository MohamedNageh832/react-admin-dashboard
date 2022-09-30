import { Route, Routes } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import DataEntryHome from "./DataEntryHome";
import CreateContract from "./CreateContract";
import CurrentContracts from "./CurrentContracts";
import OnGoingCollectionRequests from "./OnGoingCollectionRequests";
import CreateCollectionRequest from "./CreateCollectionRequest";

const DataEntryPages = () => {
  const sidebarLinks = [
    {
      text: "الرئيسية",
      path: "/staff/dataentry",
    },
    {
      text: "إدخال تعاقد جديد",
      path: "/staff/dataentry/createcontract",
    },
    {
      text: "التعاقدات الحالية",
      path: "/staff/dataentry/currentContracts",
    },
    {
      text: "طلبات التحصيل الجارية",
      path: "/staff/dataentry/ongoingcollectionrequests",
    },
    {
      text: "إنشاء طلب تحصيل",
      path: "/staff/dataentry/createcollectionrequest",
    },
    {
      text: "الشكاوي",
      path: "/staff/dataentry/complaints",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="content-holder">
        <Sidebar links={sidebarLinks} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DataEntryHome />} />
            <Route path="/createcontract" element={<CreateContract />} />
            <Route path="/currentcontracts" element={<CurrentContracts />} />
            <Route
              path="/ongoingcollectionrequests"
              element={<OnGoingCollectionRequests />}
            />
            <Route
              path="/createcollectionrequest"
              element={<CreateCollectionRequest />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default DataEntryPages;

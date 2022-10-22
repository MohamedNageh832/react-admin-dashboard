import { Route, Routes } from "react-router-dom";
import Navbar from "../../layout/navbar";
import Sidebar from "../../layout/sidebar";
import DataEntryHome from "../../Pages/data-entry/home";
import CreateContract from "../../Pages/data-entry/create-contract";
import CurrentContracts from "../../Pages/data-entry/current-contract";
import OnGoingCollectionRequests from "../../Pages/data-entry/ongoing-collection-request";
import CreateCollectionRequest from "../../Pages/data-entry/create-collection-request";
import Complaints from "../../Pages/data-entry/complaints";
import { useState } from "react";

const DataEntryPages = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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
      notification: "3",
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
      <Navbar setShowSidebar={setShowSidebar} />
      <div className="content-holder">
        {showSidebar && <div className="overlay overlay--white"></div>}
        <Sidebar
          links={sidebarLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
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
            <Route path="/complaints" element={<Complaints />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default DataEntryPages;

import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../../layout/navbar";
import Sidebar from "../../layout/sidebar";
import DataEntryHome from "../../Pages/data-entry/home";
import CreateContract from "../../Pages/data-entry/create-contract";
import CurrentContracts from "../../Pages/data-entry/current-contracts";
import OnGoingCollectionRequests from "../../Pages/data-entry/ongoing-collection-requests";
import CreateCollectionRequest from "../../Pages/data-entry/create-collection-request";
import Complaints from "../../Pages/data-entry/complaints";
import { useState } from "react";
import ClientProfile from "../../Pages/global/client-profile";
import useAuth from "../../Hooks/useAuth";
import DataPreviewer from "../../Components/data-previewer";

const DataEntryPages = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useAuth();

  const sidebarLinks = [
    {
      text: "الرئيسية",
      path: "/staff/data-entry",
    },
    {
      text: "إدخال تعاقد جديد",
      path: "/staff/data-entry/create-contract",
      notification: user?.contractRequests ? user.contractRequests : null,
    },
    {
      text: "التعاقدات الحالية",
      path: "/staff/data-entry/current-contracts",
    },
    {
      text: "طلبات التحصيل الجارية",
      path: "/staff/data-entry/ongoing-collection-requests",
      notification: user?.OnGoingCollectionRequests
        ? user.OnGoingCollectionRequests
        : null,
    },
    {
      text: "إنشاء طلب تحصيل",
      path: "/staff/data-entry/create-collection-request",
    },
    {
      text: "الشكاوي",
      path: "/staff/data-entry/complaints",
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
            <Route path="/create-contract" element={<CreateContract />} />
            <Route
              path="/current-contracts"
              element={
                <DataPreviewer>
                  <CurrentContracts />
                </DataPreviewer>
              }
            />
            <Route
              path="/ongoing-collection-requests"
              element={
                <DataPreviewer>
                  <OnGoingCollectionRequests />
                </DataPreviewer>
              }
            />
            <Route
              path="/create-collection-request"
              element={<CreateCollectionRequest />}
            />
            <Route path="/get-client-Profile/:id" element={<ClientProfile />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default DataEntryPages;

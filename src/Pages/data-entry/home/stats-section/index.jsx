import {
  Check,
  PaymentsOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import useFetch from "../../../../Hooks/useFetch";
import StatsCard from "../../../../Components/stats-card";
import { BASE_URL } from "../../../../utils/constants";
import {
  PreviewButton,
  usePreviewer,
} from "../../../../Components/data-previewer";
import PreviewWrapper from "../../../../Components/data-previewer/preview-wrapper";

const cardProps = [
  {
    bgColor: "var(--red)",
    color: "#fff",
    icon: <PaymentsOutlined />,
    title: "مطلوب التحصيل من",
    data: "remainingCollections",
  },
  {
    bgColor: "var(--green)",
    color: "#fff",
    icon: <Check />,
    title: "تم التحصيل من",
    data: "collected",
  },
  {
    bgColor: "var(--blue)",
    color: "#fff",
    icon: <PeopleAltOutlined />,
    title: "العملاء الحالين",
    data: "currentClients",
  },
  {
    bgColor: "var(--warning)",
    color: "#000",
    icon: <PersonOutlineOutlined />,
    title: "عدد المحصلين",
    data: "collectorsNum",
  },
];

const dataReceived = {
  remainingCollections: 98,
  collected: 23,
  currentClients: 1223,
  collectorsNum: 8,
};

const StatsSection = () => {
  // const { isPending, error, data } = useFetch(
  //   `${BASE_URL}/DataEntry/mainPageStatsFirst?format=json`
  // );

  const { data, isPending, error } = usePreviewer();

  return (
    <PreviewWrapper dataReceived={dataReceived}>
      <section className="stats-section">
        {!data && (
          <section className="widget w-100">
            {isPending && <div className="fs-3">جار التحميل...</div>}
            {error && <div className="fs-3">حدث خطأ!</div>}
          </section>
        )}
        {data &&
          cardProps.map((props, i) => (
            <StatsCard key={i} props={props} data={data[props.data]} />
          ))}
      </section>
    </PreviewWrapper>
  );
};

export default StatsSection;

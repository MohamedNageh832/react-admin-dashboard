import {
  Check,
  PaymentsOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import useFetch from "../../../Hooks/useFetch";
import StatsCard from "../../../Components/stats-card";
import { BASE_URL } from "../../../utils/constants";

const cardProps = [
  {
    bgColor: "var(--red)",
    color: "#fff",
    icon: <PaymentsOutlined />,
    title: "مطلوب التحصيل من",
    // data: "remainingCollections",
    data: "peopleTocollectFrom",
  },
  {
    bgColor: "var(--green)",
    color: "#fff",
    icon: <Check />,
    title: "تم التحصيل من",
    // data: "collected",
    data: "peopleCollectedFrom",
  },
  {
    bgColor: "var(--blue)",
    color: "#fff",
    icon: <PeopleAltOutlined />,
    title: "العملاء الحالين",
    data: "clientsNum",
    data: "currentClients",
  },
  {
    bgColor: "var(--warning)",
    color: "#000",
    icon: <PersonOutlineOutlined />,
    title: "عدد المحصلين",
    data: "collectersNum",
    // data: "collectors",
  },
];

const StatsSection = () => {
  const { isPending, error, data } = useFetch(
    `${BASE_URL}/DataEntry/mainPageStatsFirst?format=json`
  );

  return (
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
  );
};

export default StatsSection;

import {
  Check,
  PaymentsOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import useFetch from "../Hooks/useFetch";
import StatsCard from "./StatsCard";

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
    title: "العملاء الحالين",
    data: "collectors",
  },
];

const StatsSection = () => {
  const { isPending, error, data } = useFetch(
    "https://aswangreen.pythonanywhere.com/api/collection_stats?format=json"
  );

  return (
    <section className="stats-section">
      {isPending && <div>loading...</div>}
      {error && <div>error</div>}
      {data &&
        cardProps.map((props, i) => (
          <StatsCard key={i} props={props} data={data[props.data]} />
        ))}
    </section>
  );
};

export default StatsSection;

import WidgetHeader from "../../../../Components/widget/widget-header";
import CurrentCollectionCards from "./current-collection-cards";

const OngoingCollections = () => {
  return (
    <section className="ongoing-collections">
      <WidgetHeader
        className="h4"
        linkTo="/staff/dataentry/ongoingcollectionrequests"
      >
        طلبات التحصيل الجارية
      </WidgetHeader>

      <CurrentCollectionCards />
    </section>
  );
};

export default OngoingCollections;

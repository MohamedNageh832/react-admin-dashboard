import ongoingCollectionData from "../../../../Components/cardData";
import PreviewWrapper from "../../../../Components/data-previewer/preview-wrapper";
import Widget from "../../../../Components/widget";
import WidgetHeader from "../../../../Components/widget/widget-header";
import CurrentCollectionCards from "./current-collection-cards";

const OngoingCollections = () => {
  return (
    <section className="ongoing-collections">
      <Widget>
        <WidgetHeader
          className="h4"
          linkTo="/staff/data-entry/ongoing-collection-requests"
        >
          طلبات التحصيل الجارية
        </WidgetHeader>

        <PreviewWrapper dataReceived={ongoingCollectionData}>
          <CurrentCollectionCards />
        </PreviewWrapper>
      </Widget>
    </section>
  );
};

export default OngoingCollections;

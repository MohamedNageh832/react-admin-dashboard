import StatsSection from "./StatsSection";
import OngoingCollections from "./ongoing-collections";
import LatestContracts from "./latest-contracts";

const DataEntryHome = () => {
  return (
    <>
      <StatsSection />
      <section className="widgets-holder">
        <LatestContracts />
        <OngoingCollections />
      </section>
    </>
  );
};

export default DataEntryHome;

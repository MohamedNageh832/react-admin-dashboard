import StatsSection from "./stats-section";
import OngoingCollections from "./ongoing-collections";
import LatestContracts from "./latest-contracts";
import DataPreviewer from "../../../Components/data-previewer";

const dataReceived = {
  remainingCollections: 98,
  collected: 23,
  currentClients: 1223,
  collectorsNum: 8,
};

const DataEntryHome = () => {
  return (
    <>
      <DataPreviewer>
        <StatsSection />
      </DataPreviewer>
      <section className="widgets-holder">
        <DataPreviewer>
          <LatestContracts />
        </DataPreviewer>
        <DataPreviewer>
          <OngoingCollections />
        </DataPreviewer>
      </section>
    </>
  );
};

export default DataEntryHome;

import PageMeta from "../../components/common/PageMeta";
import Banner from "../../components/user/EventsPageComponent/Banner/Banner";
import EventsPageComponent from "../../components/user/EventsPageComponent/EventsPageComponent";

const EventsPage = () => {
  return (
    <>
      <PageMeta
        title=" Event management Page"
        description="This is Event management Page"
      />
      <div>
        <Banner />
        <EventsPageComponent />
      </div>
    </>
  );
};

export default EventsPage;

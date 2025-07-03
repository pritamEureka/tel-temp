import PageMeta from "../../components/common/PageMeta";
import HomePageComponent from "../../components/user/HomePageComponent/HomePageComponent";

const HomePage = () => {
  return (
    <>
      <PageMeta
        title=" Event management Page"
        description="This is Event management Page"
      />
      <div>

       <HomePageComponent />
      </div>
    </>
  );
};

export default HomePage;

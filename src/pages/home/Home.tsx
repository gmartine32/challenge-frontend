import Filter from "./components/Filter";
import InfiniteScroll from "./components/InfinityScroll";
import Title from "./components/Title";
import Totalizer from "./components/Totalizer";

const Home = () => {
  return (
    <section className="w-full">
      <Title />
      <Filter />
      <Totalizer />
      <InfiniteScroll />
    </section>
  );
};

export default Home;

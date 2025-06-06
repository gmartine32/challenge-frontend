import { useHomeContext } from "../../../context/HomeContext";

const Totalizer = () => {
  const { cves, totalResults, loading } = useHomeContext();
  return (
  <>
    {!loading && <h3 className="text-2xl text-primary my-5">
      Showing <span className="text-secondary">{cves.length}</span> records of{" "}
      <span className="text-secondary">{totalResults || 0}</span>
    </h3>}
  </>
  );
};

export default Totalizer;

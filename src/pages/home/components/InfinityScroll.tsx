import { useEffect } from "react";
import { useHomeContext } from "../../../context/HomeContext";
import CveCard from "./CveCard";

const InfiniteScroll = () => {
  const { fetchMore, loading, hasMore, cves } = useHomeContext();

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (nearBottom && !loading && hasMore) {
        fetchMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMore, loading, hasMore]);

  return (
    <div id="container-cves" className="p-4 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 border-2 rounded-2xl border-primary">
      {cves.map((cve, index) => {
        const id = cve.cve?.id || `CVE-${index}`;
        const description =
          cve.cve?.descriptions?.[0]?.value || "Without description.";
        const severity =
          cve.cve?.metrics?.cvssMetricV31?.[0]?.cvssData?.baseSeverity ||
          "unknown";
        const link = cve.cve?.references?.[0]?.url || "";
        const props = { id, description, severity, link };
        return <CveCard key={id+index} {...props} />;
      })}

      {loading && (
        <p className="text-center col-span-full text-primary text-2xl">
          Loading more results...
        </p>
      )}
      {!hasMore && (
        <p className="text-center col-span-full text-primary text-2xl">
          No more results.
        </p>
      )}
    </div>
  );
};

export default InfiniteScroll;

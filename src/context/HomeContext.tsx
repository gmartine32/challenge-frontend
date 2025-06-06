import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { useForm } from "../hooks/useForm";
import type { FilterType } from "../types/filter";
import type { CveItem, HomeContextType } from "../types/contextHome";
import api from "../services/api";

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const { form, handlerForm, resetForm } = useForm<FilterType>({
    severity: "",
    startDate: "",
    endDate: "",
    searchText: "",
  });

  const [cves, setCves] = useState<CveItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState<number | null>(null);

  const resultsPerPage = 100;

  const buildUrl = (index: number) => {
    const url = new URL("/api/nvd/rest/json/cves/2.0", window.location.origin);
    url.searchParams.set("resultsPerPage", resultsPerPage.toString());
    url.searchParams.set("startIndex", index.toString());

    if (form.searchText) url.searchParams.set("keywordSearch", form.searchText);
    if (form.severity) url.searchParams.set("cvssV3Severity", form.severity);
    if (form.startDate)
      url.searchParams.set("pubStartDate", `${form.startDate}T00:00:00.000Z`);
    if (form.endDate)
      url.searchParams.set("pubEndDate", `${form.endDate}T23:59:59.000Z`);

    return url.toString();
  };

  const fetchCVEs = useCallback(
    async (index = startIndex) => {
      if (loading || !hasMore) return;

      setLoading(true);
      const url = buildUrl(index);

      try {
        const res = await api.get(url);
        const data = await res.data;
        const newItems = data.vulnerabilities || [];
        setTotalResults(data.totalResults || null);
        if (newItems.length < resultsPerPage) setHasMore(false);

        setCves((prev) => [...prev, ...newItems]);
        setStartIndex((prev) => prev + resultsPerPage);
      } catch (error) {
        console.error("Error fetching CVEs:", error);
        setHasMore(false);
        alert(
          "We're sorry, but the service you're trying to access is currently unavailable due to a server issue on the provider's end. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    },
    [startIndex, form, hasMore, loading]
  );

  const search = () => {
    setTotalResults(null);
    setCves([]);
    setStartIndex(0);
    setHasMore(true);
    fetchCVEs(0);
  };

  const reset = () => {
    resetForm();
    search();
  };

  useEffect(() => {
    fetchCVEs(0);
  }, []);

  const value: HomeContextType = {
    form,
    handlerForm,
    cves,
    loading,
    hasMore,
    fetchMore: fetchCVEs,
    search,
    reset,
    totalResults,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context)
    throw new Error("useHomeContext must be used within HomeProvider");
  return context;
};

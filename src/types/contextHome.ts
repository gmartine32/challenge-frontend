import type { FilterType } from "./filter";

export type CveItem = {
    cve: {
      id: string;
      sourceIdentifier?: string;
      published?: string;
      lastModified?: string;
      vulnStatus?: string;
      descriptions: {
        lang: string;
        value: string;
      }[];
      references?: {
        url: string;
        source?: string;
        tags?: string[];
      }[];
      metrics?: {
        cvssMetricV31?: {
          cvssData: {
            baseScore: number;
            baseSeverity: string;
          };
        }[];
        cvssMetricV30?: {
          cvssData: {
            baseScore: number;
            baseSeverity: string;
          };
        }[];
        cvssMetricV2?: {
          baseScore: number;
          baseSeverity: string;
        }[];
      };
    };
  };
  
  
  export interface HomeContextType {
    form: FilterType;
    handlerForm: (key: keyof FilterType, value: string) => void;
    cves: CveItem[];
    loading: boolean;
    hasMore: boolean;
    fetchMore: () => void;
    search: () => void;
    reset: () => void;
    totalResults: number | null;
  }
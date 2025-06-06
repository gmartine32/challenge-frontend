import { useHomeContext } from "../../../context/HomeContext";
import LabeledInput from "../../../core/LabeledInput/LabeledInput";
import LabeledSelect from "../../../core/LabeledSelect/LabeledSelect";
import SubmitedButton from "../../../core/SubmitedButton/SubmitedButton";

const Filter = () => {
  const { form, handlerForm, search, fetchMore } = useHomeContext();

  const handleSearch = () => {
    search();
    fetchMore();
  };
  return (
    <section className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 border-2 rounded-2xl border-primary items-end">
      <LabeledInput
        label="Start Date"
        type="date"
        value={form.startDate}
        onChange={(e) => handlerForm("startDate", e.target.value)}
        placeholder="Choice a date"
        clearable
      />
      <LabeledInput
        label="End Date"
        type="date"
        value={form.endDate}
        onChange={(e) => handlerForm("endDate", e.target.value)}
        placeholder="Choice a date"
        clearable
      />
      <LabeledSelect
        value={form.severity}
        label="Severity"
        onChange={(value) => handlerForm("severity", value)}
        options={[
          { label: "Critical", value: "CRITICAL" },
          { label: "High", value: "HIGH" },
          { label: "Medium", value: "MEDIUM" },
          { label: "Low", value: "LOW" },
        ]}
        clearable
      />
      <LabeledInput
        label="Search"
        type="text"
        value={form.searchText}
        onChange={(e) => handlerForm("searchText", e.target.value)}
      />
      <SubmitedButton onClick={handleSearch}>
        <span className="text-black">Search</span>
      </SubmitedButton>
    </section>
  );
};

export default Filter;

import { useTasksContext } from "@/entities/todo/model/useTaskContent";
import "./FilterButton.css";


const FILTERS: { key: "all" | "active" | "completed"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];
const FilterButton = () => {
  const { filter, setFilter } = useTasksContext()
  const renderButton = (className: string) => (
    <div className={className}>
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`todo__filter-btn ${filter === key ? "active" : ""}`}
          onClick={() => setFilter(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
  return (
    <>
      {renderButton("todo__footer-filters")}
      {renderButton("todo__footer-filters-mobile")}
    </>
  );
};

export default FilterButton;

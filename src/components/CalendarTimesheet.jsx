import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays, Clock3 } from "lucide-react";
import { timesheetEntries } from "../data/timesheetEntries";

const CalendarTimesheet = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1));
  const [selectedDate, setSelectedDate] = useState("02/02/2026");

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // GROUP ENTRIES
  const entriesByDate = useMemo(() => {
    return timesheetEntries.reduce((acc, entry) => {
      if (!acc[entry.date]) {
        acc[entry.date] = [];
      }

      acc[entry.date].push(entry);

      return acc;
    }, {});
  }, []);

  const selectedEntries = entriesByDate[selectedDate] || [];

  // TOTAL HOURS
  const totalHours = selectedEntries.reduce((total, entry) => {
    const [hours, minutes] = entry.time.split(":").map(Number);

    return total + hours + minutes / 60;
  }, 0);

  const changeMonth = (direction) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const formatDate = (day) => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");

    return `${mm}/${dd}/${year}`;
  };

  const days = [];

  // EMPTY SLOTS
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} />);
  }

  // CALENDAR DAYS
  for (let day = 1; day <= totalDays; day++) {
    const formattedDate = formatDate(day);

    const hasEntries = entriesByDate[formattedDate];

    const isSelected = selectedDate === formattedDate;

    days.push(
      <button
        key={day}
        onClick={() => setSelectedDate(formattedDate)}
        className={`
          relative min-h-[85px] sm:min-h-[100px]
          rounded-2xl border p-2 sm:p-3
          transition-all duration-200
          flex flex-col justify-between text-left
          hover:-translate-y-0.5
          ${
            isSelected
              ? "bg-blue-900 border-blue-900 text-white shadow-lg"
              : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-200"
          }
        `}
      >
        <span className="text-sm sm:text-base font-bold">{day}</span>

        {hasEntries && (
          <div
            className={`
              text-[10px] sm:text-xs font-semibold
              px-2 py-1 rounded-full w-fit
              ${
                isSelected
                  ? "bg-white text-blue-900"
                  : "bg-blue-100 text-blue-900"
              }
            `}
          >
            {hasEntries.length} task{hasEntries.length > 1 ? "s" : ""}
          </div>
        )}

        {hasEntries && (
          <div
            className={`
              absolute top-2 right-2 w-2 h-2 rounded-full
              ${isSelected ? "bg-white" : "bg-blue-700"}
            `}
          />
        )}
      </button>,
    );
  }

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* CALENDAR */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => changeMonth(-1)}
              className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-blue-50 transition"
            >
              <ChevronLeft className="h-5 w-5 text-blue-900" />
            </button>

            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-blue-900" />

              <h2 className="text-lg sm:text-2xl font-bold text-blue-900">
                {monthName}
              </h2>
            </div>

            <button
              onClick={() => changeMonth(1)}
              className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-blue-50 transition"
            >
              <ChevronRight className="h-5 w-5 text-blue-900" />
            </button>
          </div>

          {/* WEEK DAYS */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3 mb-3">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-xs sm:text-sm font-bold text-blue-900 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3">{days}</div>
        </div>

        {/* SIDEBAR */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-6 h-fit">
          {/* TITLE */}
          <div className="border-b border-gray-100 pb-4 mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
              Daily Activities
            </h2>

            <p className="text-sm text-gray-500 mt-1">{selectedDate}</p>

            <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-blue-900">
              <Clock3 className="h-4 w-4" />
              Total Hours: {totalHours.toFixed(1)} hrs
            </div>
          </div>

          {/* ACTIVITIES */}
          <div className="space-y-4 max-h-[650px] overflow-y-auto pr-1">
            {selectedEntries.length > 0 ? (
              selectedEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="
                    rounded-2xl border border-gray-200
                    p-4 hover:shadow-md transition-all
                    bg-gradient-to-br from-white to-blue-50/40
                  "
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[11px] sm:text-xs font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
                      {entry.task}
                    </span>

                    <span className="text-sm font-bold text-blue-950 whitespace-nowrap">
                      {entry.time}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <h3 className="font-semibold text-blue-950 leading-relaxed text-sm sm:text-base">
                    {entry.description}
                  </h3>

                  {/* PROJECT */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-900" />

                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      {entry.project}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CalendarDays className="h-12 w-12 text-gray-300 mb-3" />

                <p className="text-gray-500 font-medium">
                  No activities for this day
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTimesheet;

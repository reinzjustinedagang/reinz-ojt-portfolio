import data_encoding from "../pdf/data-encoding.pdf";
import meeting from "../pdf/meeting.pdf";
import activity from "../pdf/activity.pdf";
import regression_testing from "../pdf/regression-testing.pdf";
import all_1 from "../pdf/all-1.pdf";
import all_2 from "../pdf/all-2.pdf";

export const dailyTimeRecords = [
  {
    id: "dtr1",
    type: "Data Encoding",
    source: data_encoding,
  },
  {
    id: "dtr2",
    type: "Activity",
    source: activity,
  },
  {
    id: "dtr3",
    type: "Regression Testing",
    source: regression_testing,
  },
  {
    id: "dtr4",
    type: "Meeting",
    source: meeting,
  },
  {
    id: "dtr5",
    type: "All",
    source: all_1,
  },
  {
    id: "dtr6",
    type: "All",
    source: all_2,
  },
];

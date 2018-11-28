// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: true,
    text: 'Sign contract for "What are conference organizers afraid of?"'
  },
  {
    checked: false,
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?"
  },
  {
    checked: true,
    text:
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
  }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Country"];
const tbody = [
  {
    className: "table-success",
    data: ["Dakota Rice",  "$36,738"]
  },
  {
    className: "",
    data: ["Minerva Hooper",  "$23,789"]
  },
  {
    className: "table-info",
    data: ["Sage Rodriguez",  "$56,142"]
  },
  {
    className: "",
    data: ["Philip Chaney",  "$38,735"]
  },
  {
    className: "table-danger",
    data: ["Doris Greene",  "$63,542"]
  },
  { className: "", data: ["Mason Porter", "$78,615"] },
  {
    className: "table-warning",
    data: ["Jon Porter",  "$98,615"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };

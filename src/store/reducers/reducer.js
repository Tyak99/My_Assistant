import * as actionTypes from "../constants/actionTypes";

const initialState = {
     thead: ["Name", "Country"],
     tbody: [
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
      ],
      
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.ADD_EXPENSE:
      const newExp = {
        className: '',
        data: [action.payload.name, action.payload.amount]
      }
        return {
          ...state,
          tbody: state.tbody.concat(newExp)
        }
      default:
        return state
    }
}
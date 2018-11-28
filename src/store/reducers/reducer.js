import * as actionTypes from "../constants/actionTypes";


const initialState = {
  thead: ["Name", "Amount"],
  tbody: null,
  error: null,
  loading: false,
}


export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_EXPENSE_START: 
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_EXPENSE_SUCCESS:
      const result = Object.values(action.data)
      return {
        ...state,
        loading: false,
        tbody: result, 
      }
    case actionTypes.GET_EXPENSE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
        
      }
    case actionTypes.ADD_EXPENSE_START:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.ADD_EXPENSE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default: 
      return state
  }
}
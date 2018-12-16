import * as actionTypes from "../constants/actionTypes";
import moment from 'moment'

const initialState = {
  thead: ["Name", "Amount"],
  tbody: null,
  error: null,
  loading: false,
  Addloading: false,
}


export const expense = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_EXPENSE_START: 
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_EXPENSE_SUCCESS:
     const Today = moment().format("DD/MM/YYYY")
      const result = Object.values(action.data)
      const newResult = (result) => {
        if(result.createdAt == Today) {
          return true
        }
      }
      return {
        ...state,
        loading: false,
        tbody: action.data, 
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
        Addloading: true,
      }
    case actionTypes.ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        Addloading: false,
      }
    case actionTypes.ADD_EXPENSE_FAILED:
      return {
        ...state,
        Addloading: false,
        error: action.error
      }
    default: 
      return state
  }
}
import * as actionTypes from "../constants/actionTypes";


const initialState = {
    tasks: [
        {
            id: 'hdshj',
          checked: true,
          text: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
            id: 'sdhga',
          checked: false,
          text: "Meeting with John Doe for the movie"
        },
        {
            id: 'hsaha',
            checked: false,
            text: "Lines From Great Russian Literature? Or E-mails From My Boss?"
          },
        {
            id: 'yaewe',
          checked: true,
          text:
            "Finish up this website for the publuc to use"
        }
      ]
}

export const tasks = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.REMOVE_TASK:
            const sub = state.tasks.filter(task => task.id !== action.index)
            return {
                ...state,
                tasks: sub
            }
    }
    return state
}
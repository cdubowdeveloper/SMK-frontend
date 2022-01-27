import { WITHDRAW_TASK, DEPOSIT_TASK } from "./taskTypes";

const initialState = {
    // Eventually all of this will be pulled from the db
    // For now, here are some placeholders
    
    name: "Caleb",
    saveBalance: 10,
    spendBalance: 20,
    shareBalance: 30,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT_TASK:
        switch (action.payload.bank) {
            case "Share":
                return {
                    ...state,
                    shareBalance: state.shareBalance + action.payload.amt,
                };
                break;
            case "Save":
                return {
                    ...state,
                    saveBalance: state.saveBalance + action.payload.amt,
                };
                break;
            case "Spend":
                return {
                    ...state,
                    spendBalance: state.spendBalance + action.payload.amt
                };
                break;
            default:
                return state;
        }
        
    case WITHDRAW_TASK:
        switch (action.payload.bank) {
            case "Share":
                return {
                    ...state,
                    shareBalance: state.shareBalance - action.payload.amt
                };
                break;
            case "Save":
                return {
                    ...state,
                    saveBalance: state.saveBalance - action.payload.amt
                };
                break;
            case "Spend":
                return {
                    ...state,
                    spendBalance: state.spendBalance - action.payload.amt
                };
                break;
            default:
                return state;
        }
        

    default:
      return state;
  }
};
export default taskReducer;

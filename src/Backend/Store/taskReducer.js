import { WITHDRAW_TASK, DEPOSIT_TASK } from "./taskTypes";

const initialState = {
  // Eventually all of this will be pulled from the db
  // For now, here are some placeholders

  name: "Caleb",
  saveBalance: 10.00,
  spendBalance: 20.00,
  shareBalance: 30.00,

//   balances: {Save: 10.00, Spend: 20.00, Share: 30.00},

  transactions: [
    { bank: 'Share', amt: 5.2, description: "Money from lunch", date: "Mon, Oct 25th" },
    { bank: 'Save', amt: 1.6, description: "FOund some money", date: "Tue, Oct 26th" },
    { bank: 'Spend', amt: -5, description: "Bought icecream", date: "Wed, Oct 27th" },


],
};

function taskReducer(state = initialState, action) {
    
    
    switch (action.type) {

      case DEPOSIT_TASK:
          switch (action.payload.bank) {
              case "Share":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: 'Share', amt: 5.2, description: "Money from lunch", date: "Mon, Oct 25th" }],
                      shareBalance: state.shareBalance + action.payload.amt,
                  };
                  break;
              case "Save":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: 'Share', amt: 5.2, description: "Money from lunch", date: "Mon, Oct 25th" }],
                      saveBalance: state.saveBalance + action.payload.amt,
                  };
                  break;
              case "Spend":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: 'Share', amt: 5.2, description: "Money from lunch", date: "Mon, Oct 25th" }],
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
                      transactions: [...state.transactions, { bank: 'Share', amt: 5.2, description: "Money from lunch", date: "Mon, Oct 25th" }],
                      shareBalance: state.shareBalance - action.payload.amt
                  };
                  break;
              case "Save":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: 'Share', amt: 5.2, description: "Money from lunch", date: "Mon, Oct 25th" }],
                      saveBalance: state.saveBalance - action.payload.amt
                  };
                  break;
              case "Spend":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: 'Share', amt: 5.2, description: "Money from lunch", date: "Mon, Oct 25th" }],
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
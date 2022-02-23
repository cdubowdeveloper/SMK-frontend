import { WITHDRAW_TASK, DEPOSIT_TASK } from "./taskTypes";

const initialState = {
  // Eventually all of this will be pulled from the db
  // For now, here are some placeholders

  name: "Caleb",
  saveBalance: 5.20,
  spendBalance: 18.4,
  shareBalance: 0.00,

//   balances: {Save: 10.00, Spend: 20.00, Share: 30.00},

  transactions: [
    { bank: 'Save', amt: 5.2, description: "Found some money", date: "Tue, Oct 26th" },
    { bank: 'Spend', amt: 20, description: "Mom gave me $20", date: "Wed, Oct 27th" },
    { bank: 'Spend', amt: -1.6, description: "Bought icecream", date: "Fri, Oct 29th" },
   


],
};

function taskReducer(state = initialState, action) {
    
    
    
    switch (action.type) {

      case DEPOSIT_TASK:
          switch (action.payload.bank) {
              case "Share":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: action.payload.bank, amt: action.payload.amt, description: action.payload.description, date: action.payload.date }],
                      shareBalance: (state.shareBalance + action.payload.amt),
                  };
                  break;
              case "Save":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: action.payload.bank, amt: action.payload.amt, description: action.payload.description, date: action.payload.date }],
                      saveBalance: state.saveBalance + action.payload.amt,
                  };
                  break;
              case "Spend":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: action.payload.bank, amt: action.payload.amt, description: action.payload.description, date: action.payload.date }],
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
                      transactions: [...state.transactions, { bank: action.payload.bank, amt: action.payload.amt, description: action.payload.description, date: action.payload.date }],
                      shareBalance: state.shareBalance - action.payload.amt
                  };
                  break;
              case "Save":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: action.payload.bank, amt: action.payload.amt, description: action.payload.description, date: action.payload.date }],
                      saveBalance: state.saveBalance - action.payload.amt
                  };
                  break;
              case "Spend":
                  return {
                      ...state,
                      transactions: [...state.transactions, { bank: action.payload.bank, amt: action.payload.amt, description: action.payload.description, date: action.payload.date }],
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
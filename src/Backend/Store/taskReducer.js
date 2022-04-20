import {
  WITHDRAW_TASK,
  DEPOSIT_TASK,
  CREATE_CHILD_TASK,
  CREATE_PARENT_TASK,
  LOAD_CHILD_TASK,
  LOAD_PARENT_TASK,
  LOAD_SELECTED_CHILD_TASK,
} from "./taskTypes";
import { getChildByFireId, getParentByFireId } from "../backend";

const initialState = {
  // Eventually all of this will be pulled from the db
  // For now, here are some placeholders
  fireId: "",
  birthday: "",
  firstName: "Caleb",
  lastName: "Dubow",
  saveBalance: 5.2,
  spendBalance: 18.4,
  shareBalance: 0.0,
  isParent: true,
  isLinked: true,
  linkcode: "fdf32",
  transactions: [
    // {
    //   bank: "Save",
    //   amt: 5.2,
    //   description: "Found some money",
    //   date: "Tue, Oct 26th",
    // },
    // {
    //   bank: "Spend",
    //   amt: 20,
    //   description: "Mom gave me $20",
    //   date: "Wed, Oct 27th",
    // },
    // {
    //   bank: "Spend",
    //   amt: -1.6,
    //   description: "Bought icecream",
    //   date: "Fri, Oct 29th",
    // },
  ],

  //This field will only be populated if the user is a parent
  kids: [],

  selectedKid: {
    _id: "6260328325f25e32d83686d6",
    username: "childacc2",
    fireID: "0AbPo43RycZR8naPlW1cW8a46yN2",
    firstName: "Piper",
    lastName: "Dubow",
    birthDate: "2005-06-14T05:00:00.000Z",
    saveBalance: 0,
    spendBalance: 0,
    shareBalance: 0,
    activated: true,
    linkcode: "5WFCF",
    isParent: false,
    transactions: [],
    goals: [],
    __v: 0,
  },
};

export function pullFromDatabase(state = initialState, fireId) {
  var data = getChildByFireId(fireId);
  console.log(data);
}

export function reloadData(state = initialState) {
  if (state.isParent) {
    var data = getParentByFireId(state.fireId);
  } else {
    var data = getChildByFireId(state.fireId);
  }
}

export default function taskReducer(state = initialState, action) {
  console.log("FIRE " + action.type);
  switch (action.type) {
    case CREATE_CHILD_TASK:
      return {
        ...state,
        fireId: action.payload.fireId,
        birthday: action.payload.birthday,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        saveBalance: action.payload.saveBalance,
        spendBalance: action.payload.spendBalance,
        shareBalance: action.payload.shareBalance,
        isParent: action.payload.isParent,
        isLinked: action.payload.isLinked,
        linkcode: action.payload.linkcode,
      };
    case LOAD_CHILD_TASK:
      return {
        ...state,
        fireId: action.payload.fireId,
        birthday: action.payload.birthday,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        saveBalance: action.payload.saveBalance,
        spendBalance: action.payload.spendBalance,
        shareBalance: action.payload.shareBalance,
        isParent: action.payload.isParent,
        isLinked: action.payload.isLinked,
        linkcode: action.payload.linkcode,
      };

    case LOAD_SELECTED_CHILD_TASK:
      return {
        ...state,
        selectedKid: {
          fireId: action.payload.fireId,
          birthday: action.payload.birthday,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          saveBalance: action.payload.saveBalance,
          spendBalance: action.payload.spendBalance,
          shareBalance: action.payload.shareBalance,
          isParent: action.payload.isParent,
          isLinked: action.payload.isLinked,
          linkcode: action.payload.linkcode,
        },
      };
    case CREATE_PARENT_TASK:
      return {
        ...state,
        fireId: action.payload.fireId,
        isParent: action.payload.isParent,
        kids: action.payload.kids,
      };

    case LOAD_PARENT_TASK:
      return {
        ...state,
        fireId: action.payload.fireId,
        isParent: action.payload.isParent,
        kids: action.payload.kids,
      };

    case DEPOSIT_TASK:
      switch (action.payload.bank) {
        case "Share":
          return {
            ...state,
            transactions: [
              ...state.transactions,
              {
                bank: action.payload.bank,
                amt: action.payload.amt,
                description: action.payload.description,
                date: action.payload.date,
              },
            ],
            shareBalance: state.shareBalance + action.payload.amt,
          };
          break;
        case "Save":
          return {
            ...state,
            transactions: [
              ...state.transactions,
              {
                bank: action.payload.bank,
                amt: action.payload.amt,
                description: action.payload.description,
                date: action.payload.date,
              },
            ],
            saveBalance: state.saveBalance + action.payload.amt,
          };
          break;
        case "Spend":
          return {
            ...state,
            transactions: [
              ...state.transactions,
              {
                bank: action.payload.bank,
                amt: action.payload.amt,
                description: action.payload.description,
                date: action.payload.date,
              },
            ],
            spendBalance: state.spendBalance + action.payload.amt,
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
            transactions: [
              ...state.transactions,
              {
                bank: action.payload.bank,
                amt: -action.payload.amt,
                description: action.payload.description,
                date: action.payload.date,
              },
            ],
            shareBalance: state.shareBalance - action.payload.amt,
          };
          break;
        case "Save":
          return {
            ...state,
            transactions: [
              ...state.transactions,
              {
                bank: action.payload.bank,
                amt: -action.payload.amt,
                description: action.payload.description,
                date: action.payload.date,
              },
            ],
            saveBalance: state.saveBalance - action.payload.amt,
          };
          break;
        case "Spend":
          return {
            ...state,
            transactions: [
              ...state.transactions,
              {
                bank: action.payload.bank,
                amt: -action.payload.amt,
                description: action.payload.description,
                date: action.payload.date,
              },
            ],
            spendBalance: state.spendBalance - action.payload.amt,
          };
          break;
        default:
          return state;
      }

    default:
      return state;
  }
}

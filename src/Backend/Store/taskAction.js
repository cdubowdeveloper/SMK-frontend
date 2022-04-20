import {
  WITHDRAW_TASK,
  DEPOSIT_TASK,
  CREATE_CHILD_TASK,
  CREATE_PARENT_TASK,
  LOAD_CHILD_TASK,
  LOAD_PARENT_TASK,
} from "./taskTypes";
import moment from "moment";

function withdrawTask(bank, amt, description) {
  let date = moment().format("ddd, MMM Do");
  return {
    type: WITHDRAW_TASK,
    payload: { bank, amt, description, date },
  };
}

function depositTask(bank, amt, description) {
  let date = moment().format("ddd, MMM Do");
  return {
    type: DEPOSIT_TASK,
    payload: { bank, amt, description, date },
  };
}

function createChildTask(props) {
  console.log(props.child);

  let fireId = props.child.fireID;
  let birthday = props.child.birthDate;
  let firstName = props.child.firstName;
  let lastName = props.child.lastName;
  let saveBalance = props.child.saveBank;
  let spendBalance = props.child.spendBank;
  let shareBalance = props.child.shareBank;
  let isLinked = props.child.activated;
  let transactions = props.child.transactions;
  let linkcode = props.linkcode;

  return {
    type: CREATE_CHILD_TASK,
    payload: {
      fireId,
      birthday,
      firstName,
      lastName,
      saveBalance,
      spendBalance,
      shareBalance,
      isLinked,
      linkcode,
    },
  };
}

function loadChildTask(props) {
  console.log(props);

  let fireId = props.fireID;
  let birthday = props.birthDate;
  let firstName = props.firstName;
  let lastName = props.lastName;
  let saveBalance = props.saveBank;
  let spendBalance = props.spendBank;
  let shareBalance = props.shareBank;
  let isLinked = props.activated;
  let transactions = props.transactions;
  let linkcode = props.linkcode;

  return {
    type: LOAD_CHILD_TASK,
    payload: {
      fireId,
      birthday,
      firstName,
      lastName,
      saveBalance,
      spendBalance,
      shareBalance,
      isLinked,
      linkcode,
    },
  };
}

function loadParentTask(props) {
  console.log(props[0]);

  let fireId = props[0].fireID;
  let kids = props[0].kids;
  let username = props[0].username;
  let isParent = props[0].isParent;

  return {
    type: LOAD_PARENT_TASK,
    payload: {
      fireId,
      kids,
      username,
      isParent,
    },
  };
}

function createParentTask(props) {
  console.log(props.fireID);
  return {
    type: CREATE_PARENT_TASK,
    payload: {},
  };
}

export {
  withdrawTask,
  depositTask,
  createChildTask,
  createParentTask,
  loadChildTask,
  loadParentTask,
};

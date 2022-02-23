import { WITHDRAW_TASK, DEPOSIT_TASK } from "./taskTypes";
import moment from "moment";

function withdrawTask(bank, amt, description){
    let date = moment().format('ddd, MMM Do');
    return {
        type: WITHDRAW_TASK,
        payload: {bank, amt, description, date}
    };
}

function depositTask(bank, amt, description){
    let date = moment().format('ddd, MMM Do');
    return {
      type: DEPOSIT_TASK,
      payload: {bank, amt, description, date} 
    };
}



const actionCreators = {
	withdrawTask,
	depositTask,
};

export { withdrawTask, depositTask };

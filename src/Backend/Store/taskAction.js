import { WITHDRAW_TASK, DEPOSIT_TASK } from "./taskTypes";

function withdrawTask(bank, amt, description){
    return {
        type: WITHDRAW_TASK,
        payload: {bank, amt, description}
    };
}

function depositTask(bank, amt, description){
    return {
      type: DEPOSIT_TASK,
      payload: {bank, amt, description}
    };
}



const actionCreators = {
	withdrawTask,
	depositTask,
};

export { withdrawTask, depositTask };

import { WITHDRAW_TASK, DEPOSIT_TASK } from "./taskTypes";

function withdrawTask(bank, amt){
    return {
        type: WITHDRAW_TASK,
        payload: {bank, amt}
    };
}

function depositTask(bank, amt){
    return {
      type: DEPOSIT_TASK,
      payload: {bank, amt}
    };
}



const actionCreators = {
	withdrawTask,
	depositTask,
};

export { withdrawTask, depositTask };

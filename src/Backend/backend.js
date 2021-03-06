import axios from "axios";

//Create Parent
export async function createParent(username, fireID) {
  const response = await axios({
    method: "POST",
    url: `https://super-money-kids.herokuapp.com/api/users/parent`,
    data: {
      username,
      fireID,
    },
  });
  // do something with returned parent?
  return response.data;
}

//Proper function documentation
export async function createChild(
  username,
  fireID,
  firstName,
  lastName,
  birthday
) {
  //Insert fetch function
  const birthDate = new Date(birthday);
  const response = await axios({
    method: "POST",
    url: `https://super-money-kids.herokuapp.com/api/users/child`,
    data: {
      username,
      fireID,
      firstName,
      lastName,
      birthDate,
    },
  });
  return response.data;
}

export async function getChildByFireId(fireID) {
  const response = await axios({
    method: "GET",
    url: `https://super-money-kids.herokuapp.com/api/users/child/fire/${fireID}`,
  });

  return response.data;
}

export async function getParentByFireId(fireID) {
  const response = await axios({
    method: "GET",
    url: `https://super-money-kids.herokuapp.com/api/users/parent/fire/${fireID}`,
  });

  return response.data;
}

//Start transaction
export async function startTransaction(message, category, value, fireID) {
  const response = await axios({
    method: "POST",
    url: `https://super-money-kids.herokuapp.com/api/users/child/transaction/${fireID}`,
    data: {
      message,
      category,
      value,
    },
  });
  return response.data;
}
//Get transact by id
export async function getTransactionById(id) {
  const response = await axios({
    method: "GET",
    url: `https://super-money-kids.herokuapp.com/api/users/child/transaction/${id}`,
  });

  return response.data;
}
//Get transact by child fireId
export async function getTransactionByChildFireId(fireId) {
  const response = await axios({
    method: "GET",
    url: `https://super-money-kids.herokuapp.com/api/users/child/transaction/byChild/${fireId}`,
  });
  return response.data;
}
//Approve transaction
export async function approveTransaction(transactionId) {
  const response = await axios({
    method: "POST",
    url: `https://super-money-kids.herokuapp.com/api/transaction/approve/${transactionId}`,
  });
  return response.data;
}

export async function addChildToParent(parentFirID, code) {
  const response = await axios({
    method: "PUT",
    url: `https://super-money-kids.herokuapp.com/api/users/parent/addChild/${parentFirID}`,
    data: {
      childId: code,
    },
  });
  return response.data;
}

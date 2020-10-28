export const CheckResponse = (res) => {
  let obj = {
    payload: undefined,
    error: undefined
  }

  if(res.statusCode === 200){
    obj.payload = res.data;
  }
  else{
    obj.error = res.status;
  }

  return obj;
}
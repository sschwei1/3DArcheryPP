export const CheckResponse = (res) => {
  if(res.statusCode == 200){
    return res.data;
  }
  else{
    return res.status;
  }
}
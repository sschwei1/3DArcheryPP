export const validateForm = (values, formFields) => {
  let errors = {};

  for(const fieldName in formFields){
    console.log(formFields[fieldName]);
    const field = formFields[fieldName];
    let errorMsg = field?.validator?.validate(field, values[field.props.name]) ?? '';
    if(errorMsg){
      errors = {
        ...errors,
        [field.props.name]: errorMsg
      };
    }
  }
  return errors;
};

export const validateFunc = (ctx, val) => {
  let errorMsg;
  console.log("Log:", val);
  ctx.validator.rules.forEach((rule) => {
    if(rule.checkError(val) && !errorMsg){
      errorMsg = rule.error(ctx);
    }
  });

  return errorMsg;
};
import React, { useState } from 'react'
import { FormError } from '../CreateEventForm/FormElements';
import {
  CountTypeWrapper,
  CountTypeTitle,
  CountTypeSelectWrapper,
  CountTypeField
} from './CountTypeSelectElements';

const CountTypeSelect = ({countTypeSelectData, handleChange, error}) => {
  const [selectedType, setSelectedType] = useState();

  const setCountTypeValue = (id) => {
    setSelectedType(id);
    handleChange({target:{name:"countTypeId", value:id}});
  }

  return (
    <CountTypeWrapper>
      <CountTypeTitle>
        {countTypeSelectData.title}
      </CountTypeTitle>
      <CountTypeSelectWrapper>
        {
          countTypeSelectData.selectFields.map((field, index) => (
            <CountTypeField
              key={index}
              onClick={() => setCountTypeValue(field.id)}
              $isSelected={(field.id === selectedType)}
              >
              {field.name}
            </CountTypeField>
          ))
        }
      </CountTypeSelectWrapper>
      {error && <FormError>{error}</FormError>}
    </CountTypeWrapper>
  )
}

export default CountTypeSelect

import {useState} from 'react';

export const useFilter = (filterFields) => {
  const [filter, setFilter] = useState(
    filterFields.reduce((map, filter) => ({
      ...map,
      [filter.props.name]: ''
    }))
  );
  
  const handleFilterChange = e => {
    console.log(filter);
    const {name, value} = e.target;
    setFilter({
      ...filter,
      [name]:value ?? ''
    });
  };

  return {handleFilterChange, filter};
}
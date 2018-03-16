export const checkWatchFilter = (watch, filters) => {
  let valid = true;
  if(!(watch.brand === filters.brand.value) && filters.brand.value !== '') {
    valid = false;
  }

  if( !(watch.model.includes(filters.model.value)) && filters.model.value !== '' ) {
    valid = false;
  }

  if( !(watch.ref.includes(filters.ref.value)) && filters.ref.value !== '') {
    valid = false;
  }
  
  return valid;
};

export default checkWatchFilter;
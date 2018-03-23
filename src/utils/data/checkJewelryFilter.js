export const checkJewelryFilter = (jewelry, filters) => {
  let valid = true;

  // Check brand
  if (!(jewelry.brand === filters.brand.value) && filters.brand.value !== '') {
    valid = false;
  }

  console.log(jewelry)
  // Check Name
  if (!(jewelry.name.toLowerCase().includes(filters.name.value.toLowerCase())) && filters.name.value !== '' ) {
    valid = false;
  }

  return valid;
}

export default checkJewelryFilter;
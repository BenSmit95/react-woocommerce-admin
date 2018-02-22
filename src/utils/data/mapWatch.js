

export const mapWatchAttribute = (attribute) => {
  switch(attribute.id) {
    case 5: return ('watchBrand');
    case 22: return ('watchModel');
    case 23: return ('watchRef');
    case 1: return ('watchMovement');
    case 3: return ('watchCaseMaterial');
    case 4: return ('watchBraceletMaterial');
    case 8: return ('watchGender');
    case 6: return ('watchCondition');
    case 7: return ('watchYear');
    case 38: return ('watchAvailability');
    case 19: return ('watchDomesticEstimate');
    case 20: return ('watchContinentalEstimate');
    case 21: return ('watchWorldwideEstimate');
    default: return (null);
  }
};

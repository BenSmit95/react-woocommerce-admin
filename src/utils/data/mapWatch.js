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
    case 39: return ('watchYear');
    case 38: return ('watchAvailability');
    case 19: return ('watchDomesticEstimate');
    case 20: return ('watchContinentalEstimate');
    case 21: return ('watchWorldwideEstimate');
    case 9: return ('watchBraceletColor');
    case 10: return ('watchClasp');
    case 11: return ('watchClaspMaterial');
    case 25: return ('watchLugWidth');
    case 26: return ('watchBuckleWidth');
    case 27: return ('watchBraceletLengthLong');
    case 28: return ('watchBraceletLengthShort');
    case 29: return ('watchBraceletThickness');
    case 31: return ('watchCaseThickness');
    case 12: return ('watchCaseWaterproof');
    case 14: return ('watchCaseGlass');
    case 13: return ('watchDial');
    case 15: return ('watchDialNumerals');
    case 16: return ('watchMaterialBezel');
    case 40: return ('watchCaliberMovement');
    case 32: return ('watchBaseCaliber');
    case 33: return ('watchPowerReserve');
    case 34: return ('watchJewelCount');
    case 37: return ('watchInternalComment');
    default: return (null);
  }
};

export const mapWatchCheckbox = (option, list) => {
  const item = list.find((element) => element.label === option).name;
  return item;
} 
import * as watchAttributes from '../../_secret/watchAttributes';

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
    case 62: return ('watchYoutubeLink');
    case 63: return ('watchInternalCode');
    default: return (null);
  }
};

export const mapWatchCategory = (category) => {
  switch(category) {
    case 50: return 'watchCategoryAutomatic';
    case 51: return 'watchCategoryPilot';
    case 54: return 'watchCategoryVintage';
    case 56: return 'watchCategoryGolden';
    case 57: return 'watchCategoryDiving';
    case 52: return 'watchCategoryMechanic';
    case 390: return 'watchCategoryMilitary';
    default: return false;
  }
}

export const mapWatchCheckbox = (option, list) => {
  const item = list.find((element) => element.label === option).name;
  return item;
}

// Maps attributes to the List
export const mapWatchToList = (watch) => ({
  name: watch.name,
  price: watch.price,
  id: watch.id,
  image: watch.images[0].src,
  ref: watch.attributes.find(attributes => attributes.id === watchAttributes.REF) ? watch.attributes.find(attributes => attributes.id === watchAttributes.REF).options[0] : '',
  brand: watch.attributes.find(attributes => attributes.id === watchAttributes.BRAND) ? watch.attributes.find(attributes => attributes.id === watchAttributes.BRAND).options[0] : '',
  model: watch.attributes.find(attributes => attributes.id === watchAttributes.MODEL) ? watch.attributes.find(attributes => attributes.id === watchAttributes.MODEL).options[0] : '',
})
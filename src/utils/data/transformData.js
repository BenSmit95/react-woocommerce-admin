import * as watchCategories from '../../_secret/watchCategories';
import * as watchAttributes from '../../_secret/watchAttributes';

const transformWatchData = (data) => {
  console.log(data);

  const watchFunctions = [];
  for(let i in data.watchFunctions) {
    if(data.watchFunctions[i].value) watchFunctions.push(data.watchFunctions[i].label)
  }
  const watchOthers = [];
  for (let i in data.watchOthers) {
    if (data.watchOthers[i].value) watchOthers.push(data.watchOthers[i].label)
  }

  const watchScopeOfDelivery = [];
  if(data.watchWithBox.value) watchScopeOfDelivery.push('With Box');
  if(data.watchWithPapers.value) watchScopeOfDelivery.push('With Papers')

  const output = {
    name: `${data.watchBrand.value} ${data.watchModel.value}`,
    type: 'simple',
    regular_price: `${Number(data.watchPrice.value).toFixed(2)}`,
    description: data.watchDescription.value,
    short_description: data.watchInternalCode.value,
    categories: [
      {
        id: watchCategories.WATCHES
      }
    ],
    attributes: [
      {
        id: watchAttributes.BRAND,
        options: [data.watchBrand.value]
      }, {
        id: watchAttributes.MODEL,
        options: [data.watchModel.value]
      }, {
        id: watchAttributes.REF,
        options: [data.watchRef.value]
      }, {
        id: watchAttributes.MOVEMENT,
        options: [data.watchMovement.value]
      }, {
        id: watchAttributes.CASE_MATERIAL,
        options: [data.watchCaseMaterial.value]
      }, {
        id: watchAttributes.BRACELET_MATERIAL,
        options: [data.watchBraceletMaterial.value]
      }, {
        id: watchAttributes.GENDER,
        options: [data.watchGender.value]
      }, {
        id: watchAttributes.CONDITION,
        options: [data.watchCondition.value]
      }, {
        id: watchAttributes.NEW,
        options: [(data.watchConditionNew.value ? 'NEW' : '')]
      }, {
        id: watchAttributes.YEAR,
        options: [data.watchYear.value]
      }, {
        id: watchAttributes.SCOPE_OF_DELIVERY,
        options: watchScopeOfDelivery
      }, {
        id: watchAttributes.AVAILABILITY,
        options: [data.watchAvailability.value]
      }, {
        id: watchAttributes.DOMESTIC_DELIVERY,
        options: [data.watchDomesticEstimate.value]
      }, {
        id: watchAttributes.CONTINENTAL_DELIVERY,
        options: [data.watchContinentalEstimate.value]
      }, {
        id: watchAttributes.WORLDWIDE_DELIVERY,
        options: [data.watchWorldwideEstimate.value]
      }, {
        id: watchAttributes.BRACELET_COLOR,
        options: [data.watchBraceletColor.value]
      }, {
        id: watchAttributes.CLASP,
        options: [data.watchClasp.value]
      }, {
        id: watchAttributes.CLASP_MATERIAL,
        options: [data.watchClaspMaterial.value]
      }, {
        id: watchAttributes.LUG_WIDTH,
        options: [data.watchLugWidth.value]
      }, {
        id: watchAttributes.BUCKLE_WIDTH,
        options: [data.watchBuckleWidth.value]
      }, {
        id: watchAttributes.BRACELET_LENGTH_LONG,
        options: [data.watchBraceletLengthLong.value]
      }, {
        id: watchAttributes.BRACELET_LENGTH_SHORT,
        options: [data.watchBraceletLengthShort.value]
      }, {
        id: watchAttributes.BRACELET_THICKNESS,
        options: [data.watchBraceletThickness.value]
      }, {
        id: watchAttributes.CASE_DIAMETER,
        options: [`${data.watchCaseDiameterLength.value} x ${data.watchCaseDiameterDepth.value}`]
      }, {
        id: watchAttributes.CASE_THICKNESS,
        options: [data.watchCaseThickness.value]
      }, {
        id: watchAttributes.WATERPROOF,
        options: [data.watchCaseWaterproof.value]
      }, {
        id: watchAttributes.GLASS,
        options: [data.watchCaseGlass.value]
      }, {
        id: watchAttributes.DIAL,
        options: [data.watchDial.value]
      }, {
        id: watchAttributes.DIAL_NUMERALS,
        options: [data.watchDialNumerals.value]
      }, {
        id: watchAttributes.MATERIAL_BEZEL,
        options: [data.watchMaterialBezel.value]
      }, {
        id: watchAttributes.CALIBER_MOVEMENT,
        options: [data.watchCaliberMovement.value]
      }, {
        id: watchAttributes.BASE_CALIBER,
        options: [data.watchBaseCaliber.value]
      }, {
        id: watchAttributes.POWER_RESERVE,
        options: [data.watchPowerReserve.value]
      }, {
        id: watchAttributes.NUM_JEWELS,
        options: [data.watchJewelCount.value]
      }, {
        id: watchAttributes.FREQUENCY,
        options: [`${data.watchFrequency.value} ${data.watchFrequencyUnit.value}`]
      }, {
        id: watchAttributes.FUNCTIONS,
        options: watchFunctions
      }, {
        id: watchAttributes.OTHERS,
        options: watchOthers
      }
    ],
    images: data.watchImages.value.map((image, index) => ({ src: image, position: index }))
  };
  console.log(output);
  return output;
}

export default transformWatchData;
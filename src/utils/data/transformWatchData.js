import * as watchCategories from '../../_secret/watchCategories';
import * as watchAttributes from '../../_secret/watchAttributes';

const transformWatchData = (data) => {
  console.log(data);

  const watchFunctions = [];
  for(let i in data.watchFunctions) {
    if(data.watchFunctions[i].value) watchFunctions.push(data.watchFunctions[i].label);
  }
  const watchOthers = [];
  for (let i in data.watchOthers) {
    if (data.watchOthers[i].value) watchOthers.push(data.watchOthers[i].label);
  }

  let watchCaseDiameter = '';
  if(data.watchCaseDiameterLength.value && data.watchCaseDiameterDepth.value) {
    watchCaseDiameter = `${data.watchCaseDiameterLength.value} x ${data.watchCaseDiameterDepth.value}`;
  }

  let watchFrequency = '';
  if(data.watchFrequency.value) {
    watchFrequency = `${data.watchFrequency.value} ${data.watchFrequencyUnit.value}`;
  }

  const watchScopeOfDelivery = [];
  if(data.watchWithBox.value) watchScopeOfDelivery.push('With Box');
  if(data.watchWithPapers.value) watchScopeOfDelivery.push('With Papers')

  const importImages = data.watchImportImages.map(image => image.url);
  const images = importImages.concat(data.watchImages.value);



  // Watch categories
  const watchCategoriesArray = [];
  watchCategoriesArray.push({
    id: watchCategories.WATCHES
  });
  if(data.watchType.value === 'Pocket Watch') watchCategoriesArray.push({ id: watchCategories.POCKET_WATCHES });
  if(data.watchCategoryAutomatic.value) watchCategoriesArray.push({ id: watchCategories.AUTOMATIC_WATCHES });
  if(data.watchCategoryPilot.value) watchCategoriesArray.push({ id: watchCategories.PILOT_WATCHES });
  if(data.watchCategoryDiving.value) watchCategoriesArray.push({ id: watchCategories.DIVING_WATCHES });
  if(data.watchCategoryVintage.value) watchCategoriesArray.push({ id: watchCategories.VINTAGE_WATCHES });
  if(data.watchCategoryMechanic.value) watchCategoriesArray.push({ id: watchCategories.MECHANIC_WATCHES });
  if(data.watchCategoryGolden.value) watchCategoriesArray.push({ id: watchCategories.GOLDEN_WATCHES });
  if(data.watchCategoryMilitary.value) watchCategoriesArray.push({ id: watchCategories.MILTARY_WATCHES });
  if(data.watchOthers.chronometer.value) watchCategoriesArray.push({ id: watchCategories.CHRONOMETERS });
  if(data.watchFunctions.chronograph.value) watchCategoriesArray.push({ id: watchCategories.CHRONOGRAPHS });

  console.log(watchCategories);

  const output = {
    name: `${data.watchOfferName.value}`,
    type: 'simple',
    regular_price: `${Number(data.watchPrice.value).toFixed(2)}`,
    description: data.watchDescription.value,
    short_description: data.watchInternalCode.value,
    sold_individually: true/*!data.watchSeveralItemsAvailable.value*/,
    categories: watchCategoriesArray,
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
        options: [(data.watchConditionNew.value ? 'NEW' : 'OLD')]
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
        options: [watchCaseDiameter]
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
        options: [watchFrequency]
      }, {
        id: watchAttributes.FUNCTIONS,
        options: watchFunctions
      }, {
        id: watchAttributes.OTHERS,
        options: watchOthers
      }, {
        id: watchAttributes.INTERNAL_COMMENT,
        options: [data.watchInternalComment.value]
      }, {
        id: watchAttributes.INTERNAL_CODE,
        options: [data.watchInternalCode.value]
      }, {
        id: watchAttributes.YOUTUBE_LINK,
        options: [data.watchYoutubeLink.value]
      }
    ],
    images: images.map((image, index) => ({
      src: image,
      position: index
    }))
  };
  console.log(output);
  return output;
}

export default transformWatchData;
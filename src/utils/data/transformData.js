import * as watchCategories from '../../_secret/watchCategories';
import * as watchAttributes from '../../_secret/watchAttributes';

const transformWatchData = (data) => {
  console.log(data);

  const watchFunctions = [];
  for(let i in data.watchFunctions) {
    if(data.watchFunctions[i]) watchFunctions.push(i);
  }

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
        visible: true,
        options: [data.watchBrand.value]
      },
      {
        id: watchAttributes.BRACELET_COLOR,
        visible: true,
        options: [data.watchBraceletColor.value]
      },
      {
        id: watchAttributes.BRACELET_MATERIAL,
        visible: true,
        options: [data.watchBraceletMaterial.value]
      },
      {
        id: watchAttributes.CASE_MATERIAL,
        visible: true,
        options: [data.watchCaseMaterial.value]
      },
      {
        id: watchAttributes.CLASP,
        visible: true,
        options: [data.watchClasp.value]
      },
      {
        id: watchAttributes.CLASP_MATERIAL,
        visible: true,
        options: [data.watchClaspMaterial.value]
      },
      {
        id: watchAttributes.CONDITION,
        visible: true,
        options: [data.watchCondition.value]
      },
      {
        id: watchAttributes.DIAL,
        visible: true,
        options: [data.watchDial.value] 
      },
      {
        id: watchAttributes.DIAL_NUM,
        visible: true,
        options: [data.watchDialNumerals.value]
      },
      {
        id: watchAttributes.FUNCTIONS,
        visible: true,
        options: watchFunctions
      },
      {
        id: watchAttributes.DOMESTIC_DELIVERY,
        visible: true,
        options: [data.watchDomesticEstimate.value]
      },
      {
        id: watchAttributes.CONTINENTAL_DELIVERY,
        visible: true,
        options: [data.watchContinentalEstimate.value]
      },
      {
        id: watchAttributes.WORLDWIDE_DELIVERY,
        visible: true,
        options: [data.watchWorldwideEstimate.value]
      },
    ],
    images: data.watchImages.value.map((image, index) => ({ src: image, position: index }))
  };

  return output;
}

export default transformWatchData;
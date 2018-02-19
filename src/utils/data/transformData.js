import * as watchCategories from '../../_secret/watchCategories';
import * as watchAttributes from '../../_secret/watchAttributes';

const transformWatchData = (data) => {
  console.log(data);
  const output = {
    name: `${data.watchBrand.value} ${data.watchModel.value}`,
    type: 'simple',
    regular_price: `${Number(data.watchPrice.value).toFixed(2)}`,
    description: `${data.watchDescription.value}`,
    categories: [
      {
        id: watchCategories.WATCHES
      }
    ],
    attributes: [
      {
        id: watchAttributes.BRAND,
        name: 'Brand',
        slug: 'watch-brand',
        visible: true,
        option: data.watchBrand.value
      }
    ]
  };

  return output;
}

export default transformWatchData;
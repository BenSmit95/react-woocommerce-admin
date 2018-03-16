import * as jewelryCategories from '../../_secret/jewelryCategories';
import * as jewelryAttributes from '../../_secret/jewelryAttributes';
import { 
  DOMESTIC_DELIVERY, CONTINENTAL_DELIVERY, WORLDWIDE_DELIVERY,
} from '../../_secret/watchAttributes';

const transformJewelryData = (data) => {

  // Jewelry categories
  const occArray = mapOccCategories(data.jewelryCategories.jewelryOccasion);
  const newArray = mapNewCategories(data.jewelryCategories.jewelryNew);
  const categoriesArray = [{ id: jewelryCategories.JEWELRY }].concat(occArray, newArray);


  const jewelryScopeOfDelivery = [];
  if(data.jewelryWithBox.value) jewelryScopeOfDelivery.push('With Box');
  if(data.jewelryWithPapers.value) jewelryScopeOfDelivery.push('With Papers');

  // Images
  const importImages = data.jewelryImportImages.map(image => image.url);
  const images = importImages.concat(data.jewelryImages.value);

  const output = {
    name: data.jewelryName.value,
    type: 'simple',
    regular_price: `${Number(data.jewelryPrice.value).toFixed(2)}`,
    description: data.jewelryDescription.value,
    short_description: data.jewelryInternalCode.value,
    sold_individually: true,
    categories: categoriesArray,
    attributes: [
      {
        id: jewelryAttributes.BRAND,
        options: [data.jewelryBrand.value]
      }, {
        id: jewelryAttributes.PRECIOUS_METAL,
        options: [data.jewelryPreciousMetal.value]
      }, {
        id: jewelryAttributes.LINK_TYPE,
        options: [data.jewelryLinkType.value]
      }, {
        id: jewelryAttributes.CONDITION,
        options: [data.jewelryCondition.value]
      }, {
        id: jewelryAttributes.KRT,
        options: [data.jewelryKRT.value]
      }, {
        id: jewelryAttributes.LENGTH,
        options: [data.jewelryLength.value]
      }, {
        id: jewelryAttributes.WIDTH,
        options: [data.jewelryWidth.value],
      }, {
        id: jewelryAttributes.THICKNESS,
        options: [data.jewelryThickness.value]
      }, {
        id: jewelryAttributes.DIMENSION,
        options: [data.jewelryDimension.value]
      }, {
        id: jewelryAttributes.DIAMETER,
        options: [data.jewelryDiameter.value]
      }, {
        id: jewelryAttributes.RINGSIZE,
        options: [data.jewelryRingSize.value]
      }, {
        id: jewelryAttributes.WEIGHT,
        options: [data.jewelryWeight.value]
      }, {
        id: jewelryAttributes.GENDER,
        options: [data.jewelryGender.value]
      }, {
        id: jewelryAttributes.CARAT,
        options: [data.jewelryCarat.value]
      }, {
        id: jewelryAttributes.CUT,
        options: [data.jewelryCut.value]
      }, {
        id: jewelryAttributes.CLARITY,
        options: [data.jewelryClarity.value]
      }, {
        id: jewelryAttributes.COLOR,
        options: [data.jewelryColor.value]
      }, {
        id: jewelryAttributes.GEMSTONES,
        options: [data.jewelryGemstones.value]
      }, {
        id: jewelryAttributes.SCOPE_OF_DELIVERY,
        options: jewelryScopeOfDelivery
      }, {
        id: jewelryAttributes.INTERNAL_CODE,
        options: [data.jewelryInternalCode.value]
      }, {
        id: jewelryAttributes.INTERNAL_COMMENT,
        options: [data.jewelryInternalComment.value]
      }, {
        id: DOMESTIC_DELIVERY,
        options: [data.jewelryDomesticEstimate.value]
      }, {
        id: CONTINENTAL_DELIVERY,
        options: [data.jewelryContinentalEstimate.value]
      }, {
        id: WORLDWIDE_DELIVERY,
        options: [data.jewelryWorldwideEstimate.value]
      }, {
        id: jewelryAttributes.AVAILABILITY,
        options: [data.jewelryAvailability.value]
      }
    ],
    images: images.map((image, index) => ({
      src: image,
      position: index
    }))
  }

  console.log(output);
  return output;
};

const mapOccCategories = (occ) => {
  const arr = [];
  if(occ.accessories) arr.push({ id: jewelryCategories.OCC_ACCESSORIES });
  if(occ.bracelets) arr.push({ id: jewelryCategories.OCC_BRACELETS });
  if(occ.goldenBraceletsFrom20) arr.push({ id: jewelryCategories.OCC_BRACELETS_GOLDEN_F20});
  if(occ.goldenBraceletsTo20) arr.push({ id: jewelryCategories.OCC_BRACELETS_GOLDEN_T20});
  if(occ.chains) arr.push({ id: jewelryCategories.OCC_CHAINS });
  if(occ.goldenChainsFrom20) arr.push({ id: jewelryCategories.OCC_CHAINS_GOLDEN_F20 });
  if(occ.goldenChainsTo20) arr.push({ id: jewelryCategories.OCC_CHAINS_GOLDEN_T20 });
  if(occ.dupontLighters) arr.push({ id: jewelryCategories.OCC_DUPONT_LIGHTERS });
  if(occ.necklaces) arr.push({ id: jewelryCategories.OCC_NECKLACES });
  if(occ.goldenNecklaces) arr.push({ id: jewelryCategories.OCC_GOLDEN_NECKLACES });
  if(occ.pearlsAndSilver) arr.push({ id: jewelryCategories.OCC_PEARLS_AND_SILVER_JEWELRY });
  if(occ.ringsLadies) arr.push({ id: jewelryCategories.OCC_RINGS_LADIES});
  if(occ.diamondRingsLadies) arr.push({ id: jewelryCategories.OCC_DIAMOND_RINGS_LADIES});
  if(occ.goldenRingsLadies) arr.push({ id: jewelryCategories.OCC_GOLDEN_RINGS_LADIES});
  if(occ.ringsMen) arr.push({ id: jewelryCategories.OCC_RINGS_MEN});
  if(occ.diamondRingsMen) arr.push({ id: jewelryCategories.OCC_DIAMOND_RINGS_MEN});
  if(occ.goldenSignetRingsMen) arr.push({ id: jewelryCategories.OCC_GOLDEN_SIGNET_RINGS_MEN});
  if(occ.tableSilverware) arr.push({ id: jewelryCategories.OCC_TABLE_SILVERWARE});
  return arr;
};

const mapNewCategories = (cat) => {
  const arr = [];
  if(cat.goldenJewelry) arr.push({ id: jewelryCategories.NEW_GOLDEN_JEWELRY });
  if(cat.goldenEarrings) arr.push({ id: jewelryCategories.NEW_GOLDEN_EARRINGS });
  if(cat.goldenBracelets) arr.push({ id: jewelryCategories.NEW_GOLDEN_BRACELETS });
  if(cat.goldenChains) arr.push({ id: jewelryCategories.NEW_GOLDEN_CHAINS });
  if(cat.goldenNecklaces) arr.push({ id: jewelryCategories.NEW_GOLDEN_NECKLACES });
  if(cat.goldenPendants) arr.push({ id: jewelryCategories.NEW_GOLDEN_PENDANTS });
  if(cat.goldenRingsMen) arr.push({ id: jewelryCategories.NEW_GOLDEN_RINGS_MEN });
  if(cat.ringsLadies) arr.push({ id: jewelryCategories.NEW_RINGS_LADIES });
  if(cat.goldenRingsLadies) arr.push({ id: jewelryCategories.NEW_GOLDEN_RINGS_LADIES });
  if(cat.diamondRingsLadies) arr.push({ id: jewelryCategories.NEW_LADY_DIAMOND_RINGS });
  if(cat.silverJewelry) arr.push({ id: jewelryCategories.NEW_SILVER_JEWELRY });
  if(cat.silverBracelets) arr.push({ id: jewelryCategories.NEW_SILVER_BRACELETS });
  if(cat.silverNecklaces) arr.push({ id: jewelryCategories.NEW_SILVER_NECKLACES });
  if(cat.silverRings) arr.push({ id: jewelryCategories.NEW_SILVER_RINGS });
  return arr;
}

export default transformJewelryData;
import * as attributes from '../../_secret/jewelryAttributes';
import * as categories from '../../_secret/jewelryCategories';
import {
  DOMESTIC_DELIVERY,
  CONTINENTAL_DELIVERY,
  WORLDWIDE_DELIVERY
} from '../../_secret/watchAttributes';

export const mapJewelryAttribute = (attribute) => {
  switch(attribute.id) {
    case attributes.BRAND: return 'jewelryBrand';
    case attributes.AVAILABILITY: return 'jewelryAvailability';
    case DOMESTIC_DELIVERY: return 'jewelryDomesticEstimate';
    case CONTINENTAL_DELIVERY: return 'jewelryContinentalEstimate';
    case WORLDWIDE_DELIVERY: return 'jewelryWorldwideEstimate';
    case attributes.PRECIOUS_METAL: return 'jewelryPreciousMetal';
    case attributes.LINK_TYPE: return 'jewelryLinkType';
    case attributes.KRT: return 'jewelryKRT';
    case attributes.CARAT: return 'jewelryCarat';
    case attributes.GENDER: return 'jewelryGender';
    case attributes.CUT: return 'jewelryCut';
    case attributes.CLARITY: return 'jewelryClarity';
    case attributes.COLOR: return 'jewelryColor';
    case attributes.GEMSTONES: return 'jewelryGemstones';
    case attributes.CONDITION: return 'jewelryCondition';
    case attributes.LENGTH: return 'jewelryLength';
    case attributes.WIDTH: return 'jewelryWidth';
    case attributes.HEIGHT: return 'jewelryHeight';
    case attributes.THICKNESS: return 'jewelryThickness';
    case attributes.DIMENSION: return 'jewelryDimension';
    case attributes.DIAMETER: return 'jewelryDiameter';
    case attributes.RINGSIZE: return 'jewelryRingSize';
    case attributes.WEIGHT: return 'jewelryWeight';
    case attributes.INTERNAL_COMMENT: return 'jewelryInternalComment';
    default: return null;
  }
};

export const mapJewelryCategory = (category) => {
  switch(category.id) {
    // OCC
    case categories.OCC_ACCESSORIES: return 'accessories';
    case categories.OCC_BRACELETS: return 'bracelets';
    case categories.OCC_BRACELETS_GOLDEN_F20: return 'goldenBraceletsFrom20';
    case categories.OCC_BRACELETS_GOLDEN_T20: return 'goldenBraceletsTo20';
    case categories.OCC_CHAINS: return 'chains';
    case categories.OCC_CHAINS_GOLDEN_F20: return 'goldenChainsFrom20';
    case categories.OCC_CHAINS_GOLDEN_T20: return 'goldenChainsTo20';
    case categories.OCC_DUPONT_LIGHTERS: return 'dupontLighters';
    case categories.OCC_NECKLACES: return 'necklaces';
    case categories.OCC_GOLDEN_NECKLACES: return 'goldenNecklaces';
    case categories.OCC_PEARLS_AND_SILVER_JEWELRY: return 'pearlsAndSilver';
    case categories.OCC_RINGS_LADIES: return 'ringsLadies';
    case categories.OCC_DIAMOND_RINGS_LADIES: return 'diamondRingsLadies';
    case categories.OCC_GOLDEN_RINGS_LADIES: return 'goldenRingsLadies';
    case categories.OCC_RINGS_MEN: return 'ringsMen';
    case categories.OCC_DIAMOND_RINGS_MEN: return 'diamondRingsMen';
    case categories.OCC_GOLDEN_SIGNET_RINGS_MEN: return 'goldenSignetRingsMen';
    case categories.OCC_TABLE_SILVERWARE: return 'tableSilverware';
    // NEW
    case categories.NEW_GOLDEN_JEWELRY: return 'goldenJewelry';
    case categories.NEW_GOLDEN_EARRINGS: return 'goldenEarrings';
    case categories.NEW_GOLDEN_BRACELETS: return 'goldenBracelets';
    case categories.NEW_GOLDEN_CHAINS: return 'goldenChains';
    case categories.NEW_GOLDEN_NECKLACES: return 'goldenNecklaces';
    case categories.NEW_GOLDEN_PENDANTS: return 'goldenPendants';
    case categories.NEW_GOLDEN_RINGS_MEN: return 'goldenRingsMen';
    case categories.NEW_RINGS_LADIES: return 'ringsLadies';
    case categories.NEW_GOLDEN_RINGS_LADIES: return 'goldenRingsLadies';
    case categories.NEW_LADY_DIAMOND_RINGS: return 'diamondRingsLadies';
    case categories.NEW_SILVER_JEWELRY: return 'silverJewelry';
    case categories.NEW_SILVER_BRACELETS: return 'silverBracelets';
    case categories.NEW_SILVER_NECKLACES: return 'silverNecklaces';
    case categories.NEW_SILVER_RINGS: return 'silverRings';
    default: return null;
  }
}

export const mapJewelryToList = (jewelry) => ({
  name: jewelry.name,
  price: jewelry.price,
  id: jewelry.id,
  image: jewelry.images[0].src,
  brand: jewelry.attributes.find(jewelryAttributes => jewelryAttributes.id === attributes.BRAND) ? jewelry.attributes.find(jewelryAttributes => jewelryAttributes.id === attributes.BRAND).options[0] : '',
});
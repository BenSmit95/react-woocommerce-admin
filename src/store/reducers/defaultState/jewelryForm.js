import { 
  jewelryCategoryNew,
  jewelryCategoryOccasion,
  jewelryAvailability,
  jewelryDeliveryEstimate
} from '../../../_secret/jewelryFormData';

const defaultState = {
  jewelryName: {
    value: '',
    error: '',
    controls: {
      required: true
    },
    name: 'jewelryName'
  },
  jewelryType: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryType'
  },
  jewelryCategories: {
    jewelryNew: jewelryCategoryNew.reduce((acc, other) => {
      acc[other.name] = false
      return acc;
    }, {}),
    jewelryOccasion: jewelryCategoryOccasion.reduce((acc, other) => {
      acc[other.name] = false
      return acc;
    }, {}),
  },
  jewelryBrand: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryBrand'
  },
  jewelryPrice: {
    value: '',
    error: '',
    controls: {
      required: true
    },
    name: 'jewelryPrice'
  },
  jewelryPreciousMetal: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryPreciousMetal'
  }, 
  jewelryLinkType: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryLinkType'
  },
  jewelryCondition: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryCondition'
  },
  jewelryKRT: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryKRT'
  },
  jewelryLength: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryLength'
  },
  jewelryWidth: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryWidth'
  },
  jewelryHeight: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryHeight'
  },
  jewelryThickness: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryThickness'
  },
  jewelryDimension: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryDimension'
  },
  jewelryDiameter: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryDiameter'
  },
  jewelryRingSize: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryRingSize'
  },
  jewelryWeight: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryWeight'
  },
  jewelryGender: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryGender'
  },
  jewelryCarat: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryCarat'
  },
  jewelryCut: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryCut'
  },
  jewelryClarity: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryClarity'
  },
  jewelryColor: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryColor'
  },
  jewelryGemstones: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryGemstones'
  },
  jewelryWithBox: {
    value: false,
    error: '',
    controls: {},
    name: 'jewelryWithBox'
  },
  jewelryWithPapers: {
    value: false,
    error: '',
    controls: {},
    name: 'jewelryWithPapers'
  },
  jewelryInternalCode: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryInternalCode'
  },
  jewelryInternalComment: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryInternalComment'
  },
  jewelryDescription: {
    value: '',
    error: '',
    controls: {},
    name: 'jewelryDescription',
  },
  jewelryDomesticEstimate: {
    value: jewelryDeliveryEstimate[0],
    error: '',
    controls: {},
    name: 'jewelryDomesticEstimate'
  },
  jewelryContinentalEstimate: {
    value: jewelryDeliveryEstimate[0],
    error: '',
    controls: {},
    name: 'jewelryContinentalEstimate'
  },
  jewelryWorldwideEstimate: {
    value: jewelryDeliveryEstimate[0],
    error: '',
    controls: {},
    name: 'jewelryWorldwideEstimate'
  },
  jewelryAvailability: {
    value: jewelryAvailability[0],
    error: '',
    controls: {
      required: true
    },
    name: 'jewelryAvailability'
  },
  jewelryImages: {
    value: [],
    error: '',
    controls: {},
    name: 'jewelryImages'
  },
  jewelryImageRemoveList: [

  ],
  jewelryImportImages: [

  ],
  imageLoading: false,
  loading: false,
  valid: false,
  submitted: false
}

export default defaultState;
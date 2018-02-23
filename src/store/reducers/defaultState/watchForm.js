import { 
  watchFunctions,
  watchOthers
} from '../../../_secret/watchFormData';

export const defaultState = {
  watchType: {
    value: 'Watch',
    error: '',
    controls: {
      required: true,
    },
    name: 'watchType'
  },
  watchBrand: {
    value: '',
    error: '',
    controls: {
      required: true,
      whiteOption: true,
    },
    name: 'watchBrand'
  },
  watchModel: {
    value: '',
    error: '',
    controls: {
      required: true,
    },
    name: 'watchModel',
  },
  watchRef: {
    value: '',
    error: '',
    controls: {},
    name: 'watchRef'
  },
  watchMovement: {
    value: '',
    error: '',
    controls: {
      whiteOption: true,
    },
    name: 'watchMovement',
  },
  watchCaseMaterial: {
    value: '',
    error: '',
    controls: {
      whiteOption: true,
    },
    name: 'watchCaseMaterial',
  },
  watchBraceletMaterial: {
    value: '',
    error: '',
    controls: {
      whiteOption: true,
    },
    name: 'watchBraceletMaterial'
  },
  watchGender: {
    value: '',
    error: '',
    controls: {
      whiteOption: true,
    },
    name: 'watchGender',
  },
  watchCondition: {
    value: '',
    error: '',
    controls: {
      whiteOption: true,
    },
    name: 'watchCondition'
  },
  watchConditionNew: {
    value: false,
    error: '',
    controls: {},
    name: 'watchConditionNew'
  },
  watchYear: {
    value: '',
    error: '',
    controls: {},
    name: 'watchYear',
  },
  watchWithBox: {
    value: false,
    error: '',
    controls: {},
    name: 'watchWithBox',
  },
  watchWithPapers: {
    value: false,
    error: '',
    controls: {},
    name: 'watchWithPapers'
  },
  watchAvailability: {
    value: 'Available now',
    error: '',
    controls: {},
    name: 'watchAvailability'
  },
  watchSeveralItemsAvailable: {
    value: false,
    error: '',
    controls: {},
    name: "watchSeveralItemsAvailable"
  },
  watchDomesticEstimate: {
    value: '2-6 days',
    error: '',
    controls: {},
    name: 'watchDomesticEstimate'
  },
  watchContinentalEstimate: {
    value: '1-2 weeks',
    error: '',
    controls: {},
    name: 'watchContinentalEstimate'
  },
  watchWorldwideEstimate: {
    value: '2-3 weeks',
    error: '',
    controls: {},
    name: 'watchWorldwideEstimate'
  },
  watchPrice: {
    value: '',
    error: '',
    controls: { required: true },
    name: 'watchPrice'
  },
  watchBraceletColor: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchBraceletColor'
  },
  watchClasp: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchClasp'
  },
  watchClaspMaterial: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchClaspMaterial'
  },
  watchLugWidth: {
    value: '',
    error: '',
    controls: {},
    name: 'watchLugWidth'
  },
  watchBuckleWidth: {
    value: '',
    error: '',
    controls: {},
    name: 'watchBuckleWidth'
  },
  watchBraceletLengthLong: {
    value: '',
    error: '',
    controls: {},
    name: 'watchBraceletLengthLong'
  },
  watchBraceletLengthShort: {
    value: '',
    error: '',
    controls: {},
    name: 'watchBraceletLengthShort'
  },
  watchBraceletThickness: {
    value: '',
    error: '',
    controls: {},
    name: 'watchBraceletThickness'
  },
  watchCaseDiameterLength: {
    value: '',
    error: '',
    controls: {},
    name: 'watchCaseDiameterLength'
  },
  watchCaseDiameterDepth: {
    value: '',
    error: '',
    controls: {},
    name: 'watchCaseDiameterDepth'
  },
  watchCaseThickness: {
    value: '',
    error: '',
    controls: {},
    name: 'watchCaseThickness'
  },
  watchCaseWaterproof: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchCaseWaterproof'
  },
  watchCaseGlass: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchCaseGlass'
  },
  watchDial: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchDial'
  },
  watchDialNumerals: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchDialNumerals'
  },
  watchMaterialBezel: {
    value: '',
    error: '',
    controls: {
      whiteOption: true
    },
    name: 'watchMaterialBezel'
  },
  watchCaliberMovement: {
    value: '',
    error: '',
    controls: {},
    name: 'watchCaliberMovement'
  },
  watchBaseCaliber: {
    value: '',
    error: '',
    controls: {},
    name: 'watchBaseCaliber'
  },
  watchPowerReserve: {
    value: '',
    error: '',
    controls: {},
    name: 'watchPowerReserve'
  },
  watchJewelCount: {
    value: '',
    error: '',
    controls: {},
    name: 'watchJewelCount'
  },
  watchFrequency: {
    value: '',
    error: '',
    controls: {},
    name: 'watchFrequency'
  },
  watchFrequencyUnit: {
    value: 'A/h',
    error: '',
    controls: {},
    name: 'watchFrequencyUnit'
  },
  watchDescription: {
    value: '',
    error: '',
    controls: {},
    name: 'watchDescription'
  },
  watchFunctions: watchFunctions.reduce((acc, func) => {
    acc[func.name] = {
      value: false,
      label: func.label
    }
    return acc;
  }, {}),
  watchOthers: watchOthers.reduce((acc, other) => {
    acc[other.name] = {
      value: false,
      label: other.label
    }
    return acc;
  }, {}),
  watchImages: {
    value: [],
    error: '',
    controls: {},
    name: 'watchImages'
  },
  watchInternalCode: {
    value: '',
    error: '',
    controls: {},
    name: 'watchInternalCode'
  },
  watchInternalComment: {
    value: '',
    error: '',
    controls: {},
    name: 'watchInternalComment'
  },
  watchImageRemoveList: [
    
  ],
  watchImportImages: [

  ],
  imageLoading: false,
  loading: false
}
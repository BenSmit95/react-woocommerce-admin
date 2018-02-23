import * as actionTypes from './actionTypes';
import transformData from '../../utils/data/transformData';
import { mapWatchAttribute, mapWatchCheckbox } from '../../utils/data/mapWatch';
import { stripHTML } from '../../utils/data/utility';
import { postProduct, postImages, getProductById } from '../../_secret/auth';
import * as watchAttributes from '../../_secret/watchAttributes';
import { watchFunctions, watchOthers } from '../../_secret/watchFormData';

export const setWatchFormField = (fieldName, value) => ({
    type: actionTypes.SET_WATCHFORM_FIELD,
    fieldName,
    value
});

export const toggleWatchFormCheckbox = (fieldName) => ({
    type: actionTypes.TOGGLE_WATCHFORM_CHECKBOX,
    fieldName
});

export const toggleMassWatchFormCheckbox = (fieldName, name) => ({
    type: actionTypes.TOGGLE_MASS_WATCHFORM_CHECKBOX,
    fieldName,
    name
})

export const setWatchImages = (urls) => ({
    type: actionTypes.SET_WATCH_IMAGES,
    urls
});

// These are added to the list of removeable id's after upload
export const setRemoveIds = (ids) => ({
    type: actionTypes.SET_REMOVE_IDS,
    ids
});

export const startImageLoading = () => ({
    type: actionTypes.WATCHFORM_START_IMAGE_LOADING
});

export const stopImageLoading = () => ({
    type: actionTypes.WATCHFORM_STOP_IMAGE_LOADING
})

export const confirmImages = (files) => {
    return (dispatch) => {
        dispatch(startImageLoading());
        postImages(files)
            .then((list) => {
                console.log(list);
                const urlList = [];
                const idList = [];
                list.forEach((listItem) => {
                    urlList.push(listItem.url);
                    idList.push(listItem.id);
                });
                dispatch(setRemoveIds(idList));
                dispatch(setWatchImages(urlList));
                dispatch(stopImageLoading());
            })
            .catch((error) => {
                console.log(error);
                dispatch(stopImageLoading());
            });

    }
}

export const postWatchFormOffer = () => {
    return (dispatch, getState) => {
        const watchForm = { ...getState().watchForm };
        const data = transformData(watchForm);
        console.log(watchForm.watchImageRemoveList);
        postProduct(data, watchForm.watchImageRemoveList);

    }
}

export const fetchWatch = (id) => {
    return (dispatch) => {
        dispatch(resetWatchform());
        getProductById(id)
            .then((watch) => {
                console.log(watch)
                watch.attributes.forEach((attribute) => {
                    let fieldName = mapWatchAttribute(attribute);
                    if (fieldName) dispatch(setWatchFormField(fieldName, attribute.options[0]));
                });
                dispatch(setWatchFormField('watchPrice', watch.price));

                if (watch.description) {
                    dispatch(setWatchFormField('watchDescription', stripHTML(watch.description)))
                }

                if (watch.short_description)  {
                    dispatch(setWatchFormField('watchInternalCode', stripHTML(watch.short_description)))
                }

                // NEW checkbox
                if (watch.attributes.find((attribute) => (attribute.id === watchAttributes.NEW && attribute.options[0] === 'NEW'))) {
                    dispatch(toggleWatchFormCheckbox('watchConditionNew'));
                };

                // Scope of delivery
                const scopeAttribute = (watch.attributes.find((attribute) => (attribute.id === watchAttributes.SCOPE_OF_DELIVERY)));
                if (scopeAttribute.options.indexOf('With box') !== -1) dispatch(toggleWatchFormCheckbox('watchWithBox'));
                if (scopeAttribute.options.indexOf('With papers') !== -1) dispatch(toggleWatchFormCheckbox('watchWithPapers'));

                // Case diameter
                const watchCaseDiameter = (watch.attributes.find((attribute) => (attribute.id === watchAttributes.CASE_DIAMETER)));
                if (watchCaseDiameter) {
                    const caseDiameterArr = watchCaseDiameter.options[0].split('x');
                    dispatch(setWatchFormField('watchCaseDiameterLength', caseDiameterArr[0].trim()));
                    dispatch(setWatchFormField('watchCaseDiameterDepth', caseDiameterArr[1].trim()));
                }
                // Frequency
                const watchFrequency = (watch.attributes.find((attribute) => (attribute.id === watchAttributes.FREQUENCY)));
                if (watchFrequency) {
                    const frequencyArr = watchFrequency.options[0].split(' ');
                    dispatch(setWatchFormField('watchFrequency', frequencyArr[0].trim()));
                    dispatch(setWatchFormField('watchFrequencyUnit', frequencyArr[1].trim()));
                }

                // Functions
                const watchFunctionAttribute = (watch.attributes.find((attribute) => (attribute.id === watchAttributes.FUNCTIONS)));
                if (watchFunctionAttribute) {
                    watchFunctionAttribute.options.forEach((option) => {
                        dispatch(toggleMassWatchFormCheckbox('watchFunctions', mapWatchCheckbox(option, watchFunctions)));
                    });
                };

                //Others
                const watchOthersAttribute = (watch.attributes.find((attribute) => attribute.id === watchAttributes.OTHERS));
                if (watchOthersAttribute) {
                    watchOthersAttribute.options.forEach((option) => {
                        dispatch(toggleMassWatchFormCheckbox('watchOthers', mapWatchCheckbox(option, watchOthers)));
                    });
                };
                
                const imageIDs = watch.images.map((image) => image.id);

                // Add remove id's to list, in case the offer gets updated
                dispatch(setRemoveIds(imageIDs));

                // Collect image urls and dispatch to state
                const imageURLs = watch.images.map((image) => image.src);
                dispatch(setImportImages(imageURLs));
            })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const setImportImages = (images) => ({
    type: actionTypes.SET_IMPORT_IMAGES,
    images
})

export const resetWatchform = () => ({
    type: actionTypes.RESET_WATCHFORM
});
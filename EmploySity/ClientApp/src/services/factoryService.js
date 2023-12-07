import _ from "lodash";

export const create = (template, value) => {
    if (!value) {
        return null;
    }
    
    const templateClone = _.cloneDeep(template)
    const valueClone = _.cloneDeep(value)
    
    if (Array.isArray(valueClone)) {
        return valueClone.map(element => ({templateClone, element}));
    }

    return {templateClone, valueClone};
}
export class Item {
    key;
    properties = {
        quantity: -1,
    };

    constructor(key){
        this.key = key;
        this.loadProperties(key).forEach((k,v) => {
            this.properties[k] = v;
        });
    }

    loadProperties(key){
        return __JSON[key];
    }

    getPropertyValue(key) {
        return this.properties[key];
    }

    involvedInAction(action){
        return this.properties.action === action;
    }

    isTool(){
        return this.properties.tool === true;
    }
}

const __JSON = {
    axe: {
        base: 'axe',
        tool : true,
        action: 'chop',
        quality: 0,
        handle: {
            component: true,
            material: {
                base: 'wood',
                quality: 10,
            }
        },
        blade: {}
    },
    axeHandle: {},
    axeBlade: {},
}
import {reactive} from 'vue'

export const ResourceStore = reactive({
  resourceNumber: {
    value: 0
  },
  resourceMap: {},
  getAllResources() {
    return this.resourceMap
  },
  getResource(key) {
    return this.resourceMap.get(key);
  },
  getResourceNumber() {
    return this.resourceNumber;
  },
  addResource({key, amount}) {
    let resource = this.resourceMap[key];
    if (!resource) {
      this.resourceMap[key] = new ResourceEntry();
      resource = this.resourceMap[key];
    }
    resource.addToAmount(amount);
    console.log((resource.amount * resource.value));
    this.adjustResourceValue(resource.amount * resource.value)
    console.log(this.resourceNumber.value);
  },
  adjustResourceValue(delta) {
    console.log('delta' + delta);
    this.resourceNumber.value += delta;
    console.log('resourceNumber ' + this.resourceNumber);
  }
});

class ResourceEntry {
  key;
  amount = 0;
  value = 1;

  constructor(key) {
    this.key = key;
  }

  addToAmount(amountToAdd) {
    this.amount += amountToAdd;
  }
}

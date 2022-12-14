import {reactive} from 'vue'

export const GameState = reactive({
  resources: {
    number: 0,
    resourceMap: {},
    getAllResources() {
      return this.resourceMap
    },
    getResource(key) {
      return this.resourceMap.get(key);
    },
    addResource({key, amount}) {
      let resource = this.resourceMap[key];
      if (!resource) {
        this.resourceMap[key] = new ResourceEntry();
        resource = this.resourceMap[key];
      }
      resource.addToAmount(amount);
      this.adjustNumber(resource.amount * resource.value)
    },
    adjustNumber(delta) {
      console.log('delta ' + delta);
      this.number += delta;
      console.log('resourceNumber ' + this.number);
    }
  },
  population: {
    number: 1,
    adjustNumber(delta) {
      console.log('delta ' + delta);
      this.number += delta;
      console.log('resourceNumber ' + this.number);
    }

  },
  actions:
    {
      active: 'scavenge',
      list: {
        scavenge: {
          buttonText: "scavenge",
          onPerform: () => {
            console.log("scavenged");
            GameState.resources.addResource({key: 'berries', amount: 5});
          }
        },
        hunt: {
          buttonText: "hunt",
          onPerform: () => {
            console.log("hunt");
            GameState.resources.addResource({key: 'meat', amount: 5});
          }
        },
        chop: {
          buttonText: "chop",
          onPerform: () => {
            console.log("chop");
            GameState.resources.addResource({key: 'wood', amount: 5});
          }
        }
      },
      setActive(key) {
        this.active = key;
      },
      getActive() {
        return this.list[this.active];
      },
    },
  gameHour() {
    this.actions.getActive().onPerform();
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

import {reactive} from 'vue'

export const GameState = reactive({
  resources: {
    number: 0,
    map: {},
    getMap() {
      return this.map
    },
    getResource(key) {
      return this.map.get(key);
    },
    addResource({key, amount}) {
      let resource = this.map[key];
      if (!resource) {
        this.map[key] = new ResourceEntry();
        resource = this.map[key];
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
      map: {
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
      performActiveAction() {
        this.map[this.active].onPerform();
      }
    },
  gameHour() {
    this.actions.performActiveAction();
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

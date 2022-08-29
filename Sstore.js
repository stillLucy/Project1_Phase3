import PubSub from '../lib/pubsub.js';

export default class Store {
  constructor(params) {
    let self = this;
    self.actions = {};
    self.mutations = {};
    self.state = {};
    self.status = 'resting';
    self.events = new PubSub();

    // We allow params to contain some data that we can start off with, so
    // we're checking to see if that data exists here. If it doesn't we're
    // fine since we already made these empty objects above.
    if (params.hasOwnProperty('actions')) {
      self.actions = params.actions;
    }
    if (params.hasOwnProperty('mutations')) {
      self.mutations = params.mutations;
    }

    // TODO(elijahtruitt): What is a Proxy??
    self.state = new Proxy((params.state || {}), {
      set: function(state, key, value) {
        state[key] = value;
        console.log(`stateChange: ${key}: ${value}`);
        self.events.publish('stateChange', self.state);

        if (self.status !== 'mutation') {
          console.warn(`You should use a mutation to set ${key}!`);
        }

        self.status = 'resting';
        return true;
      }
    });
  }

  dispatch(actionKey, payload) {
    if (typeof this.actions[actionKey] !== 'function') {
      console.error(`Action "${actionKey}" doesn't exist!`);
      return false;
    }
    // Remember, we don't need an "else" here because if this conditional
    // evaluates to true, we'll never reach these lines of code.
    console.groupCollapsed(`ACTION: ${actionKey}`);
    
    this.status = 'action';
    // Call the callback function
    this.actions[actionKey](this, payload);

    console.groupEnd();
    return true;
  }

  commit(mutationKey, payload) {
    if (typeof this.mutations[mutationKey] !== 'function') {
      console.error(`Mutation "${mutationKey}" doesn't exist`);
      return false;
    }

    this.status = 'mutation';
    let newState = this.mutations[mutationKey](this.state, payload);
    this.state = Object.assign(this.state, newState);

    return true;
  }
}

export default class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    // If there's nothing here, we start something new.
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    // We push a callback function (keyed by event: string) into this.events.
    return this.events[event].push(callback);
  }

  publish(event, data = {}) {
    // Make sure that the event: string exists in our collection of events.
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }
    
    // Pass the data into each callback (stored function) in our events collection.
    return this.events[event].map(callback => callback(data));
  }
}

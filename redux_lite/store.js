class Store {
  constructor(rootReducer){
    this.state = {};
    this.rootReducer = rootReducer;
  }

  getState() {
    return Object.assign({}, this.state);
  }
}
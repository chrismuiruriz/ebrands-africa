class Preferences {
  constructor() {}

  /*
  @param {string} key
  @returns {string}
  */

  get(key) {
    //get localstorage of key
    let value = localStorage.getItem(key);

    return value;
  }

  /*
    @param {string} key
    @param {string} value
    @returns {void}
*/

  set(key, value) {
    //set localstorage of key
    localStorage.setItem(key, value);
  }

  //check if key exists
  has(key) {
    return localStorage.getItem(key) !== null;
  }
}

const preferences = new Preferences();

export default preferences;

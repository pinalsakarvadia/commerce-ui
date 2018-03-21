let localWindowStorage;
if (window && window.localStorage) {
  localWindowStorage = window.localStorage;
}

const localCache = {
  get: (key) => localWindowStorage.getItem(key),
  set: (key, data) => localWindowStorage.setItem(key, data),
  delete: (key) => localWindowStorage.removeItem(key),
  clear: () => localWindowStorage.clear()
}; 

let sessionWindowStorage;
if (window && window.sessionStorage) {
  sessionWindowStorage = window.sessionStorage;
}

const sessionCache = {
  get: (key) => sessionWindowStorage.getItem(key),
  set: (key, data) => sessionWindowStorage.setItem(key, data),
  delete: (key) => sessionWindowStorage.removeItem(key),
  clear: () => sessionWindowStorage.clear()
}; 

export {
  localCache,
  sessionCache
};
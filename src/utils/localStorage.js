function storageAvailable(type) {
  if (typeof window === "undefined") {
    return false;
  }
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

let localStorage;

if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
  localStorage = window.localStorage;
} else {
  // Too bad, no localStorage for us, stub it
  localStorage = { setItem: () => {}, getItem: () => {} };
}

export default localStorage;

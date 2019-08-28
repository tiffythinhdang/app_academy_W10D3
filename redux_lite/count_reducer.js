const countReducer = (count = 0, action) => {
  if (action.type === "increase") {
    return count + 1;
  } else if (action.type === "decrease") {
    return count - 1;
  } else {
    return count;
  }
};

const increaseCount = {
  type: "increase"
};

const decreaseCount = {
  type: "decrease"
};

// module.exports = { countReducer, decreaseCount, increaseCount };



// window.countReducer = countReducer;
// window.increaseCount = increaseCount;
// window.decreaseCount = decreaseCount;
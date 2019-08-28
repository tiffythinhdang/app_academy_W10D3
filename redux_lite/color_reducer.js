const colorReducer = (color="gray", action) => {
  if (action.type === "darken") {
    return "black";
  } else if (action.type === "lighten") {
    return "white";
  } else {
    return color;
  }
};

const lightenColor = {
  type: "lighten"
};

const darkenColor = {
  type: "darken"
};

// export { colorReducer, lightenColor, darkenColor};


// window.colorReducer = colorReducer;
// window.lightenColor = lightenColor;
// window.darkenColor = darkenColor;
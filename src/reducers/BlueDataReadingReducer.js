const initalState = {
  data: {
    labels: [],
    datasets: [{
      label: "",
      data: [],
      backgroundColor: '',
      borderColor: ''
    }]
  }
};

const BlueDataReadingReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "WAITING_BLUE_DATA_READING":
      return {
        ...state,
        }
    case "FAILURE_BLUE_DATA_READING":
      return {
        ...state,
       }
    case "SUCCESS_BLUE_DATA_READING":
      return {
        ...state,
        data: {
          labels: payload.yaxis,
          datasets: [{
            label: "Blue Data Reading",
            data: payload.xaxis,
            backgroundColor: 'rgba(0,0,255, 0.4)',
            borderColor: 'rgba(0,0,255, 0.5)',
          }]
        }
      }
    default:
      return state;
  }
}

export default BlueDataReadingReducer;

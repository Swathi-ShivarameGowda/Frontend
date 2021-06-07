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

const BlueSignalReadingReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "WAITING_BLUE_SIGNAL_READING":
      return {
        ...state,
        }
    case "FAILURE_BLUE_SIGNAL_READING":
      return {
        ...state,
       }
    case "SUCCESS_BLUE_SIGNAL_READING":
      return {
        ...state,
        data: {
          labels: payload.yaxis,
          datasets: [{
            label: "Blue Signal Reading",
            data: payload.xaxis,
            backgroundColor: 'rgba(0,0,255, 0.4)',
            borderColor: 'rgba(0,0,255, 0.5)'
          }]
        }
      }
    default:
      return state;
  }
}

export default BlueSignalReadingReducer;

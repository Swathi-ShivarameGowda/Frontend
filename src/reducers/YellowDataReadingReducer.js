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

const YellowDataReadingReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "WAITING_YELLOW_DATA_READING":
      return {
        ...state,
        }
    case "FAILURE_YELLOW_DATA_READING":
      return {
        ...state,
       }
    case "SUCCESS_YELLOW_DATA_READING":
      return {
        ...state,
        data: {
          labels: payload.yaxis,
          datasets: [{
            label: "Yellow Data Reading",
            data: payload.xaxis,
            backgroundColor: 'rgba(255,255,0, 0.4)',
            borderColor: 'rgba(255,255,0, 0.5)'
          }]
        }
      }
    default:
      return state;
  }
}

export default YellowDataReadingReducer;

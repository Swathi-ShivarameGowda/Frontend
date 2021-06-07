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

const RedDataReadingReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "WAITING_RED_DATA_READING":
      return {
        ...state,
        }
    case "FAILURE_RED_DATA_READING":
      return {
        ...state,
       }
    case "SUCCESS_RED_DATA_READING":
      return {
        ...state,
        data: {
          labels: payload.yaxis,
          datasets: [{
            label: "Red Data Reading",
            data: payload.xaxis,
            backgroundColor: 'rgba(255,0,0, 0.4)',
            borderColor: 'rgba(255,0,0, 0.5)'
          }]
        }
      }
    default:
      return state;
  }
}

export default RedDataReadingReducer;

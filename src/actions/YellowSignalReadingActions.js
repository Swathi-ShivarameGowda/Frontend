import { getAxisData } from '../utils'
import { YELLOWSIGNAL,YELLOWSIGNALREADING } from '../constants'


export const getYellowSignalReading = () => dispatch => {
  try {
    dispatch({
      type: "WAITING_YELLOW_SIGNAL_READING"
    })

    let xaxis = YELLOWSIGNALREADING
    let yaxis = getAxisData(YELLOWSIGNAL)

    dispatch({
      type: "SUCCESS_YELLOW_SIGNAL_READING",
      payload: {
        xaxis,
        yaxis
      }
    })
  } catch (e) {
    dispatch({
      type: "FAILURE_YELLOW_SIGNAL_READING",
    })
  }
}

import { getAxisData } from '../utils'
import { REDSIGNAL,REDSIGNALREADING } from '../constants'


export const getRedSignalReading = () => dispatch => {
  try {
    dispatch({
      type: "WAITING_RED_SIGNAL_READING"
    })

    let xaxis = REDSIGNALREADING
    let yaxis = getAxisData(REDSIGNAL)

    dispatch({
      type: "SUCCESS_RED_SIGNAL_READING",
      payload: {
        xaxis,
        yaxis
      }
    })
  } catch (e) {
    dispatch({
      type: "FAILURE_RED_SIGNAL_READING",
    })
  }
}

import { getAxisData } from '../utils'
import { BLUESIGNAL,BLUESIGNALREADING } from '../constants'


export const getBlueSignalReading = () => dispatch => {
  try {
    dispatch({
      type: "WAITING_BLUE_SIGNAL_READING"
    })

    let xaxis = BLUESIGNALREADING
    let yaxis = getAxisData(BLUESIGNAL)

    dispatch({
      type: "SUCCESS_BLUE_SIGNAL_READING",
      payload: {
        xaxis,
        yaxis
      }
    })
  } catch (e) {
    dispatch({
      type: "FAILURE_BLUE_SIGNAL_READING",
    })
  }
}

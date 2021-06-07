import { getAxisData } from '../utils'
import { REDDATA,REDDATAREADING } from '../constants'


export const getRedDataReading = () => dispatch => {
  try {
    dispatch({
      type: "WAITING_RED_DATA_READING"
    })

    let xaxis = REDDATAREADING
    let yaxis = getAxisData(REDDATA)

    dispatch({
      type: "SUCCESS_RED_DATA_READING",
      payload: {
        xaxis,
        yaxis
      }
    })
  } catch (e) {
    dispatch({
      type: "FAILURE_RED_DATA_READING",
    })
  }
}

import { getAxisData } from '../utils'
import { YELLOWDATA,YELLOWDATAREADING } from '../constants'


export const getYellowDataReading = () => dispatch => {
  try {
    dispatch({
      type: "WAITING_YELLOW_DATA_READING"
    })

    let xaxis = YELLOWDATAREADING
    let yaxis = getAxisData(YELLOWDATA)

    dispatch({
      type: "SUCCESS_YELLOW_DATA_READING",
      payload: {
        xaxis,
        yaxis
      }
    })
  } catch (e) {
    dispatch({
      type: "FAILURE_YELLOW_DATA_READING",
    })
  }
}

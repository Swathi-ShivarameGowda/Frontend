import { getAxisData } from '../utils'
import { BLUEDATA,BLUEDATAREADING } from '../constants'


export const getBlueDataReading = () => dispatch => {
  try {
    dispatch({
      type: "WAITING_BLUE_DATA_READING"
    })

 let yaxis = getAxisData(BLUEDATA)
 let xaxis = BLUEDATAREADING

  dispatch({
      type: "SUCCESS_BLUE_DATA_READING",
      payload: {
        xaxis,
        yaxis
      }
    })
  } catch (e) {
    dispatch({
      type: "FAILURE_BLUE_DATA_READING",
    })
  }
}

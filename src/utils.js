import { BLUEDATA,BLUEDATAREADING,BLUESIGNAL,BLUESIGNALREADING,REDDATA,REDDATAREADING,REDSIGNAL,REDSIGNALREADING,YELLOWDATA,YELLOWDATAREADING,YELLOWSIGNAL,YELLOWSIGNALREADING } from './constants'

export const getAxisData = (data) => {
let yaxis = []
if(data === BLUEDATA){
for(let axis = 0; axis <= BLUEDATAREADING.length; axis++){
    yaxis.push(axis)
 }
}else if(data === BLUESIGNAL){
                        for(let axis = 0; axis <= BLUESIGNALREADING.length; axis++){
                             yaxis.push(axis)
                             }
                             }else if(data === REDDATA){

                                            for(let axis = 0; axis <= REDDATAREADING.length; axis++){
                                            yaxis.push(axis)
                                            }
                                            }else if(data === REDSIGNAL){

                                                           for(let axis = 0; axis <= REDSIGNALREADING.length; axis++){
                                                           yaxis.push(axis)
                                                           }
                                                           }else if(data === YELLOWDATA){

                                                                          for(let axis = 0; axis <= YELLOWDATAREADING.length; axis++){
                                                                          yaxis.push(axis)
                                                                          }
                                                                          }else if(data === YELLOWSIGNAL){

                                                                                         for(let axis = 0; axis <= YELLOWSIGNALREADING.length; axis++){
                                                                                         yaxis.push(axis)
                                                                                         }
                                                                                         }
return yaxis
}
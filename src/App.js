
import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { getBlueDataReading } from "./actions/BlueDataReadingActions";
import { getBlueSignalReading } from "./actions/BlueSignalReadingActions";
import { getRedDataReading } from "./actions/RedDataReadingActions";
import { getRedSignalReading } from "./actions/RedSignalReadingActions";
import { getYellowDataReading } from "./actions/YellowDataReadingActions";
import { getYellowSignalReading } from "./actions/YellowSignalReadingActions";
import { Line, Bar } from 'react-chartjs-2';


function App() {
const dispatch = useDispatch();
  const blueDataRead = useSelector(state => state.blueDataReading)
  const blueSignalRead = useSelector(state => state.blueSignalReading)
  const redDataRead = useSelector(state => state.redDataReading)
  const redSignalRead = useSelector(state => state.redSignalReading)
  const yellowDataRead = useSelector(state => state.yellowDataReading)
  const yellowSignalRead = useSelector(state => state.yellowSignalReading)

useEffect( () => {
       dispatch(getBlueDataReading())
       dispatch(getBlueSignalReading())
       dispatch(getRedDataReading())
       dispatch(getRedSignalReading())
       dispatch(getYellowDataReading())
       dispatch(getYellowSignalReading())
  }, [])

  return (
    <div className="App">
      <div className="bluecontainer">
      <Line
            data={blueDataRead.data}
      />
      <Bar
            data={blueSignalRead.data}
      />
      </div>
      <div className="redcontainer">
      <Line
             data={redDataRead.data}
      />
      <Bar
             data={redSignalRead.data}
      />
      </div>
      <div className="yellowcontainer">
      <Line
             data={yellowDataRead.data}
      />
      <Bar
             data={yellowSignalRead.data}
      />
      </div>
    </div>
  );
}

export default App;

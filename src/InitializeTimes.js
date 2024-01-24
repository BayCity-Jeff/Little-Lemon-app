import "./App.css";
import "./style.css";
import TimesList from "./TimesList";


function InitializeTimes() {
    const [availableTimes, setAvailableTimes] = useState([ 'Select Time', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ]);

    return (
        <div className="initializeTimes">
            <TimesList />
        </div>
    );
}

export default InitializeTimes;
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {
    Home,
    Crew,
    Destination,
    Technology

} from './Pages'
import './App.css'

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} ></Route>
                    <Route exact path="/destination" element={<Destination />} ></Route>
                    <Route exact path="/crew" element={<Crew />} ></Route>
                    <Route exact path="/technology" element={<Technology />} ></Route>
                </Routes>
            </Router>
        </>
    )
}

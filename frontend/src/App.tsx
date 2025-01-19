import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./componants/Landing"


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App



// import { Room } from "./componants/Room";
{/* <Route path="/room" element={<Room />}/> */}

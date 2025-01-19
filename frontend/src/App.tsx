import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Room } from "./componants/Room"
import { Landing } from "./componants/Landing"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/room" element={<Room />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

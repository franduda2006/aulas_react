import { Routes, Route } from "react-router-dom"

import Aluno from "./pages/Aluno"
import Professor from "./pages/Professor"

function Router() {
    return(
        <Routes>
            <Route path="/" element={<Aluno />} />
            <Route path="/professor" element={<Professor />} />
        </Routes>
    )
}

export default Router
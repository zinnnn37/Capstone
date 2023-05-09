import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Form from './pages/Form'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Form />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

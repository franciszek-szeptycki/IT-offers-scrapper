import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Root from "./Root";
import './styles/index.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Root>
            <App />
        </Root>
    </React.StrictMode>,
)

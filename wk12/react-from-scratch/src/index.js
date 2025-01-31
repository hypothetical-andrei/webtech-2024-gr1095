import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App tab='home' />)

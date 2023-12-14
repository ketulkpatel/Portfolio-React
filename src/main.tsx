import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import CustomCursor from './CustomCursor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      {/* <CustomCursor /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

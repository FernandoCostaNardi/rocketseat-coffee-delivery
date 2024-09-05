import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './context/CartContextProvider'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App

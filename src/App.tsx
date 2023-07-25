// import { Button } from "./components/Button";
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import GlobalStyles from "./styles/global";
import {BrowserRouter} from 'react-router-dom'
import {Router} from './Router'

export function App() {


  return (
   <>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter> 
      <Router/>
      
     {/* <div>
        <Button variant="primary"></Button>
        <Button variant="secondary"></Button>
        <h1>Teste</h1>
     </div> */}

     <GlobalStyles />
     </BrowserRouter>
    </ThemeProvider>
   </>
  )
}
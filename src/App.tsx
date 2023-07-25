import { Button } from "./components/Button";
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import GlobalStyles from "./styles/global";

export function App() {


  return (
   <>
    <ThemeProvider theme={defaultTheme}>
     <div>
        <Button variant="primary"></Button>
        <Button variant="secondary"></Button>
        <h1>Teste</h1>
     </div>
     <GlobalStyles />
    </ThemeProvider>
   </>
  )
}
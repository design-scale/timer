import { Play } from "phosphor-react";
import { Button, HomeContainer, FormContainer, CountdownContainer, Separator, Input, MinutesAmoutInput } from "./styles";

export function Home(){
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <Input 
                        id="task" 
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestion"
                        />
                    <datalist id='task-suggestion'>
                        <option value='Projeto 1'/>
                        <option value='Projeto 2'/>
                    </datalist>
                    <label htmlFor="">durante</label>
                    <MinutesAmoutInput 
                        type="number" 
                        id='minutesAmount'
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        />
                    <span>minutos</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <Button type="submit">
                    <Play size={24}/>
                    Começar
                </Button>
            </form>
        </HomeContainer>
    )
}
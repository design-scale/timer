import {useForm} from 'react-hook-form'
import { Play } from "phosphor-react";
import { Button, HomeContainer, FormContainer, CountdownContainer, Separator, Input, MinutesAmoutInput } from "./styles";

import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'   


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "informe a tarefa"),
    minutesAmount: zod.number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

export function Home(){

    const {register, handleSubmit, watch, formState} = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
    })
    
    console.log(formState.errors)

    // const [task, setTask] = useState('')

    function handleCreateNewCycle(data: any){ 
        console.log(data)
    }
    const task = watch('task')
    const isSubmitDisabled = !task
    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <Input 
                        id="task" 
                        // name='task'
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestion"
                        // onChange={(e) => setTask(e.target.value)}
                        // value={task}
                        {...register("task")}

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
                        // max={60}
                        {...register("minutesAmount", {valueAsNumber: true})}
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

                <Button type="submit" disabled={isSubmitDisabled}>
                    <Play size={24}/>
                    Começar
                </Button>
            </form>
        </HomeContainer>
    )
}
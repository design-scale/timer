import {useForm} from 'react-hook-form'
import { Play } from "phosphor-react";
import { Button, HomeContainer, FormContainer, CountdownContainer, Separator, Input, MinutesAmoutInput } from "./styles";
    
import * as zod from 'zod'   
import {zodResolver} from '@hookform/resolvers/zod'
import { useState } from 'react';


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "informe a tarefa"),
    minutesAmount: zod.number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

// interface NewCycleFormData {
//     task: string
//     minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
    id: string
    task: string
    minutesAmount: number
}

export function Home(){

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0) 

    const {register, handleSubmit, watch, formState, reset} = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })
    
    console.log(formState.errors)

    // const [task, setTask] = useState('')

    function handleCreateNewCycle(data: NewCycleFormData){ 
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id, 
            task: data.task,
            minutesAmount: data.minutesAmount
        }

        setCycles([...cycles, newCycle])
        setActiveCycleId(id)

        console.log(data)
        reset()
    }


    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
    console.log(activeCycle)

    const totalSeconds= activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 60) 
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')  




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
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdownContainer>

                <Button type="submit" disabled={isSubmitDisabled}>
                    <Play size={24}/>
                    Começar
                </Button>
            </form>
        </HomeContainer>
    )
}
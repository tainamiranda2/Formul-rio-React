import React from 'react';

import * as C from './styles';

import { Link,useNavigate } from "react-router-dom";

import { useForm, FormActions } from '../../contexts/FormContext';

import { Theme } from '../../components/Theme';

import { ChangeEvent, useEffect } from 'react';

import { SelectOption } from '../../components/SelectOption';

export const FormStep2 =()=>{

  const history= useNavigate();

const {state, dispatch} = useForm();

 useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);
  
//funçao de click
  const handleNextStep=()=>{
  if(state.name !== '') {
   history('/step3')
  }else{
alert("Preencha os dados.");
  }
  }
  const handleNameChange= (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }


  return (
    <Theme>
    <C.Container>
       <p>Passo 2/3</p>
       <h1>{state.name}, o que melhor descreve você?</h1>
     <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

 <hr/>

  <SelectOption
              title="Sou iniciante"
              description="Comecei a programar há menos de 2 anos"
              icon="🥳"
              selected={state.level === 0}
              onClick={()=>setLevel(0)}
                />

         <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

       <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
      
    </C.Container>
    </Theme>
  )
}
import React from 'react';

import { createContext, useContext, useReducer, ReactNode } from 'react';

//types
type State ={
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

type Action ={
  type: FormActions;
  payload: any;
}

type ContextType={
  state: State;
  //função
  dispatch: (action: Action) => void;

}

type FormProviderProps ={
  children: ReactNode;
}
//variaveis inicializadas sem nada
const initialDate={
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: ""
}

//context armazenar dados 

const FormContext = createContext<ContextType | undefined>(undefined);

//reducer executar certas ações especificas

export enum FormActions {
  //nomes especificos
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

const formReducer = (state: State, action: Action) => {

  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }

    case FormActions.setName:
      return { ...state, name: action.payload }

    case FormActions.setLevel:
      return { ...state, level: action.payload }

    case FormActions.setEmail:
      return {...state, email: action.payload }

    case FormActions.setGithub:
      return {...state, github: action.payload }
    default:
      return state;
  }
}

//Provider é um ambiente para ter acesso aos dados

export const FormProvider=({children}: FormProviderProps) =>{
//reducer pelo react
  const [state, dispatch]=useReducer (formReducer, initialDate);

  const value = {state, dispatch}

  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  )

}

//hook simplificaa o processo de acesso as informações e permite a troca dessas informações
export const useForm=()=>{
  const context = useContext(FormContext);
  if(context === undefined){
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context;
}
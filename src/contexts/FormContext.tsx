
//Provider é um ambiente para ter acesso aos dados

//hook simplificaa o processo de acesso as informações e permite a troca dessas informações
import {createContext, useContext, useReducer} from 'react'

//context armazenar dados 

const FormContext=createContext(undefined);
//reducer executar certas ações especificas

enum FormActions{
//nomes especificos
setCurrentStep,
setName,
setLevel,
setEmail,
setGithub
}

const fomrReducer=(state, action)=>{

  switch(action.type){
    case FormActions.setCurrentStep:
      return {...state, currentStep: action.payload}

  case FormActions.setName:
      return {...state, name: action.payload}

  case FormActions.setLevel:
      return {...state, level: action.payload}

  case FormActions.setEmail:
    return {..state, email: action.payload}

  case FormActions.setGithub:
  return {..state, github: action.payload}
  }
}
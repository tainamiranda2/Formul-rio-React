import React from 'react'
import * as C from './styles';
import {Theme} from '../../components/Theme'
export const FormStep1 =()=>{
  return (
    <>
    <C.Container>
  <p>Passo  1/3</p>
  <h1>Vamos coeçar com seu nome</h1>
  <p>Preencha o campo abaixo com seu nome completo</p>
  <hr/>

<label>Seu nome completo
<input type="text
  autoFocus
/>
</label>

<button onClick={}handleNextStep>Próximo</button>

    </C.Container>
    </>
  )
}
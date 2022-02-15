import React from 'react';

import * as C from './styles';

import {Header} from '../Header';

import ReactNode from 'react'

type Props ={
  children: ReactNode;
}

export const Theme = ({children}: Props) =>{
  return (
    <C.Container>
    <C.Area>
    <Header/>

    <C.Steps>
    <C.Siderbar>
    
    </C.Siderbar>
    

    <C.Page>
    {children}
    </C.Page>
    </C.Steps>
    </C.Area>
    
    </C.Container>
  )
}
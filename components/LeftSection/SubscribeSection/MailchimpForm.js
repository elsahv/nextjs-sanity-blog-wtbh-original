import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'



export const SubscribeContainer = styled.form`
// background: teal;
width: 100%;
padding: 10px 10px 10px 20px;
   
@media only screen and (max-width: 600px) {
  // margin: 20px;
}
`


export const SubFormContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    display: block;
  }
 `




export const Input = styled.input`
padding: 5px 10px 5px 10px;
border-radius: 4px;
border: 1px solid #000;
font-size: 16px;
background: aquamarine;

@media (max-width: 600px) {
width: 220px;
}
`


export const Button = styled.button`
  padding: 5px 10px 5px 10px;
  margin-left: 10px; 
  border: solid 2px black;
  border-radius: 4px;
  font-weight: bold;
  background: aquamarine;
  cursor: pointer;
      /* :disabled {
        background: #636262;
    color: #cbced0;
      } */
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

@media (max-width: 600px) {
  margin-top: 10px;
  margin-left: 0;
}
} 
`

export const SuccessState = styled.p`
  color: #2a9d8f;;
  padding-top: 20px;
`

export const ErrorState = styled.p`
  color: #b00020;
  padding-top: 22px;
`



 


function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')
    try { 
      const response = await axios.post('/api/subscribeApi', { email })
      setState('Success')
      setEmail('')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
     <>
      <SubscribeContainer onSubmit={subscribe}>
        <SubFormContainer>

              <Input
                required
                name="email"
                type="email"
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            <Button
              disabled={state === 'Loading'}
              type="submit"
              onClick={subscribe}
            >
              Subscribe
            </Button>

        </SubFormContainer>
            {state === 'Error' && (
              <ErrorState>{errorMsg}</ErrorState>
            )}
            {state === 'Success' && (
              <SuccessState>Awesome, you are now subscribed!</SuccessState>
            )}

    </SubscribeContainer>
    </>  
  )
}

export default Subscribe
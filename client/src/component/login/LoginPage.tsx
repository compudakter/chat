import React, { useEffect } from 'react'
import { FC, useCallback, useState } from 'react' 
import { LoginState } from '../../types/security'
import { Button } from '../ui/button/Button'
import { Input } from '../ui/input/Input'
import './LoginPage.scss'

type LoginType = 'signin' | 'signup'
const DEFAULT_STATE = {
    name: '',
    password: '',
    retryPassword: '',
    phone: ''
}
interface LoginPageProps {
    signIn:(phone:string,password:string)=>void
    signUp:(data:LoginState)=>void

}
 

export const LoginPage: FC<LoginPageProps> = ({signIn,signUp}) => {
    const [type, setType] = useState<LoginType>('signup')
    const [state, setState] = useState<LoginState>(DEFAULT_STATE)
    const changeState = (key: keyof LoginState) => useCallback((e: any) => {
        const value = e.target.value
        const newState = { ...state, [key]: value } 
        setState(newState)
    }, [state])
    
    useEffect(()=>{
        setState(DEFAULT_STATE)
    },[type])
    

    return (
        <div className="login-page">
            <div className="login-page__form">
                <div className="login-page__type">
                    <div className={`login-page__type-btn login-page__type-btn_${type==='signup'?'active':''}   login-page__sign-up`} onClick={() => setType('signup')}>Регистрация</div>
                    <div className={`login-page__type-btn login-page__type-btn_${type==='signin'?'active':''} login-page__sign-in`} onClick={() => setType('signin')}>Войти</div>
                </div>
              
                <div className="login-page__content">
                    {type === 'signup' ?
                        <SignUp signUp={signUp} state={state} changeState={changeState} />
                        : <SignIn signIn={signIn} state={state} changeState={changeState} />
                    }
                </div>
            </div>
        </div>
    )
}
interface SignProps {
    state: LoginState
    changeState: (key: keyof LoginState) => (e: any) => void   
}
interface SignUpProps extends SignProps{ 
    signUp:(data:LoginState)=>void
}
const SignUp: FC<SignUpProps> = ({ state, changeState,signUp }) => {
    const handleSignIn = () =>{
        signUp(state)
    }
    return (<>
        <LoginInputGroup label="Имя" value={state.name} onChange={changeState('name')} />
        <LoginInputGroup label="Телефон" value={state.phone} onChange={changeState('phone')} />
        <LoginInputGroup label="Пароль" value={state.password} onChange={changeState('password')} />
        <LoginInputGroup label="Повторите пароль" value={state.retryPassword} onChange={changeState('retryPassword')} />
        <div className="login-page__signup">
            <Button  onClick={handleSignIn}>
                Зарегистрироваться
            </Button>
        </div>
    </>)
}

interface SignInProps extends SignProps{     
    signIn:(phone:string,password:string)=>void
}
const SignIn: FC<SignInProps> = ({ state, signIn,changeState }) => {
    const handleSignUp = () =>{
        signIn(state.phone,state.password)
    }
    return (<>
        <LoginInputGroup label="Телефон" value={state.phone} onChange={changeState('phone')} />
        <LoginInputGroup label="Пароль" value={state.password} onChange={changeState('password')} />
        <div className="login-page__signup">
            <Button onClick={handleSignUp}>
                Войти
            </Button>
        </div>
    </>)
}


interface LoginInputGroup {
    label: string
    value: string
    onChange: (e: any) => void
}

const LoginInputGroup: FC<LoginInputGroup> = React.memo(({ onChange, label, value }) => {
    
    return <div className="login-page__group">
        <div className="login-page__label">
            {label}:
        </div>
        <div className="login-page__input">
            <Input value={value} onChange={onChange} />
        </div>
    </div>
})


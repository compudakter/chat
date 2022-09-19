import React from 'react'
import { FC, useCallback, useState } from 'react'
import './LoginPage.scss'

type LoginType = 'signin' | 'signup'
const DEFAULT_STATE = {
    name: '',
    password: '',
    retryPassword: '',
    phone: ''
}
interface LoginPageProps {

}
interface LoginState {
    name: string
    phone: string
    password: string
    retryPassword: string
}

export const LoginPage: FC<LoginPageProps> = ({ }) => {
    const [type, setType] = useState<LoginType>('signup')
    const [state, setState] = useState<LoginState>(DEFAULT_STATE)
    const changeState = (key: keyof LoginState) => useCallback((e: any) => {
        const value = e.target.value
        const newState = { ...state, [key]: value }
        setState(newState)
    }, [])
    const title = 'Крутое лого'
    return (
        <div className="login-page">
            <div className="login-page__form">
                <div className="login-page__type">
                    <div className="login-page__sign-up" onClick={() => setType('signup')}>Регистрация</div>
                    <div className="login-page__sign-in" onClick={() => setType('signin')}>Войти</div>
                </div>
                <div className="login-page__title">
                    {title}
                </div>
                <div className="login-page__content">
                    {type === 'signup' ?
                        <SignUp state={state} changeState={changeState} />
                        : <SignIn state={state} changeState={changeState} />
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

const SignUp: FC<SignProps> = ({ state, changeState }) => {
    console.log('sign up')
    return (<>
        <LoginInputGroup label="Имя" value={state.name} onChange={changeState('name')} />
        <LoginInputGroup label="Телефон" value={state.phone} onChange={changeState('phone')} />
        <LoginInputGroup label="Пароль" value={state.password} onChange={changeState('password')} />
        <LoginInputGroup label="Повторите пароль" value={state.retryPassword} onChange={changeState('retryPassword')} />
        <div className="login-page__signup">
            <button  >
                Зарегистрироваться
            </button>
        </div>
    </>)
}


const SignIn: FC<SignProps> = ({ state, changeState }) => {
    console.log('sign up')
    return (<>
        <LoginInputGroup label="Телефон" value={state.phone} onChange={changeState('phone')} />
        <LoginInputGroup label="Пароль" value={state.password} onChange={changeState('password')} />
        <div className="login-page__signup">
            <button  >
                Войти
            </button>
        </div>
    </>)
}


interface LoginInputGroup {
    label: string
    value: string
    onChange: (e: any) => void
}

const LoginInputGroup: FC<LoginInputGroup> = React.memo(({ onChange, label, value }) => {
    console.log('renfdd', label)
    return <div className="login-page__group">
        <div className="login-page__label">
            {label}:
        </div>
        <div className="login-page__input">
            <input value={value} onChange={onChange} />
        </div>
    </div>
})


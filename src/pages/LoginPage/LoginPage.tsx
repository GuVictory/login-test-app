import React, { useReducer, useEffect, useCallback } from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { PageContainer } from '../../components/PageContainer';
import { initialState, reducer } from './store';
import cn from 'classnames';

import './LoginPage.css';
import { TextInput } from '../../components/TextInput/TextInput';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.username.trim() && state.password.trim()) {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: false
            });
        } else {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: true
            });
        }
    }, [state.username, state.password]);

    const handleLogin = useCallback(() => {
        // Тут по хорошему нормальный запрос на бек, но для шоу сделаем так
        if (state.username === 'test@email.com' && state.password === 'password') {
            dispatch({
                type: 'loginSuccess',
                payload: 'Login Successfully'
            });
            document.documentElement.style.setProperty('--card-shadow-color-1', 'rgba(110, 252, 252, 0.8)');
            document.documentElement.style.setProperty('--card-shadow-color-2', 'rgba(66, 155, 155, 0.8)');
        } else {
            dispatch({
                type: 'loginFailed',
                payload: 'Incorrect username or password'
            });
            document.documentElement.style.setProperty('--card-shadow-color-1', 'rgba(252, 110, 110, 0.8)');
            document.documentElement.style.setProperty('--card-shadow-color-2', 'rgba(252, 110, 110, 0.8)');
        }
    }, [state.password, state.username]);

    const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
            state.isButtonDisabled || handleLogin();
        }
    }, [handleLogin, state.isButtonDisabled]);

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
            dispatch({
                type: 'setPassword',
                payload: event.target.value
            });
    }, []);

    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        dispatch({
            type: 'setUsername',
            payload: event.target.value
        });
    }, []);

    return (
        <PageContainer className={cn('LoginPage')}>
            <Card className={cn('LoginPage__card')}>
                <h1 className={cn('LoginPage__card-title')}>Welcome Back</h1>
                <TextInput
                    className={cn('LoginPage__card-input')}
                    type={'text'}
                    placeholder={'Email'}
                    tabIndex={1}
                    onChange={handleEmailChange}
                    onKeyPress={handleKeyPress}
                    error={state.isError}
                />
                <TextInput 
                    className={cn('LoginPage__card-input')}
                    type={'password'}
                    placeholder={'Password'}
                    tabIndex={2}
                    onChange={handlePasswordChange}
                    onKeyPress={handleKeyPress}
                    error={state.isError}
                />
                <span
                    className={cn('LoginPage__card-error', { visible: state.isError })}
                >
                    {state.helperText}
                </span>
                <Button
                    children={'Sign In'}
                    className={'test'}
                    disabled={state.isButtonDisabled}
                    tabIndex={3}
                    onClick={handleLogin}
                />
                <div className={cn('LoginPage__card-link')}>
                    New here? <Link to="/register">Create account</Link>
                </div>
                <div className={cn('LoginPage__card-link')}>
                    <Link to="/forgot">Forgot your password?</Link>
                </div>
            </Card>
        </PageContainer>
    );
}

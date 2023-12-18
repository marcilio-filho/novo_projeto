// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../forms/LoginForm';
import Logo from '../assets/images/logo_1.png';

function LoginPage() {
    async function handleLogin(email, password) {
        try {
            const response = await fetch('http://localhost:8000/login/', { // Adjust the URL based on your setup
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                // Handle successful login (e.g., redirect to a dashboard)
            } else {
                console.error('Login failed:', data);
                // Handle login failure
            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle network error
        }
    }

    return (
        <>
            <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-12 w-auto"
                        src= {Logo}
                        alt="Logo do Grupo Ubique"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Faça o login na sua conta
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm onLogin={handleLogin} />
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Não tem uma conta? {' '}
                        <a href="www.google.com" className="font-semibold leading-6 text-primary-color hover:opacity-90">
                            Crie uma aqui!
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default LoginPage;

import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);  


    const handleSubmit = async (event) => {
        event.preventDefault();
        onLogin(email, password);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Informe seu e-mail"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-color/90 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color focus:border-primary-color focus:outline-none sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Digite sua senha"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-color/90 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color focus:border-primary-color focus:outline-none sm:text-sm sm:leading-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>


{/* Remember Me Checkbox and Forgot Password Link */}
<div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded checked:bg-color-primary-color"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Lembrar meus dados
                    </label>
                </div>
                <div className="text-sm">
                    <a href="/forgot-password" className="font-medium text-primary-color hover:text-primary-dark">
                        Esqueceu sua senha?
                    </a>
                </div>
            </div>


            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-color/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                >
                    Fazer login
                </button>
            </div>
        </form>
    );
}

export default LoginForm;

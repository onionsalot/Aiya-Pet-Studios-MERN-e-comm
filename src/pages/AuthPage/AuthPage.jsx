import React from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default function AuthPage({ setUser , setIsAdmin }) {
	return (
		<main>
			<h1>AuthPage</h1>
			<SignUpForm setUser={setUser} setIsAdmin={setIsAdmin} />
			<LoginForm setUser={setUser} setIsAdmin={setIsAdmin} />
		</main>
	);
}

import { BASE_URL } from './api';


// LoginUsuario API
export const loginUsuario = async (email, password) => {
    try { 
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                senha: password 
            })
        });

        if (!response.ok) {
            throw new Error('Email ou senha inválidos');
        }
        
        return await response.json();

    } catch (error) {
        console.error('Erro na adaptação (auth service):', error);
        throw error;    
    }
}


// RegistroUsuario API
export const cadastrarUsuario = async (name, email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: name,
                email: email,
                senha: password,
                //telefone: phone
     
            })
        });

        if (!response.ok) {
            // possivel erro 409, 400 ou 500
            throw new Error('Erro ao cadastrar usuário');
        }

        return await response.text();

    } catch (error) {
        console.error('Erro na adaptação (auth service):', error);
        throw error;
    }
}
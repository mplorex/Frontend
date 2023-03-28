import {defineStore} from "pinia"

let userData = localStorage.getItem('userInfo')
if (userData) {
    userData = JSON.parse(userData)
}

export const useUserStore = defineStore('user', {
    state: () => {
        return { 
            user: userData, 
        };
    },
    getters: {
        isAuth: (state) => !! state.user
    },
    actions: {
        async signup (name, email, password, token) {
            try {
                const response = await fetch('http://localhost:3000/api/auth/signup/', {
		        method: 'POST', 
		        headers: {
		            'Content-Type': 'application/json',
                    'Authorization': token,
	            },
	            body: JSON.stringify({
		            email,
                    name,
                    password
	            }),
            })

            const data = await response.json(); 
            localStorage.setItem("userInfo", JSON.stringify(data));
            this.user = data;
            return data;

            }catch (error) {
                console.log(error)
                return error
            }
        },
        async login ( email, password, token) {
            try {
                const response = await fetch('http://localhost:3000/api/auth/login/', {
		        method: 'POST', 
		        headers: {
		            'Content-Type': 'application/json',
                    'Authorization': token,
	            },
	            body: JSON.stringify({
		            email,
                    password
	            }),
            })

            const data = await response.json(); 
            localStorage.setItem("userInfo", JSON.stringify(data));
            this.user = data;
            return data;

            }catch (error) {
                console.log(error)
                return error
            }
        }
    }})

export interface RegisterUser {
    fullname: string
    phone: number
    discordId: string
    github?: string
    linkedin?: string
    tech?: string[]
}


export const API = {
    register: async (user: RegisterUser) => {
        const res = await fetch('http://localhost:42069/users/register', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err)
                return err
            })
        return res
    }
};

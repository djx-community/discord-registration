export interface RegisterUser {
  fullname: string;
  phone: number;
  discordId: string;
  github?: string;
  linkedin?: string;
  tech?: string[];
}

export const API = {
  register: async (user: RegisterUser) => {
    const BASE_URL = import.meta.env.VITE_APP_API;
    const res = await fetch(BASE_URL + "/users/register", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return res;
  },
};

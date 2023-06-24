import  axios  from 'axios';
import { backendPort } from '../config';
interface Email{
  email:string
}
export function registerToNewsletter(email:string) {
  return new Promise((resolve, reject) => {
    axios.post( `http://localhost:${backendPort}/newsletter/register`, { email },  {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

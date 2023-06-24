import  axios  from 'axios';
import { backendPort } from '../config';
interface Email{
  email:string
}
interface Data{

}
export async function registerToNewsletter(email:string) {
   const res = await axios.post( `http://localhost:${backendPort}/newsletter/register`, { email },  {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    if (res) {
      console.log(res," ressssssssssssss")
      const data: Data =  res.data;
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  };



export const fetchData = () => {
  return axios.get('/api/data')
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });
};
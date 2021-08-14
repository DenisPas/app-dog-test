import axios from 'axios';

const url = 'https://dog.ceo/api';

export const allDog = () => new Promise((resolve, reject) => {
  axios.get(`${url}/breeds/image/random/20`)
    .then((response: any) => {
      resolve(response.data);
    })
    .catch((error: any) => reject(error));
});

export const listBreeds = () => new Promise((resolve, reject) => {
  axios.get(`${url}/breeds/list/all`)
    .then((response: any) => {
      resolve(response.data);
    })
    .catch((error: any) => reject(error));
});


export const dogsByBreed = (breed:string) => new Promise((resolve, reject) => {
    axios.get(`${url}/breed/${breed}/images/random/20`)
        .then((response: any) => {
            resolve(response.data);
        })
        .catch((error: any) => reject(error));
});


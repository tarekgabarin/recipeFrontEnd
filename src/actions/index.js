import axios from 'axios';

export const FETCH_ALL_RECIPES = 'fetch_user_recipes';

const ROOT_URL = 'https://floating-crag-59454.herokuapp.com';

export function fetchRecipes(){

    const request = axios.get(`${ROOT_URL}/recipes/`);

    return {
        type: FETCH_ALL_RECIPES

    };

}

export function logInUser({email, password}){



    return function(dispatch) {

        axios.post(`${ROOT_URL}/users/login`, {email, password})

            .catch(function(error) {

                if (error.response) {

                    console.log(response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);


                }

                else {

                    console.log('Error', error.message);
                }

                console.log(error.config);


            });

    }





    
}
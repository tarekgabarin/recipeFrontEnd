import axios from 'axios';

export const FETCH_ALL_RECIPES = 'fetch_user_recipes';

const ROOT_URL = 'https://ancient-savannah-40225.herokuapp.com';

export function fetchRecipes(){

    const request = axios.get(`${ROOT_URL}/recipes/`)

    return {
        type: FETCH_ALL_RECIPES

    };

}
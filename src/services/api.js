import axios from 'axios';

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

async function login(data) {
    const token = await axios.post(`${BASE_URL}/signIn`, data);
    return token;
}
async function createUser(user){
    await axios.post(`${BASE_URL}/users`, user);
}
async function getUser(token) {
    const config = createConfig(token);
  
    const user = await axios.get(`${BASE_URL}/users`, config);
    return user;
  }
async function getDisciplinesByTerms(token){
    const config = createConfig(token);
    const discipline= await axios.get(`${BASE_URL}/tests/terms`, config);
    return discipline;
}
async function getDisciplinesByTeacher(token){
    const config = createConfig(token);
    const discipline= await axios.get(`${BASE_URL}/tests/teacher`, config);
    return discipline;
}

async function getCategories(token){
    const config=createConfig(token);
    const category = await axios.get(`${BASE_URL}/tests/categories`,config);
    return category;
}

async function getDisciplines(token){
    const config = createConfig(token);
    const discipline = await axios.get(`${BASE_URL}/disciplines`,config);
    return discipline;
}
async function countViews(id){
    const views = await axios.put(`${BASE_URL}/countViews/${id}`);
    return views;
}

const api={
    login,
    createUser,
    getUser,
    getDisciplinesByTerms,
    getDisciplinesByTeacher,
    getCategories,
    getDisciplines,
    countViews
}

export default api;
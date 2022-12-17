import axios from 'axios';

const BASE_URL = 'http://localhost:9800/students';

export async function saveStudent(student){
    return axios.post(BASE_URL,student)
}

export async function getAllStudents(){
    return axios.get(BASE_URL);
}
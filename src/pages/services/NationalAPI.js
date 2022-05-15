import axios from "axios";

function findAll() {
    return axios
        .get("https://cc-division.herokuapp.com/api/national")
        .then(response => response.data);
}

function getOnById(id) {
    return axios
        .get("https://cc-division.herokuapp.com/api/national/update"+id)
        .then(response => response.data);
}

export default {
    findAll
};
export {getOnById};

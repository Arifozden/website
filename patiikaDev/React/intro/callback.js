//import fetch from "node-fetch";
//import axios from "axios";

const getComments = () => {
    return new Promise((resolve,reject) => {
        resolve("Comments");
    });
};

getComments()
.then((data) => console.log(data))
.catch((e) => console.log(e));
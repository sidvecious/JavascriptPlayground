const URL = "https://swapi.dev/api/planets/";

const $ = document.querySelector.bind(document);

const planetList = [];

const verifyURL = id =>
    new Promise((resolve, reject) => {
        fetch(URL + id + "/")
            .then(res => res.json())
            .then(resolve)
            .catch(reject)
    });


const fetchPlanets = id => {
    verifyURL(id)
        .then(data => data.name == undefined ? endLoad() : nextplanetLoad(data, id));
}

let nextplanetLoad = (data, id) => {
    planetList.push(data.name);
    $("#planets").innerHTML = planetList.join(', ');
    fetchPlanets(id+1)
};

let endLoad = () => $("#status").innerHTML = 'planet loaded!';

fetchPlanets(1);
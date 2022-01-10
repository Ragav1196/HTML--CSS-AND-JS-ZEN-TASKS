const get_details = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () =>{
        const print_details = xhr.response;
        for(let values of print_details){
            console.log(`NAME : ${values.name}`);
            console.log(`REGION : ${values.region}`);
            console.log(`SUB REGION : ${values.subregion}`);
            console.log(`POPULATION : ${values.population}`);
        }
    };
    xhr.send();
};
get_details();
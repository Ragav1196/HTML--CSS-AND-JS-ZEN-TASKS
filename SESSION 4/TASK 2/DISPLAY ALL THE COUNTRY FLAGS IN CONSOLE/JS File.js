const get_flags = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json"
    xhr.onload = () =>{
        const print_flags = xhr.response
        for(let values of print_flags){
            console.log(values.flag);
        }
    };
    xhr.send();
};
get_flags();
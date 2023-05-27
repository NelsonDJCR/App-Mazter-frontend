export function getBearer() {
    return localStorage.getItem("bearer");
}
export function urlApi(url) {
    return "http://App-Mazter-backend.develop/api/v1/" + url;
    // return "http://mazter-backend.test/api/v1/" + url;
    //  return "http://mazter-backend.develop/api/v1/" + url;
    // return 'https://api.nelsondjcr.com/api/v1/'+ url;
}
export function configApi() {
    var config = {};
    if (localStorage.getItem("bearer")) {
        config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("bearer")}`,
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
            },
        };
    } else {
        config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        };
    }
    return config;
}

export function getUserRole() {

}

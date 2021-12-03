import {API} from "../../backend";

export const signupme = user => {
    // console.log(`${API}/sign-up`);
    // console.log(user);
    return fetch(`${API}/sign-up`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => console.log("eRROr: " + err))
}



// export const getWithAuth = (endPoint) => {
//     return fetch(`${API}/${endPoint}`, {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     }).then(response => {
//         return response.json()
//     }).catch(err => console.log("SIGNIN:" + err))
// }

export const signin = user => {
    console.log(user);
    return fetch(`${API}/log-in`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => console.log("SIGNIN:" + err))
}


export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}


export const signout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();
        return fetch(`${API}/signout`, {
            method: "GET"
        }).then(response => console.log("signout success")).catch(err => console.log(err))
    }
}


export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }

    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt")).data;
    } else {
        return false;
    }
}
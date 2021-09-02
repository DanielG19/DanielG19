fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
        title: "Wash the dishes",
        completed: false
    }),
    headers: {
        "Content-type": "application/json"
    }
})
    .then(Response => Response.json())
    .then(json => console.log(json))


async function getUser(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(response.ok){

    }else{
        throw Error(response.status);
    }
    let data = await response.json();
    return data;
}

getUser(5).then((data) => console.log(data)).catch((error)=>console.log('Error!!!!'));
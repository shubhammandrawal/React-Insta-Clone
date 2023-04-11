const Base_URL=process.env.NODE_API
// const Base_URL="http://localhost:8000/post";

export function getAllPost(){

    return fetch(`${Base_URL}/posts`)
    .then(res => res.json)
    .catch(err => alert(err.message));
}


export function addNewPost(){

    return fetch(`${Base_URL}/posts`,{
            method: "POST",
            body: "post"
        })
        .then(res => res.json)
        .catch(err => alert(err.message));            
}
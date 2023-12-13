const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    'X-CSRF_TOKEN': csrfToken,
    'Accept': 'application/json', 
    ...options.headers
  };

  return await fetch(url, options);
}


export const foo = "bar";

export const followUser = (id) => {
  return customFetch( `/users/${id}/follow` , {method: 'POST'})
}

export const unfollowUser = (id) => {
  return customFetch(`/users/${id}/follow` , {method: 'DELETE'})
}
const getMyGithubProjects = async () => {
    const url="https://api.github.com/users/Arjitlohani"
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // fetch(url)
    // .then((response)=>console.log(response, "Accepted"))
    // .catch((error=>console.log(error, "Rejected")))
}
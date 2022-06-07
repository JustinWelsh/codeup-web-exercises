"use strict";
(function(){
    // fetch('https://api.github.com/users/JustinWelsh/events/public', {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(response => response.json()).then(res => console.log(res))

    const lastGithubCommit = (username) => {
        const URL = `https://api.github.com/users/${username}/events/public`

        return fetch(URL, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
            .then(response => response.json())
            .then(res => console.log(`${username}'s last commit was: ${res[0].created_at}`))
            .catch(error => console.error(error))   //displays "TypeError:" in console
    }

    lastGithubCommit('JustinWelsh');
    lastGithubCommit('ScottRoberts70');
    lastGithubCommit('WillSmith');



// fetch('https://api.github.com/users/JustinWelsh/events/public', {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(response => response.json()).then(res => console.log(res));

})();


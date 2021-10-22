const linksSocialMedia = {
    github: 'atiquesp',
    youtube: 'atiquesp',
    facebook: 'atiquesp',
    instagram: 'atiquesp',
    twitter: 'atiquesp'
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
}


function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userLogin.textContent = data.login;
        userLink.href = data.html_url
        userBio.textContent = data.bio;
        userImage.src = data.avatar_url;
    })
}


changeSocialMediaLinks();

getGitHubProfileInfos();

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = 
                    `<div class= 'info'>
                        <img src= '${user.avatarURL}' alt='Foto do perfil do usuário' />
                        <div class= 'data'>
                            <h1>${user.name ?? 'Não possue nome cadastrado 😥'}</h1>
                            <p>${user.bio ?? 'Não possue bio cadastrada 😥'}</p>
                        </div>
                        <div class= 'container-follows'>        
                                <div class= 'followers'> 
                                    <p>👥Seguidores</p>  
                                    <div class="totalFollow">
                                        ${user.followers}
                                    </div>                           
                                </div>
                                <div class= 'following'> 
                                <p>👥Seguindo</p>  
                                <div class="totalFollow">
                                    ${user.following}
                                </div>                           
                                </div>
                        </div>
                    </div>
                         `
  
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens +=
             `<li>
             <a href= "${repo.html_url}" target= "_blank">
             ${repo.name}
             <div class= "status-repositories"> 
                <ul>
                    <li>🍴${repo.forks}</li>
                    <li>⭐${repo.stargazers_count}</li>                 
                    <li>👀${repo.watchers}</li>                 
                    <li>👨‍💻${repo.language}</li>                 
                </ul>
             </div>
             </a>
             </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=
                                        `
                                        <div class= 'repositories section'>
                                            <hr>
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            
                                        </div>`
        }

        let activitiesItens = ''
        user.activities.filter(act => {
            if(act.payload.commits !== undefined){
                activitiesItens += `<li><strong>${act.repo.name}</strong>: ${act.payload.commits[0].message}</li>`
            } else {
                activitiesItens += `<li><strong>${act.repo.name}</strong>: Não contém commits!</li>`
            }
        })
      
        if(user.activities.length > 0){
            this.userProfile.innerHTML +=
                                        `
                                        <div class= 'activities section'>
                                        <hr>
                                        <h2>Atividades</h2>
                                        <ul>${activitiesItens}</ul>
                                        </div>`
        }
                                    
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário nao encontrado!</h3>`
    }
}

export { screen }
console.log('before');

getUser(1, (user)=>{
    console.log('User',user);
    getRepos(user.username, (repos)=>{
        console.log('Repos', repos);
    });
});

console.log('after');

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading user from database');
        callback({id:id, username:'suprit'});
    },2000);
}

//exercise
function getRepos(username, callback){
    setTimeout(()=>{
        console.log('Accessing repos from API....');
        callback(['repo1','repo2','repo3']);
    },2000);
}
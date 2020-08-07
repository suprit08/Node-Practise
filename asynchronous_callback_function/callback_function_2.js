console.log('Before');

getUser(1, (user)=>{
    console.log('User:',user);
});

console.log('After');

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading user from database');
        callback({id:id, username:'mosh'});
    }, 2000);
}
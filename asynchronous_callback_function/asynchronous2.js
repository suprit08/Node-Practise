console.log('Before');

const user = getUser(1);
console.log(user);//undefined

console.log('After');

function getUser(id){
    setTimeout(()=>{
        console.log('Reading User from database...');
        return {id:id, username: 'mosh'};
    },2000);
}
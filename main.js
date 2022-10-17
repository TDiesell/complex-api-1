document.querySelector('button').addEventListener('click', getRecipie )
function getRecipie(){
    let food = document.querySelector('input').value
    if(!food){
        document.querySelector('span').innerText= 'forgot to input food'
        return
    }
    fetch(`https://api.api-ninjas.com/v1/recipe?query=${food}`,{
        headers: { 'X-Api-Key': 'pb8zzuPMxPCsMZ3DN5fBFw==xZpwur28wlhBWgUJ'}
    } 
   )
    .then( res => res.json())
    .then(data=>{
        let title = data[0].title
        document.querySelector('h2').innerText = title
        document.querySelector('li').innerText = data[0].instructions
        document.querySelector('p').innerText = data[0].ingredients
        document.querySelector('span').innerText = data[0].servings
        fetch(`https://api.api-ninjas.com/v1/nutrition?query=${title}`,{
            headers: { 'X-Api-Key': 'pb8zzuPMxPCsMZ3DN5fBFw==xZpwur28wlhBWgUJ'}
        } 
       )
       .then( res => res.json())
        .then(data => {
            document.querySelector('h4').innerText = data[0].calories +' calories per serving ' 

        })
    })
}
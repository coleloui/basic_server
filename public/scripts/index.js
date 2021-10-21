const teamlist = document.getElementById('teams')
const teamForm = document.getElementById('team-form')

fetch('/api/hockey').then(res => {
    return res.json()
}).then((data) => {
    console.log(data)
    data.map((team) => {
        const li = document.createElement('li')
        li.textContent = team.team
        teamlist.append(li)
        })

})

teamForm.addEventListener('submit', event => {
    event.preventDefault()
    const newTeam = {
        team: document.getElementById('team-name').value
    }

    fetch('/api/hockey', {
        method: 'POST',
        body: JSON.stringify(newTeam),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
        return res.json()
    }).then(data => {
        console.log(data)
        setTimeout(() => {
            location.reload()
        }, 1000)
    })
})
var allAthletes=[]

function register() {
    show.innerHTML=`
    <tr> 
        <th> Name</th>
        <th> Sport</th> 
        <th> gender</th> 
        <th>country</th>
        <th>Action</th>
    </tr>`
    alert ("Registered")
    var athlete = document.getElementById("athlete").value
    var gender = document.getElementById("gender").value
    var sport = document.getElementById("sport").value
    var country = document.getElementById("country").value

    if ( athlete === '' || gender === '' || sport === '' || country=== ''){
        // alert ("I cannot be emepty, I reject it")
        errorMsg.style.dispay = "block" 
    } else {
        errorMsg.style. display = 'none'
    }
        var people = {
            athlete,
            gender, 
            sport, 
            country
        }

        allAthletes.push(people)
        console.log(allAthletes); 
        for ( i=0; i < allAthletes.length; i++) {
            show.innerHTML += `
            <tr>
                <td>${allAthletes[i].athlete}</td> 
                <td>${allAthletes[i].gender}</td> 
                <td>${allAthletes[i].sport}</td> 
                <td>${allAthletes[i].country}</td> 
                <td>
                <button onclick="deleteitem(${i})" class="btn btn-danger">Delete</button>
                <button onclick="edititem()" class="btn btn-warning">Edit</button>
            </td>
            </tr>`
    }
    localStorage.setItem('allAthlete', JSON.stringify(allAthletes))
}

// A new model  
function deleteitem(people){
    
    let confamu = confirm("Are you sure you want to delete this item")

    if (confamu == true){
    allAthletes.splice(people,1)
        athlete.value = ""
        allAthletes()
    }
    localStorage.setItem("allAthlete", JSON.stringify(allAthletes))
}
const addButton = () => {
    allAthletes.push(inp.value)
    console.log(allAthletes)
    inp.value =""
    allAthletes()
}

const edititem = (index) =>{
    let table = prompt('What item do you want to edit', allAthletes[index])
    allAthletes[index] = table
    allAthletest()
    console.log(allAthletes);
}
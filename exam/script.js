 fetch('http://localhost:3000/greeting')
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
          document.getElementById('result').innerHTML =`
            <div>
              Greetings, ${data.name} ${data.surname}
            </div>
            <div>
              You're ${data.age} years old. Your hobby is:
              <br>
              ${data.hobby}

            `
        })

document.getElementById('form').addEventListener('submit',(e)=>{
  e.preventDefault()
  const input1 = document.getElementById('input1').value
  const input2 = document.getElementById('input2').value
  const input3 = document.getElementById('input3').value
  const input4 = document.getElementById('input4').value
  const data = {
    name:input1,
    surname:input2,
    age:input3,
    hobby:input4
  }

  fetch('http://localhost:3000/save',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })
})
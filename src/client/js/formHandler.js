function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log('::: Returned user input ::: ' + formText)
    Client.checkForName(formText)
    console.log("::: Form Submitted :::");


    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
        .then(res => res.json())
        .then(function (data) {
            console.log('updating the UI')
            document.getElementById('results').innerHTML = data.message
        })
}

export {
    handleSubmit
}
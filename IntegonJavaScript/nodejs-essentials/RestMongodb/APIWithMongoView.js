let btnViewNotes = document.getElementById("btnViewNotes");
let divListOfNotes = document.getElementById("divListOfNotes");



btnViewNotes.addEventListener('click', function () {
    ViewNotesAjax();
})

function ViewNotesAjax() {
    divListOfNotes.innerHTML = "";
    $(document).ready(function () {

        $.ajax({
            url: `http://localhost:3000/notes`,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',
            success: function (result) {
                result.forEach(element => {
                    let newElement = document.createElement("li");
                    let newElementLines = document.createElement("div");
                    newElement.innerText = `Title: ${element.title}, Content: ${element.content}`
                    newElementLines.innerText = `--------------------------------------------`
                    divListOfNotes.appendChild(newElement);
                    divListOfNotes.appendChild(newElementLines);

                    console.log(element)
                });
            },
            error: function (result) {
                console.log("La llamada no se pudo completar")

            }

        });

    });

}
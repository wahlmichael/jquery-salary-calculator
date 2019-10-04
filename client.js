console.log('client.js running')

$('document').ready(onReady);

function onReady(){
    $('#inputBtn').on('click', inputClick);
    $('table').on('click', '.deleteBtn', deleteEntry);
}

function inputClick(){
    fName = $('#fName').val();
    lName = $('#lName').val();
    idNumber = $('#idNumber').val();
    title = $('#title').val();
    salary = $('#salary').val();
    addToDom();
}

function addToDom(){
    let output = `<tr>
        <th>${fName}</th>
        <th>${lName}</th>
        <th>${idNumber}</th>
        <th>${title}</th>
        <th>$${salary}</th>
        <th><button class="deleteBtn">Delete</button></th>
    </tr>`
    $('table').append(output);
}

function deleteEntry(){
    $(this).closest('tr').remove();
}
console.log('client.js running')

let totalSalary = 186000;

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
    updateSalary(salary);
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

function updateSalary(newSal){
    newSal = Number(newSal);
    totalSalary += newSal;
    let totalMonthlySalary = totalSalary / 12;
    $('#salaryDisplay').text(totalMonthlySalary);
    if (totalMonthlySalary > 20000){
        $('#salaryDisplay').addClass('red');
    }
    return totalSalary;
}
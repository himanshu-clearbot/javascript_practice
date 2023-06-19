const todoList = [];
render();
function render()
    {
    let todolisthtml = '';
    for (i=0; i< todoList.length;i++)
    {
        const todo = todoList[i];
        const html = `<p> ${todo}
        <button onclick="todoList.splice(${i},1);
        render();">delete</button>
        </p>`;
        todolisthtml +=html;
    }
    console.log(todolisthtml);
    document.querySelector('.divelement').innerHTML = todolisthtml;
    }


function removetodo()
{
    todoList.splice(0,1);
        render()
}


function addTodo()
{

    const inputelement = document.querySelector('.input');
    const name =inputelement.value;
    
    const datainputelement = document.querySelector('.dates');
    const datavalues = datainputelement.value;
    
    // console.log(name);
    // todoList.push({name :name,
    // duedate:datavalues});
    // todoList.push({name,datavalues});
    todoList.push(name);
    todoList.push(datavalues);      
    console.log(todoList);

    inputelement.value = '';



    render();
}


    // console.log(inputelement);
    // inputelement.addEventListener('keydown', function(event) {
    //     if (event.key === 'Enter') {
    //         addTodo();
    //     }
    // });



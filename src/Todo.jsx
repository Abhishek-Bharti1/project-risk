import React, { useEffect, useState } from 'react'
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import filterFactory,{textFilter} from "react-bootstrap-table2-filter"

const Todo = () => {
const [todos,setTodos] = useState([]);


useEffect(()=>{
  getData();


return ()=>{
    console.log("Data Unmounted");
}

},[]) //tell app that page is changing call getData every time

const getData = async()=>{
    
        const data = await fetch(`http://localhost:8080/users`)
        .then((d) => d.json()
        );
       setTodos(data);
    //    console.log(data);
      }
      const selectRow = {
        mode:"checkbox",
        clickToSelect:true
      }
const columns = [
    {
dataField:"title",
text:"Project name",
filter:textFilter(),
},
{
    dataField:"status",
    text:"status",
    },
    {
        dataField:"last",
        text:"Last Update"
        },
        {
            dataField:"resouces",
            text:"Resources"
            },
            {
                dataField:"time",
                text:"Project Timeline"
                },
                {
                    dataField:"esti",
                    text:"Estimation"
                    }
                
]


  return (
    <div>
        <>
            <BootstrapTable
            keyField='id'
                data = {todos}
                columns = {columns}
                striped
                hover
                condensed
                pagination={paginationFactory()}
              selectRow={selectRow}
              filter={filterFactory()}
   
            />
        </>

    </div>
  )
}

export default Todo
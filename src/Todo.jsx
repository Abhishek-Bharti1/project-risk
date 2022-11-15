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
    
        const data = await fetch(`https://riskrestask.herokuapp.com/data`)
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
    dataField:"Project_Name",
    text:"Project name",
    filter:textFilter(),
    },
    {
        dataField:"Status",
        text:"status",
        },
        {
            dataField:"LastUpdate",
            text:"Last Update"
            },
            {
                dataField:"Resources",
                text:"Resources"
                },
                {
                    dataField:"ProjectTimeline",
                    text:"Project Timeline"
                    },
                    {
                        dataField:"Estimation",
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
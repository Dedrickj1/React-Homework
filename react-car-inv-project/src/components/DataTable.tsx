import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width:90,},
    { field: 'Year', headerName: "Year of Car", flex:1},
    { field: 'Make', headerName: "Make of Car", flex:1},
    { field: 'Model', headerName: "Model of Car", flex:1},
    // { field: 'name', headerName: "Full Name", flex: 1},
    // { field: 'phone_number', headerName: "Phone Number", flex: 1}
]


function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<any>([])
    console.log(contactData)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Car 
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update Car Info</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete Car Info</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
           <h2 className="p-3 bg-slate-300 my-2 rounded">My Cars</h2>
            <DataGrid
                rows={contactData}
                columns={columns}
                checkboxSelection
                onRowSelectionModelChange={(item: any) => {
                    setSelectionModel(item);
                }}
                pagination={true} // Enable pagination
                pageSizeOptions={[5]} // Set page size options
            />
        </div>
    </>
  )
}

export default DataTable
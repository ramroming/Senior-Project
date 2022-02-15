
import DeletePostModal from "../myadoptionposts/DeletePostModal"
import { useState } from 'react'
import EditAdoptionStatus from "./EditAdoptionStatus"

const MyAdoptionPosts = () => {

    const [openModal, setOpenModal] = useState(false)
    const [openStatusModal, setOpenStatusModal] = useState(false)

    return (

        <>
        <div className="flex-col falign-center fjust-center ">
        {openModal && <DeletePostModal closeModal={setOpenModal} />}
        </div>

        <div className="flex-col falign-center fjust-center ">
        {openStatusModal && <EditAdoptionStatus closeModal={setOpenStatusModal} />}
        </div>

        <div className="my-great-table falign-center fjust-center flex-row fgap-16p">
            {/* first column */}
            <div className="flex-col fgap-16p ">
                <p className="table-header">Request post</p>
                <a  className="margin-bottom"href="/#">click here to view</a>
                <a  className="margin-bottom"href="/#">click here to view</a>
                <a  className="margin-bottom"href="/#">click here to view</a>
            </div>
            {/* second column */}
            <div className="flex-col fgap-16p ">
                <p className="table-header">Sent At</p>
                <p className="margin-bottom">13-4-2022 15:00 PM</p>
                <p className="margin-bottom">13-4-2022 15:00 PM</p>
                <p className="margin-bottom">13-4-2022 15:00 PM</p>
            </div>
        
            {/* third column */}
            <div className="flex-col fgap-16p">
                <p className="table-header">Sent From</p>
                <p className="margin-bottom">Mehmet Ali</p>
                <p className="margin-bottom">Mehmet Ali</p>
                <p className="margin-bottom">Mehmet Ali</p>

            </div>

             {/* fourth column */}
             <div className="flex-col fgap-16p ">
                <p className="table-header">Delete</p>
                <a className="margin-bottom" 
                onClick={() => { setOpenModal(true) }}
                ><i className="fa-regular fa-trash-can"></i></a>
                <a className="margin-bottom" href="/#"><i className="fa-regular fa-trash-can"></i></a>
                <a className="margin-bottom" href="/#"><i className="fa-regular fa-trash-can"></i></a>
            </div>

             {/* fifth column */}
             <div className="flex-col fgap-16p">
                <p className="table-header">Status</p>
                <a className="margin-bottom" 
                onClick={() => {setOpenStatusModal(true)}}>Accepted <i className="fa-regular fa-pen-to-square"></i></a>
                <a className="margin-bottom" href="/#">Rejected <i className="fa-regular fa-pen-to-square"></i></a>
                <a className="margin-bottom" href="/#">in-review <i className="fa-regular fa-pen-to-square"></i></a>
            </div>



        </div>
        </>
        
    )
}

export default MyAdoptionPosts
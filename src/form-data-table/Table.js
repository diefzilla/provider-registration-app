function Table({tableData, deleteTableRows}){
    
    return(
        <table className="table">
            <thead>
                <tr>  
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>NPI Number</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.npiNumber}</td>
                            <td>{data.address}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td><button className="btn btn-outline-danger"
                                onClick={()=>(deleteTableRows(index))}>x</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;
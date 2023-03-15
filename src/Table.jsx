function Table({ formData, setFormData, editIdx}) {
    function deleteData(index) {
        setFormData(formData.filter((data,i)=> i!== index))
    }

    function editData(index){
        editIdx(index)
    }
    return (
        <table>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
            {
                formData.map(({ name, age, status }, index) => (
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{status}</td>
                        <td>
                            <button onClick={(formData)=> editData(index)}  type="button" >Edit</button>
                            <button onClick={(formData)=> deleteData(index)} type="button">Delete</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    )
}



export default Table
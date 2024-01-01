import React,{useState, useEffect} from 'react'
import Student from './Student'
import axios from 'axios';

export default function StudentList() {

    const [studentList, setStudentList] = useState([]);
    const [studentForEdit, setStudentForEdit] = useState(null);

    useEffect(() => {
        refreshStudentList();
    }, [])

    const studentAPI = (url = 'http://localhost:5286/api/Student/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id,updatedRecord) => axios.put(url+id,updatedRecord),
            delete: id => axios.delete(url + id)
        }
    } 

    function refreshStudentList() {
        studentAPI().fetchAll()
        .then(res=> {
            if(res.data){
                setStudentList(res.data);
            }
        })
        .catch(err => console.log(err));
    }

    const addOrEdit = (formData, onSuccess) =>{
        if (parseInt(formData.get('studentId')) === 0)
        studentAPI().create(formData)
        .then(res=>{
            onSuccess();
            refreshStudentList();
        })
        .catch(err => console.log(err))
    else
    studentAPI().update(formData.get('studentId'),formData)
    .then(res => {
        onSuccess();
        refreshStudentList();
    })
    .catch(err => console.log(err))
    }

    const showStudentDetails = data =>{
        setStudentForEdit(data)
    }

    const imageCard = data =>(
        <div className='card' onClick={()=>{showStudentDetails(data)}}>
            <img src={data.imageSrc} className='card-img-top rounded-circle' />
            <div className='card-body'>
                <h5>{data.name}</h5>
                <span>{data.course}</span>
            </div>
        </div>
    )

  return (
    <div className='row'>
        <div className='col-md-12'>
        <div className='jumbotron jumbotron-fluid py-4'>
  <div className='container text-center'>
    <h1 className="display-4">Student Register</h1>
  </div>
</div>
        </div>

        <div className='col-md-4'>
            <Student
            addOrEdit={addOrEdit} 
            studentForEdit={studentForEdit}
            />
        </div>
        <div className='col-md-8'>
            <table>
                <tbody>
                    {
                        [...Array(Math.ceil(studentList.length/3))].map((e,i)=>
                        <tr key={i}>
                            <td>{imageCard(studentList[3 * i])}</td>
                            <td>{studentList[3 * i + 1] ? imageCard(studentList[3 * i + 1]) : null}</td>
                            <td>{studentList[3 * i + 2] ? imageCard(studentList[3 * i + 2]) : null}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

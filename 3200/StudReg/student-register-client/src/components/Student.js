import React, { useState, useEffect} from 'react'

const defaultImageSrc = '/img/image_placeholder.jpg'

const initialFieldValues = {
studentId: 0,
name: '',
surname: '',
studNumber: '',
email: '',
phone: '',
course: '',
beginYear: '',
imageName: '',
imageSrc: defaultImageSrc,
imageFile: null
}

export default function Student(props) {

    const {addOrEdit,studentForEdit} = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (studentForEdit!=null)
            setValues(studentForEdit);
    }, [studentForEdit])

    const handleInputChange = e=> {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const showPreview = e=> {
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                });
            };
            reader.readAsDataURL(imageFile);
        }
        else{
            setValues({
                ...values,
                imageFile:null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate =()=>{
        let temp= {}
        temp.name = values.name===""?false:true;
        temp.surname = values.surname===""?false:true;
        temp.studNumber = values.studNumber===""?false:true;
        temp.email = values.email===""?false:true;
        temp.phone = values.phone===""?false:true;
        temp.course = values.course===""?false:true;
        temp.beginYear = values.beginYear===""?false:true;
        temp.imageSrc = values.imageSrc===defaultImageSrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x => x==true)
    }

    const resetForm = ()=>{
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e =>{
        e.preventDefault()
        if(validate()){
            const formData = new FormData()
            formData.append('studentId', values.studentId)
            formData.append('name', values.name)
            formData.append('surname', values.surname)
            formData.append('studNumber', values.studNumber)
            formData.append('email', values.email)
            formData.append('phone', values.phone)
            formData.append('course', values.course)
            formData.append('beginYear', values.beginYear)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData,resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field]==false)?' invalid-field':'')

  return (
    <>
    <div className='container text-center'>
        <p className='lead'>New Student</p>
    </div>
    <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
        <div className='card'>
            <div className='text-center d-flex align-items-center justify-content-center' >
            <div className='d-flex align-items-center'  style={{ width: '100px', height: '200px' }}>
                <img src={values.imageSrc} className='card-img-top'/></div></div>
            <div className='card-body'>
                <div className='form-group'>
                    <input type='file' accept='image/*' className={'form-control-file'+applyErrorClass('imageSrc')}
                     onChange={showPreview} id='image-uploader' />
                </div>
                <div className='form-group'>
                    <input className={'form-control'+applyErrorClass('name')} placeholder='Student Name' name='name'
                    value={values.name}
                    onChange={handleInputChange} />
                </div>
                <div className='form-group'>
                    <input className={'form-control'+applyErrorClass('surname')} placeholder='Student Surname' name='surname'
                    value={values.surname}
                    onChange={handleInputChange} />
                </div>
                <div className='form-group'>
                    <input className={'form-control'+applyErrorClass('studNumber')} placeholder='Student Number' name='studNumber'
                    value={values.studNumber}
                    onChange={handleInputChange} />
                </div>
                <div className='form-group'>
                    <input className={'form-control'+applyErrorClass('email')} placeholder='E-mail' name='email'
                    value={values.email}
                    onChange={handleInputChange} />
                </div>
                <div className='form-group'>
                    <input className={'form-control'+applyErrorClass('phone')} placeholder='Phone' name='phone'
                    value={values.phone}
                    onChange={handleInputChange} />
                </div>
                <div className='form-group'>
                    <input className={'form-control'+applyErrorClass('course')} placeholder='Course' name='course'
                    value={values.course}
                    onChange={handleInputChange} />
                </div>
                <div className='form-group'>
                    <input className={'form-control'+applyErrorClass('beginYear')} placeholder='Begin Year' name='beginYear'
                    value={values.beginYear}
                    onChange={handleInputChange} />
                </div>
                <div className='form-group text-center'>
                    <button type='submit' className='btn btn-light'>Save</button>
                </div>
            </div>
        </div>
    </form>
    </>
  )
}

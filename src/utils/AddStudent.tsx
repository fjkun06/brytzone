import React, { FormEventHandler, useState } from 'react'
interface AddStudentProps {
  onAdd: (student:{
    name: string;
    present: boolean;
    matriculation: string;
  }) => void
}
const AddStudent = ({onAdd}:AddStudentProps) => {
  const [matriculation, setMatriculation] = useState('')
  const [name, setName] = useState('')
  const [present, setPresent] = useState(false)
  const onSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    // const element = e.target as HTMLDivElement;
    //     const mode = element.dataset.mode as string;
    e.preventDefault();
    if(!matriculation){
      alert('Please add a Matriculation');
      return
    }

    onAdd({matriculation,name,present});
    setMatriculation('')
    setName('')
    setPresent(false)
  }

  const handleMat:React.ChangeEventHandler<HTMLInputElement>  = (e) => {
    const elt = e.currentTarget as HTMLInputElement
    setMatriculation(elt.value)}
  const handleName:React.ChangeEventHandler<HTMLInputElement>  = (e) => {
    const elt = e.currentTarget as HTMLInputElement
    setName(elt.value)}
  
  const handlePresent:React.ChangeEventHandler<HTMLInputElement> = (e) => {
  // const handlePresent = (e:React.ChangeEventHandler<HTMLInputElement>) => {
    const elt = e.currentTarget as HTMLInputElement;
    
    setPresent(elt.checked)
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className="item">
        <label>Matriculation</label>
        <input type="text" placeholder='Matriculation' 
         value={matriculation} onChange={handleMat} />
      </div>
      <div className="item">
        <label>Name</label>
        <input type="text" placeholder='Name'
         value={name} onChange={handleName} />
      </div>
      <div className="item">
        <label>Present</label>
        <input type="checkbox" placeholder='Present'
         checked={present} onChange={handlePresent} />
      </div>
      <input type='submit' value='Save Student'/>
    </form>
  )
  }
export default AddStudent

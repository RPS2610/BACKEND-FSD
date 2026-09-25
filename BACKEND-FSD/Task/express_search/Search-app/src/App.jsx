import {useState} from 'react'

function App() {
  const[search,setSearch]=useState("");
  const documents=[
  {
    name:"Rudra_Pratap_Singh_Resume",
    file:"Rudra_Pratap_Singh_Resume.pdf"
  }
  ]
  return (
    <div>
      <h1>Notes Portal app</h1>
      <input type="text" placeholder='search notes here' onClick={(e)=>{
        setSearch(e.target.value);
      }}/>

      documents.filter().map()
      </div>
  )
}

export default App
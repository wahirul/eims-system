import { useNavigate } from "react-router-dom";

export const AddEmp = () =>{
  const navigate = useNavigate();
    return (
      <div className='bg-[#EEEEEE] relative w-full h-screen'>
      <div className='flex justify-center items-center h-full'>
          <form className='bg-[#85C8FF] rounded-2xl max-w-[1600px] w-full h-[800px] mx-auto p-8'>
              <h2 className='text-3xl font-bold py-4'>Add Employee</h2>
              <div className='flex flex-col mb-4'>
                  <label>Full Name :</label>
                  <input className='w-[550px] rounded-md border relative bg-gray-100 p-2' placeholder='Enter username' type="text" required/>
              </div>
              <div className='flex flex-col mb-4'>
                  <label>IC Number :</label>
                  <input className='w-[400px] rounded-md border relative bg-gray-100 p-2' placeholder='Enter IC Number' type="text" required/>
              </div>
              <div className='flex flex-col mb-4'>
                  <label>Address :</label>
                  <input className='rounded-md border relative bg-gray-100 p-2' placeholder='Enter Address' type="text" required/>
              </div>
              <div className='flex flex-col mb-4'>
                  <label>Department :</label>
                  <input className='w-[400px] rounded-md border relative bg-gray-100 p-2' placeholder='Enter Department' type="text" required/>
              </div>
              <div className='flex flex-col mb-4'>
                  <label>Job Position :</label>
                  <input className='w-[400px] rounded-md border relative bg-gray-100 p-2' placeholder='Enter Job Position' type="password" required/>
              </div>
              <div className='flex flex-col mb-4'>
                  <label>Marital Status :</label>
                  <input className='w-[400px] rounded-md border relative bg-gray-100 p-2' placeholder='Enter Marital Status' type="password" required/>
              </div>
              <div className='flex justify-center items-center'>
                <button className='flex justify-center items-center rounded-md w-[100px] py-2 mt-8 bg-black hover:bg-blue-600 relative text-white font-bold'>
                  <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                  </svg>
                Save</button>
                <button className='ml-4 flex justify-center items-center rounded-md w-[100px] py-2 mt-8 bg-black hover:bg-blue-600 relative text-white font-bold ' onClick= {() => navigate('')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                Cancel</button>
              </div>
          </form>
      </div>
    </div>
    )
  }
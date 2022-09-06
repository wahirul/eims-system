import { useNavigate } from "react-router-dom";

export const Login = () =>{
  const navigate = useNavigate();
    return (
      <div className='bg-[#EEEEEE] relative w-full h-screen'>
        <div className='flex justify-center items-center h-full'>
            <form className='bg-[#85C8FF] rounded-2xl max-w-[400px] w-full mx-auto p-8'>
                <h2 className='text-4xl font-bold text-center py-4'>E.I.M.S</h2>
                <div className='flex flex-col mb-4'>
                    <label>Username :</label>
                    <input className=' rounded-md border relative bg-gray-100 p-2' placeholder='Enter username' type="text" required/>
                </div>
                <div className='flex flex-col '>
                    <label>Password :</label>
                    <input className=' rounded-md border relative bg-gray-100 p-2' placeholder='Enter password' type="password" required/>
                </div>
                <button className='rounded-md w-full py-3 mt-8 bg-black hover:bg-blue-600 relative text-white font-bold' onClick= {() => navigate('/addEmp')}>Login</button>
            </form>
        </div>
      </div>
    )
}
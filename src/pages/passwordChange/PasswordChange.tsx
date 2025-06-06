import { Link } from 'react-router-dom'

const PasswordChange = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center gap-5'>
    <h2 className="text-3xl font-bold text-center text-primary">This is Password Change Page</h2>
    <Link to={'/login'} ><h1 className="text-xl text-primary font-bold hover:underline">Go back</h1></Link> 
  </div>
  )
}

export default PasswordChange

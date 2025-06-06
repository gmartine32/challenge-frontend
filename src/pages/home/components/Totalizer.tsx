import { useHomeContext } from '../../../context/HomeContext'

const Totalizer = () => {
 const {cves,totalResults}= useHomeContext()
    return (
   <h3 className='text-2xl text-primary my-5'>Mostrando <span className='text-secondary'>{cves.length}</span> registros de <span className='text-secondary'>{totalResults}</span></h3>
  )
}

export default Totalizer

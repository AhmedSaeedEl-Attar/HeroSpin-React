import React , {useEffect , useState} from 'react'
import CompanyHeors from '../components/CompanyHeors'
import LIstHeros from '../components/LIstHeros'
import { useSelector} from 'react-redux'
import Loading from '../components/Loading';

function ChooseHero() {
  const  Companyname = useSelector((state) => state.companyName.name);
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false) , 1000)
  } , [])
  
  return (
    <>
    {loading ? <Loading /> : Companyname === '' ? <CompanyHeors /> : <LIstHeros />}
    </>
  )
}

export default ChooseHero
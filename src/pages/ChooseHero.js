import React from 'react'
import CompanyHeors from '../components/CompanyHeors'
import LIstHeros from '../components/LIstHeros'
import { useSelector} from 'react-redux'

function ChooseHero() {
  const  Companyname = useSelector((state) => state.companyName.name);
  return (
    <>
    {Companyname === '' ? <CompanyHeors /> : <LIstHeros />}
    </>
  )
}

export default ChooseHero
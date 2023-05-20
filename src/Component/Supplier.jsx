import React from 'react'
import fordLogo from '../assets/fordLogo.png'
import hasbroLogo from '../assets/hasbroLogo.png'
import lamboLogo from '../assets/lamboLogo.jpg'
import lmtLogo from '../assets/lmtLogo.jpg'
import macyLogo from '../assets/macyLogo.jpg'
import manLogo from '../assets/manLogo.jpg'
import mattelLogo from '../assets/mattelLogo.jpg'
import scaniaLogo from '../assets/scaniaLogo.png'
import threeLogo from '../assets/threeLogo.jpg'
import toyotaLogo from '../assets/toyotaLogo.jpg'


const Supplier = () => {
  return (
    <div className='supplier-container mt-32 '>
    <h1 className='mt-20 text-2xl md:text-5xl font-bold text-center'>Miniature Kit <span className='text-teal-300'>Supplier</span></h1>
    <div className="logos">
      <div className="logos-slide">
        <img src={fordLogo} alt='fordLogo' />
        <img src={hasbroLogo} alt='hasbroLogo' />
        <img src={lamboLogo} alt='lamboLogo' />
        <img src={lmtLogo} alt='lmtLogo' />
        <img src={macyLogo} alt='macyLogo' />
        <img src={manLogo} alt='manLogo' />
        <img src={mattelLogo} alt='mattelLogo' />
        <img src={scaniaLogo} alt='scaniaLogo' />
        <img src={threeLogo} alt='threeLogo' />
        <img src={toyotaLogo} alt='toyotaLogo' />
  
      </div>

      {/* <div className="logos-slide">
        <img src={fordLogo} alt='fordLogo' />
        <img src={hasbroLogo} alt='hasbroLogo' />
        <img src={lamboLogo} alt='lamboLogo' />
        <img src={lmtLogo} alt='lmtLogo' />
        <img src={macyLogo} alt='macyLogo' />
        <img src={manLogo} alt='manLogo' />
        <img src={mattelLogo} alt='mattelLogo' />
        <img src={scaniaLogo} alt='scaniaLogo' />
        <img src={threeLogo} alt='threeLogo' />
        <img src={toyotaLogo} alt='toyotaLogo' />
      </div> */}
    </div>
    </div>
  )
}

export default Supplier
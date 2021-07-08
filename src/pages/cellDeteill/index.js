import { useState } from 'react';

import Header from "../../components/header";
import Map from "../../components/map";
import ModalDetail from '../../components/modal';

import {MdSearch} from 'react-icons/md'

import logo_black from '../../assets/logo_black.png';
import logo_white from '../../assets/logo_white.png';
import './styles.css';


const CellDeteill = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="container-fluid vh-100 m-0 p-0" >
            <Header />
           
            {showModal ?
                <div>
                    <ModalDetail onClose={() => setShowModal(false)} />
                </div>
                :
                <div className="container box-sesrch mt-5 col-3">
                    <img src={logo_white} className="img-logo-white"/>
                    <span className="span-title" >Encontre uma célula próxima.</span>
                    <div className="row pb-4">
                        <input className="col-10 input-search" type="text" />
                        <button className="col-2 btn-search"><MdSearch className="icon-search"/></button>
                    </div>
                    <div className="row cells container ">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (                
                            <div className="row box-cell mb-2" onClick={()=>setShowModal(true)}>
                                <div className="col-4 box-image">
                                    <img className="image-cell" src={logo_black} />
                                </div>

                                <div className="col">
                                    <span className='title-text' >Bola Suzano</span>
                                    <div className="row" >
                                        <span className="col-4 text-span">teste:</span>
                                        <span className="col text-span">teste</span>
                                    </div>
                                    
                                    <div className="row" >
                                        <span className="col-4 text-span">teste:</span>
                                        <span className="col text-span">teste</span>
                                    </div>
                                   
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </div>
            }

        <Map/>
            
        </div>

    )

}

export default CellDeteill;
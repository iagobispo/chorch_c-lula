import { useState } from 'react';

import Header from "../../components/header";
import Map from "../../components/map";
import ModalDetail from '../../components/modal';
import {culculateDistance} from '../../utils'

import {MdSearch} from 'react-icons/md'

import logo_black from '../../assets/logo_black.png';
import logo_white from '../../assets/logo_white.png';
import './styles.css';


const CellDeteill = () => {
    culculateDistance()

    const [showModal, setShowModal] = useState(false)
    const [selectItem, setSelectItem] = useState({})
    return (
        <div className="container-fluid vh-100 m-0 p-0" >
            <Header />
           
            {showModal ?
                <div>
                    <ModalDetail onClose={() => setShowModal(false)} props={selectItem}/>
                </div>
                :
                <div className="container box-sesrch mt-5 col-3">
                    <img src={logo_white} alt='logo' className="img-logo-white"/>
                    <span className="span-title" >Encontre uma célula mais próxima.</span>
                    <div className="row pb-4">
                        <input className="col-10 input-search" type="text" />
                        <button className="col-2 btn-search"><MdSearch className="icon-search"/></button>
                    </div>
                    <div className="row cells container ">
                        {data.map((item, index) => (                
                            <div className="row box-cell mb-2" onClick={()=>{
                                setShowModal(true)
                                setSelectItem(item)
                                }}>
                                <div className="col-4 box-image">
                                    <img className="image-cell" alt='logo' src={logo_black} />
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

        <Map props={data}/>
            
        </div>

    )

}

export default CellDeteill;

const data = [
    {
        church: 'Bola Suzano',
        name: 'Leão de juda',
        address: {
            street: 'AV. Conde de Monte Cristo',
            district: 'Monte Cristo',
            number: 1001,
            city: 'Suzano',
            state: 'SP'
        },
        position: {
            message: 'Célula do Iago',
            district: 1,
            lat: -23.536437,
            log: -46.330250
        }
    }, 
    {
        church: 'Bola Suzano',
        name: 'Estrela de davi',
        address: {
            street: 'AV. Conde de Monte Cristo',
            district: 'Monte Cristo',
            number: 1001,
            city: 'Suzano',
            state: 'SP'
        },
        position: {
            message: 'Célula do Iago',
            district: 1,
            lat: -23.537049,
            log: -46.329313
        }
    },
    {
        church: 'Bola Suzano',
        name: 'Terra prometida',
        address: {
            street: 'AV. Conde de Monte Cristo',
            district: 'Monte Cristo',
            number: 1001,
            city: 'Suzano',
            state: 'SP'
        },
        position: {
            message: 'Célula do Felipe',
            district: 1,
            lat: -23.5362744,
            log: -46.330162
        }
    },
    {
        church: 'Bola Suzano',
        name: 'Deus conosco',
        address: {
            street: 'AV. Conde de Monte Cristo',
            district: 'Monte Cristo',
            number: 1001,
            city: 'Suzano',
            state: 'SP'
        },
        position: {
            message: 'Célula do Diego',
            district: 1,
            lat: -23.5446041,
            log: -46.3339377
        }
    },
    {
        church: 'Bola Suzano',
        name: 'Leão de juda',
        address: {
            street: 'AV. Conde de Monte Cristo',
            district: 'Monte Cristo',
            number: 1001,
            city: 'Suzano',
            state: 'SP'
        },
        position: {
            message: 'Célula do Fernando',
            district: 1,
            lat: -23.5365959,
            log: -46.3305548
        }
    },
    {
        church: 'Bola Suzano',
        name: 'Leão de juda',
        address: {
            street: 'AV. Conde de Monte Cristo',
            district: 'Monte Cristo',
            number: 1001,
            city: 'Suzano',
            state: 'SP'
        },
        position: {
            message: 'Célula da Monique',
            district: 1,
            lat: -23.5344998,
            log: -46.3396922
        }
    },

];

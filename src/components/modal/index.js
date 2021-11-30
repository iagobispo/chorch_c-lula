import { MdSend, MdClear } from 'react-icons/md';

import './styles.css'
import Logo from '../../assets/logo_white.png'

export default function ModalDetail({ onClose = () => { }, props }) {
    return (
        <div className="box-modal">
            <div className="container-modal col-8 col-md-7 img_fundo d-flex flex-column align-items-center px-md-5 p-5 pt-0 justify-content-between ">
                <img className="img-logo" alt='logo' src={Logo} />

                <div className="col-12 d-md-flex justify-content-md-between flex-md-row mt-5">
                    <div className=" container-fluid m-0 p-0">
                        <h2 className="text-title-city">{props.church}</h2>
                        <div className="d-flex flex-row pt-2  ">
                            <h4 className="text-bold">Célula:</h4>
                            <h4 className="text-h4-info">{props.name}</h4>
                        </div>

                        <span className="text-bold">Endereço</span>

                        <div className="d-flex flex-row ">
                            <h4 className="text-bold">Bairro:</h4>
                            <h4 className="text-h4-info">{props.address.district}</h4>
                        </div>

                        <div className="d-flex flex-row">
                            <h4 className="text-bold">Rua:</h4>
                            <h4 className="text-h4-info">{props.address.street}</h4>
                            <div className="d-flex flex-row ">
                                <h4 className="text-bold ms-4">N°:</h4>
                                <h4 className="text-h4-info pr-">{props.address.number}</h4>
                            </div>
                        </div>


                        <div className="d-flex flex-row ">
                            <h4 className="text-bold">Cidade:</h4>
                            <h4 className="text-h4-info">{props.address.city}</h4>
                        </div>


                        <div className="d-flex flex-row ">
                            <h4 className="text-bold">Estado:</h4>
                            <h4 className="text-h4-info">{props.address.state}</h4>
                        </div>

                        <div className="d-flex flex-row ">
                            <h4 className="text-bold mt-3">Distançia:</h4>
                            <h4 className="text-h4-info mt-3">{`${props.position.district} km`}</h4>
                        </div>
                    </div>
                    <div className="d-flex align-items-md-end  align-items-center justify-content-between">
                        <button className="btn-close-modal" onClick={onClose}>Cancelar< MdClear className="icon-button" /></button>
                        <button className="btn-inicia" ><a style={{ textDecoration: 'none', color: 'white' }} href={`https://www.google.com/maps/search/?api=1&query=${props.position.lat}${props.position.log}`} target="_blank" rel="noreferrer" >Iniciar</a><MdSend className="icon-button" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}



import Logo from '../../assets/logo_white.png';

import './styles.css';

export default function Header() {
    return (
        <div className="col-12 ">
            <header className="text-center bg-header  box-header" >
                <img className="logo-header" src={Logo}/>
            </header>
        </div>

    );
}
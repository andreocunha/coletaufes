import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import sucesso from '../../assets/sucesso.svg';

const SuccessPage = () => {

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {  history.push('/'); }, 2500);
    })
    
    return (
        <div id="page-success">
            <div className="content">
                <img src={sucesso} alt="ColetaUFES" width="500px"/>
            </div>
        </div>
    )
}

export default SuccessPage;
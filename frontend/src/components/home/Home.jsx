import React from 'react';
import Main from '../template/Main';

export default props =>
    <Main title="Bem vindo!" subtitle="Sistema CRUD de usuários construído com React.">
        <div className='display-4 mt-5 text-center'>Vamos lá<i> dev </i>!</div>
        <hr />
        <p className="mb-1 text-center">Clique em <b>usuários</b> para inicar sua experiência.</p>
    </Main>

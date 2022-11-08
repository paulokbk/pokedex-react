import * as React from 'react';

export default function Hability({type}) {

  return (
    <>
    <div className={type ? `boxType ${type}` : 'boxType'}>
        <span className='nameType'>{type?.charAt(0).toUpperCase() + type?.slice(1)}</span>
    </div>
    </>
  );
}


import React, { useState } from 'react';

const Tabs = () => {
    const [toggle, settoggle] = useState(1);
    const handleUpdateToggle = (id) =>{
        settoggle(id)
    }
    return (
        <div className='border-slate-900 border-2 rounded my-8  py-10'>
            <div>
                <ul className='flex justify-end bg-gray-200 px-8 py-4'>
                    <li className='me-10  text-xl'><button onClick={()=>handleUpdateToggle(1)}>Police car</button></li>
                    <li className='me-10 text-xl'> <button onClick={()=>handleUpdateToggle(2)}>Bus</button></li>
                    <li className='me-10 text-xl'><button onClick={()=>handleUpdateToggle(3)}>truck</button></li>
                </ul>
            </div>
            <div className={toggle === 1 ? 'block' : 'hidden'}>
                <h1>police car</h1>
            </div>
            <div className={toggle === 2 ? 'block' : 'hidden'}>
                <h2>bus</h2>
            </div>
            <div className={toggle === 3 ? 'block' : 'hidden'}>
                <h3>truck</h3>
            </div>
        </div>
    );
};

export default Tabs;
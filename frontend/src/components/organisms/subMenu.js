import React from 'react';

function SubMenu({ items, listname }) {
    return (
        <div className="bg-black w-[220px] rounded-lg px-3 pb-2 text-white absolute left-[-95px] top-10 z-50">
            <div className='text-lg text-secondary-gray font-semibold border-t-0 border-b-[0px] border-white pb-2'>{listname}</div>
            <ul className="flex flex-col gap-2 list-none p-0">
                {items.map((item, index) => (
                    <li className="relative w-full flex items-center space-x-2 rounded-lg bg-black text-white hover:bg-gray-800 px-2 py-2 transition duration-300 ease-in-out" key={index}>
                        
                        <button
                            className="flex w-full justify-between items-center gap-2"
                            onClick={() => item.onClick(item.name)}
                        >
                                <span className="bg-black rounded-full w-4 h-4 flex items-center justify-center">
                                    {item.icon}
                                </span> 
                                <div className="text-left whitespace-nowrap w-[100%]">
                                    {item.name}
                                </div>
                                

                        </button>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubMenu;

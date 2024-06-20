import { forwardRef } from 'react';

const Input = forwardRef(({ label, id, ...rest }: any, ref) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-xl drop-shadow">{label}</label>
            <input 
                ref={ref} id={id} {...rest}
                className="outline-none p-1 bg-transparent border-b-2 border-gray-300 hover:border-gray-700 focus:border-gray-700"
            />
        </div>
    );
});

export default Input;

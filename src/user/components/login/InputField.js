import React from 'react';

const InputField = ({ required, label, type, id, placeholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor={id}>{label}</label>
            <input required={required}
                className="w-full p-2 rounded border"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
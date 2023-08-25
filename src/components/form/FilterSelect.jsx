import { useState } from "react";

export const FilterSelect = ({
    paginate,
    setPaginate,
    options,
    name,
    formatFilter
}) => {
    const [selectWidth, setSelectWidth] = useState('auto');

    const handleSelectChange = (event) => {
        const selectedOption = options.find(opt => opt.value === event.target.value);
        const optionText = selectedOption ? selectedOption.label : '';
        const optionTextWidth = getTextWidth(optionText);

        setSelectWidth(`${optionTextWidth + 55}px`);
    };

    const getTextWidth = (text) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = '14px sans-serif';
        return context.measureText(text).width;
    };
    return (
        <select
            as="select"
            name={name}
            className="py-1 bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg dark:focus:border-yellow-600 focus:border-gray-300 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0"
            onChange={(event) => {
                handleSelectChange(event);
                formatFilter(event.target.name, event.target.value, paginate, setPaginate);
            }}
            style={{ width: selectWidth }}
        >
            {options?.map((opt, index) => (
                <option key={index} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    )
}

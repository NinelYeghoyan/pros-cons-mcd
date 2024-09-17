import { FC, useState } from 'react';

import StyledItem from '@components/Item/styled';

import { DataType } from '../../type';

type ItemProps = {
    title: string;
    data: DataType[];
    addData: (text: string) => void;
    onItemClick: (id: number) => void;
    onEditKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    editText: string;
    clickedItemId: number | null;
};

const Item: FC<ItemProps> = ({
    title,
    data,
    addData,
    onItemClick,
    onEditKeyDown,
    onEditChange,
    editText,
    clickedItemId,
}) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (inputValue.trim()) {
                addData(inputValue);
                setInputValue('');
            }
        }
    };

    return (
        <StyledItem className="item">
            <h4 className="item__title">{title}</h4>

            <ul className="item__list">
                {data.map((item, index) => {
                    return (
                        <li
                            role="presentation"
                            key={item.id}
                            onClick={() => onItemClick(item.id)}
                            className="flex align-center"
                        >
                            <span className="item__count">{index + 1}.</span>

                            <input
                                type="text"
                                className="item__input"
                                value={clickedItemId === item.id ? editText : item.text}
                                onChange={onEditChange}
                                onKeyDown={onEditKeyDown}
                            />
                        </li>
                    );
                })}

                <li className="flex align-center">
                    <span className="item__count">{data.length + 1}.</span>

                    <input
                        type="text"
                        className="item__input"
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </li>
            </ul>
        </StyledItem>
    );
};

export default Item;

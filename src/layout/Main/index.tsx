import { FC, useEffect, useState } from 'react';

import Item from '@components/Item';
import StyledMain from '@layout/Main/styled';
import { DataType, State } from '@type/index';

const Main: FC = () => {
    const [pros, setPros] = useState<DataType[]>(() => {
        const savedPros = localStorage.getItem('pros');
        return savedPros ? JSON.parse(savedPros) : [];
    });
    const [cons, setCons] = useState<DataType[]>(() => {
        const savedCons = localStorage.getItem('cons');
        return savedCons ? JSON.parse(savedCons) : [];
    });
    const [clickedItemId, setClickedItemId] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>('');
    const [currentCategory, setCurrentCategory] = useState<State | null>(null);

    const addData = (text: string, category: State) => {
        const newItem = { id: Date.now(), text };
        if (category === State.PROS) {
            setPros([...pros, newItem]);
        } else if (category === State.CONS) {
            setCons([...cons, newItem]);
        }
    };

    const handleItemClick = (id: number, category: State) => {
        const items = category === State.PROS ? pros : cons;
        const foundItem = items.find((item) => item.id === id);
        if (foundItem) {
            setClickedItemId(id);
            setEditText(foundItem.text);
            setCurrentCategory(category);
        }
    };

    const handleEditKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (editText.trim()) {
                if (currentCategory === State.PROS) {
                    setPros(pros.map((item) => (item.id === clickedItemId ? { ...item, text: editText } : item)));
                } else if (currentCategory === State.CONS) {
                    setCons(cons.map((item) => (item.id === clickedItemId ? { ...item, text: editText } : item)));
                }
                setClickedItemId(null);
            }
        }
    };

    const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;

        if (newText.trim() === '') {
            if (currentCategory === State.PROS) {
                setPros(pros.filter((item) => item.id !== clickedItemId));
            } else if (currentCategory === State.CONS) {
                setCons(cons.filter((item) => item.id !== clickedItemId));
            }
            setClickedItemId(null);
        } else {
            setEditText(newText);
        }
    };

    useEffect(() => {
        localStorage.setItem('pros', JSON.stringify(pros));
        localStorage.setItem('cons', JSON.stringify(cons));
    }, [pros, cons]);

    return (
        <StyledMain className="main flex">
            <Item
                title={State.PROS}
                data={pros}
                addData={(text: string) => addData(text, State.PROS)}
                onItemClick={(id) => handleItemClick(id, State.PROS)}
                onEditKeyDown={handleEditKeyDown}
                onEditChange={handleEditChange}
                editText={editText}
                clickedItemId={clickedItemId}
            />

            <Item
                title={State.CONS}
                data={cons}
                addData={(text: string) => addData(text, State.CONS)}
                onItemClick={(id) => handleItemClick(id, State.CONS)}
                onEditKeyDown={handleEditKeyDown}
                onEditChange={handleEditChange}
                editText={editText}
                clickedItemId={clickedItemId}
            />
        </StyledMain>
    );
};

export default Main;

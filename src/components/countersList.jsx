import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'}
    ]
    const [counters, setCounters] = useState(initialState);

    //Сделал сперва два обработчика, но подумал, что получается дублирование кода
    //они отличались только одним знаком (value++ и value--). Решил передать действие вторым аргументом в функцию.
    //Или лучше делать на каждую кнопку свой обработчик?
    const handlePlusMinus = (id, sign) => {
        const newCounters = [...counters];
        newCounters[counters.findIndex(index => index.id === id)].value += sign;
        setCounters(newCounters);
    };

    const handleDelete = id => {
        const newCounters = counters.filter(count => count.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    }

    return <>
        {counters.map(count => (
            <Counter key={count.id}
                     {...count}
                     onPlusMinus={handlePlusMinus}
                     onDelete={handleDelete}/>
        ))}
        <button className="bnt btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
}

export default CountersList;
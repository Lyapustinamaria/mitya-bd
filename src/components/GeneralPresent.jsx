import React, { useState } from 'react';

const GeneralPresent = () => {
    const [bandName, setBandName] = useState('');
    const [isPresentVisible, setPresentVisible] = useState(false);

    const handleBandNameChange = (e) => {
        setBandName(e.target.value);
    };

    const handlePresentVisible = () => {
        if (
            bandName.toLowerCase() === 'the smashing pumpkins' ||
            bandName.toLowerCase() === 'smashing pumpkins'
        ) {
            setPresentVisible(true);
        } else {
            alert('Ты не угадал. Попробуй еще раз!');
        }
    };

    return (
        <div>
            {isPresentVisible ? (
                <div class="container-fluid">
                    <h1>Подарочек!</h1>
                    <p>
                        Чтобы получить главный подарок, тебе нужно повнимательнее присмотреться к тексту и отгадать ребус. 
                        Ключом к ребусу будет название твоего подарка. 
                        Впиши ответ на латинице в поле ниже.
                    </p>
                    <form>
                        <div class="col-sm-7">
                            <input type='text' class='form-control' placeholder='Введи ответ в это поле' value={bandName} onChange={handleBandNameChange}/>
                        </div>
                        <div class="col-sm-1"></div>
                        <div class="col-sm-2">
                            <button class="btn btn-primary" type='submit' onClick={handlePresentVisible}>
                                Ура, подарочек!
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div class="container-fluid">
                    <h1>Подарочек!</h1>
                    <p>
                        Чтобы получить главный подарок, тебе нужно повнимательнее присмотреться к тексту и отгадать ребус. 
                        Ключом к ребусу будет название твоего подарка. 
                        Впиши ответ на латинице в поле ниже.
                    </p>
                    <form>
                        <div class="mb-3 row">
                            <div class="col-sm-8">
                                <input type='text' class='form-control' placeholder='Введи ответ в это поле' value={bandName} onChange={handleBandNameChange}/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <div class="col-sm-3">
                                <button class="btn btn-primary" type='submit' onClick={handlePresentVisible}>
                                    Ура, подарочек!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export { GeneralPresent };

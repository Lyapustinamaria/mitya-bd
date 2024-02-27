import React, { useState } from 'react';
import photoGeneralPresent from '../assets/images/generalPresent.jpg';

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
                <div class="container-fluid mt-5">
                    <h1 class="mb-5 present-header">И главный подарочек!</h1>
                    <div class="row mb-5">
                        <div class="col-sm-6">
                            <p class="mb-3">Необходимо ответить на загадку Жака Фреско: "Сколько козлов вы видите на фотографии?"</p>
                            <img src={photoGeneralPresent} class="img-fluid present-img" alt="Митя и козел"/>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-3">
                                Ура, ты угадал!
                            </p>
                            <button class="btn btn-primary" type='submit' onClick={() => window.location.href='https://drive.google.com/drive/folders/1GQMD2Bun4iNXPFyUg4uYj5jVX5M3NgL2?usp=drive_link'}>Забрать подарок по ссылке</button>
                        </div>
                    </div>
                    <div class="row mb-5"></div> 
                </div>
            ) : (
                <div class="container-fluid mt-5">
                    <h1 class="mb-5 present-header">И главный подарочек!</h1>
                    <div class="row mb-5">
                        <div class="col-sm-6 mb-3">
                            <p class="mb-3">Необходимо ответить на загадку Жака Фреско: "Сколько козлов вы видите на фотографии?"</p>
                            <img src={photoGeneralPresent} class="img-fluid present-img" alt="Митя и козел"/>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-3">
                                <b>Шутка!</b>
                                <br/>
                                Чтобы получить главный подарок, тебе нужно повнимательнее присмотреться к тексту на сайте и отгадать ребус. 
                                Ключом к ребусу будет название твоего подарка. 
                                <br/>
                                Впиши ответ на латинице в поле ниже.
                            </p>
                            <form>
                                <div class="mt-3 mb-3 row">
                                    <div class="col-sm-8">
                                        <input type='text' class='form-control' placeholder='Введи ответ в это поле' value={bandName} onChange={handleBandNameChange}/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div class="col-sm-6">
                                        <button class="btn btn-primary" type='submit' onClick={handlePresentVisible}>
                                            Ура, подарочек!
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mb-5"></div> 
                </div>
            )}
        </div>
    );
};

export { GeneralPresent };

import React, { useState } from 'react';
import { Main } from '../layout/Main';

const VerificationPage = () => {
    const [fullName, setFullName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleBirthdayChange = (e) => {
        setBirthday(e.target.value);
    };

    const handleLogin = () => {
        if (
            (fullName === 'Клочков Дмитрий Александрович' ||
                fullName === 'Klochkov Dmitrii Aleksandrovich') &&
            birthday === '1992-02-28'
        ) {
            setLoggedIn(true);
        } else {
            alert('Неверные данные пользователя. Попробуйте еще раз.');
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    {/* Main page */}
                    <React.Fragment>
                        <Main />
                    </React.Fragment>
                </div>
            ) : (
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-8">
                            <h2 class="mb-4">
                                Для доступа к подарку необходимо ввести свои
                                данные
                            </h2>
                            <form>
                                <div class="mb-3 row">
                                    <label
                                        htmlFor="examplefullName"
                                        class="col-sm-2 col-form-label"
                                    >
                                        ФИО
                                    </label>
                                    <div class="col-sm-8">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Иванов Иван Иванович"
                                            value={fullName}
                                            onChange={handleFullNameChange}
                                        />
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label
                                        htmlFor="exampleBirthday"
                                        class="col-sm-2 col-form-label"
                                    >
                                        День рождения
                                    </label>
                                    <div class="col-sm-8">
                                        <input
                                            type="date"
                                            class="form-control"
                                            value={birthday}
                                            onChange={handleBirthdayChange}
                                        />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div class="col-sm-10 offset-sm-2">
                                        <button
                                            class="btn btn-primary"
                                            type="submit"
                                            onClick={handleLogin}
                                        >
                                            Хочу подарунок!
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            )}
        </div>
    );
};

export { VerificationPage };

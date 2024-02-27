import React from "react";
import videoAsyaCoworker from '../assets/videos/Asya.mp4';
import videoFather from '../assets/videos/father.mp4';
import videoGrandmother from '../assets/videos/grandmother.mp4';
import videoAlexandraCoworker from '../assets/videos/Alexandra.mp4';
import videoMam from '../assets/videos/Mam.mp4';
import videoYulia from '../assets/videos/Yulia.mp4';
import videoIlya from '../assets/videos/MityaMargherita.mp4';
import videoAndrey from '../assets/videos/Andrey.mp4';
import videocoworker from '../assets/videos/IMG_9143.mp4';
import photoNastya from '../assets/images/nastya.jpg';
import photoMasha from '../assets/images/masha.jpg';
import videoYasha from '../assets/videos/yasha.mp4';
import videoOleg from '../assets/videos/oleg.mp4';

{/* Добавить controls перед финальной публикацией для проигрывания видео */}
function VideoBlock() {
    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <h3>
                    Сегодня тебя хочу поздравить не только я, но и много других людей!* 
                </h3>
                <p class="small-text">*<span class="color-letter">Е</span>ще одно доказательство того, какой ты классный, и как тебя все любят ❤️</p>
            </div>
            <div class="row mt-5">
                <h3>Родители</h3>
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoGrandmother} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoFather} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div class='row mt-5'>
                <div class='col'></div>
                <div class="col-sm-4">
                    <video controls width="100%">
                        <source src={videoMam} type="video/mp4"/>
                    </video>
                </div>
                <div class='col'></div>
                <div class="col-sm-4">
                    <video controls width="100%">
                        <source src={videoYulia} type="video/mp4"/>
                    </video>
                </div>
                <div class='col'></div>
            </div>
            <div class="row mt-5">
                <h3>Коллеги</h3>
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoAsyaCoworker} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoAlexandraCoworker} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col"></div>
                <div class="col-sm-6">
                    <video controls width="100%">
                        <source src={videocoworker} type="video/mp4"/>
                    </video>
                </div>
                <div class="col"></div>
            </div>
            <div class="row mt-5">
                <h3>Друзья</h3>
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoAndrey} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoIlya} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoYasha} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-sm-6 mt-3">
                    <video controls width="100%">
                        <source src={videoOleg} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-4">
                    <img src={photoMasha} class="img-fluid video-block" alt="Митя с Машей" />
                </div>
                <div class="col-sm-8">
                    <p class="mt-5">
                        Митя! 
                        <br/>
                        Я наконец-то прив<span class="color-letter">ы</span>кла к тому, что ты Митя, а не Дима. 
                        <br/>
                        Name a more inspiring person, I wait. Удивительным образом любая идея, какой бы неосуществимой она ни казалась, в твоих устах становится не просто возможной, но и какой-то даже логичной, и вообще, как до этого раньше никто не додумался?
                        <br/>
                        Про твою доброту вообще молчу, её глубина остаётся неизведанной, как и дно Мирового Океана. 
                        <br/>
                        Таких, как ты, надо беречь, Митя. 
                        <br/>
                        Кто-то мне сказал, что в День рождения надо желать имениннику того, чего у тебя самого достаточно. Так вот мне везёт с людьми, ты тому подтверждение. Поэтому я желаю тебе, чтобы и на твоём пути встречались только достойные тебя, уникальные и вдохновляющие люди. <span class="color-letter">К</span>репко обнимаю!
                    </p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col"></div>
                <div class="col-sm-6">
                    <img src={photoNastya} class="img-fluid video-block" alt="Митя с Машей" />
                </div>
                <div class="col"></div>
            </div>
        </div>
    )
}

export {VideoBlock}
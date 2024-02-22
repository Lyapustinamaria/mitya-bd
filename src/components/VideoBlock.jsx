import React from "react";
import videoAsyaCoworker from '../assets/videos/Asya.mp4';
import videoFather from '../assets/videos/father.mp4';
import videoGrandmother from '../assets/videos/grandmother.mp4';
import videoAlexandraCoworker from '../assets/videos/Alexandra.mp4';

{/* Добавить controls перед финальной публикацией для проигрывания видео */}
function VideoBlock() {
    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <h3>
                    Сегодня тебя хочу поздравить не только я, но и много других людей!* 
                </h3>
                <p class="small-text">*Еще одно доказательство того, какой ты классный, и как тебя все любят ❤️</p>
            </div>
            <div class="row mt-5">
                <h3>Родители</h3>
                <div class="col-6">
                    <video width="100%">
                        <source src={videoGrandmother} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-6">
                    <video width="100%">
                        <source src={videoFather} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div class="row mt-5">
                <h3>Коллеги</h3>
                <div class="col-6">
                    <video width="100%">
                        <source src={videoAsyaCoworker} type="video/mp4"/>
                    </video>
                </div>
                <div class="col-6">
                    <video width="100%">
                        <source src={videoAlexandraCoworker} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div class="row mt-5">
                <h3>Друзья</h3>
            </div>
        </div>
    )
}

export {VideoBlock}
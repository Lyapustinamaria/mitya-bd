import React from "react";
import secondBlockImage from '../assets/images/second-block-v2.jpg'

function SecondBlock() {
    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-6 mt-5">
                    <img src={secondBlockImage} class="img-fluid second-block" alt="Митя с гитарой" />
                </div>
                <div class="col-6 mt-5 text-right">
                    <h2 class="mb-3">
                        Ты самый невероятный человек, которого я знаю!
                    </h2>
                    <p>
                        Желаю, чтобы каждый шаг, который ты предпримешь, был наполнен радостью и удовлетворением.
                        <br/>
                        <b>Я знаю, что ты очень талантлив.</b>
                        <br/>
                        Страсть, с которой ты относишься к тому, что ты делаешь, невероятно мотивирует и вдохновляет меня.
                        Пусть этот год принесет не только успех в твоей карьере, но и новые возможности для творческого самовыражения.
                        Пусть каждый проект, над которым ты работаешь, станет еще одним шагом к воплощению твоих мечт.
                        Желаю
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-right">
                    <p>тебе легкости во всех начинаниях (в том числе в получении немецкой визы).
                    И пусть этот год будет твоим годом, полным радости и счастья.</p>
                </div>
            </div>
        </div>
    )
}

export {SecondBlock}
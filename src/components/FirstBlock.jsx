import React from "react";
import firstBlockImage from '../assets/images/first-block.png';

function FirstBlock() {
    return (
        <div class="container-fluid mb-5">
            <div class="row">
                <div class="col-sm-6">
                    <h1 class="mt-5 pt-5 mb-5">
                        Митя, 
                        <br/> 
                        С днем рождения!
                    </h1>
                    <p>
                        В этот особенный день хочу выразить тебе свою безграничную любовь и благодарность за то, что ты делаешь мою жизнь такой яркой и замечательной. 
                        Ты — настоящее сокровище, и я безмерно ценю каждый момент, проведенный <span class="color-letter">р</span>ядом с тобой.
                        <br/>
                        <br/>
                        Пусть этот год будет для тебя таким же невероятным, как и ты сам. 
                        Ты <span class="color-letter">з</span>аслуживаешь только самого лучшего, и я обещаю быть рядом и поддерживать тебя во всем. 
                        Мне не хватает слов и  даже символов в Unicode, чтобы выразить все мои чувства к тебе, но я буду стараться искать другие способы.
                        <br/>
                        <br/>
                        <b><span class="color-letter">Б</span>езумно люблю тебя!</b>
                    </p>
                </div>
                <div class="col-sm-6">
                    <img src={firstBlockImage} class="img-fluid" alt="First Block"/>
                </div>
            </div>
        </div>
    )
}

export {FirstBlock}
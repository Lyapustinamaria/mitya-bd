import React from "react";
import firstBlockImage from '../assets/images/first-block.png';

function FirstBlock() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <h1 class="mt-5 pt-5 mb-5">
                        Митя 
                        <br/> 
                        С днем рождения!
                    </h1>
                    <p>
                        В этот особенный день хочу выразить тебе свою безграничную любовь и благодарность за то, что ты делаешь мою жизнь такой яркой и замечательной. 
                        Ты — настоящее сокровище, и я безмерно ценю каждый момент, проведенный рядом с тобой.
                        <br/>
                        <br/>
                        Пусть этот год будет для тебя таким же невероятным, как и ты сам. 
                        Ты заслуживаешь только самого лучшего, и я обещаю быть рядом и поддерживать тебя в каждом твоем стремлении. 
                        Безумно люблю тебя!
                    </p>
                </div>
                <div class="col-6">
                    <img src={firstBlockImage} class="img-fluid" alt="First Block"/>
                </div>
            </div>
        </div>
    )
}

export {FirstBlock}
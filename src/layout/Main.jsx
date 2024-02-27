import React from 'react';
import { GeneralPresent } from '../components/GeneralPresent';
import { FirstBlock } from '../components/FirstBlock';
import { SecondBlock } from '../components/SecondBlock';
import { VideoBlock } from '../components/VideoBlock';
import { PhotoCarousel } from '../components/PhotoCarousel';

function Main() {
    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <React.Fragment>
                        <FirstBlock />
                        <SecondBlock />
                        <VideoBlock />
                        <PhotoCarousel />
                        <GeneralPresent />
                    </React.Fragment>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
    );
}

export { Main };

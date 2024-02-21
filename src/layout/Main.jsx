import React from 'react';
import { GeneralPresent } from '../components/GeneralPresent';
import { FirstBlock } from '../components/FirstBlock';

function Main() {
    return (
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <React.Fragment>
                        <FirstBlock />
                        <GeneralPresent />
                    </React.Fragment>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
    );
}

export { Main };

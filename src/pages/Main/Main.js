import React from 'react'
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Description from '../../components/Description/Description';
import './Main.scss';
export default function Main() {
    return (
        <div className="main">
            <div className="main-overlay"></div>
            <section class="main-info">
                <Heading leftText="Why" rightText="creativia?" />
                <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dolor justo. Phasellus eu ligula ac nisl volutpat tincidunt. Vestibulum vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros. Nulla mi ipsum, consequat condimentum vitae" useColorGrey ={true}/>
                <div class="main-buttons">
                    <Button text="features" useColorBlack={false} />
                    <Button text="free psd" useColorBlack={true} />
                </div>
            </section>
        </div>
    )
}

import React from 'react'
import Heading from '../../components/Heading/Heading';
import Description from '../../components/Description/Description';
import Advantages from './components/Advantages/Advantages';
import knowledgeImg from './imgs/img.png';
import './About.scss';
import Icon from './components/Icon/Icon'
import imgSeparetor from './imgs/scroll_bar.png'

const mockIcons = [{ headingText: "FLAT DESIGN" }, { headingText: "RETINA READY" }, { headingText: "RESPONSIVE" }, {
    headingText: " Clean & useful"}] 
const mockDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis"
const mockAdvatages = [{ title: "Who is creativia?", description: mockDescription }, { title: "Expierences", description: mockDescription }, { title: "Learn more", description: mockDescription }]
export default function About() {
    return(
        <section className = "About" >
            <Heading leftText="about" rightText="creativia" useColorBlack />
            <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis." useColorGrey={false} />
            <div className="about-description">
                <p className="about-description-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dolor
                    justo. Phasellus eu ligula ac nisl volutpat tincidunt. Vestibulum
                    vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu
                    tortor porta placerat. Suspendisse ac vestibulum eros. Nulla mi
                    ipsum, consequat commodo condimentum vitae.
          </p>
            </div>
            <div className="about-text-imgs">
                <ul className="about-scroll">
                    {mockAdvatages.map(({ description, title }, index) => <Advantages key={index} title={title} description={description} />)}
                </ul>
                <img className="about-img" src={knowledgeImg} alt="knowledge" />
            </div>
            <img className="about-seperator" src={imgSeparetor} alt="point" />
            <ul className="icons">
                {mockIcons.map(({ headingText, icon }, index) => <Icon key={index} headingText={headingText} icon={icon} />)}
            </ul>
        </section >
    )
}

import React from 'react'
import Heading from '../../components/Heading/Heading';
import Description from '../../components/Description/Description';
import Advantages from './components/Advantages/Advantages';

const mockDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis"
const mockAdvatages = [{ title: "Who is creativia?", description: mockDescription }, { title: "Expierences", description: mockDescription }, { title: "Learn more", description: mockDescription }]
export default function About() {
    return (
        <div>
            <Heading leftText="about" rightText="creativia" useColorBlack />
            <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis." useColorGrey={false} />
            {mockAdvatages.map(({ description, title }, index) => <Advantages key={index} title={title} description={description} />)}
        </div>
    )
}

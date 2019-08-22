import React from 'react'
import Heading from '../../components/Heading/Heading';
import Description from '../../components/Description/Description';

export default function About() {
    return (
        <div>
            <Heading leftText="about" rightText="creativia" useColorBlack/>
            <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis." useColorGrey={false} />
        </div>
    )
}

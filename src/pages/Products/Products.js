import React from 'react';
import Heading from '../../components/Heading/Heading';
import Description from '../../components/Description/Description';
import mainImg from './imgs/img(copy).jpg'


export default function Products() {
    return (
        <section className="products">
            <div className="product-heading">
                <h2>
                    our&nbsp;
        <span className="product-heading-red">
                        product features
        </span>
                </h2>
                <p className="product-under-heading">
                    Lorem ipsum dolor sit amet, consectetur <span className="product-under-heading-red"> adipiscing elit.&nbsp;
        </span>
                    Integer sed magna vel velit dignissim luctus eu
                    in urna. Dapibus egestas turpis.
    </p>
            </div>
            <span classNameName="product-main-img">
                <img src={mainImg} alt="main" />
            </span>  
        </section>
    )
}

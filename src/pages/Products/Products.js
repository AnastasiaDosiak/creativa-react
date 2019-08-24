import React from 'react';
import Heading from '../../components/Heading/Heading';
import Description from '../../components/Description/Description';
import iconImg from
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
<div className="product-main-menu-img">
    <ul className="product-menu ">
        <li className="product-menu-select">
            <span className="product-menu-heading main-top left">
                Unlimited Color Options
                <span className="product-menu-icon">
                </span>
            </span>

        </li>
        <li className="product-menu-select">
            <span className="product-menu-heading left">
                Outstanding Support
                <span className="product-menu-icon">
                </span>
            </span>
        </li>
        <li className="product-menu-select">
            <span className="product-menu-heading left">
                Retina Ready
                <span className="product-menu-icon">
                </span>
            </span>
        </li>
    </ul>
    <span classNameName="product-main-img">
        <img src={iconimg} alt="icon">
    </span>
    <ul classNameName="product-menu right">
        <li className="product-menu-select">
            <span className="product-menu-heading main-top">
                <span className="product-menu-icon">
                </span>
                Unlimited Color Options
            </span>
        </li>
        <li className="product-menu-select">
            <span className="product-menu-heading">
                <span className="product-menu-icon">
                </span>
                Outstanding Support
            </span>
        </li>
        <li className="product-menu-select">
            <span className="product-menu-heading">
                <span className="product-menu-icon">
                </span>
                Retina Ready
            </span>
        </li>
    </ul>
</div>
</section>
    )
}

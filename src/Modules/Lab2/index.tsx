import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaBookBible, FaCalendar, FaEnvelopeOpenText, FaRegClock } from 'react-icons/fa6';
import './index.css';

function StylingWithStyleAttribute() {
    return (
        <>
            <h3>Styling with the STYLE attribute</h3>
            <p style={{ backgroundColor: 'blue', color: 'white' }}>
                Style attribute allows configuring look and feel right on the element. Although it's very convenient it is considered bad practice and you should avoid using the style attribute.
            </p>
        </>
    );
}

function ExternalCSSStyling() {
    return (
        <>
            <h3>Styling with external CSS</h3>
            <p id="wd-id-selector-1">This paragraph is styled using an ID selector in external CSS.</p>
            <p className="wd-class-selector">This paragraph is styled using a class selector in external CSS.</p>
        </>
    );
}

function GridSystem() {
    return (
        <>
            <h3>Grid system</h3>
            <div className="row">
                <div className="col bg-danger text-white">Left half</div>
                <div className="col bg-primary text-white">Right half</div>
            </div>
            <div className="row">
                <div className="col-4 bg-warning">One third</div>
                <div className="col-8 bg-success text-white">Two thirds</div>
            </div>
            <div className="row">
                <div className="col-2 bg-dark text-white">Sidebar</div>
                <div className="col-8 bg-secondary text-white">Main content</div>
                <div className="col-2 bg-info">Sidebar</div>
            </div>
        </>
    );
}

function Forms() {
    return (
        <>
            <h3>Forms</h3>
            <div className="mb-3">
                <label htmlFor="input1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="input1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="textarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="textarea1" rows={3}></textarea>
            </div>
        </>
    );
}

function Addons() {
    return (
        <>
            <h3>Addons</h3>
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
            </div>
        </>
    );
}

function ResponsiveForms() {
    return (
        <>
            <h3>Responsive forms</h3>
            <div id="wd-css-responsive-forms-1">
                <div className="mb-3 row">
                    <label htmlFor="email1" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email1" placeholder="john@doe.com" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="password1" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" id="password1" className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="textarea2" className="col-sm-2 col-form-label">Bio</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="textarea2" rows={3}></textarea>
                    </div>
                </div>
            </div>
        </>
    );
}

function Tabs() {
    return (
        <>
            <h3>Tabs</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </>
    );
}

function Cards() {
    return (
        <>
            <h3>Cards</h3>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to fill up the card.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

function Switches() {
    return (
        <>
            <h3>Switches</h3>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="switch1" />
                <label className="form-check-label" htmlFor="switch1">Default switch checkbox input</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="switch2" checked />
                <label className="form-check-label" htmlFor="switch2">Checked switch checkbox input</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="switch3" disabled />
                <label className="form-check-label" htmlFor="switch3">Disabled switch checkbox input</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="switch4" checked disabled />
                <label className="form-check-label" htmlFor="switch4">Disabled checked switch checkbox input</label>
            </div>
        </>
    );
}

function Range() {
    return (
        <>
            <h3>Range</h3>
            <label htmlFor="range1" className="form-label">Example range</label>
            <input type="range" className="form-range" min="0" max="5" step="0.5" id="range1" />
        </>
    );
}

function ForegroundColors() {
    return (
        <div id="wd-css-colors">
            <h2>Colors</h2>
            <h3 className="wd-fg-color-blue">Foreground color</h3>
            <p className="wd-fg-color-red">
                The text in this paragraph is red but{" "}
                <span className="wd-fg-color-green">this text is green</span>
            </p>
        </div>
    );
}

function BackgroundColors() {
    return (
        <div id="wd-css-background-colors">
            <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
            <p className="wd-bg-color-red wd-fg-color-black">
                This background of this paragraph is red but
                <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
            </p>
        </div>
    );
}

function Borders() {
    return (
        <div id="wd-css-borders">
            <h2>Borders</h2>
            <p className="wd-border-fat wd-border-red wd-border-solid">
                Solid fat red border
            </p>
            <p className="wd-border-thin wd-border-blue wd-border-dashed">
                Dashed thin blue border
            </p>
        </div>
    );
}

function Padding() {
    return (
        <div id="wd-css-paddings">
            <h2>Padding</h2>
            <div
                className="wd-padded-top-left wd-border-fat
      wd-border-red wd-border-solid
      wd-bg-color-yellow"
            >
                Padded top left
            </div>
            <div
                className="wd-padded-bottom-right wd-border-fat
      wd-border-blue wd-border-solid
      wd-bg-color-yellow"
            >
                Padded bottom right
            </div>
            <div
                className="wd-padding-fat wd-border-fat
      wd-border-yellow wd-border-solid
      wd-bg-color-blue wd-fg-color-white"
            >
                Padded all around
            </div>
        </div>
    );
}

function Margins() {
    return (
        <div id="wd-css-margins">
            <h2>Margins</h2>
            <div
                className="wd-margin-bottom
      wd-padded-top-left
      wd-border-fat wd-border-red
      wd-border-solid
      wd-bg-color-yellow"
            >
                Margin bottom
            </div>
            <div
                className="wd-margin-right-left
      wd-padded-bottom-right
      wd-border-fat wd-border-blue
      wd-border-solid
      wd-bg-color-yellow"
            >
                Margin left right
            </div>
            <div
                className="wd-margin-all-around
      wd-padding-fat wd-border-fat
      wd-border-yellow
      wd-border-solid
      wd-bg-color-blue
      wd-fg-color-white"
            >
                Margin all around
            </div>
        </div>
    );
}

function Corners() {
    return (
        <div id="wd-css-borders">
            <h3>Rounded corners</h3>
            <p
                className="wd-rounded-corners-top wd-border-thin
     wd-border-blue wd-border-solid wd-padding-fat"
            >
                Rounded corners on the top
            </p>
            <p
                className="wd-rounded-corners-bottom
     wd-border-thin wd-border-blue wd-border-solid
     wd-padding-fat"
            >
                Rounded corners at the bottom
            </p>
            <p
                className="wd-rounded-corners-all-around
     wd-border-thin wd-border-blue wd-border-solid
     wd-padding-fat"
            >
                Rounded corners all around
            </p>
            <p
                className="wd-rounded-corners-inline
     wd-border-thin wd-border-blue wd-border-solid
     wd-padding-fat"
            >
                Different rounded corners
            </p>
        </div>
    );
}

function Dimensions() {
    return (
        <div id="wd-css-dimensions">
            <h2>Dimension</h2>
            <div>
                <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
                <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
                    Landscape
                </div>
                <div className="wd-dimension-square wd-bg-color-red">Square</div>
            </div>
        </div>
    );
}

function Positions() {
    return (
        <div>
            <div id="wd-css-position-relative">
                <h2>Relative</h2>
                <div className="wd-bg-color-gray">
                    <div className="wd-bg-color-yellow wd-dimension-portrait">
                        <div className="wd-pos-relative-nudge-down-right">Portrait</div>
                    </div>
                    <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                        Landscape
                    </div>
                    <div className="wd-bg-color-red wd-dimension-square">Square</div>
                </div>
            </div>
            <div id="wd-css-position-absolute">
                <h2>Absolute position</h2>
                <div className="wd-pos-relative">
                    <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
                        Portrait
                    </div>
                    <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                        Landscape
                    </div>
                    <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
                        Square
                    </div>
                </div>
            </div>
            <div id="wd-css-position-fixed">
                <h2>Fixed position</h2>
                Checkout the blue square that says "Fixed position" stuck all the way on
                the right and half way down the page. It doesn't scroll with the rest of
                the page. Its position is "Fixed".
                <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
                    Fixed position
                </div>
            </div>
        </div>
    );
}

function Zindex() {
    return (
        <div id="wd-z-index">
            <h2>Z index</h2>
            <div className="wd-pos-relative">
                <div
                    className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait"
                >
                    Portrait
                </div>
                <div
                    className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white"
                >
                    Landscape
                </div>
                <div
                    className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square"
                >
                    Square
                </div>
            </div>
        </div>
    );
}

function Float() {
    return (
        <div id="wd-float-divs">
            <h2>Float</h2>
            <div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
                    Yellow
                </div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
                    Blue
                </div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
                    Red
                </div>
                <div className="wd-float-done"></div>
            </div>
        </div>
    );
}

function GridLayout() {
    return (
        <div id="wd-css-grid-layout">
            <div id="wd-css-left-right-layout">
                <h2>Grid layout</h2>
                <div className="wd-grid-row">
                    <div className="wd-grid-col-half-page wd-bg-color-yellow">
                        <h3>Left half</h3>
                    </div>
                    <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
                        <h3>Right half</h3>
                    </div>
                </div>
            </div>
            <div id="wd-css-left-third-right-two-thirds" className="wd-grid-row">
                <div className="wd-grid-col-third-page wd-bg-color-green wd-fg-color-white">
                    <h3>Left third</h3>
                </div>
                <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
                    <h3>Right two thirds</h3>
                </div>
            </div>
            <div id="wd-css-side-bars" className="wd-grid-row">
                <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
                    <h3>Side bar</h3>
                    <p>This is the left sidebar</p>
                </div>
                <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
                    <h3>Main content</h3>
                    <p>
                        This is the main content. This is the main content. This is the main
                        content.
                    </p>
                </div>
                <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
                    <h3>Side bar</h3>
                    <p>This is the right sidebar</p>
                </div>
            </div>
        </div>
    );
}

function Flex() {
    return (
        <div id="wd-css-flex">
            <h2>Flex</h2>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
                <div className="wd-bg-color-blue">Column 2</div>
                <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
            </div>
        </div>
    );
}

function ReactIconsSampler() {
    return (
        <div id="wd-react-icons-sampler" className="mb-4">
            <h3>React Icons Sampler</h3>
            <div className="d-flex">
                <VscAccount className="fs-3 text" />
                <AiOutlineDashboard className="fs-3 text" />
                <FaBookBible className="fs-3 text" />
                <FaCalendar className="fs-3 text" />
                <FaEnvelopeOpenText className="fs-3 text" />
                <FaRegClock className="fs-3 text" />
            </div>
        </div>
    );
}

function ScreenSizeLabel() {
    return (
        <div id="wd-screen-size-label">
            <div className="d-block d-sm-none">XS - Extra Small (&lt;576px)</div>
            <div className="d-none d-sm-block d-md-none">S - Small (≥576px) </div>
            <div className="d-none d-md-block d-lg-none"> M - Medium (≥768px)</div>
            <div className="d-none d-lg-block d-xl-none">L - Large (≥992px) </div>
            <div className="d-none d-xl-block d-xxl-none">
                {" "}
                XL - Extra Large (≥1200px)
            </div>
            <div className="d-none d-xxl-block">
                XXL - Extra Extra Large (≥1400px){" "}
            </div>
        </div>
    );
}

export default function Lab2() {
    return (
        <div className="container" id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <StylingWithStyleAttribute />
            <ExternalCSSStyling />
            <GridSystem />
            <Forms />
            <Addons />
            <ResponsiveForms />
            <Tabs />
            <Cards />
            <Switches />
            <Range />
            <ForegroundColors />
            <BackgroundColors />
            <Borders />
            <Padding />
            <Margins />
            <Corners />
            <Dimensions />
            <Positions />
            <Zindex />
            <Float />
            <GridLayout />
            <Flex />
            <ReactIconsSampler />
            <ScreenSizeLabel />
        </div>
    );
}

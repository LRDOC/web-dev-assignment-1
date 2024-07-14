import React from 'react';
import './index.css';

export default function Lab2() {
    return (
        <div id="wd-lab2" className="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p style={{ backgroundColor: 'blue', color: 'white' }}>
                Style attribute allows configuring look and feel right on the element. Although it's very convenient it is considered bad practice and you should avoid using the style attribute.
            </p>

            <h3>Styling with external CSS</h3>
            <p id="id-selector-1">This paragraph is styled using an ID selector in external CSS.</p>
            <p className="class-selector">This paragraph is styled using a class selector in external CSS.</p>

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

            <h3>Forms</h3>
            <div className="mb-3">
                <label htmlFor="input1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="input1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="textarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="textarea1" rows={3}></textarea>
            </div>

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

            <h3>Cards</h3>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example just to fill up the text, keep typing just to fill it up. testing did it work please.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

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

            <h3>Range</h3>
            <label htmlFor="range1" className="form-label">Example range</label>
            <input type="range" className="form-range" min="0" max="5" step="0.5" id="range1" />
        </div>
    );
}

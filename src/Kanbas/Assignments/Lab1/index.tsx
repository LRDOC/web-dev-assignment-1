import React from 'react';
import './index.css';

export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Liam OConnor, Section 01</h2>
            <h3>Lab 1</h3>

            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                <p>
                    Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading
                    that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The
                    font of the section headings are usually larger and bolder than the plain text and their subsection headings. This document uses headings to
                    introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders
                    in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and
                    h6 is the smallest heading.
                </p>
                <h1>h1. Bootstrap heading</h1>
                <h2>h2. Bootstrap heading</h2>
                <h3>h3. Bootstrap heading</h3>
                <h4>h4. Bootstrap heading</h4>
                <h5>h5. Bootstrap heading</h5>
                <h6>h6. Bootstrap heading</h6>
            </div>

            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p>This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical
                    white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you
                    want to separate with the paragraph tag</p>
                <p>This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one</p>
                <p>This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers
                    render them as one contiguous piece of text as shown here on the right.</p>
                <p>This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.</p>
            </div>

            <div id="wd-l-tag">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                <ol>
                    <li>How to make pancakes:</li>
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                <ol>
                    <li>My Favorite Recipe: Cacio e Pepe Pasta</li>
                    <li>Bring a large pot of salted water to a boil.</li>
                    <li>Add spaghetti/Pasta and cook until al dente (firm ish).</li>
                    <li>Meanwhile, melt butter in a large skillet over medium heat.</li>
                    <li>Add ground black pepper and cook until fragrant.</li>
                    <li>Reserve some pasta water and drain the pasta. Just a tad but not so little. just a scoop or so</li>
                    <li>Add pasta to the skillet with butter and pepper.</li>
                    <li>Add grated Pecorino Romano cheese (or any cheese closely resembling it) and toss to combine.</li>
                    <li>Add reserved pasta water as needed to create a creamy sauce.</li>
                    <li>Serve immediately and enjoy!</li>
                </ol>
                <h5>Unordered List Tag</h5>
                <ul>
                    <li>My favorite books (in no particular order)</li>
                    <li>Song of Ice and Fire</li>
                    <li>Tuesday with Morrie</li>
                    <li>Witcher Series</li>
                </ul>
            </div>

            <div id="wd-t-tag">
                <h4>Table Tag</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Quiz</th>
                        <th>Topic</th>
                        <th>Date</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Q1</td>
                        <td>HTML</td>
                        <td>2/3/21</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td>CSS</td>
                        <td>2/10/21</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td>JavaScript</td>
                        <td>2/17/21</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td>Why water is wet: The Mysteries of the English Language</td>
                        <td>2/24/21</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>Q5</td>
                        <td>How we made Rocks talk to each other and now we have AI</td>
                        <td>3/3/21</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>Q6</td>
                        <td>What is the best car to drive when you have no money (none)</td>
                        <td>3/10/21</td>
                        <td>96</td>
                    </tr>
                    <tr>
                        <td>Q7</td>
                        <td>Xbox or Playstation?</td>
                        <td>3/17/21</td>
                        <td>97</td>
                    </tr>
                    <tr>
                        <td>Q8</td>
                        <td>Cats or Dogs? Neither, Polar Bear</td>
                        <td>3/24/21</td>
                        <td>98</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div id="wd-img-tag">
                <h4>Image tag</h4>
                <p>Loading an image from the internet:</p>
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*"
                    alt="Maltipoo from Good House Keeping"/>
                <p>Loading a local image:</p>
                <img src={`${process.env.PUBLIC_URL}/lolcat.jpeg`} alt="Local Image"/> {/* https://create-react-app.dev/docs/using-the-public-folder/ */}
            </div>

            <div id="wd-f-tag">
                <h4>Form Elements</h4>
                <h5>Text Fields</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">First name:</label>
                        <input type="text" className="form-control" id="firstname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last name:</label>
                        <input type="text" className="form-control" id="lastname" defaultValue="Wonderland"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="biography">Biography:</label>
                        <textarea className="form-control" id="biography"
                                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fileUpload">File upload:</label>
                        <input type="file" className="form-control" id="fileUpload"/>
                    </div>
                    <div className="form-group">
                        <label>Favorite movie genre:</label>
                        <div>
                            <input type="radio" id="comedy" name="genre" value="Comedy"/>
                            <label htmlFor="comedy">Comedy</label>
                        </div>
                        <div>
                            <input type="radio" id="drama" name="genre" value="Drama"/>
                            <label htmlFor="drama">Drama</label>
                        </div>
                        <div>
                            <input type="radio" id="scifi" name="genre" value="Science Fiction"/>
                            <label htmlFor="scifi">Science Fiction</label>
                        </div>
                        <div>
                            <input type="radio" id="fantasy" name="genre" value="Fantasy"/>
                            <label htmlFor="fantasy">Fantasy</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Favorite movie genres:</label>
                        <div>
                            <input type="checkbox" id="comedy" name="genre" value="Comedy"/>
                            <label htmlFor="comedy">Comedy</label>
                        </div>
                        <div>
                            <input type="checkbox" id="drama" name="genre" value="Drama"/>
                            <label htmlFor="drama">Drama</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scifi" name="genre" value="Science Fiction"/>
                            <label htmlFor="scifi">Science Fiction</label>
                        </div>
                        <div>
                            <input type="checkbox" id="fantasy" name="genre" value="Fantasy"/>
                            <label htmlFor="fantasy">Fantasy</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dropdownSingle">Select one</label>
                        <select className="form-control" id="dropdownSingle">
                            <option>Science Fiction</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dropdownMultiple">Select many</label>
                        <select multiple className="form-control" id="dropdownMultiple">
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Science Fiction</option>
                            <option>Fantasy</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" defaultValue="jdoe@somewhere.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Starting salary:</label>
                        <input type="number" className="form-control" id="salary" defaultValue="1000"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" className="form-control" id="phone" defaultValue="123-234-3456"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating:</label>
                        <input type="range" className="form-control" id="rating"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of birth:</label>
                        <input type="date" className="form-control" id="dob" defaultValue="2000-01-21"/>
                    </div>
                </form>
            </div>

            <div id="wd-a-tag">
                <h4>Anchor tags</h4>
                <p><a href="https://github.com/LRDOC/web-dev-assignment-1">Github Repository</a></p>
                <p><a href="https://github.com/">GitHub</a></p>
            </div>
        </div>
    );
}

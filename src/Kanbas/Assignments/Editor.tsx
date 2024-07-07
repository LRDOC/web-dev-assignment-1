import React from 'react';
import {useParams} from 'react-router-dom';

const assignments: { [key: string]: string } = {
    '1': 'P1 - Gather Ingredients',
    '2': 'P2 - Mix Ingredients',
    '3': 'P3 - Cook Pancakes',
    '4': 'P4 - Serve Pancakes',
    '5': 'P5 - Cleanup',
};

const assignmentDescriptions: { [key: string]: string } = {
    '1': 'Gather all the necessary ingredients for making pancakes, including flour, eggs, milk, sugar, baking powder, and salt.',
    '2': 'Mix the ingredients together in a large bowl until smooth. Make sure there are no lumps in the batter.',
    '3': 'Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    '4': 'Serve the pancakes with your favorite toppings such as syrup, butter, fruits, or whipped cream.',
    '5': 'Clean up the kitchen and utensils used in making the pancakes.',
};

export default function AssignmentEditor() {
    const {id} = useParams<{ id: string }>();

    if (!id || !assignments[id]) {
        return <div>Invalid Assignment ID</div>;
    }

    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value={assignments[id]} readOnly/><br/><br/>
            <textarea id="wd-description" readOnly>
                {assignmentDescriptions[id]}
            </textarea><br/>
            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-deadline">Deadline</label>
                    </td>
                    <td>
                        <input id="wd-deadline" type="date"/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-link">Submission Link</label>
                    </td>
                    <td>
                        <input id="wd-submission-link" type="url" placeholder="http://..."/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

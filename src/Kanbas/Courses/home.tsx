import React from 'react';
import Modules from './Modules';

export default function Home() {
    return (
        <table id="wd-home">
            <tbody>
            <tr>
                <td valign="top">
                    <Modules />
                </td>
                <td valign="top">
                    {/* <CourseStatus /> Uncomment or create this component if available */}
                    <div>Course Status Placeholder WIP</div> {/* Placeholder */}
                </td>
            </tr>
            </tbody>
        </table>
    );
}

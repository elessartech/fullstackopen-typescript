import React from "react";

interface MyProps {
    courseParts: CoursePart[];
}

interface CoursePart {
    name: string;
    exerciseCount: number;
    description?: string;
    type: string;
    groupProjectCount?: number;
    exerciseSubmissionLink?: string;
    requirements?: string[];
}

const Content = (props: MyProps): JSX.Element => {
    return (
        <div>
            {props.courseParts.map(coursePart => 
                <p>
                    <strong>{coursePart.name} {coursePart.exerciseCount}</strong> 
                    {coursePart.description ? <p><i>{coursePart.description}</i></p> : null}
                    {coursePart.groupProjectCount ? <p>project exercises {coursePart.groupProjectCount}</p> : null}
                    {coursePart.exerciseSubmissionLink ? <p>submit to <a href={coursePart.exerciseSubmissionLink}>{coursePart.exerciseSubmissionLink}</a></p> : null}
                    {coursePart.requirements ? <p>required skills: {coursePart.requirements.join(", ")}</p> : null}
                </p>
            )}
        </div>
    )
}

export default Content
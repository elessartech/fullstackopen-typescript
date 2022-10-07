import React from "react";

interface MyProps {
    courseParts: CoursePart[];
}

interface CoursePart {
    name: string;
    exerciseCount: number
}

const Content = (props: MyProps): JSX.Element => {
    return (
        <div>
            {props.courseParts.map(coursePart => <p>{coursePart.name} {coursePart.exerciseCount}</p>)}
        </div>
    )
}

export default Content
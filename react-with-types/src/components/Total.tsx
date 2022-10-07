import React from "react";

interface MyProps {
    numberOfExercises: number;
}

const Total = (props: MyProps): JSX.Element => {
    return (
        <p>
            Number of exercises{" "}
            {props.numberOfExercises}
        </p>
    )
}

export default Total
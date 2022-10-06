interface Result  {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateRating = (periodLength: number, trainingDays: number): {rating: number, descr: string} => {
    const procentage: number = trainingDays / periodLength;
    if (procentage < .5) {
        return {rating: 1, descr: 'badly done'};
    } else if (procentage >= .5 && procentage < .75) {
        return {rating: 2, descr: 'not too bad but could be better'};
    } else {
        return {rating: 3, descr: 'well done'};
    }
};

const calculateExercises = (dailyExerciseHours: Array<number>, targetHourAmount: number): Result => {
    const periodLength =  dailyExerciseHours.length;
    const trainingDays = dailyExerciseHours.filter(exerciseDay => exerciseDay > 0).length;
    const calculatedRating = calculateRating(periodLength, trainingDays);
    const rating = calculatedRating.rating;
    const ratingDescription = calculatedRating.descr;
    const target = targetHourAmount;
    const average =  dailyExerciseHours.reduce((partialSum, a) => partialSum + a, 0) / periodLength;
    const success = average >= targetHourAmount;
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

const targetHourAmount = Number(process.argv[2]);
const dailyExerciseHours: Array<number> = process.argv.slice(3).map(daylyExercise => Number(daylyExercise));

console.log(calculateExercises(dailyExerciseHours, targetHourAmount));

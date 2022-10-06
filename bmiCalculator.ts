const calculateBmi = (height: number, weight: number) => {
    const bmi = (weight / height / height) * 10000
    if (bmi < 16) return 'Underweight (Severe thinness)'
    else if (bmi >= 16 && bmi < 17) return 'Underweight (Moderate thinness)'
    else if (bmi >= 17 && bmi < 18.5) return 'Underweight (Mild thinness)'
    else if (bmi >= 18.5 && bmi < 25) return 'Normal (healthy weight)'
    else if (bmi >= 25 && bmi < 30) return 'Overweight (Pre-obese)'
    else if (bmi >= 30) return 'Obese'
    return ''
}

const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])

console.log(calculateBmi(height, weight))
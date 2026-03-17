const args = process.argv.slice(2);
const weight: number = parseFloat(args[0]!) || 100;
const height: number = parseFloat(args[1]!) || 180;

const calculateBMI = (w: number, h: number) => {
  const hM = h / 100;
  return (w / (hM * hM)).toFixed(2);
};

const getBMIStatus = (bmi: number) => {
  switch (true) {
    case bmi > 30:
      return "비만";
    case bmi > 25:
      return "과체중";
    case bmi > 18.5:
      return "정상";
    default:
      return "저체중";
  }
};

const bmi = calculateBMI(weight, height);
const bmiStatus = getBMIStatus(parseFloat(bmi));
console.log(`BMI: ${bmi}`);
console.log(bmiStatus);

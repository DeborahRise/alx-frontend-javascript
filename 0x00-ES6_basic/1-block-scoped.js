export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    console.log(task, task2); // Trying to bypass Eslint's wahala
    // and also internet issues with pushing
  }

  return [task, task2];
}

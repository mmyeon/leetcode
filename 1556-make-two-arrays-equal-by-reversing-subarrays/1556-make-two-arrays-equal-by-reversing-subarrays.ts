function canBeEqual(target: number[], arr: number[]): boolean {
  const sortedTarget = target.sort();
  const sortedArr = arr.sort();

  for(let i = 0; i < sortedTarget.length;i++){
    if(sortedTarget[i] !== sortedArr[i]) return false
  } 

  return true
};
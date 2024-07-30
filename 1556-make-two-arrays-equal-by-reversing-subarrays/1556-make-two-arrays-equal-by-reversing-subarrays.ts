function canBeEqual(target: number[], arr: number[]): boolean {
  const sortedTarget = target.sort((a,b) => a-b);
  const sortedArr = arr.sort((a,b) => a-b);

  return sortedTarget.every((target,index) => target === sortedArr[index]) 
};
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    let hashMap: Record<string, number> = {}

    // 첫 번째 배열의 value, weight를 hashMap에 저장
    for (let i = 0; i < items1.length; i++) {
        hashMap[items1[i][0]] = items1[i][1];
    }

    // 두 번째 배열의 value, weight를 hashMap에 반영
    // 이미 존재하면 weight에 더하고, 없으면 새로 추가하기
    for (let i = 0; i < items2.length; i++) {
        if (hashMap[items2[i][0]]) { hashMap[items2[i][0]] += items2[i][1] }
        else { hashMap[items2[i][0]] = items2[i][1]; }
    }

    // hashMap을 배열로 변환한 뒤 key 데이터타입을 숫자로 변환하고 리턴하기
    return Object.entries(hashMap).map(item => [Number(item[0]), item[1]]);
};

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // 맵 만들기 
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        // 순회하면서 인덱스 저장하기 
        if (map[nums[i]] === undefined) {
            console.log("처음 키가 추가됨 ")
            map[nums[i]] = i;
        } else {
            // 맵에 해당 값 있는지 체크 
            // 있으면 현재 인덱스와 저장된 인덱스가 k 이하인지 체크 
            // 그러면 true 리턴
            if ((i - map[nums[i]]) <= k) {
                return true
            }
            else {
                // 현재 값이 있는데 k인덱스차이보다 크면 현재 index로 업데이트하기 
                map[nums[i]] = i
            }
        }
    }

    // 반복문 끝나면 false 리턴하기 
    return false;
};
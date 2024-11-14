// debounce가 여러번 호출되는 경우, 함수 내부에서 timeoutID 를 저장하면 매번 새로운 timeoutID가 저장되니까 클리어 로직이 실행되지 않는다. 
// 외부에서 id가 선언되어야 값에 접근할 수 있다. timeoutid 값 접근 가능한지 적기 


type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeoutId = null;

    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

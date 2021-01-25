const asynchronous = () => {
    return new Promise((resolve, reject) => {
        if (isSuccessful) {
            // 비동기 처리 성공 시
            resolve();
        } else {
            // 비동기 처리 실패 시
            reject();
        }
    })
}

// try catch 문으로 받기
try {
    (async () => {
        await asynchronous();
        console.log('성공했을 때 출력되는 메시지');
    })();
} catch(reject) {
    console.log('실패했을 때 출력되는 메시지');
}

// then catch 로 받기
asynchronous()
.then(resolve => {
    console.log('성공했을 때 출력되는 메시지');
})
.catch(reject => {
    console.log('실패했을 때 출력되는 메시지');
})

// resolve, reject로 받기
asynchronous(resolve => {
    console.log('성공했을 때 출력되는 메시지');
}, reject => {
    console.log('실패했을 때 출력되는 메시지');
})
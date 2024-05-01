function fetchData(callBack) {
    setTimeout(() => {
        let fetchData = 'fetched data';
        callBack(fetchData);
    }, 5000);
}
function callBack(data, error) {
    if (error) console.log(error);
    else console.log(data);
}
fetchData(callBack);
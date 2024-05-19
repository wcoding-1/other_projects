
function getRandomId(){
    return `${Math.random()}` - `${Math.random()}`;
};


function getRandomNum(list, n){
    return Math.floor(Math.random() * list);

};


const summaries = [
    'cloudy',
    'partly cloudy',
    'sunny',
    'partly sunny',
    'rainy',
    'mostly sunny'
];

const randomList = (list) => {
    return list[getRandomNum(summaries.length, 30)];
}

const getTemp = () => {
    const avg = getRandomNum(4);
    let min = avg ;
    let max = avg ;

    return {
        avg,
        min: min - 10,
        max: max + 10
    };

};

const getWeahterItem = () => ({
    id: getRandomId(),
    summary: randomList(summaries),
    temp: getTemp(),
    precip: getRandomNum(30, 20)

});

export default {
    "/daily": Array.from({length: 5}, getWeahterItem),
    "/hourly": Array.from({length: 24}, getWeahterItem)
};
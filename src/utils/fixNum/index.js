    export function separateWithComma(num){
        if(num >= 10000){
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        } else{
            return num
        }
    }

    export function shortening(num){
        if (Number(num) > 0 && num !== null){
            if(num >= (10 ** 3) && num < (10 ** 5)){
                const shortenedNum = num 
                return shortenedNum.toFixed(2)
            } else if(num >= (10 ** 5) && num < (10 ** 6)){
                const shortenedNum = num / 10 ** 3 
                return shortenedNum.toFixed(2) + "k"
            } else if(num >= (10 ** 6) && num < (10 ** 9)){
                const shortenedNum = num / 10 ** 6
                return shortenedNum.toFixed(2) + "m"
            } else if(num >= (10 ** 9) && num < (10 ** 12)){
                const shortenedNum = num / 10 ** 9
                return shortenedNum.toFixed(2) + "b"
            } else if(num > (10 ** 12)){
                const shortenedNum = num / 10 ** 12
                return shortenedNum.toFixed(2) + "t"
            } else{
                return num
            }
        } else if(num === null){
            return null
        } else{
            return num
        }
    }

    export function addZeros(num){
        // to add .00 to single-digits
        const numStr = String(num)
        const dec = numStr.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        return Number(numStr).toFixed(len)
    }
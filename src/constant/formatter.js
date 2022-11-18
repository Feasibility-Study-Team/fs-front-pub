const colorText = (status) => {
    if (status === "Pending") {
        return "text-textpending"
    }

    if (status === "Under Review") {
        return "text-textreview"
    }

    return "text-textdone"
}

const colorTest = (number) =>{
    if(number >= 80){
        return "text-textdone"
    }

    if(number >=40){
        return "text-textreview"
    }

    return "text-textpending"
}

export {
    colorText,
    colorTest
}
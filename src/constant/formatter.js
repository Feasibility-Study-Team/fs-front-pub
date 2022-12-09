const colorText = (status) => {
    if (status === "Pending") {
        return "text-textpending"
    }

    if (status === "Under Review") {
        return "text-textreview"
    }

    return "text-textdone"
}

const colorTest = (number) => {
    if (number >= 80) {
        return "text-textdone"
    }

    if (number >= 40) {
        return "text-textreview"
    }

    return "text-textpending"
}

const rupiahFormatter = (numb) => {

    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp' + convert.join('.').split('').reverse().join('') + ',-';

    return rupiah;
}

export {
    colorText,
    colorTest,
    rupiahFormatter
}
const firstLetterUpperCase = (str: string): string => {
    const valueString = str.toLowerCase();
    return valueString
        .split(' ')
        .map(
            (value: string) =>
                `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
        )
        .join(' ');
}

const lowerCase = (str: string): string => {
    return str.toLowerCase()
}

const upperCase = (str: string): string => {
    return str.toUpperCase()
}

export {
    firstLetterUpperCase,
    lowerCase,
    upperCase
}
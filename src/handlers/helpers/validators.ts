const isEmail = (email: string): boolean => {
    const regexExp =
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    return regexExp.test(email);
}

const isDataURL = (value: string): boolean => {
    const dataUrlRegex =
        /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
    return dataUrlRegex.test(value);
}

export {
    isEmail,
    isDataURL,
}
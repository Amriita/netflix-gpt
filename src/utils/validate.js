export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (name) {
        const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
        if (!isNameValid) return 'Name is not valid';
    }

    if (!isEmailValid) return "Email Id is not Valid";
    if (!isPasswordValid) return "Password is not Valid";

    return null;
}
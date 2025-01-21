export const validEmail = (email: string) => {
    const validationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return validationRegex.test(email);
}
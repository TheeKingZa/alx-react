/* utils.js */
export const getFullYear = (date = new Date()) => {
    return date.getFullYear();
};

export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

export const getLatestNotification = () => "<strong>Urgent Requirement</strong> - complete by EOD";

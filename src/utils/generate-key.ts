export const generateKey = (prefix: string | number) => {
	return `${prefix}_${new Date().getTime()}`;
};

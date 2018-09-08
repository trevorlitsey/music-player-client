import { format } from 'date-fns';

export const formatFilename = filename => {
	const date = format(new Date(), 'YYYYMMDD');
	const randomString = Math.random()
		.toString(36)
		.substring(2, 7);
	const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, '-');
	const newFilename = `songs/${date}-${randomString}-${cleanFileName}`;
	return newFilename.substring(0, 60);
};

export const getQueueType = (queueId: number): string => {
	let queueType;
	switch (queueId) {
		case 420:
			queueType = 'Ranked Solo 5x5';
			break;
		case 400:
			queueType = 'Normal Draft 5x5';
			break;
		case 430:
			queueType = 'Normal Blind 5x5';
			break;
		case 440:
			queueType = 'Ranked Flex 5x5';
			break;
		case 450:
			queueType = 'ARAM';
			break;
		case 700:
			queueType = 'Clash';
			break;
		case 76:
			queueType = 'URF';
			break;
		case 0:
			queueType = 'Custom Game';
			break;
		default:
			queueType = 'Not found';
			break;
	}

	return queueType;
};

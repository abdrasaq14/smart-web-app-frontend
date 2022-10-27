export const sleep = async (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export function getEntityById<T>(
	entityList: (T & { id: number | string })[],
	id: number | null | string
) {
	if (id == null) {
		return undefined;
	}
	return entityList.find((entity) => entity.id === id);
}

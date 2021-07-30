const states = [
	{ name: 'Alabama', capital: 'Montgomery' },
	{ name: 'Alaska', capital: 'Juneau' },
	{ name: 'Arizona', capital: 'Phoenix' },
	// ...
]
for (const state of states) {
	console.log(state.capitol)
	// js에서는 철자가 틀려도 에러가 나지 않음
}

export default {}

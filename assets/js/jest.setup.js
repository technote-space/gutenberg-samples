import { setupGlobal } from '@technote-space/gutenberg-test-helper';

setupGlobal({
	setUseRefMock: false,
	mockLodashDebounce: false,
	setWp: {
		formatLibrary: false,
	},
});

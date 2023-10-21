// From Joe's answer on stack overflow: https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
function isLocalStorageAvailable() {
	var test = "test";
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
}

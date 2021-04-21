export default function (msg: string) {
	console.log(process.env.APP_ENV);
	if (process.env.APP_ENV === "staging" || process.env.APP_ENV === "production") {
		console.log("Logger Staging or Production");
	} else if (process.env.APP_DEBUG) {
		console.log("Logger Debug");
	} else {
		console.log("Logger", msg);
	}
}

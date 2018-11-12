/* eslint-disable no-invalid-this */
export default function () {
	this.post("/api/v1/login/0", (/*schema, request*/) => {
		return {
			"data": {
				"type": "auth",
				"id": "5b7e454a8fb8076c3c3304l0",
				"attributes": {
					"token": "我是token"
				},
				"relationships": {
					"UserData": {
						"data": {
							"type": "UserData",
							"id": "zg62sfw9xctbrnmy1qoj40khi"
						}
					}
				}
			},
			"included": [{
				"type": "UserData",
				"id": "zg62sfw9xctbrnmy1qoj40khi",
				"attributes": {
					"name": "Alex",
					"age": 24,
					"gender": "男"
				}
			}]
		};
	});


	this.post("/api/v1/users/0", (/*schema, request*/) => {
		// window.console.warn(request.requestBody);
		return {
			"data": {
				"type": "success",
				"id": "5b7e454a8fb8076c3c3304l0",
				"attributes": {
					"token": "sdasdasdasd"
				}
			}
		};
	});
}

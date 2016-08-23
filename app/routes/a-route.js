var express = require('express');
var router = express.Router();

router.route('/')
	.get(function(request, response) {
    console.log(GLOBAL.topLevelPath + '/app/views/routes.html');
	response.sendFile(GLOBAL.topLevelPath + '/app/views/routes.html');
});

module.exports = router;
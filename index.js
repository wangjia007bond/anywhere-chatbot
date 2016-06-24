var express = require('express');
var wechat = require('wechat');
var config = require('./config.js');

var app = express();

app.set('port', (process.env.PORT || 80));

app.use('/wechat', wechat('8dkcsRI2g6xQrduiHLOSlXL3gdcqlwpHqfmDmbcm4Qi', function(req, res, next) {
	var message = req.weixin;
	console.log(message);
}));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
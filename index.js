var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1655375294,
  channelSecret: 'eac33fd12e3485a71300704040273b0e',
  channelAccessToken: 'r5dIZ9Xq/sT3HyJWn3tbqmyt1FL0uQ0CbnuMx62ZiiKPUAhftNJk3RUxjnSD8yKFro0jo62oigSD53In1mfzVt+LeQ8j7HzQlDbWBxusFGCYtf9nRgAuUyB10YCwTFOnE2Fwi970DrALi1phay0sSgdB04t89/1O/w1cDnyilFU='
});

var items = Array(
  '鍋燒麵',
  '麥味登',
  '咖哩',
  '拉亞',
  '便利商店',
  '泡麵'
);
bot.on('message', function (event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    var item = items[Math.floor(Math.random() * items.length)];
    if (msg == '吃啥') {
      event.reply(['吃' + item + '吧']).then(function (data) { });
    }
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
});
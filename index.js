var linebot = require('linebot');
var express = require('express');

var bot = lintbot({
  channelId: channelId,
  channelSecret: 'channelSecret',
  channelAccessToken: 'channelAccessToken'
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
      event.reply(['吃', item, '吧']).then(function (data) { });
    }
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
});
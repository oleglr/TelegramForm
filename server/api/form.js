module.exports.sendMsg = (req, res) => {
  const config = require('../config/config.json')
  let http = require('request')
  let reqBody = req.body
  let fields = [
    '<b>Имя</b>: ' + reqBody.Name,
    '<b>Телефон</b>: ' + reqBody.Phone,
    '<b>E-mail</b>: ' + reqBody.Email,
  ]
  let msg = '<b>Новая заявка на сайте</b>' + '\n\n'
  fields.forEach((field) => {
    msg += field + '\n'
  })
  msg = encodeURI(msg)
  http.post(
    {
      url: `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`,
      proxy: `http://${config.proxy.login}:${config.proxy.pass}@${config.proxy.host}:${config.proxy.port}`,
    },
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.status(200).json({ status: 'ok', message: 'Успешно отправлено!' })
      }
      if (response.statusCode === 400) {
        res.status(400).json({ status: 'error', message: 'Произошла ошибка!' })
      }
    },
  )
}

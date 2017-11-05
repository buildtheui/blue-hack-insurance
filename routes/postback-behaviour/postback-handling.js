var exports = module.exports = {};

exports.postbackHandling = function (payload) {
  switch (payload) {
    case 'SEND_MESSAGE_TO_BUSINESS':
      return 'quisiera hacer un comentario';
      break;

    case 'GET_STARTED':
      return 'empecemos';
      break;

    case 'SUBSCRIBE_INSURANCE':
      return 'Como me inscribo?';
      break;

    default:
      break;
  }
}
/* 
* build different kind of responses for messenger  
*/
var exports = module.exports = {};

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/text-message
 * 
 * @param {String} text 
 * @returns 
 */
exports.textResponse = function (text) {
  return {
    text: text
  }
};

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/audio-attachment
 * 
 * @param {String} audioUrl 
 * @returns 
 */
exports.audioResponse = function (audioUrl) {
  return {
    attachment: {
      type: "audio",
      payload: {
        url: audioUrl
      }
    }
  }
}

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/file-attachment
 * 
 * @param {String} fileUrl 
 * @returns 
 */
exports.fileResponse = function (fileUrl) {
  return {
    attachment: {
      type: "file",
      payload: {
        url: fileUrl
      }
    }
  }
}

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment
 * 
 * @param {String} imageUrl 
 * @returns 
 */
exports.imageResponse = function (imageUrl) {
  return {
    attachment: {
      type: "image",
      payload: {
        url: imageUrl
      }
    }
  }
}

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/video-attachment
 * 
 * @param {String} videoUrl 
 * @returns 
 */
exports.videoResponse = function (videoUrl) {
  return {
    attachment: {
      type: "video",
      payload: {
        url: videoUrl
      }
    }
  }
}

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template
 * 
 * @param {String} text 
 * @param {Array} buttons 
 * @returns 
 */
exports.responseTempleteButton = function (text, buttons) {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text: text,
        buttons: buttons
      }
    }
  }
}

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template
 * 
 * @param {Object} generic 
 * @returns 
 */
exports.responseTempleteGeneric = function (generic) {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: generic.title,
            image_url: generic.imageUrl,
            subtitle: generic.subtitle,
            default_action: {
              type: "web_url",
              url: generic.defaultActionUrl,
              messenger_extensions: true,
              webview_height_ratio: "tall",
              fallback_url: generic.fallbackUrl
            },
            "buttons": generic.buttons
          }
        ]
      }
    }
  }
}

/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/quick-replies
 * 
 * @param {String} text 
 * @param {Object} quickReplies 
 * @returns 
 */
exports.responseQuickReply = function (text, quickReplies) {
  return {
    "text": text,
    "quick_replies": quickReplies
  }
}

/**
 * https://developers.facebook.com/docs/messenger-platform/send-messages/buttons/share
 * 
 * @param {Object} shareContent
 * @returns 
 */
exports.responseShareContent = function (shareContent) {
  return {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": shareContent.title,
            "subtitle": shareContent.subtitle,
            "image_url": shareContent.imageUrl,
            "default_action": {
              "type": "web_url",
              "url": shareContent.defaultActionUrl,
              "messenger_extensions": true,
              "fallback_url": shareContent.fallbackUrl
            },
            "buttons": shareContent.buttons
          }
        ]
      }
    }
  }
}


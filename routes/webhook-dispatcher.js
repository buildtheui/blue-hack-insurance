const businessFeedback = require('./actions/business-feedback');

exports.actionDispatcher = function (req, cd) {
  //console.log(req.body.result);
  switch (req.body.result.action) {

    case "support.askingFeedback":
      businessFeedback.sendFeedbackLink(req.body.sessionId, (response) => {
        cd({
          speech: JSON.stringify(response),
          displayText: JSON.stringify(response),
          source: 'support.points'
        });
      }); 
      break;
    
    case "support.brochure":
      businessFeedback.showBrochure(req.body.sessionId, (response) => {
        businessFeedback.showBrochureText(req.body.sessionId);
        cd({
          speech: JSON.stringify(response),
          displayText: JSON.stringify(response),
          source: 'support.brochure'
        });      
      });

      break;

    default:
      cd({
        speech: "Aún estoy aprendiendo, ¿podrias repetirme de nuevo por favor?",
        displayText: "Aún estoy aprendiendo, ¿podrias repetirme de nuevo por favor?",
        source: 'fallback'
      });
  }
}
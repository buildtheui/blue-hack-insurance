const businessResponse = require('./actions/business');

exports.actionDispatcher = function (entityName, cd) {
  //console.log(req.body.result);
  switch (entityName) {

    case "registry":
      businessResponse.showRegisterFile((response) => {
        cd({
          speech: JSON.stringify(response),
          displayText: JSON.stringify(response)
        });
      }); 
      break;
    
    case "conditions":
      businessResponse.showRegisterFile((response) => {
        cd({
          speech: JSON.stringify(response),
          displayText: JSON.stringify(response)
        });
      });
      break;
    
    case "support.brochure":
      businessResponse.showBrochure(req.body.sessionId, (response) => {
        businessResponse.showBrochureText(req.body.sessionId);
        cd({
          speech: JSON.stringify(response),
          displayText: JSON.stringify(response)
        });      
      });

      break;

    default:
      cd(null);
  }
}
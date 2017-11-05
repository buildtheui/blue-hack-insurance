var PRODUCTION = process.env.PRODUCTION || null;

const menu = [{
  content_type: "text",
  title: "Soy maestro",
  payload: "IM_MAESTRO",
  image_url: "http://www.freeiconspng.com/uploads/teachers-icon-11.png"
},
{
  content_type: "text",
  title: "Plan maestro integral",
  payload: "VIEW_PLAN_MAESTRO",
  image_url: "https://easycardfiles.blob.core.windows.net/files/trophy.png"
},
{
  content_type: "text",
  title: "Contacto",
  payload: "SEND_MESSAGE_TO_BUSINESS",
  image_url: "https://easycardfiles.blob.core.windows.net/files/envelope.png"
}];

module.exports = {
  termsAndConditions: 'https://easycardfiles.blob.core.windows.net/files/seguros-bolivar-files.pdf',
  registerDocument: 'https://easycardfiles.blob.core.windows.net/files/seguros-bolivar-files.pdf',
  menu: menu
}
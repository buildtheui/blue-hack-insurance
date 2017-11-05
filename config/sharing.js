var PRODUCTION = process.env.PRODUCTION || null;

const menu = [{
  content_type: "text",
  title: "Como me inscribo",
  payload: "VIEW_PROMOS",
  image_url: "https://easycardfiles.blob.core.windows.net/files/discount.png"
},
{
  content_type: "text",
  title: "Seguros",
  payload: "VIEW_MY_POINTS",
  image_url: "https://easycardfiles.blob.core.windows.net/files/trophy.png"
},
/* {
  content_type: "text",
  title: "Ver comercios",
  payload: "VIEW_BUSINESSES",
  image_url: "https://easycardfiles.blob.core.windows.net/files/store.png"
}, */
{
  content_type: "text",
  title: "Contacto",
  payload: "SEND_MESSAGE_TO_BUSINESS",
  image_url: "https://easycardfiles.blob.core.windows.net/files/envelope.png"
}];

module.exports = {
  brochure: 'https://easycardfiles.blob.core.windows.net/files/EasyCard-brochure.pdf',
  menu: menu
}
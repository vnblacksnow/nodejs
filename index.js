const cloudscraper = require('cloudscraper');
const  options = {
  method: 'GET',
  url:'https://luatminhkhue.vn/dieu-kien-kinh-doanh-mua-ban-phe-lieu.aspx',
};

cloudscraper(options).then(function(response) {
document.appendChild(response)
})
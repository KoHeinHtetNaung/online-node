// create module and use other place another call 'anonymous function'
module.exports = (temp, repVal) => {
  ///{%productImg%}/g = this uses a regular expression to find the placeholder
  let output = temp.replace(/{%productImg%}/g, repVal.image);
  output = output.replace(/ {%productName%}/g, repVal.title);
  output = output.replace(/ {%price%}/g, repVal.price);
  output = output.replace(/{%ID%}/g, repVal.id);
  output = output.replace(/{%DESCRIPTION%}/g, repVal.description);

  return output; // use agian this function cuz doing return;
};

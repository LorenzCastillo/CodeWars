function domainName(url){
  let x = url.replace("http://", "").replace("https://", "").replace("www.", "");
  let y = x.indexOf(".");
  
  return x.slice(0, y);
}

// -------------------------------

console.log(domainName("https://www.asacz3m32-41wgtuehdcn4gm8p6.org"));
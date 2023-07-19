# [Extract the domain name from a URL](https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript) (JavaScript)

---

### 5 Kyu

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

**Example(s)**

```
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
```

---

## Solution

```
function domainName(url){
  let x = url.replace("http://", "").replace("https://", "").replace("www.", "");
  let y = x.indexOf(".");
  
  return x.slice(0, y);
}

// -------------------------------

console.log(domainName("https://www.asacz3m32-41wgtuehdcn4gm8p6.org"));
```
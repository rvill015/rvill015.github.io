function sendEmail() {
    const subjectElt = document.getElementById("subject");
    const bodyElt = document.getElementById("body");
    const subjectText = encodeURIComponent(subjectElt.value);
    const bodyText = encodeURIComponent(bodyElt.value);
    const toAddress = "rvill015@ucr.edu";
    const mailtoLink = `mailto:${toAddress}?subject=${subjectText}&body=${bodyText}`;
  
    const linkElt = document.createElement("a");
    linkElt.setAttribute("href", mailtoLink);
  
    // console.log('mailtoLink', mailtoLink);
    document.body.appendChild(linkElt);
    linkElt.click();
  }
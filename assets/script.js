const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, "0");

const id = document.querySelector("#id");
id.value = `HT-EXT-TEST-${year}-${month}-0000`;

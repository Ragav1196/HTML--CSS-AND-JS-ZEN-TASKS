async function GetData() {
  const dataFetch = await fetch("https://meowfacts.herokuapp.com/");
  const data = await dataFetch.json();

  const body = document.querySelector("body");
  body.innerHTML = `
<h1>${data.data}</h1>
`;
}

GetData();

const content = document.querySelector(".contentCntr");

async function GetDetails() {
  content.innerHTML = "";
  let userInputPincode = document.querySelector("#pincode").value;

  const dataFetched = await fetch(
    `https://api.postalpincode.in/pincode/${userInputPincode}`
  );

  const data = await dataFetched.json();
  const postOffice = data[0].PostOffice;

  postOffice.forEach((data) => {
    console.log(data.PostOffice);
    content.innerHTML += `
    <article>
          <h3>Name:</h3>
          <p>${data.Name}</p>
          <h3>Post Office Branch:</h3>
          <p>${data.BranchType}</p>
          <h3>District:</h3>
          <p>${data.District}</p>
          <h3>Division:</h3>
          <p>${data.Division}</p>
          <h3>Block:</h3>
          <p>${data.Block}</p>
          <h3>State:</h3>
          <p>${data.State}</p>
          <h3>Country:</h3>
          <p>${data.Country}</p>
          <h3>Pincode:</h3>
          <p>${data.Pincode}</p>
        </article>
    `;
  });

  document.querySelector("#pincode").value = "";
}

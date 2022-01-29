const error = document.querySelector(".errors");

const tamilContnt = document.querySelector(".tamilCntr");

const englishCntnt = document.querySelector(".englishCntr");

// ENGLISH
async function ToGetInEnglish() {
  var verify = true;
  error.innerHTML = "";
  englishCntnt.innerHTML = "";
  tamilContnt.innerHTML = "";

  const userInputNum = document.querySelector("#thirukkual-number").value;
  if (userInputNum === "" || userInputNum == 0) {
    error.innerHTML = `
    <p>INPUT FIELD IS MANDATORY TO BE FILLED</p>`;
    verify = false;
  }
  if (userInputNum > 1330) {
    error.innerHTML = `
    <p>INPUT FIELD SHOULDN'T EXCEED 1330</p>`;
    verify = false;
  }
  if (userInputNum < 0) {
    error.innerHTML = `
    <p>INPUT FIELD SHOULN'T BE LESS THAN 1</p>`;
    verify = false;
  }

  if (verify) {
    error.innerHTML = "";
    const dataFetch = await fetch(
      `https://api-thirukkural.vercel.app/api?num=${userInputNum}`
    );
    const data = await dataFetch.json();

    // DELETING TAMIL CONTENT:
    tamilContnt.innerHTML = "";

    // ADDING ENGLISH CONTENT:
    englishCntnt.innerHTML = `
  <article>
    <h3>SECTION</h3>
    <p class="engSectionName englishCntnt">${data.sect_eng}</p>
  </article>

  <article>
    <h3>LINE</h3>
    <p class="engLine englishCntnt">${data.eng}</p>
  </article>

  <article>
    <h3>EXPLANATION</h3>
    <p class="engMeaning englishCntnt">${data.eng_exp}</p>
  </article>`;
  }
}

// TAMIL
async function ToGetInTamil() {
  var verify = true;
  error.innerHTML = "";
  englishCntnt.innerHTML = "";
  tamilContnt.innerHTML = "";

  const userInputNum = document.querySelector("#thirukkual-number").value;
  if (userInputNum === "" || userInputNum == 0) {
    error.innerHTML = `
    <p>INPUT FIELD IS MANDATORY TO BE FILLED</p>`;
    verify = false;
  }
  if (userInputNum > 1330) {
    error.innerHTML = `
    <p>INPUT FIELD SHOULDN'T EXCEED 1330</p>`;
    verify = false;
  }
  if (userInputNum < 0) {
    error.innerHTML = `
    <p>INPUT FIELD SHOULN'T BE LESS THAN 1</p>`;
    verify = false;
  }

  if (verify) {
    const dataFetch = await fetch(
      `https://api-thirukkural.vercel.app/api?num=${userInputNum}`
    );
    const data = await dataFetch.json();

    // DELETING ENGLISH CONTENT:
    englishCntnt.innerHTML = "";

    // ADDING TAMIL CONTENT:
    tamilContnt.innerHTML = `
      <article>
        <h3>அதிகாரம்</h3>
        <p class="sectionName tamilCntnt">${data.sect_tam}</p>
      </article>

      <article>
        <h3>குறள்</h3>
        <p class="firstLine tamilCntnt">${data.line1}</p>
        <p class="secondLine tamilCntnt">${data.line2}</p>
      </article>

      <article>
        <h3>விளக்கம்</h3>
        <p class="meaning tamilCntnt">${data.tam_exp}</p>
      </article>
    </section>`;
  }
}

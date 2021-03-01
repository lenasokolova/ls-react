/*import React, { useState } from "react";
import "./formularzKontaktowy.css";

const FormularzKontaktowy = () => {

  const [kontaktImie, setkontaktImie] = useState("Janina");
  const [kontaktNazwisko, setkontaktNazwisko] = useState("Kowalska");
  const [kontaktAdresEmail, setkontaktAdresEmail] = useState("jankowalski@gmail.com");
  const [kontaktTelefon, setkontaktTelefon] = useState("+48 001 002 023");
  const [kontaktPlec, setkontaktPlec] = useState("Kobieta");
  const [kontaktZgodyMarketingowe, setkontaktZgodyMarketingowe] = useState("");
  const [kontaktZgodaRodo, setkontaktZgodaRodo] = useState("nie");

  const  handlerOnChangeKontakt = event => {
    event.preventDefault();
    const wartosc = event.currentTarget.value;
    const nazwa = event.currentTarget.nazwa;
  
    switch (nazwa) {
      case "kontaktImie":
        setkontaktImie(wartosc);
        break;
      
      case "kontaktNazwisko":
        setkontaktNazwisko(wartosc);
        break;
      
      case "kontaktAdresEmail":
        setkontaktAdresEmail(wartosc);
        break;
      
      case "kontaktTelefon":
        setkontaktTelefon(wartosc);
        break;

      case "kontaktPlec":
        setkontaktPlec(wartosc);
        break;

      case "kontaktZgodyMarketingowe":
        setkontaktZgodyMarketingowe(wartosc);
        break;

      case "kontaktZgodaRodo":
        setkontaktZgodaRodo(wartosc);
        break;
    }



    console.log("handlerOnChangeKontakt");
    console.log(wartosc);
    console.log(nazwa);
  } 

  return <form className="formularzKontaktowy">
  <h1>Formularz Kontaktowy</h1>
  <fieldset>
  
    <legend>Dane Kontaktowe</legend>
    <label>Imie:</label>
    <input type="text" name="kontaktImie" required value={kontaktImie} OnChange={handlerOnChangeKontakt}/>

    <label>Nazwisko:</label>
    <input type="text" name="kontaktNazwisko" required value={kontaktNazwisko} OnChange={handlerOnChangeKontakt}/>

    <label>adres emial:</label>
    <input type="text" name="kontaktAdresEmail" required value={kontaktAdresEmail} OnChange={handlerOnChangeKontakt}/>

    <label>telefon:</label>
    <input type="text" name="kontaktTelefon" required value={kontaktTelefon} OnChange={handlerOnChangeKontakt}/>
     
    <label>Plec:</label>
      <label>Kobieta:</label>
        <input type="radio" value="Kobieta" name="kontaktPlec" checked OnChange={handlerOnChangeKontakt}/>
      <label>Mezczyzna:</label>
        <input type="radio" value="Mezczyzna" name="kontaktPlec" OnChange={handlerOnChangeKontakt}/>

  </fieldset>
  <fieldset>
    <legend>Zgody marketingowe</legend>
    <label>zgoda na marketing telefoniczny</label>
    <input type="checkbox" name="kontaktZgodyMarketingowe" value="zgodaMarketingTelefoniczny" 
    OnChange={handlerOnChangeKontakt}/>
    <label>zgoda na marketing email</label>
    <input 
      type="checkbox"
      name="kontaktZgodyMarketingowe" 
      value="zgodaMarketingEmail"
      OnChange={handlerOnChangeKontakt}
      />
  </fieldset>
  <fieldset>
    <legend>Zgoda na przetwarzanie danych RODO </legend>
    <label>NIE:</label>  
    <input type="radio" value="nie" name="kontaktZgodaRodo" OnChange={handlerOnChangeKontakt} />
    <label>TAK:</label>  
    <input type="radio" value="tak" name="kontaktZgodaRodo" OnChange={handlerOnChangeKontakt} />
  </fieldset>
  </form>
};

export default FormularzKontaktowy;
*/

import React, { useState } from "react";
import "./formularzKontaktowy.css";

const FormularzKontaktowy = () => {
  const [kontaktImie, setKontaktImie] = useState("Janina");
  const [kontaktNazwisko, setKontaktNazwisko] = useState("Kowalsky");
  const [kontaktAdresEmai, setKontaktAdresEmail] = useState(
    "jan.kowalsky@kowalsky.pl"
  );
  const [kontaktTelefon, setKontaktTelefon] = useState("+48.123-456-789");
  const [kontaktPlec, setKontaktPlec] = useState("Kobieta");
  const [kontaktZgodyMarketingowe, setKontaktZgodyMarketingowe] = useState("");
  const [kontaktZgodaRODO, setKontaktZgodaRODO] = useState("nie");

  const handlerOnSubmitKontakt = event => {
    event.preventDefault();
    
    console.log(kontaktZgodyMarketingowe);
  }

  const handlerOnChangeKontakt = event => {
    event.preventDefault();

    const wartosc = event.currentTarget.value;
    const nazwa = event.currentTarget.name;

    switch (nazwa) {
      case "kontaktImie":
        setKontaktImie(wartosc);
        break;

      case "kontaktNazwisko":
        setKontaktNazwisko(wartosc);
        break;

      case "kontaktAdresEmai":
        setKontaktAdresEmail(wartosc);
        break;

      case "kontaktTelefon":
        setKontaktTelefon(wartosc);
        break;

      case "kontaktPlec":
        setKontaktPlec(wartosc);
        break;

      case "kontaktZgodyMarketingowe":
        const a = kontaktZgodyMarketingowe + ', ' + wartosc;
        console.log(a);
        setKontaktZgodyMarketingowe(kontaktZgodyMarketingowe);
        break;

      case "kontaktZgodaRODO":
        setKontaktZgodaRODO(wartosc);
        break;
    }
  };

  return (
    <form className="formularzKontaktowy" onSubmit ={handlerOnSubmitKontakt}>
      <h1>Formularz Kontaktowy</h1>
      <fieldset>
        <legend>Dane kontaktowe</legend>
        <label>Imie:</label>
        <input
          type="text"
          name="kontaktImie"
          required
          value={kontaktImie}
          onChange={handlerOnChangeKontakt}
        />
        <label>Nazwisko:</label>
        <input
          type="text"
          name="kontaktNazwisko"
          required
          value={kontaktNazwisko}
          onChange={handlerOnChangeKontakt}
        />
        <label>adres email:</label>
        <input
          type="text"
          name="kontaktAdresEmai"
          required
          value={kontaktAdresEmai}
          onChange={handlerOnChangeKontakt}
        />
        <label>telefon:</label>
        <input
          type="text"
          name="kontaktTelefon"
          required
          value={kontaktTelefon}
          onChange={handlerOnChangeKontakt}
        />
        <label>Plec:</label>
        <label>Kobieta:</label>
        <input
          type="radio"
          value="Kobieta"
          name="kontaktPlec"
          checked = {kontaktPlec.includes("Kobieta")}
          onChange={handlerOnChangeKontakt}
        />
        <label>Mezczyzna:</label>
        <input
          type="radio"
          value="Mezyczyzna"
          name="kontaktPlec"
          checked = {kontaktPlec.includes("Kobieta")}
          onChange={handlerOnChangeKontakt}
        />
      </fieldset>
      <fieldset>
        <legend>Zgody maketingowe</legend>
        <label>zgoda na marketing telefoniczny</label>
        <input
          type="checkbox"
          name="kontaktZgodyMarketingowe"
          value="zgodaMarketingTelefoniczny"
          onChange={handlerOnChangeKontakt}
        />
        <label>zgoda na marketeting email</label>
        <input
          type="checkbox"
          name="kontaktZgodyMarketingowe"
          value="zgodaMarketingEmail"
          onChange={handlerOnChangeKontakt}
        />
      </fieldset>
      <fieldset>
        <legend>Zgoda na przetwarzanie danych RODO:</legend>
        <label>NIE:</label>
        <input
          type="radio"
          value="nie"
          name="kontaktZgodaRODO"
          checked checked = {kontaktZgodaRODO.includes("Kobieta")}
          onChange={handlerOnChangeKontakt}
        />
        <label>TAK:</label>
        <input
          type="radio"
          value="tak"
          name="kontaktZgodaRODO"
          onChange={handlerOnChangeKontakt}
        />
      </fieldset>
      <button type="submit">Wyslij formularz kontaktowy</button>
    </form>
  );
};

export default FormularzKontaktowy;

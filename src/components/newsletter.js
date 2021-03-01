import React, { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {

  const[adresEmail, setAdresEmail] = useState('');

  const handlerOnChangeEmail = event => {
    event.preventDefault();
    const adresEmail = event.currentTarget.value;
    const poprawneAdresy = ["test@test.pl", "adres@adres.pl"];

    console.log(adresEmail);

    if(poprawneAdresy.indexOf(adresEmail) > -1 && adresEmail.indexOf("@" > -1)) {
      setAdresEmail(adresEmail);
      console.log("adres email poprawny");
    } else{
      console.error("alert email niepoprawny")
    }
  };

  const handlerOnSubmit = event => {
    event.preventDefault();
    alert('Wysyłam formularz');
    console.log(adresEmail);
  };

  return (
    <form className="Newsletter" onSubmit={handlerOnSubmit}>
      <fieldset >
        <legend>Zapisz się na newslettera</legend>
        <label for="adresEmail">Podaj adres email:</label>
        <label for="inputSubmit">Wyślij formularz</label>
        <input 
          type="email" 
          id="adresEmail" 
          name="adresEmail" 
          placeholder="Podaj adres email" 
          required
          maxlength="30"
          onChange={handlerOnChangeEmail}
          />

        <button type="submit">Zapisz się na newsletter</button>
        <button type="reset">Wyczysz formularz newslettera</button>
        <h1>Aktualna wartość zmiennej adresEmail</h1>
        <h1>{adresEmail}</h1>
      </fieldset>
  </form>
  );
};

export default Newsletter;
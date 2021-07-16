import React from "react";
import "./PasswordGenerate.css";

export const PasswordGenerate = (props) => {
  return (
    <div style={props.password.passwords.length !== 0 ?{gridTemplateColumns: `1fr 1fr`} : {gridTemplateColumns: `1fr`}} className="password__wrapper">
      <div className="password-control-block__wrapper">
        <span>Колличествово паролей</span>
        <input
          min="0"
          max="10"
          value={props.password.amount}
          type="number"
          onChange={(e) => props.setAmount(e.target.value)}
        />{" "}
        <span>Длинна паролей</span>
        <input
          min="6"
          max="25"
          value={props.password.lengthPassword}
          type="number"
          onChange={(e) => props.setLengthPassword(e.target.value)}
        />
        <span>Использовать цифры</span>
        <input
          checked={props.password.useNumbers}
          type="checkbox"
          onChange={() => props.setUseNumbers()}
        />
        <span>Использовать заглавные буквы</span>
        <input
          checked={props.password.useUppercase}
          type="checkbox"
          onChange={() => props.setUseUppercase()}
        />
        <span>Использовать спец.символы</span>
        <input
          checked={props.password.useSymbols}
          type="checkbox"
          onChange={() => props.setUseSymbols()}
        />
      </div>
      <div className="passwords-block__wrapper">
      {props.password.passwords.length != 0
        ? props.password.passwords.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))
        : null}
        </div>
        <button onClick={() => props.getPasswords()}>getPasswords</button>
        <span className="password-attention">*пока вы не перезагрузите страницу, пароли не будут удалены</span>
    </div>
  );
};

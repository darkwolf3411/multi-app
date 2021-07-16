import { PasswordGenerate } from './PasswordGenerate';
import { connect } from "react-redux";
import {
  getPasswords,
  setAmount,
  setUseNumbers,
  setLengthPassword,
  setUseUppercase,
  setUseSymbols,
} from "./../../redux/reducers/passworGenerateReducer";
const mapStateToProps = (state) => {
  return {
    password: state.password,
  };
};
const mapDispatchToProps = {
  getPasswords,
  setAmount,
  setUseNumbers,
  setLengthPassword,
  setUseUppercase,
  setUseSymbols,
};

export const PasswordGenerateApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordGenerate);


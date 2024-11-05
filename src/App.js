import { useState } from "react";
import * as S from "./style";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };
  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const dividir = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };
  return (
    <S.Main>
      <S.GlobalStyle />
      <S.H1>Calculadora</S.H1>
      <S.Input
        type="number"
        placeholder="Insira um número:"
        onChange={capturandoPrimeiroValor}
      />
      <S.Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />
      <section>
        <S.btn onClick={soma}>+</S.btn>
        <S.btn onClick={subtracao}>-</S.btn>
        <S.btn onClick={multiplicar}>×</S.btn>
        <S.btn onClick={dividir}>÷</S.btn>
      </section>
      <S.H3>{resultado}</S.H3>
    </S.Main>
  );
}

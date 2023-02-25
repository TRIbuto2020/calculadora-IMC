import { useState, useEffect } from "react"

import styles from './Formulario.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const minAlt = 0.5
    const maxAlt = 3
    const minPes = 2
    const maxPes = 350

    const calculaClass = (imc) => {
        if (imc <= 16.9) {
            return(<p>Você está <span className={styles.azulClaro}>muito abaixo do peso</span>.</p>);
        } else if (imc <= 18.4) {
            return(<p>Você está <span className={styles.azul}>abaixo do peso</span>.</p>);
        } else if (imc <= 24.9) {
            return(<p>Você está com o <span className={styles.verde}>peso normal</span>.</p>);
        } else if (imc <= 29.9) {
            return(<p>Você está <span className={styles.amarelo}>acima do peso</span>.</p>);
        } else if (imc <= 34.9) {
            return(<p>Você está com <span className={styles.vermelhoClaro}>Obesidade grau I</span>.</p>);
        } else if (imc <= 40) {
            return(<p>Você está com <span className={styles.vermelho}>Obesidade grau II</span>.</p>);
        } else {
            return(<p>Você está com <span className={styles.burgandy}>Obesidade grau III</span>.</p>);
        };
    };

    function handleChangeAlt(event) {
        if (event.target.value > maxAlt) {
            event.target.value = maxAlt;
        } else if (event.target.value < minAlt) {
            event.target.value = minAlt;
        }
        setAltura(parseFloat(event.target.value) || 0)
    };

    function handleChangePes(event) {
        if (event.target.value > maxPes) {
            event.target.value = maxPes;
        } else if (event.target.value < minPes) {
            event.target.value = minPes;
        }
        setPeso(parseFloat(event.target.value) || 0)
    };

    const renderizaResultado = () => {
        const imc = peso / (altura**2);

        if (peso == 0 || altura == 0) {
            return(
                <>
                    <p>Olá, vamos descobrir seu IMC!</p>
                    <p>Por favor, preencha seus dados.</p>
                </>
            )
        } else {
            return (
                <>
                    <p><b>Seu IMC: </b>{imc}</p>
                    {calculaClass(imc)}
                </>
            )
        }
    } 

    return (
        <form className={styles.formulario}>
            <h1 className={styles.formTitulo}>Calcule seu <span className={styles.tituloImc}>IMC</span>!</h1>
            <label className={styles.itemLabel} htmlFor="altura">Altura em Metros</label>
            <input className={styles.itemInput} name="altura" type="number" placeholder="Altura" onChange={handleChangeAlt} min={minAlt} max={maxAlt} step="0.1" />
            <label className={styles.itemLabel} htmlFor="peso">Massa em Kilogramas</label>
            <input className={styles.itemInput} name="peso" type="number" placeholder="Massa" onChange={handleChangePes} min={minPes} max={maxPes} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario
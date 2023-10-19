import React, {useState} from "react";

//include images into your bundle


//create your first component
const Home = () => 
{
	const [totalPortafolio, setTotalPortafolio] = useState('');
	const [porcentajeArriesgar, setPorcentajeArriesgar] = useState('');
	const [capitalTotalRiesgo, setCapitalTotalRiesgo] = useState('');
	const [precioEntrada, setPrecioEntrada] = useState('');
	const [precioSalida, setPrecioSalida] = useState('');
	const [montoArriesgarUnidad, setMontoArriesgarUnidad] = useState('');
	const [showResultado, setShowResultado] = useState(false);
	const [resultadoOperacion, setResultadoOperacion] = useState(null);
  
	const calcularCapitalRiesgo = () => {
	  const capital = (totalPortafolio * (porcentajeArriesgar / 100)).toFixed(2);
	  setCapitalTotalRiesgo(capital);
	}
  
	const calcularMontoRiesgo = () => {
	  const monto = (precioEntrada - precioSalida).toFixed(2);
	  setMontoArriesgarUnidad(monto);
	}

	const handleCalcular = (e) => {
		e.preventDefault();
		calcularCapitalRiesgo();
		calcularMontoRiesgo();
	
		// Realizar la operación
		const resultado = (capitalTotalRiesgo / montoArriesgarUnidad).toFixed(2);
		setResultadoOperacion(resultado);
	
		// Mostrar el resultado
		setShowResultado(true);
	  }
  
	return (
	  <div className="container border border-warning-subtle border-3 shadow mt-5">
		<div className="d-flex justify-content-center mt-2 mb-5 bg-primary text-center">
		  <h2>
			Position Size Calculator
		  </h2>
		</div>
		<div className="row" data-controller="calculator">
		  <div className="col-md-6">
			<div className="container border shadow w-50 border-warning">
			  <h4 className='text-center'>Position Size</h4>
			  <h6>Total unidades a comprar:</h6>
			  <p data-calculator-target="position"></p>
			  {/* Lugar donde puede ir el contenido de MyComponent */}
			  {resultadoOperacion !== null && (
              <div>
                <p>Resultado de la operación:</p>
                <p>{resultadoOperacion}</p>
              </div>
            )}
			</div>
		  </div>
		  <div className="col-md-6">
			<form>
			  <div>
			  <label htmlFor="totalPortafolio">Total Portafolio:</label>
				<input
				  type="text"
				  name="totalPortafolio"
				  value={totalPortafolio}
				  onChange={(e) => setTotalPortafolio(e.target.value)}
				  data-calculator-target="total"
				/>
			  </div>
			  <label htmlFor="porcentajeArriesgar">Porcentaje a Arriesgar:</label>
			  <input
				type="text"
				name="porcentajeArriesgar"
				value={porcentajeArriesgar}
				onChange={(e) => setPorcentajeArriesgar(e.target.value)}
				data-calculator-target="porcentaje"
				onBlur={calcularCapitalRiesgo}
			  />
			  <div>
			  <label htmlFor="capitalTotalRiesgo">Capital Total de Riesgo:</label>
			  <input
				type="text"
				name="capitalTotalRiesgo"
				value={capitalTotalRiesgo}
				disabled
				data-calculator-target="capital"
			  />
			  </div>
			  <div>
			  <label htmlFor="precioEntrada">Precio de Entrada:</label>
			  <input
				type="text"
				name="precioEntrada"
				value={precioEntrada}
				onChange={(e) => setPrecioEntrada(e.target.value)}
				data-calculator-target="entrada"
			  />
			  </div>
			  <div>
			  <label htmlFor="precioSalida">Precio de Salida:</label>
			  <input
				type="text"
				name="precioSalida"
				value={precioSalida}
				onChange={(e) => setPrecioSalida(e.target.value)}
				data-calculator-target="salida"
				onBlur={calcularMontoRiesgo}
			  />
			  </div>
			  <div>
			  <label htmlFor="montoArriesgarUnidad">Monto a Arriesgar por Unidad:</label>
			  <input
				type="text"
				name="montoArriesgarUnidad"
				value={montoArriesgarUnidad}
				disabled
				data-calculator-target="arriesgar"
			  />
			  </div>
			  <button className="btn btn-warning mb-5" onClick={handleCalcular}>Calcular</button>
			</form>
		  </div>
		</div>
	  </div>
	);
  }

export default Home;

function calculateValue (meter, convert_to){

	var m =  parseFloat(meter);
	var new_val = 0;
	// CALCULAR VALORES

	if(convert_to == "dam"){
		new_val = m / Math.pow(10, 1);		
	}

	//Multiplos
	if(convert_to == "hm"){
		new_val = m / Math.pow(10, 2);
	}
	if(convert_to == "km"){
		new_val = m / Math.pow(10, 3);
	}
	if(convert_to == "em"){
		new_val = m / Math.pow(10, 6);
	}
	if(convert_to == "gm"){
		new_val = m / Math.pow(10, 9);
	}
	if(convert_to == "m"){
		new_val = m / Math.pow(10, 0);
	}

	//Submultipo
	if(convert_to == "dm"){
		new_val = m * Math.pow(10, 1);
	}
	if(convert_to == "cm"){
		new_val = m * Math.pow(10, 2);
	}
	if(convert_to == "mm"){
		new_val = m * Math.pow(10, 3);
	}
	if(convert_to == "µm"){
		new_val = m * Math.pow(10, 6);
	}
	if(convert_to == "nm"){
		new_val = m * Math.pow(10, 9);
	}


	// PRESENTAR VALORES

	//valor convertido
	$("#valor_convertido").val(new_val);


}


$(function(){
	$("#calcular").click(function(){
		var m          = 0;
		//calculo de multiplos y submultiplos
		var valor      = parseFloat($("#valor").val());
		var unidad     = $("#unidad").val();
		var convertir  = $("#convertir").val();

		if (unidad == "gm"){
			m =  valor * Math.pow(10, 9);
		}
		if (unidad == "em"){
			m =  valor * Math.pow(10, 6);
		}
		if (unidad == "km"){
			m =  valor * Math.pow(10, 3);
		}
		if (unidad == "hm"){
			m =  valor * Math.pow(10, 2);
		}
		if (unidad == "dam"){
			m =  valor * Math.pow(10, 1);
		}
		if (unidad == "m"){
			m =  valor ;
		}
		if (unidad == "dm"){
			m =  valor / Math.pow(10, 1);
		}
		if (unidad == "cm"){
			console.log(unidad);
			m =  valor / Math.pow(10, 2);
		}
		if (unidad == "mm"){
			m =  valor / Math.pow(10, 3);
		}
		if (unidad == "µm"){
			m =  valor / Math.pow(10, 6);
		}
		if (unidad == "nm"){
			m =  valor / Math.pow(10, 9);
		}
		console.log(m+" "+convertir);
		calculateValue (m, convertir);

	})
});

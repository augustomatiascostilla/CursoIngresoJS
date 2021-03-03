/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

*/
function mostrar()
{
	var mascota;
	var pelaje;
	var edad;
	var nombre;
	var raza;
	var peso;
	var estadoClinico;
	var temperatura;
	var respuesta;
	var banderaPrimerPerro;
	var perroMasPesado;
	var pesoPerroPesado;
	var contadorEnfermos;
	var contadorMascotas;
	var ultimoNombreOtraCosa;
	var banderaPrimerOC;
	var nombreMenorTemperaturaOC;
	var menorTemperaturaOC;
	var contadorGatos;
	var acumuladorTempGatos;
	var contadorPerros;
	var acumuladorTempPerros;
	var contadorOC;
	var acumuladorOc;
	var acumuladorMascotas;
	var acumuladorEnfermos;
	var acumuladorInternados;
	var acumuladorAdopcion;
	var acumuladorPesoMascotas;
	var banderaPrimerGatoSP;
	var gatoSPLiviano;
	var pesoGatoSPLiviano;
	var tipoMenorSP;

	banderaPrimerOC=0;
	contadorEnfermos=0;
	contadorMascotas=0;
	banderaPrimerPerro=0;
	acumuladorTempGatos=0;
	contadorPerros=0;
	acumuladorTempPerros=0;
	contadorOC=0;
	acumuladorOc=0;
	acumuladorMascotas=0;
	acumuladorEnfermos=0;
	acumuladorInternados=0;
	acumuladorAdopcion=0;
	acumuladorPesoMascotas=0;
	banderaPrimerGatoSP=0;
	respuesta="si";

	while(respuesta=="si")
	{
		//saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
		mascota=prompt("tipo de mascota (perro, gato u otra cosa)");
		while(mascota!="perro" && mascota!="gato" && mascota!="otra cosa")
		{
			mascota=prompt("Error! solo validos (perro, gato u otra cosa)");
		}
		//el tipo de pelaje (corto, largo , sin pelo),
		pelaje=prompt("tipo de pelaje (corto, largo , sin pelo)");
		while(pelaje!="corto" && pelaje!="largo" && pelaje!="sin pelo")
		{
			pelaje=prompt("Error! solo validos (corto, largo , sin pelo)");
		}
		//la edad de la mascota (edad validada);
		edad=prompt("edad de la mascota");
		edad=parent(edad);
		while(edad<0 || edad>15 || isNaN(edad)==true)
		{
			edad=prompt("error! solo valores entre 0 y 15");
			edad=parent(edad);
		}
		//el nombre (una palabra) 
		nombre=prompt("nombre de la mascota");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("error! solo nombres validos (no numeros)");
		}
		//la raza  (una palabra)
		raza=prompt("raza de la mascota");
		while(isNaN(raza)==false)
		{
			raza=prompt("error! solo razas validas (no numeros)");
		}
		//el peso (peso validado) 
		peso=prompt("peso de la mascota");
		peso=parent(peso);
		while(peso<1 || peso>45 || isNaN(peso)==true)
		{
			peso=prompt("error! solo valores entre 1 y 45");
			peso=parent(peso);
		}
		//el estadoClinico (enfermo,internado o adopcion)
		estadoClinico=prompt("estado clinico (enfermo,internado o adopcion)");
		while(estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
		{
			estadoClinico=prompt("Error! solo validos (enfermo,internado o adopcion)");
		}
		//la temperaruta corporal
		temperatura=prompt("temperatura de la mascota");
		temperatura=parent(temperatura);
		while(temperatura<32 || temperatura>44 || isNaN(temperatura)==true)
		{
			temperatura=prompt("error! solo valores entre 32 y 44");
			temperatura=parent(temperatura);
		}


		//a)El perro mas pesado
		if(banderaPrimerPerro==0)
		{
			perroMasPesado=nombre;
			pesoPerroPesado=peso;
			banderaPrimerPerro=1;
		}
		else
		{
			if(peso>pesoPerroPesado)
			{
				perroMasPesado=nombre;
				pesoPerroPesado=peso;
			}
		}
		//b)El porcentaje de enfermos sobre el total de mascotas
		contadorMascotas=contadorMascotas+1;
		contadorEnfermos=contadorEnfermos+1;
		//c)El nombre de la ultima mascota de tipo "otra cosa"
		if(mascota="otra cosa")
		{
			ultimoNombreOtraCosa=nombre;
		}
		//d)El animal sin pelo con menor temperatura corporal
		if(pelaje=="sin pelo")
		{
			if(banderaPrimerOC==0)
			{
				nombreMenorTemperaturaOC=nombre;
				menorTemperaturaOC=peso;
				tipoMenorSP=mascota;
				banderaPrimerOC=1;
			}
			else
			{
				if(peso>pesoPerroPesado)
				{
					nombreMenorTemperaturaOC=nombre;
					menorTemperaturaOC=peso;
					tipoMenorSP=mascota;
				}
			}
		}
		//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
		switch(mascota)
		{
			case "gato":
				contadorGatos++;
				acumuladorTempGatos=acumuladorTempGatos+temperatura;
			case "perro":
				contadorPerros++;
				acumuladorTempPerros=acumuladorTempPerros+temperatura;
			case "otra cosa":
				contadorOC++;
				acumuladorOc=acumuladorOc+temperatura;
		}
		//f)Sumando gatos y perros que porcentaje del total de mascotas son?
		acumuladorMascotas++;
		//g)Que estado clinico tiene la menor cantidad de mascotas
		switch(estadoClinico)
		{
			case "enfermo":
				acumuladorEnfermos++;
			case "internado":
				acumuladorInternados++;
			case "adopcion":
				acumuladorAdopcion++;
		} 
		//H)Cual es el promedio de kilos de peso de tomando todas las mascotas
		acumuladorPesoMascotas=acumuladorMascotas+peso;
		//i)El nombre y raza del gato sin pelos mas liviano
		if(mascota=="gato" && pelaje=="sin pelo")
		{
			if(banderaPrimerGatoSP==0)
		{
			gatoSPLiviano=nombre;
			pesoGatoSPLiviano=peso;
			banderaPrimerGatoSP=1;
		}
		else
		{
			if(peso<pesoGatoSPLiviano)
			{
				gatoSPLiviano=nombre;
				pesoGatoSPLiviano=peso;
			}
		}
		}

		//a)El perro mas pesado
		alert("el perro mas pesado es "+perroMasPesado);
		//b)El porcentaje de enfermos sobre el total de mascotas
		alert("el porcentaje de enfermos sobre el total de las mascotas es "+(contadorEnfermos/100*acumuladorMascotas));
		//c)El nombre de la ultima mascota de tipo "otra cosa"
		alert("El nombre de la ultima mascota de tipo 'otra cosa es '"+ultimoNombreOtraCosa);
		//d)El animal sin pelo con menor temperatura corporal
		alert("El animal sin pelo con menor temperatura es un "+tipoMenorSP+" y se llama ")
		//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
		//f)Sumando gatos y perros que porcentaje del total de mascotas son?
		//g)Que estado clinico tiene la menor cantidad de mascotas       
		//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
		//i)El nombre y raza del gato sin pelos mas liviano






























		respuesta=prompt("¿quieres seguir ingresando mascotas?");
	}
}
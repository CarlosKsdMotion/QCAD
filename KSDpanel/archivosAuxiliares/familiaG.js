/**
 * Copyright (c) 2011-2018 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */

// [main] [include]
//include("scripts/EAction.js");





////////////////////// ABRIR INTERFAZ SECUNDARIA Y GUARDAR TODOS LOS PARAMETROS (TIPO A)////////////////////
function guardarParametrosG(modelo){
	
	
	if (modelo==104){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloG1.ui" );
		WidgetFactory.restoreState(dialog);
		
		if (!dialog.exec()){
			dialog.destroy();
			EAction.activateMainWindow();
			// User hit cancel:
			this.terminate();
			return;
		}
	
		//Cuando el usuario pulsa 'OK' se almacenan todos los valores en 'widgets'
		WidgetFactory.saveState(dialog);
		var widgets = getWidgets(dialog);
		
		
		//Parametros especificos G1
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		margenM = parseInt(widgets["margenMUI"].text);
		margenL	= parseInt(widgets["margenLUI"].text);
		
		pliegueSuperior	= parseInt(widgets["pliegueSuperiorUI"].text);
		
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
	}
	
	else if (modelo==105){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloG2.ui" );
		WidgetFactory.restoreState(dialog);
		
		if (!dialog.exec()) {
			dialog.destroy();
			EAction.activateMainWindow();
			// User hit cancel:
			this.terminate();
			return;
		}
	
		//Cuando el usuario pulsa 'OK' se almacenan todos los valores en 'widgets'
		WidgetFactory.saveState(dialog);
		var widgets = getWidgets(dialog);
		
		
		//Parametros especificos G2
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		margenL	= parseInt(widgets["margenLUI"].text);
		
		pliegueSuperior	= parseInt(widgets["pliegueSuperiorUI"].text);
		
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		
		
	}
	
	else if (modelo==106){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloG3.ui" );
		WidgetFactory.restoreState(dialog);
		
		if (!dialog.exec()) {
			dialog.destroy();
			EAction.activateMainWindow();
			// User hit cancel:
			this.terminate();
			return;
		}
	
		//Cuando el usuario pulsa 'OK' se almacenan todos los valores en 'widgets'
		WidgetFactory.saveState(dialog);
		var widgets = getWidgets(dialog);
		
		
		//Parametros especificos G3
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		margenM = parseInt(widgets["margenMUI"].text);
		margenL	= parseInt(widgets["margenLUI"].text);
		margenS	= parseInt(widgets["margenSUI"].text);
		
		pliegueSuperior	= parseInt(widgets["pliegueSuperiorUI"].text);
		
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		
	}
	
	else if (modelo==112){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloG4.ui" );
		WidgetFactory.restoreState(dialog);
		
		if (!dialog.exec()) {
			dialog.destroy();
			EAction.activateMainWindow();
			// User hit cancel:
			this.terminate();
			return;
		}
	
		//Cuando el usuario pulsa 'OK' se almacenan todos los valores en 'widgets'
		WidgetFactory.saveState(dialog);
		var widgets = getWidgets(dialog);
		
		
		//Parametros especificos G4
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		
		pliegueIzq1 = parseInt(widgets["pliegueIzq1UI"].text);
		pliegueIzq2 = parseInt(widgets["pliegueIzq2UI"].text);
		pliegueIzq3 = parseInt(widgets["pliegueIzq3UI"].text);
		
		
		pliegueSup1 = pliegueInf1
		pliegueSup2 = pliegueInf2
		pliegueSup3 = pliegueInf3
		
		pliegueDer1 = pliegueIzq1
		pliegueDer2 = pliegueIzq2
		pliegueDer3 = pliegueIzq3

		crearFresado = widgets["crearFresadoUI"].checked;
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
		
	}

	else if (modelo==122){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloG5.ui" );
		WidgetFactory.restoreState(dialog);
		
		if (!dialog.exec()) {
			dialog.destroy();
			EAction.activateMainWindow();
			// User hit cancel:
			this.terminate();
			return;
		}
	
		//Cuando el usuario pulsa 'OK' se almacenan todos los valores en 'widgets'
		WidgetFactory.saveState(dialog);
		var widgets = getWidgets(dialog);
		
		
		//Parametros especificos G5
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
	}
	
	else if (modelo==136){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloG6.ui" );
		WidgetFactory.restoreState(dialog);
		
		if (!dialog.exec()) {
			dialog.destroy();
			EAction.activateMainWindow();
			// User hit cancel:
			this.terminate();
			return;
		}
	
		//Cuando el usuario pulsa 'OK' se almacenan todos los valores en 'widgets'
		WidgetFactory.saveState(dialog);
		var widgets = getWidgets(dialog);
		
		
		//Parametros especificos G6
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		
		
	}

	

	//Parametros generales para todos los paneles TIPO G
	textoDescriptivo = widgets["textoDescriptivoA0UI"].text;	
	
	
	
	
};






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////DIBUJAR FRESADO (TIPO G)////////////////////
function dibujarFresadoG(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	
	if (modelo==104){ //G1
		
		//Puntos trayectoria 		
		var fresado1 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL,pos.y)
		var fresado2 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y)
		var fresado3 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL,pos.y+alaInferior)
		var fresado4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
		var fresado5 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca-margenM)
		var fresado6 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		var fresado7 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		var fresado8 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado9 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado10
		
		if (margenM>=alaIzquierda) {
			fresado10 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca-margenM)
		}else{
			fresado10 = new RVector(pos.x+alaIzquierda-margenM,pos.y+alaInferior+alturaPlaca-margenM)
		}
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado3 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
	}else if (modelo==105){ //G2
		
		//Puntos trayectoria 		
		var fresado1 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL,pos.y)
		var fresado2 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y)
		var fresado3 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL,pos.y+alaInferior)
		var fresado4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
		var fresado6 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		var fresado7 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		var fresado8 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado9 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior)

		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado3 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
	}else if (modelo==106){ //G3
		
		//Puntos trayectoria 		
		var fresado1 = new RVector(pos.x+alaInferior,pos.y)
		var fresado2 = new RVector(pos.x+alaInferior+margenL,pos.y)
		var fresado3 = new RVector(pos.x+alaInferior,pos.y+alaInferior)
		var fresado4 = new RVector(pos.x+alaInferior+margenL,pos.y+alaInferior)
		
		//Calculo punto inclinado
		var z=anchuraPlaca-margenL
		var k=Math.pow(margenM,2)-Math.pow(alturaPlaca,2)-Math.pow(z,2)-Math.pow(margenS,2)
		
		var y=((4*k*alturaPlaca)+Math.sqrt(Math.pow((-4*k*alturaPlaca),2)-4*(-4*Math.pow(alturaPlaca,2)-4*Math.pow(z,2))*(4*Math.pow(z,2)*Math.pow(margenS,2)-Math.pow(k,2))))/(2*(-4*Math.pow(alturaPlaca,2)-4*Math.pow(z,2)))
		var x=Math.sqrt(Math.pow(margenS,2)-Math.pow(y,2))
		
		
		var fresado5 = new RVector(pos.x+alaInferior+x,pos.y+alaInferior+y)
		var fresado6 = new RVector(pos.x+alaInferior+margenL-anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		var fresado7 = new RVector(pos.x+alaInferior+margenL,pos.y+alaInferior+alturaPlaca)
		var fresado8 = new RVector(pos.x+alaInferior+margenL-anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado9 = new RVector(pos.x+alaInferior+margenL,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado3 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
		
	}else if (modelo==112){ //G4
		
		//Calculos lado inclinado 2
		var ang = Math.atan((altura2-altura1)/anchuraPlaca);	
		var hipot = pliegueInf2 / Math.sin(Math.PI/4);
		var y = hipot * Math.sin((Math.PI/4)+ang);
		var x = hipot * Math.cos((Math.PI/4)+ang);

		//Calculos lado inclinado 1
		var y1 = pliegueSup1 / Math.sin((Math.PI/2)-ang)
		
		//Puntos trayectoria 		
		var fresado1 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		var fresado2 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		var fresado3 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2)
		
		//
		var fresado4 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1) //[modificado]
		
		var fresado5 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2)
		var fresado6 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2)
		var fresado7 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+pliegueInf2,pos.y+pliegueInf1)
		var fresado8 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca-pliegueInf2,pos.y+pliegueInf1)
		
		var fresado9 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2)
		var fresado10 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		var fresado11 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3+pliegueDer2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2-pliegueDer2)
		var fresado12 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3+pliegueDer2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+pliegueDer2)
		
		//
		var fresado13 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+pliegueSup3)//[modificado]
		
		var fresado14 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+pliegueSup3)
		
		//
		//var fresado15 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+pliegueSup2-desp2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+pliegueSup3+pliegueSup2+desp2)//[modificado]
		var fresado15 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+x,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+pliegueSup3+y)//[modificado]
		
		//
		//var fresado16 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca-pliegueSup2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+pliegueSup3+pliegueSup2)
		var fresado16 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca-y,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+pliegueSup3+x)
		
		//
		var fresado17 = new RVector(pos.x+pliegueIzq1+pliegueIzq2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1)//[modificado]
		
		var fresado18 = new RVector(pos.x+pliegueIzq1+pliegueIzq2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		
		//
		var fresado19 = new RVector(pos.x+pliegueIzq1,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1-pliegueIzq2)//[modificado]
		var fresado20 = new RVector(pos.x+pliegueIzq1,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+pliegueIzq2)
		
		
	
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado1 ));
		op_fresado.addObject(line,false);
		
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado8 ));
		op_fresado.addObject(line,false);
		
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado12 ));
		op_fresado.addObject(line,false);
		
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado15 , fresado16 ));
		op_fresado.addObject(line,false);
		
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
		
		//FRESADO EXTERNO//
		if (crearFresado==1) { 
			var fresado1 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3-margenFresado,pos.y+pliegueInf1+pliegueInf2+pliegueInf3-margenFresado)
			var fresado2 = new RVector(pos.x+pliegueIzq1+pliegueIzq2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3-margenFresado)
			var fresado3 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3-margenFresado,pos.y+pliegueInf1+pliegueInf2)
			
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
			op_fresado.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
			op_fresado.addObject(line,false);
			
			
			var fresado1 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+margenFresado,pos.y+pliegueInf1+pliegueInf2+pliegueInf3-margenFresado)
			var fresado2 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3-margenFresado)
			var fresado3 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+margenFresado,pos.y+pliegueInf1+pliegueInf2)
			
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
			op_fresado.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
			op_fresado.addObject(line,false);
			
			
			var fresado1 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+margenFresado+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+margenFresado)
			var fresado2 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+pliegueDer3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+margenFresado)
			var fresado3 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+margenFresado+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+pliegueSup3)
			
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
			op_fresado.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
			op_fresado.addObject(line,false);
			
			
			var fresado1 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3-margenFresado,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+margenFresado)
			var fresado2 = new RVector(pos.x+pliegueIzq1+pliegueIzq2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+margenFresado)
			var fresado3 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3-margenFresado,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+pliegueSup3)
			
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
			op_fresado.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
			op_fresado.addObject(line,false);
			
			
		}
		
			

		
		
		
		
		
	}else if (modelo==122){ //G5
		
		//Puntos trayectoria 		
		var fresado1 = new RVector(pos.x,pos.y)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y)
		var fresado3 = new RVector(pos.x+anchuraPlaca,pos.y+alturaPlaca)
		var fresado4 = new RVector(pos.x,pos.y+alturaPlaca)
		
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado1 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==136){//G6
	
	//Puntos trayectoria 
	
	
	var fresado1 = new RVector(pos.x+anchura1,pos.y)
	var fresado2 = new RVector(pos.x+anchura1,pos.y+altura1)
	var fresado3 = new RVector(pos.x+anchura1+anchura2,pos.y+(altura1-altura2)/2)
	var fresado4 = new RVector(pos.x+anchura1+anchura2,pos.y+(altura1-altura2)/2+altura2)
	
	var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
	op_fresado.addObject(line,false);
	

	}
	
	
	return op_fresado;
}










//////////////////////DIBUJAR CORTE (TIPO G)////////////////////
function dibujarCorteG(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	
	if (modelo==104){ //G1
		
		var corte1 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL-alaInferior,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaInferior,pos.y)
		var corte4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
		var corte5 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+alaDerecha)
		var corte6 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+alturaPlaca-alaDerecha)
		var corte7 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		var corte8 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte9 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte10 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte11 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte12 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte13 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte14 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		
		if (margenM>=alaIzquierda){
			var corte15 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca-alaIzquierda)
			var corte16 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca-margenM-alaIzquierda)
		}else{
			var corte15 = new RVector(pos.x+alaIzquierda-margenM,pos.y+alaInferior+alturaPlaca-margenM)
			var corte16 = new RVector(pos.x+alaInferior-margenM,pos.y+alaInferior+alturaPlaca-margenM*2)
		}
		
		var corte17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca-margenM)
		
		
		//Angulo de abajo
		var alfa2=Math.atan((anchuraPlaca-margenL)/(alturaPlaca-margenM))
		var alfa=alfa2+(Math.PI/2)
		
		var hipot = (alaIzquierda)/(Math.cos(Math.PI/4))
		
		var distanciaX = hipot*Math.sin((Math.PI/4)+alfa2)
		var distanciaY = hipot*Math.cos((Math.PI/4)+alfa2)
		
		var corte19 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL-distanciaX,pos.y+alaInferior+distanciaY)
		
		
		//Angulo de arriba
		var hipot2=(alaIzquierda)/Math.sin(Math.PI/4)
		
		var alfa3=(Math.PI/2)-alfa2
		var alfa4=(Math.PI*3/4)-alfa3
		
		var distanciaX2 = hipot2*Math.sin(alfa4)
		var distanciaY2 = hipot2*Math.cos(alfa4)
		
		var corte18 = new RVector(pos.x+alaIzquierda-distanciaY2,pos.y+alaInferior+alturaPlaca-margenM-distanciaX2)
		
		
		
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte19 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
		
		
	}else if (modelo==105){ //G2
		
		
		//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
		
		var corte1 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL-alaInferior,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaInferior,pos.y)
		var corte4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
		var corte5 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+alaDerecha)
		var corte6 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+alturaPlaca-alaDerecha)
		var corte7 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		var corte8 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte9 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte10 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte11 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte12 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte13 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte14 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		
		
		//var corte17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca-margenM)
		
		
		//Angulo de abajo
		var alfa2=Math.atan((anchuraPlaca-margenL)/(alturaPlaca))
		var alfa=alfa2+(Math.PI/2)
		
		var hipot = (alaIzquierda)/(Math.cos(Math.PI/4))
		
		var distanciaX = hipot*Math.sin((Math.PI/4)+alfa2)
		var distanciaY = hipot*Math.cos((Math.PI/4)+alfa2)
		
		var corte19 = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL-distanciaX,pos.y+alaInferior+distanciaY)
		
		
		//Angulo de arriba
		var hipot2=(alaIzquierda)/Math.sin((Math.PI/4))
		
		var alfa3=(Math.PI/2)-alfa2
		var alfa4=(Math.PI*3/4)-alfa3
		
		var distanciaX2 = hipot2*Math.sin(alfa4)
		var distanciaY2 = hipot2*Math.cos(alfa4)
		
		var corte18 = new RVector(pos.x+alaIzquierda-distanciaY2,pos.y+alaInferior+alturaPlaca-distanciaX2)
		
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte19 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
		
		
	}else if (modelo==106){ //G3
		
		//Calculo punto inclinado
		var z=anchuraPlaca-margenL
		var k=Math.pow(margenM,2)-Math.pow(alturaPlaca,2)-Math.pow(z,2)-Math.pow(margenS,2)
		
		var y=((4*k*alturaPlaca)+Math.sqrt(Math.pow((-4*k*alturaPlaca),2)-4*(-4*Math.pow(alturaPlaca,2)-4*Math.pow(z,2))*(4*Math.pow(z,2)*Math.pow(margenS,2)-Math.pow(k,2))))/(2*(-4*Math.pow(alturaPlaca,2)-4*Math.pow(z,2)))
		var x=Math.sqrt(Math.pow(margenS,2)-Math.pow(y,2))
		
		
		
		
		var corte1 = new RVector(pos.x+alaInferior,pos.y+alaInferior)
		var corte2 = new RVector(pos.x,pos.y)
		var corte3 = new RVector(pos.x+alaInferior+margenL+alaInferior,pos.y)
		var corte4 = new RVector(pos.x+alaInferior+margenL,pos.y+alaInferior)
		var corte5 = new RVector(pos.x+alaInferior+margenL+alaDerecha,pos.y+alaInferior+alaDerecha)
		var corte6 = new RVector(pos.x+alaInferior+margenL+alaDerecha,pos.y+alaInferior+alturaPlaca-alaDerecha)
		var corte7 = new RVector(pos.x+alaInferior+margenL,pos.y+alaInferior+alturaPlaca)
		var corte8 = new RVector(pos.x+alaInferior+margenL+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte9 = new RVector(pos.x+alaInferior+margenL,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte10 = new RVector(pos.x+alaInferior+margenL,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte11 = new RVector(pos.x+alaInferior+margenL-anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte12 = new RVector(pos.x+alaInferior+margenL-anchuraPlaca,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte13 = new RVector(pos.x+alaInferior+margenL-anchuraPlaca-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte14 = new RVector(pos.x+alaInferior+margenL-anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		
		
		
		
		
		//Angulo de arriba
		var beta=Math.atan((alturaPlaca-y)/(anchuraPlaca-margenL+x))
		var hipot=alaIzquierda/Math.sin((Math.PI/4))
		var distanciaX=hipot*Math.cos((Math.PI/4)+beta)
		//distanciaX=Math.abs(distanciaX)
		var distanciaY=Math.sqrt(Math.pow(hipot,2)-Math.pow(distanciaX,2))
		//DisplayMessageBox("distx: " ..distanciaX.. "")
		//DisplayMessageBox("disty: " ..distanciaY.. "")
		var corte15 = new RVector(pos.x+alaInferior+margenL-anchuraPlaca+distanciaX,pos.y+alaInferior+alturaPlaca-distanciaY)
		
		
		
		//Angulo de abajo
		var fi=Math.atan(y/x)
		var hipot=alaIzquierda/Math.sin((Math.PI/4)) 
		var distanciaX=hipot*Math.cos((Math.PI/4)+fi)
		distanciaX=Math.abs(distanciaX)
		var distanciaY=Math.sqrt(Math.pow(hipot,2)-Math.pow(distanciaX,2))
		//DisplayMessageBox("distx: " ..distanciaX.. "")
		//DisplayMessageBox("disty: " ..distanciaY.. "")	
		var corte18 = new RVector(pos.x+alaInferior+distanciaX,pos.y+alaInferior+distanciaY)
		
		
		
		//Angulo de en medio
		var alfa=-beta-fi
		alfa=Math.abs(alfa)
		var alfa1=alfa/2
		var alfa11=alfa1-fi
		var hipot=alaIzquierda/Math.sin(alfa1)
		var distanciaY=hipot*Math.sin(alfa11)
		var distanciaX=hipot*Math.cos(alfa11)
		
		//DisplayMessageBox("distx: " ..distanciaX.. "")
		//DisplayMessageBox("disty: " ..distanciaY.. "")
		var corte16 = new RVector(pos.x+alaInferior+x-distanciaX,pos.y+alaInferior+y+distanciaY)
		var corte17 = new RVector(pos.x+alaInferior+x,pos.y+alaInferior+y)
		
		
		
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
		
		
		
		
	}else if (modelo==112){ //G4
		
		//Calculos lado inclinado
		var ang = Math.atan((altura2-altura1)/anchuraPlaca);	
		var hipot = pliegueInf2 / Math.sin((Math.PI/4));
		var y = hipot * Math.sin((Math.PI/4)+ang);
		var x = hipot * Math.cos((Math.PI/4)+ang);
		
		var corte1 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		var corte2 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2)
		var corte3 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+pliegueInf2,pos.y+pliegueInf1)
		var corte4 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+pliegueInf2,pos.y)
		var corte5 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca-pliegueInf2,pos.y)
		var corte6 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca-pliegueInf2,pos.y+pliegueInf1)
		var corte7 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2)
		var corte8 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		var corte9 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		var corte10 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3+pliegueDer2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+pliegueDer2)
		var corte11 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3+pliegueDer2+pliegueDer1,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+pliegueDer2)
		var corte12 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3+pliegueDer2+pliegueDer1,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2-pliegueDer2)
		var corte13 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3+pliegueDer2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2-pliegueDer2)
		var corte14 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca+pliegueDer3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2)
		var corte15 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2)
		var corte16 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+pliegueSup3)
		
		var corte17 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca-y,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+pliegueSup3+x)
		
		//
		var corte18 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca-y,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2+pliegueSup3+x+pliegueSup1)
		
		//
		var corte19 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+x,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+pliegueSup3+y+pliegueSup1)
		
		var corte20 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3+x,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+pliegueSup3+y)
		var corte21 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1+pliegueSup3)
		var corte22 = new RVector(pos.x+pliegueIzq1+pliegueIzq2+pliegueIzq3,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1)
		var corte23 = new RVector(pos.x+pliegueIzq1+pliegueIzq2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1)
		var corte24 = new RVector(pos.x+pliegueIzq1,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1-pliegueIzq2)
		var corte25 = new RVector(pos.x,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura1-pliegueIzq2)
		var corte26 = new RVector(pos.x,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+pliegueIzq2)
		var corte27 = new RVector(pos.x+pliegueIzq1,pos.y+pliegueInf1+pliegueInf2+pliegueInf3+pliegueIzq2)
		var corte28 = new RVector(pos.x+pliegueIzq1+pliegueIzq2,pos.y+pliegueInf1+pliegueInf2+pliegueInf3)
		
		
		
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte19 , corte20 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte22 , corte23 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte23 , corte24 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte24 , corte25 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte25 , corte26 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte26 , corte27 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
		
		
		
	}else if (modelo==122){ //G5
		
		var corte1 = new RVector(pos.x,pos.y)
		var corte2 = new RVector(pos.x+anchuraPlaca,pos.y)
		var corte3 = new RVector(pos.x+anchuraPlaca,pos.y+alturaPlaca)
		var corte4 = new RVector(pos.x,pos.y+alturaPlaca)
		
		var corte5 = new RVector(pos.x-alaIzquierda,pos.y-alaIzquierda)
		var corte6 = new RVector(pos.x-alaInferior,pos.y-alaInferior)
		var corte7 = new RVector(pos.x+anchuraPlaca+alaInferior,pos.y-alaInferior)
		var corte8 = new RVector(pos.x+anchuraPlaca+alaDerecha,pos.y-alaDerecha)
		var corte9 = new RVector(pos.x+anchuraPlaca+alaDerecha,pos.y+alturaPlaca+alaDerecha)
		var corte10 = new RVector(pos.x+anchuraPlaca+alaSuperior,pos.y+alturaPlaca+alaSuperior)
		var corte11 = new RVector(pos.x-alaSuperior,pos.y+alturaPlaca+alaSuperior)
		var corte12 = new RVector(pos.x-alaIzquierda,pos.y+alturaPlaca+alaIzquierda)
		
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte5 ));
		op_corte.addObject(line,false);
		
		
		
	}else if (modelo==136){//G6
	
		var corte1 = new RVector(pos.x,pos.y)
		var corte2 = new RVector(pos.x+anchura1,pos.y)
		var corte3 = new RVector(pos.x+anchura1+anchura2,pos.y+(altura1-altura2)/2)
		var corte4 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+(altura1-altura2)/2)
		var corte5 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+(altura1-altura2)/2+altura2)
		var corte6 = new RVector(pos.x+anchura1+anchura2,pos.y+(altura1-altura2)/2+altura2)
		var corte7 = new RVector(pos.x+anchura1,pos.y+altura1)
		var corte8 = new RVector(pos.x,pos.y+altura1)
		
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);		
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);		
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);		
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);		
		var line = new RLineEntity(document, new RLineData( corte8 , corte1 ));
		op_corte.addObject(line,false);
		

	}
	
	
	
	
	
	
	
	
	return op_corte;
}


























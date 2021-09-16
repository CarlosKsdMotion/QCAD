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





//-------------------- ABRIR INTERFAZ SECUNDARIA Y GUARDAR TODOS LOS PARAMETROS (TIPO A)--------------------
function guardarParametrosC(modelo){
	
	
	if (modelo==27){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC0.ui" );
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
		
		
		//Parametros especificos A0
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}
	
	else if (modelo==28){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC1.ui" );
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
		
		
		//Parametros especificos A1
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}
	
	else if (modelo==29){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC2.ui" );
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
		
		
		//Parametros especificos A2
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}
	
	if (modelo==30){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC3.ui" );
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
		
		
		//Parametros especificos A3
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}

	else if (modelo==31){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC4.ui" );
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
		
		
		//Parametros especificos A4
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}

	else if (modelo==32){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC5.ui" );
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
		
		
		//Parametros especificos A5
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}

	else if (modelo==33){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC6.ui" );
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
		
		
		//Parametros especificos A6
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}

	else if (modelo==34){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC7.ui" );
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
		
		
		//Parametros especificos A7
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}
	
	else if (modelo==35){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloC8.ui" );
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
		
		
		//Parametros especificos A8
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}
	
	
	
	
	
	
	
	
	//Parametros generales para todos los paneles TIPO A
	crearBotas = widgets["crearBotasUI"].checked;
	parametroBotas = widgets["parametroBotasUI"].checked;
	distanciaEntreBotas = parseInt(widgets["distanciaEntreBotasUI"].text);
	numeroBotas = parseInt(widgets["numeroBotasUI"].text);
	
	textoDescriptivo = widgets["textoDescriptivoA0UI"].text;	
	
	margenA = parseInt(widgets["margenAUI"].text);
	margenB = parseInt(widgets["margenBUI"].text);
	
	
	
	
	
	alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
	anchuraIzq = parseInt(widgets["anchura1UI"].text);
	anchuraCentro = parseInt(widgets["anchura2UI"].text);
	anchuraDerecha = parseInt(widgets["anchura3UI"].text);
	
	alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
	alaDerecha = alaIzquierda;
	alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
	alaInferior = parseInt(widgets["alaInferiorUI"].text);
	
	
	
	
	crearTaladros = widgets["crearTaladrosUI"].checked;
	diametroTaladros = parseInt(widgets["diametroTaladrosUI"].text);
	distanciaBorde	= parseInt(widgets["distanciaBordeUI"].text);
	
	crearColiso = widgets["crearColisoUI"].checked;
	taladroColiso = widgets["taladroColisoUI"].checked;
	colisoColiso = widgets["colisoColisoUI"].checked;
	anchuraColiso = parseInt(widgets["anchuraColisoUI"].text);
	alturaColiso = parseInt(widgets["alturaColisoUI"].text);
	
};






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//--------------------DIBUJAR FRESADO (TIPO C)--------------------
function dibujarFresadoC(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	//DECLARACION DE PUNTOS
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y);
	var fresado2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior);
	var fresado3 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueInferior,pos.y+alaInferior);
	var fresado4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior);
	var fresado5 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior+pliegueInferior);
	var fresado6 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueInferior,pos.y+alaInferior);//Punto externo a la polilinea principal
	var fresado7 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior+pliegueInferior);
	var fresado8 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueInferior,pos.y+alaInferior);//Punto externo a la polilinea principal
	var fresado9 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueInferior,pos.y+alaInferior);
	var fresado10 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior);
	var fresado11 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior);
	var fresado12 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y);
	var fresado13 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var fresado14 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var fresado15 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var fresado16 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	var fresado18 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	var fresado19 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);//Punto externo a la polilinea principal
	var fresado20 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);//Punto externo a la polilinea principal
	var fresado21 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	var fresado22 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	var fresado23 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior);
	
	var fresado24 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior);
	
	
	
	
	//DIBUJAR LINEAS
	if (modelo==27 || modelo==28){ //REF [CH][CH1]
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado22 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado15 , fresado7 ));
		op_fresado.addObject(line,false);
		
		
		
		
	}else if (modelo==29 || modelo==30){ //[CH2][CH3]		
	
		var line = new RLineEntity(document, new RLineData( fresado2,fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado17,fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19,fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado21,fresado22 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado22,fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11,fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8,fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3,fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4,fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7,fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16,fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14,fresado5 ));
		op_fresado.addObject(line,false);
		
		
		
	}else if (modelo==31){ //[CH4]
		
		var line = new RLineEntity(document, new RLineData( fresado1,fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13,fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16,fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10,fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5,fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado15,fresado7 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
	}else if (modelo==32){ //[CH5]
		
		var line = new RLineEntity(document, new RLineData( fresado2,fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13,fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado22,fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11,fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8,fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3,fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4,fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7,fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14,fresado5 ));
		op_fresado.addObject(line,false);
		
		
		
	}else if (modelo==33){ //[CH6]
		
		var line = new RLineEntity(document, new RLineData( fresado1,fresado24 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData(fresado17,fresado18  ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19,fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado21,fresado22 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado23,fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10,fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5,fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13,fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado15,fresado7 ));
		op_fresado.addObject(line,false);
		
	}else if (modelo==34){ //[CH7]
		
		var line = new RLineEntity(document, new RLineData( fresado2,fresado24 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado17,fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19,fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado21,fresado22 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado23,fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11,fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8,fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3,fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4,fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7,fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16,fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14,fresado5 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
	}else if (modelo==35){ //[CH8]
		
		var line = new RLineEntity(document, new RLineData( fresado1,fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado17,fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19,fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado21,fresado22 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado22,fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11,fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8,fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3,fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4,fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7,fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16,fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14,fresado5 ));
		op_fresado.addObject(line,false);
		
		
	}
	
	
	
	
	return op_fresado;
}





//--------------------DIBUJAR CORTE (TIPO C)--------------------
function dibujarCorteC(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	//PARTE INFERIOR-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	if (modelo==27 || modelo==28 || modelo==31 || modelo==33){ //Parte Inferior [CH][CH1][CH4][CH6]
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+anchuraIzq-alaInferior,pos.y)
		var corte4 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior)
		var corte5 = new RVector(pos.x+alaIzquierda+anchuraIzq+alaInferior,pos.y)
		var corte6 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-alaInferior,pos.y)
		var corte7 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior)
		var corte8 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+alaInferior,pos.y)
		var corte9 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaInferior,pos.y)
		var corte20 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior)
		
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
		var line = new RLineEntity(document, new RLineData( corte9 , corte20 ));
		op_corte.addObject(line,false);
		
		
		
	}else if (modelo==29 || modelo==30 || modelo==32 || modelo==34){ //Parte Inferior [CH2][CH3][CH5][CH7]
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
		var corte2 = new RVector(pos.x+alaIzquierda-pliegueInferior,pos.y+alaInferior)
		var corte3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y)
		var corte5 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueInferior,pos.y)
		var corte6 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueInferior,pos.y+alaInferior)
		var corte7 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior+pliegueInferior)
		var corte8 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueInferior,pos.y+alaInferior)
		var corte9 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueInferior,pos.y)
		var corte10 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueInferior,pos.y)
		var corte11 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueInferior,pos.y+alaInferior)
		var corte12 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueInferior,pos.y+alaInferior)
		var corte14 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueInferior,pos.y)
		var corte15 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y)
		var corte16 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior)
		var corte17 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+pliegueInferior,pos.y+alaInferior)
		var corte20 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior)
		
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
		var line = new RLineEntity(document, new RLineData( corte17 , corte20 ));
		op_corte.addObject(line,false);
		
		
		
	}else{ //Parte Inferior [CH8]
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
		var corte2 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y+pliegueInferior)
		var corte3 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y+alaInferior*2)
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var corte5 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
		var corte6 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueInferior,pos.y)
		var corte7 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueInferior,pos.y+alaInferior)
		var corte8 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior+pliegueInferior)
		var corte9 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueInferior,pos.y+alaInferior)
		var corte10 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueInferior,pos.y)
		var corte11 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueInferior,pos.y)
		var corte12 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueInferior,pos.y+alaInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior+pliegueInferior)
		var corte14 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueInferior,pos.y+alaInferior)
		var corte15 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueInferior,pos.y)
		var corte16 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaInferior,pos.y)
		var corte17 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior)
		var corte18 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaInferior,pos.y+alaInferior*2)
		var corte19 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaInferior,pos.y+pliegueInferior)
		var corte20 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+pliegueInferior+alaInferior)
		
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
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	//todos tienen que acabar en el mismo!!!!!!!!!!
	// -> corte20
	
	
	
	
	
	
	
	
	//EAction.handleUserMessage("Corte20: " + corte20 );
	//EAction.handleUserMessage("Corte20: " + corte20.x );
	var corte16 = new RVector(corte20.x,corte20.y)
	
	
	//corte16.x=corte20.x;
	//corte16.y=corte20.y;
	
	
	
	
	//------------PARTE DERECHA BOTAS-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	//Variables MARGENES superior e inferior
	var cotaInicioDerecha=((margenB-alturaBotaDeCuelgue)+(alaDerecha-anchoBota))/2; //[relacion trigonometrica][explicacion en la hoja de papel] 
	var anchoLateral1=alaDerecha-anchoBota; //variable para reducir codigo (se podria eliminar)
	var alturaLateral1=cotaInicioDerecha-alaDerecha+anchoBota; //variable para reducir codigo (se podria eliminar)
	
	var margenBota=4; //Esto es la distacia que hay entre la altura maxima de la bota y el pico que hay en el margen inferior del ala izquierda
	var distanciaCorreccion;
	
	var sumaComienzoFin=(margenA)+(margenB-alturaBotaDeCuelgue);
	
	
	
	//Parte botas
	var repeticiones;
	if (parametroBotas==1){
		repeticiones=numeroBotas-1;
	}else{ 
		repeticiones=Math.ceil((alturaPlaca-sumaComienzoFin)/distanciaEntreBotas);
	}
	
	var tramoRectoEntreBotaDeCuelgue=(alturaPlaca-sumaComienzoFin-((repeticiones+1)*alturaBotaDeCuelgue)-(repeticiones*anchoBota))/repeticiones;
	
	
	
	
	
	if (crearBotas==1){ //Dobujar botas en el ala lateral
			//Variables BOTAS	
		var tramoRecto1BotaDerecha=52;
		var radioArcoBotaDerecha=4 ;
		var tramoRecto2BotaDerecha=18;
		var tramoRecto3BotaDerecha=6.5;
		var tramoRecto4BotaDerecha=26;
		
		
		
		
		//Parte inicial
		if (cotaInicioDerecha>alaDerecha-margenBota) { //pico plano en margen B
			distanciaCorreccion=cotaInicioDerecha-(alaDerecha-margenBota);
			
			var corte20 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+cotaInicioDerecha-distanciaCorreccion,pos.y+alaInferior+pliegueInferior+cotaInicioDerecha-distanciaCorreccion);
			var corte21 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+cotaInicioDerecha-distanciaCorreccion,pos.y+alaInferior+pliegueInferior+cotaInicioDerecha+distanciaCorreccion);
			var corte22 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+anchoLateral1,pos.y+alaInferior+pliegueInferior+alturaLateral1+cotaInicioDerecha);
			
			var line = new RLineEntity(document, new RLineData( corte16 , corte20 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
			op_corte.addObject(line,false);
			
		}else{ //pico normal en margen B
			var corte21 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+cotaInicioDerecha,pos.y+alaInferior+pliegueInferior+cotaInicioDerecha);
			var corte22 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+anchoLateral1,pos.y+alaInferior+pliegueInferior+alturaLateral1+cotaInicioDerecha);
			
			var line = new RLineEntity(document, new RLineData( corte16 , corte21 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
			op_corte.addObject(line,false);
			
		}
		
		
		
		
		var puntoInicioX=(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+anchoLateral1);
		var puntoInicioY=(pos.y+alaInferior+pliegueInferior+cotaInicioDerecha+alturaLateral1);
		
		
		
		
		var punto_anterior = corte22;
		for (var n=1 ; repeticiones+1 ; n=n+1) {
		
			
			//Dibujar bota
			var corte6 = new RVector(puntoInicioX, puntoInicioY+tramoRecto1BotaDerecha);
			
			var line = new RLineEntity(document, new RLineData( punto_anterior , corte6 ));//Contour:LineTo(corte6)
			op_corte.addObject(line,false);
			
			puntoInicioY=puntoInicioY+tramoRecto1BotaDerecha;
			
			var corte7=new RVector(puntoInicioX+(2*radioArcoBotaDerecha),puntoInicioY); //punto final arco
			var corte8=new RVector(puntoInicioX+(radioArcoBotaDerecha),puntoInicioY); //centro
			
			//var center = new RVector(corte6.x+radioArcoBotaDerecha,corte6.y);
			
			
			//Contour:ArcTo(corte7,corte8,false);
			var line = new RArcEntity(document, new RArcData( corte8, radioArcoBotaDerecha, 0 , +Math.PI , false) ); //[borrar] sustituir por arco
			op_corte.addObject(line,false);
			
			
			
			puntoInicioX=puntoInicioX+(2*radioArcoBotaDerecha);
			
			var corte9=new RVector(puntoInicioX, puntoInicioY-tramoRecto2BotaDerecha);
			var line = new RLineEntity(document, new RLineData( corte7 , corte9 ));//Contour:LineTo(corte9);
			op_corte.addObject(line,false);
			
			
			puntoInicioY=puntoInicioY-tramoRecto2BotaDerecha;
			
			var corte10=new RVector(puntoInicioX+(radioArcoBotaDerecha),puntoInicioY-radioArcoBotaDerecha); //punto final arco
			var corte11=new RVector(puntoInicioX+(radioArcoBotaDerecha),puntoInicioY); //centro
			
			var line = new RArcEntity(document, new RArcData( corte11, radioArcoBotaDerecha, Math.PI , -Math.PI/2 , false) ); 
			op_corte.addObject(line,false);
			
			
			
			
			
			puntoInicioX=puntoInicioX+radioArcoBotaDerecha;
			puntoInicioY=puntoInicioY-radioArcoBotaDerecha;
			
			var corte12=new RVector(puntoInicioX+tramoRecto3BotaDerecha,puntoInicioY);
			
			var line = new RLineEntity(document, new RLineData( corte10 , corte12 )); //Contour:LineTo(corte12);
			op_corte.addObject(line,false);
			
			puntoInicioX=puntoInicioX+tramoRecto3BotaDerecha;
			
			var corte13=new RVector(puntoInicioX,puntoInicioY+tramoRecto4BotaDerecha);
			
			var line = new RLineEntity(document, new RLineData( corte12 , corte13 )); //Contour:LineTo(corte13);
			op_corte.addObject(line,false);
			
			puntoInicioY=puntoInicioY+tramoRecto4BotaDerecha;
			
			
			//Dibujar tramo recto
			if (n==(repeticiones+1)){
				
				break;
			}else{
				var corte14=new RVector(puntoInicioX,puntoInicioY+tramoRectoEntreBotaDeCuelgue);
				
				var line = new RLineEntity(document, new RLineData( corte13 , corte14 )); //Contour:LineTo(corte14);
				op_corte.addObject(line,false);
				
				
				puntoInicioY=puntoInicioY+tramoRectoEntreBotaDeCuelgue;
				
				var corte15=new RVector(puntoInicioX-(alaDerecha-anchoLateral1),puntoInicioY+(alaDerecha-anchoLateral1));
				
				var line = new RLineEntity(document, new RLineData( corte14 , corte15 )); //Contour:LineTo(corte15);
				op_corte.addObject(line,false);
			
				
				puntoInicioX=puntoInicioX-(alaDerecha-anchoLateral1);
				puntoInicioY=puntoInicioY+(alaDerecha-anchoLateral1);
				
				punto_anterior=corte15;
			}
		}
		var corte21 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha);
		var line = new RLineEntity(document, new RLineData( corte13 , corte21 )); //Contour:LineTo(corte22)
		op_corte.addObject(line,false);
	
	}else{ //Dibujar el ala lateral lisa
		var corte20=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha);
		var corte21=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha);
		
		var line = new RLineEntity(document, new RLineData( corte16 , corte20 )); //Contour:LineTo(corte20)
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		
	}
	
	
	//Parte final
	var corte39 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var line = new RLineEntity(document, new RLineData( corte21 , corte39 ));
	op_corte.addObject(line,false);
	
	
	
	
	
	
	
	
	//todos tienen que acabar en el mismo!!!!!!!!!!
	// -> corte39
	
	
	
	
	
	
	
	
	//PARTE SUPERIOR------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	if (modelo==27 || modelo==28 || modelo==29 || modelo==30 || modelo==35){ //Parte Superior [CH][CH1][CH2][CH3][CH8]
		var corte40 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte41 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte42 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte43 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte44 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte45 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte46 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte47 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte48 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte49 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte50 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte51 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte52 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte53 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte54 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte55 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte56 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte59 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte42 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte42 , corte43 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte43 , corte44 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte44 , corte45 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte45 , corte46 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte46 , corte47 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte47 , corte48 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte48 , corte49 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte49 , corte50 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte50 , corte51 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte51 , corte52 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte52 , corte53 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte53 , corte54 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte54 , corte55 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte55 , corte56 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte56 , corte59 ));
		op_corte.addObject(line,false);
		
		
		
		
	}else if (modelo==31 || modelo==32){ //Parte Superior [CH4][CH5]
		var corte40 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte41 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte42 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte43 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte44 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueSuperior+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte45 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte46 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueSuperior-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior+pliegueSuperior)
		var corte47 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueSuperior+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior+pliegueSuperior)
		var corte48 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte49 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueSuperior-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte50 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte51 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte52 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte59 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte42 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte42 , corte43 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte43 , corte44 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte44 , corte45 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte45 , corte46 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte46 , corte47 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte47 , corte48 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte48 , corte49 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte49 , corte50 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte50 , corte51 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte51 , corte52 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte52 , corte59 ));
		op_corte.addObject(line,false);
		
		
		
		
	}else if (modelo==33 || modelo==34){ //[CH6][CH7]
		var corte40 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte41 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		var corte42 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-alaSuperior)
		var corte43 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte44 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte45 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte46 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte47 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte48 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte49 = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte50 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte51 = new RVector(pos.x+alaIzquierda+anchuraIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte52 = new RVector(pos.x+alaIzquierda+anchuraIzq,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte53 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte54 = new RVector(pos.x+alaIzquierda+anchuraIzq-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte55 = new RVector(pos.x+alaIzquierda-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte56 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte57 = new RVector(pos.x+alaIzquierda-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-alaSuperior)
		var corte58 = new RVector(pos.x+alaIzquierda-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		var corte59 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte42 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte42 , corte43 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte43 , corte44 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte44 , corte45 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte45 , corte46 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte46 , corte47 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte47 , corte48 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte48 , corte49 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte49 , corte50 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte50 , corte51 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte51 , corte52 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte52 , corte53 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte53 , corte54 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte54 , corte55 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte55 , corte56 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte56 , corte57 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte57 , corte58 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte58 , corte59 ));
		op_corte.addObject(line,false);
	}	
	
	
	
	
	
	
	
	
	//todos tienen que acabar en el mismo!!!!!!!!!!
	// -> corte59
	
	
	
	
	var corte54 = new RVector(corte59.x,corte59.y);
	
	
	
	
	
	
	
	//PARTE IZQUIERDA (BOTAS)------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if (crearBotas==1){ //Dobujar botas en el ala lateral
			//Variables BOTAS
		var tramoRecto1BotaIzquierda=26;
		var radioArcoBotaIzquierda=4;
		var tramoRecto2BotaIzquierda=6.5;
		var tramoRecto3BotaIzquierda=18;
		var tramoRecto4BotaIzquierda=52;
		
			//Variables por si el ala derecha e izquierda no son simetricas
		var margenA_izq = margenA; //Al igualarlo al tamaño de los margenes de la derecha la figura es simetrica, si deja de ser simetrica, hay que pedirle que introduzca manualmente los margenes de la izquierda
		var margenB_izq = margenB;
		var cotaInicioIzquierda=((margenB-alturaBotaDeCuelgue)+(alaIzquierda-anchoBota))/2; //[relacion trigonometrica][explicacion en la hoja de papel]
		
		
		//Parte inicial
		var lineaIzquierda=(margenA_izq)*(17/57);
		
		var corte60 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda);
		var line = new RLineEntity(document, new RLineData( corte54 , corte60 )); //Contour:LineTo(corte60)
		op_corte.addObject(line,false);
		
		
		
		var corte61 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda-lineaIzquierda);
		var line = new RLineEntity(document, new RLineData( corte60 , corte61 )); //Contour:LineTo(corte61)
		op_corte.addObject(line,false);
		
		
		//Parte botas
		var puntoInicioX=(pos.x);
		var puntoInicioY=(pos.y+alaInferior+pliegueInferior+alturaPlaca-margenA_izq);
		
		var puntoInicial=corte61;
		for (n=1 ; (repeticiones+1) ; n=n+1){
			//Dibujar bota
			var corte32 = new RVector(puntoInicioX, puntoInicioY-tramoRecto1BotaIzquierda);
			var line = new RLineEntity(document, new RLineData( puntoInicial , corte32 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte32)
			
			puntoInicioY=puntoInicioY-tramoRecto1BotaIzquierda;
			
			var corte33=new RVector(puntoInicioX+tramoRecto2BotaIzquierda, puntoInicioY);
			var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte33)
			
			
			puntoInicioX=puntoInicioX+tramoRecto2BotaIzquierda;
			
			var corte34=new RVector(puntoInicioX+(radioArcoBotaIzquierda),puntoInicioY+radioArcoBotaIzquierda);
			var corte35=new RVector(puntoInicioX,puntoInicioY+radioArcoBotaIzquierda);//centro
			
			var line = new RArcEntity(document, new RArcData( corte35, radioArcoBotaIzquierda, 0 , -Math.PI/2 , true) );//Contour:ArcTo(corte34,corte35,true)
			op_corte.addObject(line,false);
			
			
			puntoInicioX=puntoInicioX+radioArcoBotaIzquierda;
			puntoInicioY=puntoInicioY+radioArcoBotaIzquierda;
			
			var corte36=new RVector(puntoInicioX, puntoInicioY+tramoRecto3BotaIzquierda);
			var line = new RLineEntity(document, new RLineData( corte34 , corte36 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte36)
			
			
			puntoInicioY=puntoInicioY+tramoRecto3BotaIzquierda;
			
			var corte37=new RVector(puntoInicioX+(2*radioArcoBotaIzquierda),puntoInicioY);
			var corte38=new RVector(puntoInicioX+(radioArcoBotaIzquierda),puntoInicioY); //centro
			
			var line = new RArcEntity(document, new RArcData( corte38, radioArcoBotaIzquierda, 0 , +Math.PI , false) );//Contour:ArcTo(corte37,corte38,false)
			op_corte.addObject(line,false);
			
			
			puntoInicioX=puntoInicioX+(2*radioArcoBotaIzquierda);
			
			
			var corte39=new RVector(puntoInicioX,puntoInicioY-tramoRecto4BotaIzquierda);
			var line = new RLineEntity(document, new RLineData( corte37 , corte39 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte39)
			
			puntoInicioY=puntoInicioY-tramoRecto4BotaIzquierda;
			
			//Dibujar tramo recto
			if (n==(repeticiones+1)){
				break;
			}else{
				var corte40=new RVector(puntoInicioX-(anchoBota),puntoInicioY-(anchoBota));
				var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
				op_corte.addObject(line,false);//Contour:LineTo(corte40)
				
				puntoInicioY=puntoInicioY-(anchoBota);
				puntoInicioX=puntoInicioX-(anchoBota);
				
				
				var corte41=new RVector(puntoInicioX,puntoInicioY-tramoRectoEntreBotaDeCuelgue);
				var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
				op_corte.addObject(line,false);//Contour:LineTo(corte41)
				
				puntoInicioY=puntoInicioY-tramoRectoEntreBotaDeCuelgue;
				puntoInicial=corte41;
			}
			
		}
		
		
		
		
		
		//Parte final
		if (cotaInicioIzquierda>alaIzquierda-margenBota){ //pico plano en margen B
			distanciaCorreccion=cotaInicioIzquierda-(alaIzquierda-margenBota)
			
			var corte65 = new RVector(pos.x+alaIzquierda-cotaInicioIzquierda+distanciaCorreccion,pos.y+alaInferior+pliegueInferior+cotaInicioIzquierda+distanciaCorreccion)
			var corte66 = new RVector(pos.x+alaIzquierda-cotaInicioIzquierda+distanciaCorreccion,pos.y+alaInferior+pliegueInferior+cotaInicioIzquierda-distanciaCorreccion)
			var corte67 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
			
			var line = new RLineEntity(document, new RLineData( corte39 , corte65 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte65)
			var line = new RLineEntity(document, new RLineData( corte65 , corte66 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte66)
			var line = new RLineEntity(document, new RLineData( corte66 , corte67 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte67)
			
		}else{ //pico normal en margen B
			var corte65 = new RVector(pos.x+alaIzquierda-cotaInicioIzquierda,pos.y+alaInferior+pliegueInferior+cotaInicioIzquierda)
			var corte66 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
			
			var line = new RLineEntity(document, new RLineData( corte39 , corte65 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte65)
			var line = new RLineEntity(document, new RLineData( corte65 , corte66 ));
			op_corte.addObject(line,false);//Contour:LineTo(corte66)
		}
		
		
		var corte65 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte66 , corte65 ));
		op_corte.addObject(line,false);//Contour:LineTo(corte65)
		
		
		
		
		
		
		
	}else{ //Dibujar el ala lateral lisa
		var corte60=new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda)
		var corte61=new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alaIzquierda)
		var corte62=new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)

		var line = new RLineEntity(document, new RLineData( corte54 , corte60 ));
		op_corte.addObject(line,false);//Contour:LineTo(corte60)
		var line = new RLineEntity(document, new RLineData( corte60 , corte61 ));
		op_corte.addObject(line,false);//Contour:LineTo(corte61)
		var line = new RLineEntity(document, new RLineData( corte61 , corte62 ));
		op_corte.addObject(line,false);//Contour:LineTo(corte62)
		
	}
	
	
	
	
	return op_corte;
}





//--------------------DIBUJAR TALADROS (TIPO C)--------------------
function dibujarTaladrosC(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_taladros = new RAddObjectsOperation();
	di.setCurrentLayer("Taladros"); //Seleccionar capa
	
	
	
	if (modelo==27 || modelo==28){ //[][]
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4)
			avanceY=alaIzquierda-avanceY //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				var numeroTaladros=1
				for (var i=0 ; i<=numeroColisos ; i++){
				
					//Taladro lateral izquierda y centro
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}


				//Taladro lateral derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				for (var i=0 ; i<=numeroColisos ; i++){

						//Coliso lateral izquierda y centro
						var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq +(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						  
						var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

					   
						var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

						var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);
					
					
					
				}
				//Coliso lateral derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);

				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);
			   
			}
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==29 || modelo==30){ //[][]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4)
			avanceY=alaIzquierda-avanceY //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				var numeroTaladros=1
				for (var i=0 ; i<=numeroColisos ; i++){
				
					//Taladro lateral izquierda y centro
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);

				}


				//Taladro lateral derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				for (var i=0 ; i<=numeroColisos ; i++){

						//Coliso lateral izquierda y centro
						var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq +(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						  
						var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

					   
						var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

						var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);
					
					
					
				}
				//Coliso lateral derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);

				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);
			}
		}
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if (modelo==31){ //[]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4)
			avanceY=alaIzquierda-avanceY //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
					//Taldros anchura izquierda
				//Taladro lateral izquierda y centro
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = diametroTaladros/2
				
				var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				
				
					//Taldros anchura centro
				//Taladro lateral izquierda y centro
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+((anchuraIzq+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = diametroTaladros/2
				
				var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior+alaSuperior)-(anchuraColiso)-anchuraColiso/2+((anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = diametroTaladros/2
				
				var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				

					//Taldros anchura derecha
				
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = diametroTaladros/2
				
				var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				
					
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				for (var i=0 ; i<=numeroColisos ; i++){

						//Coliso lateral izquierda y centro
						var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq +(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						  
						var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

					   
						var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior+alaSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior+alaSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
						var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior+alaSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
						var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior+alaSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

						var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);
					
					
					
				}
				//Coliso lateral derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);

				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior+alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);
			   
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==32){ //[]
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4)
			avanceY=alaIzquierda-avanceY //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//Taladro lateral izquierda 
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
		        
		        //Taladro Superior Derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+(anchuraIzq+alaSuperior+pliegueSuperior)+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);

	     
	        //Taladro lateral derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda-anchuraColiso-anchuraColiso/2+(anchuraIzq+anchuraCentro-pliegueSuperior-alaSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
		        
		        //Taladro Superior Derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
					//Coliso lateral izquierda 
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

			   //Coliso central Izquierdo
			
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+alaSuperior+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+alaSuperior+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+alaSuperior+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+alaSuperior+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

			  
				//Coliso central Derecho
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(alaSuperior+pliegueSuperior)-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(alaSuperior+pliegueSuperior)-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(alaSuperior+pliegueSuperior)-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(alaSuperior+pliegueSuperior)-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);   				


				//Coliso lateral derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda-(2*anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda-(anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda-(anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda-(2*anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);
			}
		}
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
   if (modelo==33){ //[]
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos superiores del todo (Izquierda)(Derecha)
			var hipot = alaSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4)
			avanceY=alaIzquierda-avanceY //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				
				//Taladro lateral izquierda 
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
		        
		        //Taladro Superior Derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+(anchuraIzq+pliegueSuperior)+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);

	     
	        //Taladro lateral derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda-anchuraColiso-anchuraColiso/2+(anchuraIzq+anchuraCentro-pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
		        
		        //Taladro Superior Derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
					//Coliso lateral izquierda 
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

			   //Coliso central Izquierdo
			
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

			  
				//Coliso central Derecho
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);   				


				//Coliso lateral derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda-(2*anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda-(anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda-(anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda-(2*anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);
					
					
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==34){ //[]
		
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores del todo (Izquierda)(Derecha)
			var hipot = alaSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4)
			avanceY=alaIzquierda-avanceY //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				
					//Taladro lateral izquierda 
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
		        
		        //Taladro Superior Derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+(anchuraIzq+pliegueSuperior)+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);

	     
				//Taladro lateral derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda-anchuraColiso-anchuraColiso/2+(anchuraIzq+anchuraCentro-pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
		        
		        //Taladro Superior Derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				
				
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				
				//Coliso lateral izquierda 
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

			   //Coliso central Izquierdo
			
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);

			  
				//Coliso central Derecho
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro-(pliegueSuperior)-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);   				


				//Coliso lateral derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda-(2*anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda-(anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda-(anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda-(2*anchuraColiso)+(anchuraIzq+anchuraCentro+anchuraDerecha),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
						op_taladros.addObject(line,false);
						var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
						op_taladros.addObject(line,false);
				
				
				
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if (modelo==35){ //[]
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior-alaIzquierda+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+alaInferior+pliegueInferior-alaIzquierda+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos inferiores (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avance,pos.y+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4)
			avanceY=alaIzquierda-avanceY //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Medio Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Medio Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq+anchuraCentro+anchuraDerecha+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				
				
				for (var i=0 ; i<=numeroColisos ; i++){
   		 	
					//Taladro lateral izquierda y centro
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);

				}


				//Taladro lateral derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
		        
		        //Taladro Superior Derecha
		   		var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
		        var radio = diametroTaladros/2
		        
		        var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				
				
				
				
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				for (var i=0 ; i<=numeroColisos ; i++){
					
		   			//Coliso lateral izquierda y centro
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq +(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				    var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchuraIzq+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			  		
			    	var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					
					
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchuraCentro)),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					
					
					
				}
				
				//Coliso lateral derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(anchuraIzq+anchuraCentro+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				  
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);
				
				
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt3Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraIzq-(pliegueSuperior)-(2*anchuraColiso)+(anchuraCentro+anchuraDerecha+pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
				var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
				op_taladros.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
				op_taladros.addObject(line,false);
				
			}
		}
	}
	
	
	
	
	
	
	
	
	
	return op_taladros;
}



























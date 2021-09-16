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


//-------------------- ABRIR INTERFAZ SECUNDARIA Y GUARDAR TODOS LOS PARAMETROS (TIPO B)--------------------
function guardarParametrosB(modelo){
	
	
	if (modelo==9){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB0.ui" );
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
		
		
		//Parametros especificos B0
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}
	
	else if (modelo==10){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB1.ui" );
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
		
		
		//Parametros especificos B1
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}
	
	else if (modelo==11){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB2.ui" );
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
		
		
		//Parametros especificos B2
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}
	
	if (modelo==12){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB3.ui" );
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
		
		
		//Parametros especificos B3
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}

	else if (modelo==13){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB4.ui" );
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
		
		
		//Parametros especificos B4
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}

	else if (modelo==14){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB5.ui" );
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
		
		
		//Parametros especificos B5
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}

	else if (modelo==15){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB6.ui" );
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
		
		
		//Parametros especificos B6
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
	}

	else if (modelo==16){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB7.ui" );
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
		
		
		//Parametros especificos B7
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}
	
	else if (modelo==17){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB8.ui" );
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
		
		
		//Parametros especificos B8
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	}
	
	else if (modelo==18){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB9.ui" );
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
		
		
		//Parametros especificos B9
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==19){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB10.ui" );
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
		
		
		//Parametros especificos B10
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==20){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB11.ui" );
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
		
		
		//Parametros especificos B11
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==21){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB12.ui" );
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
		
		
		//Parametros especificos B12
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==22){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB13.ui" );
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
		
		
		//Parametros especificos B13
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==23){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB14.ui" );
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
		
		
		//Parametros especificos B14
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==24){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB15.ui" );
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
		
		
		//Parametros especificos B15
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		//pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueInferior=0;
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==25){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB16.ui" );
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
		
		
		//Parametros especificos B16
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	else if (modelo==26){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloB17.ui" );
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
		
		
		//Parametros especificos B17
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		
		distanciaAlas = parseInt(widgets["distanciaAlasUI"].text);
	}
	
	
	
	
	
	
	
	
	
	
	//Parametros generales para todos los paneles TIPO B
	crearBotas = widgets["crearBotasUI"].checked;
	parametroBotas = widgets["parametroBotasUI"].checked;
	distanciaEntreBotas = parseInt(widgets["distanciaEntreBotasUI"].text);
	numeroBotas = parseInt(widgets["numeroBotasUI"].text);
	
	textoDescriptivo = widgets["textoDescriptivoA0UI"].text;	
	
	margenA = parseInt(widgets["margenAUI"].text);
	margenB = parseInt(widgets["margenBUI"].text);
	
	
	
	
	alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
	anchura1 = parseInt(widgets["anchura1UI"].text);
	anchura2 = parseInt(widgets["anchura2UI"].text);
	
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
	
	crearRigidizador=widgets["crearRigidizadorUI"].checked;
	compensacionGrosorComposite = parseInt(widgets["compensacionGrosorCompositeUI"].text);
	
	
	//Caracteristicas generales
	anchuraPlaca=anchura1+anchura2;
	
};












/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//--------------------DIBUJAR FRESADO (TIPO B)--------------------
function dibujarFresadoB(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	//DECLARACION DE PUNTOS
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y);
	var fresado2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior);
	var fresado3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior);
	var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior);
	var fresado5 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior);
	var fresado6 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y);
	var fresado7 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior);
	
	var fresado8
	var fresado9
	
	var fresado10 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var fresado11 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	
	var fresado12
	var fresado13
	
	var fresado14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	var fresado15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var fresado16 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var fresado17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior);
	
	var fresado18 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior);
	
	
	if (modelo>=9 && modelo<=17){
		fresado8 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior);
		fresado9 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior);
		fresado12 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
		fresado13 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	}else if (modelo==21){
		fresado8 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior);
		fresado9 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior);
		fresado12 = new RVector(pos.x+alaIzquierda+anchura1-(distanciaAlas/2),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
		fresado13 = new RVector(pos.x+alaIzquierda+anchura1+(distanciaAlas/2),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	}else if (modelo>=18 && modelo<=26){
		fresado8 = new RVector(pos.x+alaIzquierda+anchura1-(distanciaAlas/2),pos.y+alaInferior);
		fresado9 = new RVector(pos.x+alaIzquierda+anchura1+(distanciaAlas/2),pos.y+alaInferior);
		fresado12 = new RVector(pos.x+alaIzquierda+anchura1-(distanciaAlas/2),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
		fresado13 = new RVector(pos.x+alaIzquierda+anchura1+(distanciaAlas/2),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior);
	}
	
	
	
	
	//DIBUJAR LINEAS
	
	
	if (modelo==9 || modelo==10 || modelo==18 || modelo==19){ //REF [BH][BH1] [BH9][BH10]
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==11 || modelo==12  || modelo==20 || modelo==21){ //REF [BH2][BH3] [BH11][BH12]	
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado7 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==13 || modelo==22){ //REF [BH4]  [BH13]
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado7 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==14 || modelo==23){ //REF [BH5]  [BH14]
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado7 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==15 || modelo==24){ //REF [BH6] [BH15]
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado15 , fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==16 || modelo==25){ //REF [BH7]  [BH16]
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado14 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==17 || modelo==26){ //REF [BH8] [BH17]		
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado18 , fresado1 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado5 ));
		op_fresado.addObject(line,false);
		
	}
	
	
	
	
	
	
	return op_fresado;
}





//--------------------DIBUJAR CORTE (TIPO B)--------------------
function dibujarCorteB(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	//------------PARTE INFERIOR-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	
	if (modelo==9 || modelo==18 || modelo==10 || modelo==19 || modelo==13 || modelo==22 || modelo==15 || modelo==24){ //Parte Inferior para los modelos [BH-BH9][BH1-BH10][BH4-BH13][BH6-BH15]
		
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		
		var corte3
		var corte4
		var corte5
		var corte6
		var corte7
		
		if (modelo==9 || modelo==10 || modelo==13 || modelo==15){ //[BH][BH1][BH4][BH6]
			corte3 = new RVector(pos.x+alaIzquierda+anchura1-alaInferior,pos.y)
			corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
			corte7 = new RVector(pos.x+alaIzquierda+anchura1+alaInferior,pos.y)
			//Contour:LineTo(corte3)
			//Contour:LineTo(corte4)
			//Contour:LineTo(corte7)
			
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4 , corte7 ));
			op_corte.addObject(line,false);
			
			
			
			
		}else{ //[BH9][BH10]
			corte3 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y)
			corte4 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y+alaInferior-distanciaAlas/2)
			//Contour:LineTo(corte3)
			//Contour:LineTo(corte4)
			
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
			
			corte5 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior-distanciaAlas/2) //centro de la circunferencia
			corte6 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y+alaInferior-distanciaAlas/2)
			
			//Contour:ArcTo(corte6,corte5,false)
			
			var line = new RArcEntity(document, new RArcData( corte5, distanciaAlas/2, 0 , Math.PI , false) ); //[borrar] sustituir por arco
			op_corte.addObject(line,false);
			
			corte7 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y)
			//Contour:LineTo(corte7)
			
			var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
			op_corte.addObject(line,false);
		}
		
		
		var corte8 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaInferior,pos.y)
		var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
		//Contour:LineTo(corte8)
		//Contour:LineTo(corte16)
		
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte16 ));
		op_corte.addObject(line,false);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}else if (modelo==11 || modelo==20 || modelo==12 || modelo==21 || modelo==14 || modelo==23 || modelo==16 || modelo==25){ //Parte Inferior para los modelos [BH2-BH11][BH3-BH12][BH5-BH14][BH7-BH16]   
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
		var corte2 = new RVector(pos.x+alaIzquierda-pliegueInferior,pos.y+alaInferior)
		var corte3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y)
		//Contour:App}Point(corte1)
		//Contour:LineTo(corte2)
		//Contour:LineTo(corte3)
		//Contour:LineTo(corte4)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		
		var corte5
		var corte6
		var corte7
		var corte8
		var corte9
		
		if (modelo==11 || modelo==12 || modelo==21 || modelo==14 || modelo==16){ //[BH2][BH3][BH12][BH5][BH7]
			corte5 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y)
			corte6 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
			corte7 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
			corte8 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
			corte9 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y)
			//Contour:LineTo(corte5)
			//Contour:LineTo(corte6)
			//Contour:LineTo(corte7)
			//Contour:LineTo(corte8)
			//Contour:LineTo(corte9)
			
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
			
		}else{ //[BH11]
			corte5 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y)
			corte6 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y+alaInferior+pliegueInferior-distanciaAlas/2)
			//Contour:LineTo(corte5)
			//Contour:LineTo(corte6)
			
			var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
			op_corte.addObject(line,false);
			
			corte7 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior-distanciaAlas/2) //centro de la circunferencia
			corte8 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y+alaInferior+pliegueInferior-distanciaAlas/2)
			
			//Contour:ArcTo(corte8,corte7,false)
			
			var line = new RArcEntity(document, new RArcData( corte7, distanciaAlas/2, 0 , Math.PI , false) ); //[borrar] sustituir por arco
			op_corte.addObject(line,false);
			
			corte9 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y)
			//Contour:LineTo(corte9)
			
			var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
			op_corte.addObject(line,false);
		}
		
		
		var corte10 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y)
		var corte11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
		var corte12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior,pos.y+alaInferior)
		var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		//Contour:LineTo(corte10)
		//Contour:LineTo(corte11)
		//Contour:LineTo(corte12)
		//Contour:LineTo(corte16)
		
		
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte16 ));
		op_corte.addObject(line,false);
		
		
		
		
		
		
		
		
		
		
		
		
	}else if (modelo==17 || modelo==26){ //Parte Inferior para los modelos [BH8-BH17]
		
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
		var corte2 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y+alaInferior+pliegueInferior-alaInferior)
		var corte3 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y+alaInferior*2)
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var corte5 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
		//Contour:App}Point(corte1)
		//Contour:LineTo(corte2)
		//Contour:LineTo(corte3)
		//Contour:LineTo(corte4)
		//Contour:LineTo(corte5)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		
		var corte6
		var corte7
		var corte8
		var corte9
		var corte10
		
		if (modelo==17){ //[BH8]
			corte6 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y)
			corte7 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
			corte8 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
			corte9 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
			corte10 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y)
			//Contour:LineTo(corte6)
			//Contour:LineTo(corte7)
			//Contour:LineTo(corte8)
			//Contour:LineTo(corte9)
			//Contour:LineTo(corte10)
			
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
			
			
		}else{ //[BH17]
			corte6 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y);
			corte7 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y+alaInferior+pliegueInferior-distanciaAlas/2);
			//Contour:LineTo(corte6)
			//Contour:LineTo(corte7)
			
			var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
			op_corte.addObject(line,false);
			
			corte8 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior-distanciaAlas/2) //centro de la circunferencia
			corte9 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y+alaInferior+pliegueInferior-distanciaAlas/2)
			
			//Contour:ArcTo(corte9,corte8,false)
			
			var line = new RArcEntity(document, new RArcData( corte8, distanciaAlas/2, 0 , Math.PI , false) ); //[borrar] sustituir por arco
			op_corte.addObject(line,false);
			
			corte10 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y);
			//Contour:LineTo(corte10)
			
			var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
			op_corte.addObject(line,false);
		}
		
		
		var corte12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaInferior,pos.y)
		var corte13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
		var corte14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaInferior,pos.y+alaInferior*2)
		var corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaInferior,pos.y+pliegueInferior)
		var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+pliegueInferior+alaInferior)
		//Contour:LineTo(corte12)
		//Contour:LineTo(corte13)
		//Contour:LineTo(corte14)
		//Contour:LineTo(corte15)
		//Contour:LineTo(corte16)
		
		var line = new RLineEntity(document, new RLineData( corte10 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		
		
	}
	
	
	
	
	
	
	//todos tienen que acabar en el mismo!!!!!!!!!!
	// -> corte16
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
			
			var corte20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+cotaInicioDerecha-distanciaCorreccion,pos.y+alaInferior+pliegueInferior+cotaInicioDerecha-distanciaCorreccion);
			var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+cotaInicioDerecha-distanciaCorreccion,pos.y+alaInferior+pliegueInferior+cotaInicioDerecha+distanciaCorreccion);
			var corte22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchoLateral1,pos.y+alaInferior+pliegueInferior+alturaLateral1+cotaInicioDerecha);
			
			var line = new RLineEntity(document, new RLineData( corte16 , corte20 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
			op_corte.addObject(line,false);
			
		}else{ //pico normal en margen B
			var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+cotaInicioDerecha,pos.y+alaInferior+pliegueInferior+cotaInicioDerecha);
			var corte22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchoLateral1,pos.y+alaInferior+pliegueInferior+alturaLateral1+cotaInicioDerecha);
			
			var line = new RLineEntity(document, new RLineData( corte16 , corte21 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
			op_corte.addObject(line,false);
			
		}
		
		
		
		
		var puntoInicioX=(pos.x+alaIzquierda+anchura1+anchura2+anchoLateral1);
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
		var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha);
		var line = new RLineEntity(document, new RLineData( corte13 , corte21 )); //Contour:LineTo(corte22)
		op_corte.addObject(line,false);
	
	}else{ //Dibujar el ala lateral lisa
		var corte20=new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha);
		var corte21=new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha);
		
		var line = new RLineEntity(document, new RLineData( corte16 , corte20 )); //Contour:LineTo(corte20)
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		
	}
	
	
	//Parte final
	var corte39 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca);
	var line = new RLineEntity(document, new RLineData( corte21 , corte39 ));
	op_corte.addObject(line,false);
	
	
	
	
	
	
	
	
	//todos tienen que acabar en el mismo!!!!!!!!!!
	// -> corte39
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//------------PARTE SUPERIOR-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	if (modelo==9 || modelo==18 || modelo==10 || modelo==19 || modelo==11 || modelo==20 || modelo==12 || modelo==21 || modelo==17 || modelo==26 || modelo==13 || modelo==22 || modelo==14 || modelo==23){ //Parte Superior [BH-BH9][BH1-BH10][BH2-BH11][BH3-BH12][BH8-BH17][BH4-BH13][BH5-BH14]
		
		var corte40 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte41 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte42 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte43 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		//Contour:LineTo(corte40)
		//Contour:LineTo(corte41)
		//Contour:LineTo(corte42)
		//Contour:LineTo(corte43)
		
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte42 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte42 , corte43 ));
		op_corte.addObject(line,false);
		
		var corte44
		var corte45
		var corte46
		var corte47
		var corte48
		
		if (modelo==9 || modelo==10 || modelo==11 || modelo==12 || modelo==17){ //[BH][BH1][BH2][BH3][BH8]
			corte44 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			corte45 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			corte46 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			corte47 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			corte48 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			//Contour:LineTo(corte44)
			//Contour:LineTo(corte45)
			//Contour:LineTo(corte46)
			//Contour:LineTo(corte47)
			//Contour:LineTo(corte48)
			
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
			
			
		}else if (modelo==13 || modelo==14){ //[BH5][BH6]
			corte44 = new RVector(pos.x+alaIzquierda+anchura1+alaSuperior+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			corte45 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			corte48 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			//Contour:LineTo(corte44)
			//Contour:LineTo(corte45)
			//Contour:LineTo(corte48)
			
			var line = new RLineEntity(document, new RLineData( corte43 , corte44 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte44 , corte45 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte45 , corte48 ));
			op_corte.addObject(line,false);
			
			
		}else{
			corte44 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			corte45 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+distanciaAlas/2)
			//Contour:LineTo(corte44)
			//Contour:LineTo(corte45)
			
			var line = new RLineEntity(document, new RLineData( corte43 , corte44 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte44 , corte45 ));
			op_corte.addObject(line,false);
			
			
			corte46 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca+distanciaAlas/2) //centro de la circunferencia
			corte47 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+distanciaAlas/2)
			//Contour:ArcTo(corte47,corte46,false)
			var line = new RArcEntity(document, new RArcData( corte46, distanciaAlas/2, 0 , Math.PI , true) ); 
			op_corte.addObject(line,false);
			
			
			
			corte48 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			//Contour:LineTo(corte48)
			
			var line = new RLineEntity(document, new RLineData( corte47 , corte48 ));
			op_corte.addObject(line,false);
			
			
		}
		
		
		var corte49 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior+pliegueSuperior)
		var corte50 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte51 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte54 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		//Contour:LineTo(corte49)
		//Contour:LineTo(corte50)
		//Contour:LineTo(corte51)
		//Contour:LineTo(corte54)
		
		var line = new RLineEntity(document, new RLineData( corte48 , corte49 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte49 , corte50 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte50 , corte51 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte51 , corte54 ));
		op_corte.addObject(line,false);
		
		
		
		
		
		
		
		
		
		
		
		
	}else if (modelo==15 || modelo==24 || modelo==16 || modelo==25){ //Parte Superior [BH6-BH15][BH7-BH16]
		
		var corte40 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte41 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		var corte42 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-alaSuperior)
		var corte43 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte44 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		//Contour:LineTo(corte40)
		//Contour:LineTo(corte41)
		//Contour:LineTo(corte42)
		//Contour:LineTo(corte43)
		//Contour:LineTo(corte44)
		
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
		
		
		var corte45
		var corte46
		var corte47
		var corte48
		var corte49
		
		if (modelo==15 || modelo==16){ //[BH6][BH7]
			corte45 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			corte46 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			corte47 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			corte48 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			corte49 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			//Contour:LineTo(corte45)
			//Contour:LineTo(corte46)
			//Contour:LineTo(corte47)
			//Contour:LineTo(corte48)
			//Contour:LineTo(corte49)
			
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
			
			
		}else{ //[BH15][BH16]
			corte45 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			corte46 = new RVector(pos.x+alaIzquierda+anchura1+distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+distanciaAlas/2)
			//Contour:LineTo(corte45)
			//Contour:LineTo(corte46)
			
			var line = new RLineEntity(document, new RLineData( corte44 , corte45 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte45 , corte46 ));
			op_corte.addObject(line,false);
			
			corte47 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca+distanciaAlas/2) //centro de la circunferencia
			corte48 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+distanciaAlas/2)
			//Contour:ArcTo(corte48,corte47,false)
			var line = new RArcEntity(document, new RArcData( corte47, distanciaAlas/2, 0 , Math.PI , true) ); 
			op_corte.addObject(line,false);
			
			corte49 = new RVector(pos.x+alaIzquierda+anchura1-distanciaAlas/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			//Contour:LineTo(corte49)
			var line = new RLineEntity(document, new RLineData( corte48 , corte49 ));
			op_corte.addObject(line,false);
			
		}
		
		
		var corte50 = new RVector(pos.x+alaIzquierda-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior+pliegueSuperior)
		var corte51 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte52 = new RVector(pos.x+alaIzquierda-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-alaSuperior)
		var corte53 = new RVector(pos.x+alaIzquierda-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		var corte54 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		//Contour:LineTo(corte50)
		//Contour:LineTo(corte51)
		//Contour:LineTo(corte52)
		//Contour:LineTo(corte53)
		//Contour:LineTo(corte54)
		
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
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	//todos tienen que acabar en el mismo!!!!!!!!!!
	// -> corte54
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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





//--------------------DIBUJAR TALADROS (TIPO B)--------------------
function dibujarTaladrosB(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_taladros = new RAddObjectsOperation();
	di.setCurrentLayer("Taladros"); //Seleccionar capa
	
	
	
	
	
	if (modelo==9 || modelo==10){  //[B0][B1]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Alas Laterales (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			
			var avanceX = (hipot-distanciaBorde) * Math.sin(Math.PI/4);
			var avanceY = (hipot-distanciaBorde) * Math.cos(Math.PI/4);
			avanceY=alaIzquierda-avanceY; //esto es para que el punto inicial sea el extremo del ala
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				
				var numeroColisos=1
				for (var i=0 ; i<=numeroColisos ; i++){
					//Taladro Superior Izquierda
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				
				var numeroColisos=1
				for (var i=0 ; i<=numeroColisos ; i++){

					//Coliso Izquierda
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					
					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					
				   //Coliso Derecha
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

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
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==11 || modelo==12){ //[B2][B3]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				
				var numeroColisos=1
				for (i=0 ; i<=numeroColisos ; i++){
					//Taladro Superior Izquierda
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				
				for (i=0 ; i<=numeroColisos ; i++){

					//Coliso Izquierda
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					
					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					

				   //Coliso Derecha
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

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
    }
	
	
	
	
	
	
	
	
	
	
	
	if (modelo==13){ //[B4]
	
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				
				var numeroColisos=1
				for (i=0 ; i<=numeroColisos ; i++){
					//Taladro Superior Izquierda
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				
				var numeroColisos=1
				for (var i=0 ; i<=numeroColisos ; i++){


					//Coliso Izquierda
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					
					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					

				   //Coliso Derecha
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

				   
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
	}
	
	
	
	
	
	
	
	
	
	
	
	
	if (modelo==14){ //[B5]
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				var numeroColisos=1
				for (i=0 ; i<=numeroColisos ; i++){
					//Taladro Superior Izquierda
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				
				for (i=0 ; i<=numeroColisos ; i++){

					//Coliso Izquierda
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					  
					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					

				   //Coliso Derecha
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior+alaSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior+alaSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

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
	}
	
	
	
	
	
	
    if (modelo==15){ //[B6]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos superiores del todo (Izquierda)(Derecha)
			var hipot = alaSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				var numeroColisos=1
				for (i=0 ; i<=numeroColisos ; i++){
					//Taladro Superior Izquierda
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				
				for (i=0 ; i<=numeroColisos ; i++){

					//Coliso Izquierda
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					  
					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					

				   //Coliso Derecha
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

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
	}
    
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==16){ //[B7]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores del todo (Izquierda)(Derecha)
			var hipot = alaSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				var numeroColisos=1
				for (var i=0 ; i<=numeroColisos ; i++){

					//Taladro Superior Izquierda
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				
				for (i=0 ; i<=numeroColisos ; i++){

					//Coliso Izquierda
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					
					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					

				   //Coliso Derecha
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					
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
	}
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==17){ //[B8]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior-alaIzquierda+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior-alaIzquierda+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos inferiores (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Medio Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				var numeroColisos=1
				for (i=0 ; i<=numeroColisos ; i++){
					//Taladro Superior Izquierda
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
					
					//Taladro Superior Derecha
					var puntoCentro = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)-anchuraColiso/2+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
					var radio = diametroTaladros/2
					var line = new RArcEntity(document, new RArcData( puntoCentro, radio , 0 , 2*Math.PI , false) );
					op_taladros.addObject(line,false);
				}
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				var numeroColisos=1
				
				for (i=0 ; i<=numeroColisos ; i++){

					//Coliso Izquierda
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+(2*anchuraColiso)+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchuraColiso+(i*(anchura1+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					  
					var line = new RLineEntity(document, new RLineData( pt1Coliso , pt2Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt2Coliso , pt3Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt3Coliso , pt4Coliso ));
					op_taladros.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( pt4Coliso , pt1Coliso ));
					op_taladros.addObject(line,false);
					

				   //Coliso Derecha
					var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
					var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
					var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1-(pliegueSuperior)-(2*anchuraColiso)+(i*(anchura2+(pliegueSuperior))),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)

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
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==18 || modelo==19){ //[B9][B10]
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//alturaColiso=5
				
				//Taladro Superior Izquierda
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				
				//Dibujar Coliso Izquierda y Derecha
				
				//Coliso Izquierda
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
				
				
		        //Coliso Derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
			    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
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
	
	
	
	
	
	
	
	
	
	
	
	
	if (modelo==20 || modelo==21){  //[B11][B12]
		
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//Taladro Superior Izquierda
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				//Dibujar Coliso Izquierda y Derecha
				
				//Coliso Izquierda
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
				
				
		        //Coliso Derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
			    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
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
	
	
	
	
	
	
	
	if (modelo==22){ //[B13]
		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//alturaColiso=5
				
				//Taladro Superior Izquierda
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				//Dibujar Coliso Izquierda y Derecha
				
				//Coliso Izquierda
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
				
				
		        //Coliso Derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
			    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
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
	
	
	
    if (modelo==23){ //[B14]

		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = pliegueSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//Taladro Superior Izquierda
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				//Dibujar Coliso Izquierda y Derecha
				
				//Coliso Izquierda
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
				
				
		        //Coliso Derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
			    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==24){ //[B15]

		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos superiores del todo (Izquierda)(Derecha)
			var hipot = alaSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//alturaColiso=5
				
				//Taladro Superior Izquierda
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				//Dibujar Coliso Izquierda y Derecha
				
				//Coliso Izquierda
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
				
				
		        //Coliso Derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
			    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
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
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==25){ //[B16]

		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores del todo (Izquierda)(Derecha)
			var hipot = alaSuperior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos Inferiones (Izquierda)(Derecha)
			var hipot = pliegueInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior-avanceY) //Superior del todo Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//alturaColiso=5
				
				//Taladro Superior Izquierda
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				//Dibujar Coliso Izquierda y Derecha
				
				//Coliso Izquierda
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
				
				
		        //Coliso Derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
			    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
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
	
	
	
	
	
	
	
	
	
	
	
	
	
    if (modelo==26){ //[B17]

		if (crearTaladros==1){ //Dibujar TALADROS de refuerzo
			
			distanciaBorde=distanciaBorde+diametroTaladros/2
			
				//Triangulos Superiores (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro izquierda pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda-avance) //Centro taladro derecha pliegueSuperior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos medios (Izquierda)(Derecha)
			var hipot = alaIzquierda/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+alaInferior+pliegueInferior-alaIzquierda+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+alaInferior+pliegueInferior-alaIzquierda+avance) //Centro taladro derecha alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
				//Triangulos inferiores (Izquierda)(Derecha)
			var hipot = alaInferior/2 / Math.sin(Math.PI/4)
			var avance = (hipot-distanciaBorde) * Math.sin(Math.PI/4)
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avance,pos.y+avance) //Centro taladro izquierda alaInferior
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avance,pos.y+avance) //Centro taladro derecha alaInferior
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
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+alturaPlaca-avanceY) //Superior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+pliegueInferior+avanceY) //Medio Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
			var puntoCentro = new RVector(pos.x+alaIzquierda-avanceX,pos.y+alaInferior+avanceY) //Inferior Izquierda
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca+avanceX,pos.y+alaInferior+avanceY) //Inferior Derecha
			var line = new RArcEntity(document, new RArcData( puntoCentro, diametroTaladros/2 , 0 , 2*Math.PI , false) );
			op_taladros.addObject(line,false);
			
		}
		
		
		
		
		if (crearColiso==1){ //Dibujar colisos/taladros superiores
			
			if (taladroColiso==1){ //Dibujar forma taladro
				//alturaColiso=5
				
				//Taladro Superior Izquierda
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraColiso+anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
				//Taladro Superior Derecha
				var puntoCentro = new RVector(pos.x+alaIzquierda+anchuraPlaca-anchuraColiso-anchuraColiso/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso-alturaColiso/2)
				var radio = alturaColiso/2
				dibujarTaladro(puntoCentro, radio, "Taladros" )
				
			}else if (colisoColiso==1){ //Dibujar forma coliso
				//Dibujar Coliso Izquierda y Derecha
				
				//Coliso Izquierda
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
				
				
		        //Coliso Derecha
				var pt1Coliso = new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
				var pt2Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-(2*alturaColiso))
			    var pt3Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
			    var pt4Coliso=new RVector(pos.x+alaIzquierda+anchura1+anchura2-(2*anchuraColiso),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior-alturaColiso)
				
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



























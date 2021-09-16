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




////////////////////// ABRIR INTERFAZ SECUNDARIA Y GUARDAR TODOS LOS PARAMETROS (TIPO F)////////////////////
function guardarParametrosF(modelo){
	
	
	if (modelo==101){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF1.ui" );
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
		
		
		//Parametros especificos F1
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		anchura5 = parseInt(widgets["anchura5UI"].text);
		anchura6 = parseInt(widgets["anchura6UI"].text);
		anchura7 = parseInt(widgets["anchura7UI"].text);
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
	}
	
	
	
	
	
	else if (modelo==102){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF2.ui" );
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
		
		
		//Parametros especificos F2
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		anchura5 = parseInt(widgets["anchura5UI"].text);
		anchura6 = parseInt(widgets["anchura6UI"].text);
		anchura7 = parseInt(widgets["anchura7UI"].text);
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		pliegueInf4 = parseInt(widgets["pliegueInf4UI"].text);
		pliegueInf5 = parseInt(widgets["pliegueInf5UI"].text);
		pliegueInf6 = parseInt(widgets["pliegueInf6UI"].text);
		pliegueInf7 = parseInt(widgets["pliegueInf7UI"].text);
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
	}
	
	
	else if (modelo==103){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF3.ui" );
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
		
		
		//Parametros especificos F3
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		altura3 = parseInt(widgets["altura3UI"].text);
		altura4 = parseInt(widgets["altura4UI"].text);
		altura5 = parseInt(widgets["altura5UI"].text);
		altura6 = parseInt(widgets["altura6UI"].text);
		altura7 = parseInt(widgets["altura7UI"].text);
		altura8 = parseInt(widgets["altura8UI"].text);
		altura9 = parseInt(widgets["altura9UI"].text);
		altura10 = parseInt(widgets["altura10UI"].text);
		
		pliegueIzq1 = widgets["pliegueIzq1UI"].checked;
		pliegueIzq2 = widgets["pliegueIzq2UI"].checked;
		pliegueIzq3 = widgets["pliegueIzq3UI"].checked;
		pliegueIzq4 = widgets["pliegueIzq4UI"].checked;
		pliegueIzq5 = widgets["pliegueIzq5UI"].checked;
		pliegueIzq6 = widgets["pliegueIzq6UI"].checked;
		pliegueIzq7 = widgets["pliegueIzq7UI"].checked;
		pliegueIzq8 = widgets["pliegueIzq8UI"].checked;
		pliegueIzq9 = widgets["pliegueIzq9UI"].checked;
		pliegueIzq10 = widgets["pliegueIzq10UI"].checked;
		
		pliegueDer1 = widgets["pliegueDer1UI"].checked;
		pliegueDer2 = widgets["pliegueDer2UI"].checked;
		pliegueDer3 = widgets["pliegueDer3UI"].checked;
		pliegueDer4 = widgets["pliegueDer4UI"].checked;
		pliegueDer5 = widgets["pliegueDer5UI"].checked;
		pliegueDer6 = widgets["pliegueDer6UI"].checked;
		pliegueDer7 = widgets["pliegueDer7UI"].checked;
		pliegueDer8 = widgets["pliegueDer8UI"].checked;
		pliegueDer9 = widgets["pliegueDer9UI"].checked;
		pliegueDer10 = widgets["pliegueDer10UI"].checked;
		
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		dibujoHorizontal = widgets["dibujoHorizontalUI"].checked;
		dibujoVertical = widgets["dibujoVerticalUI"].checked;
		
	}
	
	else if (modelo==107){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF4.ui" );
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
		
		
		//Parametros especificos F4
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	
	else if (modelo==108){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF5.ui" );
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
		
		
		//Parametros especificos F5
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		anchura5 = parseInt(widgets["anchura5UI"].text);
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	
	
	else if (modelo==109){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF6.ui" );
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
		
		
		//Parametros especificos F6
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		pliegueInf4 = parseInt(widgets["pliegueInf4UI"].text);
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueIzq = parseInt(widgets["pliegueIzqUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	
	
	else if (modelo==110){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF7.ui" );
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
		
		
		//Parametros especificos F7
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		pliegueInf4 = parseInt(widgets["pliegueInf4UI"].text);
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	else if (modelo==111){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF8.ui" );
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
		
		
		//Parametros especificos F8
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		anchura5 = parseInt(widgets["anchura5UI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		pliegueInf4 = parseInt(widgets["pliegueInf4UI"].text);
		pliegueInf5 = parseInt(widgets["pliegueInf5UI"].text);
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	else if (modelo==113){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF9.ui" );
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
		
		
		//Parametros especificos F8
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		pliegueInf4 = parseInt(widgets["pliegueInf4UI"].text);
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueIzq = parseInt(widgets["pliegueIzqUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	else if (modelo==114){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF10.ui" );
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
		
		EAction.handleUserMessage("ha entrado ->->->->->->->->->12");
		//Parametros especificos F10
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
	
		
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	
	
	else if (modelo==115){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF11.ui" );
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
		
		
		//Parametros especificos F11
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		pliegueInf4 = parseInt(widgets["pliegueInf4UI"].text);
	
		
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	else if (modelo==116){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF12.ui" );
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
		
		
		//Parametros especificos F12
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
	
	
		
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueDerecha = parseInt(widgets["pliegueDerUI"].text);
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	
	else if (modelo==117){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF13.ui" );
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
		
		
		
		//Parametros especificos F13
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
	
	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueDer = parseInt(widgets["pliegueDerUI"].text);
		
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
	}
	
	else if (modelo==118){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF14.ui" );
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
		
		
		
		//Parametros especificos F13
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		anchura5 = parseInt(widgets["anchura5UI"].text);
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		pliegueInf3 = parseInt(widgets["pliegueInf3UI"].text);
		pliegueInf4 = parseInt(widgets["pliegueInf4UI"].text);
		pliegueInf5 = parseInt(widgets["pliegueInf5UI"].text);
	
	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
	
		
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
	}
	else if (modelo==119){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF15.ui" );
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
		
		
		
		//Parametros especificos F15
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
		anchura5 = parseInt(widgets["anchura5UI"].text);
		

	
	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
	
		
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
	}
	else if (modelo==120){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF16.ui" );
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
		
		
		
		//Parametros especificos F16
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		
		
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
	}
	
	else if (modelo==121){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF17.ui" );
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
		
		
		
		//Parametros especificos F13
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
	
		
		pliegueInf1 = parseInt(widgets["pliegueInf1UI"].text);
		pliegueInf2 = parseInt(widgets["pliegueInf2UI"].text);
		
	
	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	else if (modelo==123){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF18.ui" );
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
		
		
		
		//Parametros especificos F18
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
	
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
	
	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		EAction.handleUserMessage("ha entrado 33333333333333333333333333333333333333333 ");
	}
	
	else if (modelo==124){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF19.ui" );
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
		
		
		
		//Parametros especificos F19
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
	
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
	
	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	else if (modelo==125){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF20.ui" );
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
		
		
		
		//Parametros especificos F20
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
	
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
	
	
		
		pliegueIzq = parseInt(widgets["pliegueIzqUI"].text);
		pliegueDer = parseInt(widgets["pliegueDerUI"].text);
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
		//margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		//crearFresado = widgets["crearFresadoUI"].checked;
		EAction.handleUserMessage("ha entrado gerththyhyhrtyhhrh ");
	}
	
	else if (modelo==126){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF21.ui" );
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
		
		
		
		//Parametros especificos F21
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
	
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);

	
		
		pliegueIzq = parseInt(widgets["pliegueIzqUI"].text);
	
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);

		
		//margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		//crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	else if (modelo==127){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF22.ui" );
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
		
		
		
		//Parametros especificos F22
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
	
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);

	
		
		pliegueDer = parseInt(widgets["pliegueDerUI"].text);
	
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);

		
		//margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		//crearFresado = widgets["crearFresadoUI"].checked;
		EAction.handleUserMessage("ha entrado gerththyhyhrtyhhrh ");
	}
	
	else if (modelo==128){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF23.ui" );
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
		
		
		
		//Parametros especificos F23
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);

	
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);

		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
	
	}
	else if (modelo==137){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF24.ui" );
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
		
		
		//Parametros especificos F24
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);

	
		
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		
	
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);

		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);

		crearFresado = widgets["crearFresadoUI"].checked;
		
	
	}
	
	else if (modelo==138){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF25.ui" );
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
		
		
		
		//Parametros especificos F21
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
	
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);

	
		
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
	
	
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);

		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
	
	else if (modelo==139){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloF26.ui" );
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
		
		
		
		//Parametros especificos F26
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		
	
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);

	
		
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
	
	
		
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);

		
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		
	}
};


//EAction.handleUserMessage("ha entrado corte_aux -> " +corte_aux);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F1 // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado101(modelo,di,pos,document){
	
	
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	////////////////////////// Modelo F1 //////////////////////
	//Puntos trayectoria 
	
	var fresado1 = new RVector(pos.x,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	var fresado6 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior)
	var fresado7 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6,pos.y+alaInferior)
	var fresado8 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7,pos.y+alaInferior)
	var fresado9 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	var fresado12 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
	var fresado13 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca)
	var fresado14 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca)
	var fresado15 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6,pos.y+alaInferior+alturaPlaca)
	var fresado16 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7,pos.y+alaInferior+alturaPlaca)
	
	var line = new RLineEntity(document, new RLineData( fresado1 , fresado8 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado9 , fresado16 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado3 , fresado11 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado5 , fresado13 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado7 , fresado15 ));
	op_fresado.addObject(line,false);
	

	
	crearFresado=1 
	//anchura1
	if (anchura1>pliegueSuperior){
		var fresado17 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
	
		
			
		if (crearFresado==1){ 
			var fresado19 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
	
		}
	}
	
	
	//anchura2
	if (anchura2>pliegueSuperior*2){
		var fresado23 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
		op_fresado.addObject(line,false);
	

		
		if (crearFresado==1){
			var fresado22 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
	
		
			var fresado25 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado26 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura3
	if (anchura3>pliegueSuperior*2){
		var fresado29 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado30 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
		op_fresado.addObject(line,false);
	
		
		if (crearFresado==1){ 
			var fresado28 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado27 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado28 , fresado27 ));
			op_fresado.addObject(line,false);
	
			
			var fresado31 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado32 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
			op_fresado.addObject(line,false);
	
				
	}
}
	
	
	//anchura4
	if (anchura4>pliegueSuperior*2){
		var fresado35 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado36 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
		op_fresado.addObject(line,false);
	
		
		
		if (crearFresado==1){
			var fresado34 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado33 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
			op_fresado.addObject(line,false);
	
			
			var fresado37 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado38 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
			op_fresado.addObject(line,false);
	
				
		}
	}
	
	
	//anchura5
	if (anchura5>pliegueSuperior*2){
		var fresado41 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado42 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
		op_fresado.addObject(line,false);
	
		
		
		if (crearFresado==1){
			var fresado40 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado39 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
			op_fresado.addObject(line,false);
	
			
			var fresado43 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado44 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
			op_fresado.addObject(line,false);
	

		}
	}
	
	
	//anchura6
	if (anchura6>pliegueSuperior*2){
		var fresado47 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado48 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( fresado47 , fresado48 ));
		op_fresado.addObject(line,false);
	
		
		
		if (crearFresado==1){ 
			var fresado46 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado45 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado46 , fresado45 ));
			op_fresado.addObject(line,false);
	
			
			var fresado49 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado50 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado49 , fresado50 ));
			op_fresado.addObject(line,false);
	
		
		}
	}
	
	//anchura7
	if (anchura7>pliegueSuperior){
		var fresado53 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado54 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( fresado53 , fresado54 ));
		op_fresado.addObject(line,false);
	
		
		
		if (crearFresado==1){ 
			var fresado52 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado51 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			
			var line = new RLineEntity(document, new RLineData( fresado51 , fresado52 ));
			op_fresado.addObject(line,false);
	
			
		}
	}


	return op_fresado;
}



function dibujarCorte101(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	

	//PARTE INFERIOR////-
	
	//Anchura primera
	if (anchura1>alaInferior){
		var corte1 = new RVector(pos.x,pos.y+alaInferior)
		var corte2 = new RVector(pos.x,pos.y)
		var corte3 = new RVector(pos.x+anchura1-alaInferior,pos.y)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
	
	
		
	}else{
		var corte1 = new RVector(pos.x,pos.y+alaInferior)
		var corte3 = new RVector(pos.x,pos.y+alaInferior-anchura1)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);
		
	}
	var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior)
	
	var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);
	
	
	//Bucle anchuras intermedias
	var anchuras=[anchura1,anchura2,anchura3,anchura4,anchura5,anchura6,anchura7]
	var repeticiones=5 //math.length(anchuras -2)
	var anchoA=anchuras[0]

	
	
	for (var n=1 ; n<repeticiones+1 ; n=n+1){
		
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		
		if (anchuras[n]>alaInferior){ 
			var corte2 = new RVector(pos.x+anchoA+alaInferior,pos.y)
			var corte3 = new RVector(pos.x+anchoA+anchuras[n]-alaInferior,pos.y)
			
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);

			
		}else{
			var corte3 = new RVector(pos.x+anchoA+anchuras[n]/2,pos.y+alaInferior-anchuras[n]/2)
			
			var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
			op_corte.addObject(line,false);
			
		}
		var corte4 = new RVector(pos.x+anchoA+anchuras[n],pos.y+alaInferior)
		
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		
		anchoA=anchoA+anchuras[n]
		
	}
	
	
	
	//Anchura ultima
	if  (anchura7>alaInferior){
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+anchoA+alaInferior,pos.y)
		var corte3 = new RVector(pos.x+anchoA+anchura7,pos.y)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
	
		
	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
		var corte3 = new RVector(pos.x+anchoA+anchura7,pos.y+alaInferior-anchura7)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);
		
	}
	var corte4 = new RVector(pos.x+anchoA+anchura7,pos.y+alaInferior)
	
	var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);
	
	
	
	
	
	//PARTE SUPERIOR//////
	anchoA=anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7
	
	//Anchura primera
	if  (anchura7>pliegueSuperior){ 
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte2 = new RVector(pos.x+anchoA-(anchura7-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte3 = new RVector(pos.x+anchoA-(anchura7-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+anchura7)
		var corte3 = new RVector(pos.x+anchoA-anchura7,pos.y+alaInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);
	
	}
	
	
	anchoA=anchoA-anchura7
	var m=5
	for (n=1; n<repeticiones+1;n++) {
		
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
	
		if  (anchuras[m]>pliegueSuperior*2){
			var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte4 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte5 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
			op_corte.addObject(line,false);
			
		}else{
			var corte5 = new RVector(pos.x+anchoA-anchuras[m]/2,pos.y+alaInferior+alturaPlaca+anchuras[m]/2)
			
			var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
			op_corte.addObject(line,false);
			
		}
		
		var corte3 = new RVector(pos.x+anchoA-anchuras[m],pos.y+alaInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte3 ));
		op_corte.addObject(line,false);
		
		anchoA=anchoA-anchuras[m]
		m=m-1
	}	
	
	var corte_aux = corte3;
	
	//Anchura ultima
	if (anchura1>pliegueSuperior){
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		
		var line = new RLineEntity(document, new RLineData( corte_aux , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
	
		
	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte4 = new RVector(pos.x+anchoA-anchura1,pos.y+alaInferior+alturaPlaca+anchura1)
		
		var line = new RLineEntity(document, new RLineData( corte_aux , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4 ));
		op_corte.addObject(line,false);
		
	}
	var corte5 = new RVector(pos.x,pos.y+alaInferior)
	var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
	op_corte.addObject(line,false);
	
	

	
	return op_corte;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F2 // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado102(modelo,di,pos,document){
	
	
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	
	////////////////////////// Modelo F2 //////////////////////-
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4, pliegueInf5, pliegueInf6, pliegueInf7]

	//sacar el mayor pliegue
	var pliegueInferior=pliegueInf1
	for (var n=0; n<7;n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
		}
	}
	
	
	
	//Puntos trayectoria 
	
	
	var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
	var fresado2 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado3 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado4 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado5 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
	var fresado6 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior)
	var fresado7 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6,pos.y+alaInferior+pliegueInferior)
	var fresado8 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7,pos.y+alaInferior+pliegueInferior)
	var fresado9 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	var fresado10 = new RVector(pos.x+anchura1,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	var fresado11 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	var fresado12 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	var fresado13 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	var fresado14 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	var fresado15 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	var fresado16 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7,pos.y+alaInferior+alturaPlaca+pliegueInferior)
	
	
	var line = new RLineEntity(document, new RLineData( fresado1 , fresado8 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado9 , fresado16 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado3 , fresado11 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado5 , fresado13 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado7 , fresado15 ));
	op_fresado.addObject(line,false);
	
	
	

	crearFresado=1 
	//anchura1 - Superior
	if (anchura1>pliegueSuperior){
		var fresado17 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var fresado18 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
	
		
		if (crearFresado==1){
			var fresado19 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado20 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura2 - Superior
	if (anchura2>pliegueSuperior*2){ 
		var fresado23 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var fresado24 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
		op_fresado.addObject(line,false);
	
		
		
		if (crearFresado==1){
			var fresado22 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado21 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)			
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
	
			var fresado25 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado26 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2){
		var fresado29 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var fresado30 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
		op_fresado.addObject(line,false);
	
		
		
		if (crearFresado==1){ 
			var fresado28 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado27 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
	
			var fresado31 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado32 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
			op_fresado.addObject(line,false);			
		}
	}
	
	
	//anchura4 - Superior
	if (anchura4>pliegueSuperior*2 ) {
		var fresado35 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var fresado36 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
		op_fresado.addObject(line,false);
	
		
		if ( crearFresado==1 ) {
			var fresado34 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado33 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado34 , fresado33 ));
			op_fresado.addObject(line,false);
	
			var fresado37 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado38 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura5 - Superior
	if ( anchura5>pliegueSuperior*2 ) {
		var fresado41 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var fresado42 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
		op_fresado.addObject(line,false);
	
		
		
		if ( crearFresado==1 ) {
			var fresado40 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado39 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado40 , fresado39 ));
			op_fresado.addObject(line,false);
	
			
			var fresado43 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado44 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
			op_fresado.addObject(line,false);
	
		}
	}
	
	
	//anchura6 - Superior
	if ( anchura6>pliegueSuperior*2 ) {
		var fresado47 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var fresado48 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado47 , fresado48 ));
		op_fresado.addObject(line,false);

		
		if ( crearFresado==1 ) {
			var fresado46 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado45 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado46 , fresado45 ));
			op_fresado.addObject(line,false);
	
			
			var fresado49 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado50 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado49 , fresado50 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura7 - Superior
	if ( anchura7>pliegueSuperior ) {
		var fresado53 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var fresado54 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado53 , fresado54 ));
		op_fresado.addObject(line,false);
		
		if ( crearFresado==1 ) {
			var fresado52 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var fresado51 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( fresado51 , fresado52 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	
	
	
	
	
	
	//anchura1 - Inferior
	if ( anchura1>(pliegueInf1) ) { 
		var fresado55 = new RVector(pos.x,pos.y+pliegueInferior+alaInferior-pliegueInf1)
		var fresado56 = new RVector(pos.x+anchura1-pliegueInf1,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var line = new RLineEntity(document, new RLineData( fresado55 , fresado56 ));
		op_fresado.addObject(line,false);
	}
	
	//anchura2 - Inferior
	if ( anchura2>(pliegueInf2)*2 ) { 
		var fresado55 = new RVector(pos.x+anchura1+pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var fresado56 = new RVector(pos.x+anchura1+anchura2-pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var line = new RLineEntity(document, new RLineData( fresado56 , fresado55 ));
		op_fresado.addObject(line,false);
	}
	
	//anchura3 - Inferior
	if ( anchura3>(pliegueInf3)*2 ) { 
		var fresado55 = new RVector(pos.x+anchura1+anchura2+pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var fresado56 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var line = new RLineEntity(document, new RLineData( fresado55 , fresado56 ));
		op_fresado.addObject(line,false);
		
	}
	
	//anchura4 - Inferior
	if ( anchura4>(pliegueInf4)*2 ) { 
		var fresado55 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var fresado56 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var line = new RLineEntity(document, new RLineData( fresado55 , fresado56 ));
		op_fresado.addObject(line,false);
		
	}
	
	//anchura5 - Inferior
	if ( anchura5>(pliegueInf5)*2 ) { 
		var fresado55 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueInf5,pos.y+alaInferior+pliegueInferior-pliegueInf5)
		var fresado56 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5-pliegueInf5,pos.y+alaInferior+pliegueInferior-pliegueInf5)
		var line = new RLineEntity(document, new RLineData( fresado55 , fresado56 ));
		op_fresado.addObject(line,false);
	}
	
	//anchura6 - Inferior
	if ( anchura6>(pliegueInf6)*2 ) { 
		var fresado55 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueInf6,pos.y+alaInferior+pliegueInferior-pliegueInf6)
		var fresado56 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6-pliegueInf6,pos.y+alaInferior+pliegueInferior-pliegueInf6)
		var line = new RLineEntity(document, new RLineData( fresado55 , fresado56 ));
		op_fresado.addObject(line,false);
	}
	
	//anchura7 - Inferior
	if ( anchura7>(pliegueInf7) ) { 
		var fresado55 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+pliegueInf7,pos.y+alaInferior+pliegueInferior-pliegueInf7)
		var fresado56 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7,pos.y+alaInferior+pliegueInferior-pliegueInf7)
		var line = new RLineEntity(document, new RLineData( fresado55 , fresado56 ));
		op_fresado.addObject(line,false);
	}
	
	
	return op_fresado
	
}



function dibujarCorte102(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4, pliegueInf5, pliegueInf6, pliegueInf7]

	//sacar el mayor pliegue
	var pliegueInferior=pliegueInf1
	for (var n=0; n<7;n=n+1){
		if ( pliegueInferior<plieguesInf[n] ) {
			pliegueInferior=plieguesInf[n]
		}
	}
	
	
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	
	//Anchura primera 
	if ( anchura1>(alaInferior+pliegueInf1) ) {
		var corte1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
		var corte2 = new RVector(pos.x,pos.y+pliegueInferior-pliegueInf1)
		var corte3 = new RVector(pos.x+anchura1-alaInferior-pliegueInf1,pos.y+pliegueInferior-pliegueInf1)
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);

		
	}else{
		var corte1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
		var corte3 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-anchura1)
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

	}
	var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
	var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);
	
	
	
	//Bucle anchuras intermedias 
	var anchuras=[anchura1,anchura2,anchura3,anchura4,anchura5,anchura6,anchura7]
	var repeticiones=5 //math.length(anchuras -2)
	var anchoA=anchuras[0]
	
	for (var n=1;n<repeticiones+1;n=n+1){
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		if ( anchuras[n]>(alaInferior+plieguesInf[n])*2 ) {
			var corte2 = new RVector(pos.x+anchoA+alaInferior+plieguesInf[n],pos.y+pliegueInferior-plieguesInf[n])
			var corte3 = new RVector(pos.x+anchoA+anchuras[n]-alaInferior-plieguesInf[n],pos.y+pliegueInferior-plieguesInf[n])
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			
		}else{
			var corte3 = new RVector(pos.x+anchoA+anchuras[n]/2,pos.y+alaInferior+pliegueInferior-anchuras[n]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
			op_corte.addObject(line,false);
			
		}
		
		var corte4 = new RVector(pos.x+anchoA+anchuras[n],pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		anchoA=anchoA+anchuras[n]
	}	
	
	
	//Anchura ultima 
	if ( anchura7>(alaInferior+pliegueInf7) ) {
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+pliegueInferior)
		var corte2 = new RVector(pos.x+anchoA+alaInferior+pliegueInf7,pos.y+pliegueInferior-pliegueInf7)
		var corte3 = new RVector(pos.x+anchoA+anchura7,pos.y+pliegueInferior-pliegueInf7)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);

		
	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+pliegueInferior)
		var corte3 = new RVector(pos.x+anchoA+anchura7,pos.y+alaInferior+pliegueInferior-anchura7)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

	}
	var corte4 = new RVector(pos.x+anchoA+anchura7,pos.y+alaInferior+pliegueInferior)
	var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);
	
	
	
	
	
	
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	anchoA=anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7
	
	//Anchura primera
	if ( anchura7>pliegueSuperior ) {
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
		var corte2 = new RVector(pos.x+anchoA-(anchura7-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
		var corte3 = new RVector(pos.x+anchoA-(anchura7-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);

	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+anchura7+pliegueInferior)
		var corte3 = new RVector(pos.x+anchoA-anchura7,pos.y+alaInferior+alturaPlaca+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

	}
	
	
	anchoA=anchoA-anchura7
	var m=5
	for (var n=1; n<(repeticiones+1) ; n=n+1){
		
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
		
		if ( anchuras[m]>pliegueSuperior*2 ) {
			var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var corte4 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
			var corte5 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
			op_corte.addObject(line,false);
		
		}else{
			var corte5 = new RVector(pos.x+anchoA-anchuras[m]/2,pos.y+alaInferior+alturaPlaca+anchuras[m]/2+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
			op_corte.addObject(line,false);
		}
		
		var corte3 = new RVector(pos.x+anchoA-anchuras[m],pos.y+alaInferior+alturaPlaca+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte5 , corte3 ));
		op_corte.addObject(line,false);
		
		
		anchoA=anchoA-anchuras[m]
		m=m-1
	}	
	
	
	var corte_aux = corte3;


	//Anchura ultima
	if ( anchura1>pliegueSuperior ) {
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+pliegueInferior)
		var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+pliegueInferior)
		var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
		var corte4 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte_aux , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);

		
	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+pliegueInferior)
		var corte4 = new RVector(pos.x+anchoA-anchura1,pos.y+alaInferior+alturaPlaca+anchura1+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte_aux , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4 ));
		op_corte.addObject(line,false);

	}
	var corte5 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
	var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
	op_corte.addObject(line,false);
	

	return op_corte;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F3 // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado103(modelo,di,pos,document){
	
	
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	////////////////////////// Modelo F3 //////////////////////-	
	var alturas=[altura1,altura2,altura3,altura4,altura5,altura6,altura7,altura8,altura9,altura10]
	
	var nPestanas=numeroPestanas003(alturas)
	
	
	var fresado1
	var fresado2
	var fresado3
	var fresado4
	var fresado5
	var fresado6
	var fresado7
	var fresado8
	var fresado9
	var fresado10
	var fresado11
	var fresado12
	var fresado13
	var fresado14
	var fresado15
	var fresado16
	var fresado17
	var fresado18
	var fresado19
	var fresado20
	var fresado21
	var fresado22
	
	var x
	var y
	
	//Puntos trayectoria
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y
	if (dibujoHorizontal==1) { //Dibujo horizontal
		fresado1 = new RVector(y,x)
	}else{ //dibujo vertical
		fresado1 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1
	if (dibujoHorizontal==1) {
		fresado2 = new RVector(y,x)
	}else{
		fresado2 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2
	if (dibujoHorizontal==1) {
		fresado3 = new RVector(y,x)
	}else{
		fresado3 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3
	if (dibujoHorizontal==1) {
		fresado4 = new RVector(y,x)
	}else{
		fresado4 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3+altura4
	if (dibujoHorizontal==1) {
		fresado5 = new RVector(y,x)
	}else{
		fresado5 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3+altura4+altura5
	if (dibujoHorizontal==1) {
		fresado6 = new RVector(y,x)
	}else{
		fresado6 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6
	if (dibujoHorizontal==1) {
		fresado7 = new RVector(y,x)
	}else{
		fresado7 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7
	if (dibujoHorizontal==1) {
		fresado8 = new RVector(y,x)
	}else{
		fresado8 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8
	if (dibujoHorizontal==1) {
		fresado9 = new RVector(y,x)
	}else{
		fresado9 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8+altura9
	if (dibujoHorizontal==1) {
		fresado10 = new RVector(y,x)
	}else{
		fresado10 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda+anchuraPlaca
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8+altura9+altura10
	if (dibujoHorizontal==1) {
		fresado11 = new RVector(y,x)
	}else{
		fresado11 = new RVector(x,y)
	}
	
	
	x=pos.x+alaIzquierda
	y=pos.y
	if (dibujoHorizontal==1) {
		fresado12 = new RVector(y,x)
	}else{
		fresado12 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1
	if (dibujoHorizontal==1) {
		fresado13 = new RVector(y,x)
	}else{
		fresado13 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2
	if (dibujoHorizontal==1) {
		fresado14 = new RVector(y,x)
	}else{
		fresado14 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3
	if (dibujoHorizontal==1) {
		fresado15 = new RVector(y,x)
	}else{
		fresado15 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3+altura4
	if (dibujoHorizontal==1) {
		fresado16 = new RVector(y,x)
	}else{
		fresado16 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3+altura4+altura5
	if (dibujoHorizontal==1) {
		fresado17 = new RVector(y,x)
	}else{
		fresado17 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6
	if (dibujoHorizontal==1) {
		fresado18 = new RVector(y,x)
	}else{
		fresado18 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7
	if (dibujoHorizontal==1) {
		fresado19 = new RVector(y,x)
	}else{
		fresado19 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8
	if (dibujoHorizontal==1) {
		fresado20 = new RVector(y,x)
	}else{
		fresado20 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8+altura9
	if (dibujoHorizontal==1) {
		fresado21 = new RVector(y,x)
	}else{
		fresado21 = new RVector(x,y)
	}
	
	x=pos.x+alaIzquierda
	y=pos.y+altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8+altura9+altura10
	if (dibujoHorizontal==1) {
		fresado22 = new RVector(y,x)
	}else{
		fresado22 = new RVector(x,y)
	}
	
	
	
	
	
	
	var fresadoIzq=[fresado12,fresado13,fresado14,fresado15,fresado16,fresado17,fresado18,fresado19,fresado20,fresado21,fresado22] //Se ponen los puntos en un vector para poder usarlos en un bucle for
	var fresadoDer=[fresado1,fresado2,fresado3,fresado4,fresado5,fresado6,fresado7,fresado8,fresado9,fresado10,fresado11] //Se ponen los puntos en un vector para poder usarlos en un bucle for
	
	
	//Dibujar lineas horizontales
	if (nPestanas==2) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
	} else if ( nPestanas==3) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
	} else if ( nPestanas==4) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado15 ));
		op_fresado.addObject(line,false);
	} else if ( nPestanas==5) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado16 ));
		op_fresado.addObject(line,false);
	} else if ( nPestanas==6) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado17 ));
		op_fresado.addObject(line,false);
	} else if ( nPestanas==7) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado18 ));
		op_fresado.addObject(line,false);
	} else if ( nPestanas==8) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado19 ));
		op_fresado.addObject(line,false);
	} else if (nPestanas==9) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado19 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado20 ));
		op_fresado.addObject(line,false);
	} else if (nPestanas==10) {
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado19 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado21 ));
		op_fresado.addObject(line,false);
	}
	
	
	//dibujar lineas verticales
	var pliegueIzq=[pliegueIzq1,pliegueIzq2,pliegueIzq3,pliegueIzq4,pliegueIzq5,pliegueIzq6,pliegueIzq7,pliegueIzq8,pliegueIzq9,pliegueIzq10]
	var pliegueDer=[pliegueDer1,pliegueDer2,pliegueDer3,pliegueDer4,pliegueDer5,pliegueDer6,pliegueDer7,pliegueDer8,pliegueDer9,pliegueDer10]
	
	for (var n=0 ; n<nPestanas ; n=n+1){
		if (pliegueDer[n]==1) {
			var line = new RLineEntity(document, new RLineData( fresadoDer[n] , fresadoDer[n+1] ));
			op_fresado.addObject(line,false);
		}
		if (pliegueIzq[n]==1) {
			var line = new RLineEntity(document, new RLineData( fresadoIzq[n] , fresadoIzq[n+1] ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	return op_fresado;
}



function dibujarCorte103(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	if (dibujoHorizontal==1){ //Dibujar pieza horizontal
	
		
		
		var alturas=[altura1,altura2,altura3,altura4,altura5,altura6,altura7,altura8,altura9,altura10]
		var nPestanas=numeroPestanas003(alturas)
		
		var pliegueIzq=[pliegueIzq1,pliegueIzq2,pliegueIzq3,pliegueIzq4,pliegueIzq5,pliegueIzq6,pliegueIzq7,pliegueIzq8,pliegueIzq9,pliegueIzq10]
		var pliegueDer=[pliegueDer1,pliegueDer2,pliegueDer3,pliegueDer4,pliegueDer5,pliegueDer6,pliegueDer7,pliegueDer8,pliegueDer9,pliegueDer10]
				
		//PARTE IZQUIERDA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
		
		//Anchura primera
		var corte1 = new RVector(pos.y,pos.x+alaIzquierda)
		
		if (pliegueIzq[0]==1) {
			if (altura1>alaIzquierda) {
				var corte2 = new RVector(pos.y,pos.x)
				var corte3 = new RVector(pos.y+altura1-alaIzquierda,pos.x)
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
				
			}else{
				var corte3 = new RVector(pos.y,pos.x+alaIzquierda-altura1)
				var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
				op_corte.addObject(line,false);
			}
			var corte4 = new RVector(pos.y+altura1,pos.x+alaIzquierda)
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
		}
		
		
		//Bucle anchuras intermedias
		var repeticiones=nPestanas-2
		var anchoA=alturas[0]
		for (n=1 ; n<repeticiones+1 ; n=n+1){
			if (pliegueIzq[n]==1) {
				var corte1 = new RVector(pos.y+anchoA,pos.x+alaIzquierda)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				
				if (alturas[n]>alaIzquierda*2) {
					var corte2 = new RVector(pos.y+anchoA+alaIzquierda,pos.x)
					var corte3 = new RVector(pos.y+anchoA+alturas[n]-alaIzquierda,pos.x)
					var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
					op_corte.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
					op_corte.addObject(line,false);
					
				}else{
					var corte3 = new RVector(pos.y+anchoA+alturas[n]/2,pos.x+alaIzquierda-alturas[n]/2)
					var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
					op_corte.addObject(line,false);
				}
				
				var corte4 = new RVector(pos.y+anchoA+alturas[n],pos.x+alaIzquierda)
				var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
				op_corte.addObject(line,false);
			}
			
			anchoA=anchoA+alturas[n]
		}	
		
		
		//Anchura ultima
		if (pliegueIzq[nPestanas]==1) { 
			if (alturas[nPestanas]>alaIzquierda) {
				var corte1 = new RVector(pos.y+anchoA,pos.x+alaIzquierda)
				var corte2 = new RVector(pos.y+anchoA+alaIzquierda,pos.x)
				var corte3 = new RVector(pos.y+anchoA+alturas[nPestanas],pos.x)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
				
			}else{
				var corte3 = new RVector(pos.y+anchoA+alturas[nPestanas],pos.x+alaIzquierda-alturas[nPestanas])
				var line = new RLineEntity(document, new RLineData( corte4 , corte3 ));
				op_corte.addObject(line,false);
			}
		}
		
		var corte4 = new RVector(pos.y+anchoA+alturas[nPestanas],pos.x+alaIzquierda)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		
		
		
		
		
		
		
		//PARTE DERECHA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
		//Anchura ultima
		var corte1 = new RVector(pos.y+anchoA+alturas[nPestanas],pos.x+alaIzquierda+anchuraPlaca)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		
		if (pliegueDer[nPestanas]==1) {
			if (alturas[nPestanas]>alaDerecha) {
				var corte2 = new RVector(pos.y+anchoA+alturas[nPestanas],pos.x+alaIzquierda+anchuraPlaca+alaDerecha)
				var corte3 = new RVector(pos.y+anchoA+alaDerecha,pos.x+alaIzquierda+anchuraPlaca+alaDerecha)
				
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
				
				
			}else{
				var corte3 = new RVector(pos.y+anchoA+alturas[nPestanas],pos.x+alaIzquierda+alturas[nPestanas]+anchuraPlaca)
				var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
				op_corte.addObject(line,false);
			}
			
			var corte4 = new RVector(pos.y+anchoA,pos.x+alaIzquierda+anchuraPlaca)
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
		}
		
		
		
		//Bucle anchuras intermedias
		var repeticiones=nPestanas-2
		var m=nPestanas-1
		//var anchoA=alturas[1]
		
		for (n=1 ; n=repeticiones+1 ; n=n+1){
			if (pliegueDer[m]==1) {
				var corte1 = new RVector(pos.y+anchoA,pos.x+alaIzquierda+anchuraPlaca)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				
				if (alturas[m]>alaDerecha*2) {
					var corte2 = new RVector(pos.y+anchoA-alaDerecha,pos.x+anchuraPlaca+alaDerecha+alaIzquierda)
					var corte3 = new RVector(pos.y+anchoA-alturas[m]+alaDerecha,pos.x+anchuraPlaca+alaDerecha+alaIzquierda)
					var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
					op_corte.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
					op_corte.addObject(line,false);
					
				}else{
					var corte3 = new RVector(pos.y+anchoA-alturas[m]/2,pos.x+alaIzquierda+anchuraPlaca+alturas[m]/2)
					var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
					op_corte.addObject(line,false);
				}
				
				var corte4 = new RVector(pos.y+anchoA-alturas[m],pos.x+alaIzquierda+anchuraPlaca)
				var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
				op_corte.addObject(line,false);
			}
			
			anchoA=anchoA-alturas[m]
			m=m-1
		}	
		
		
		
		
		
		//Anchura primera
		if (pliegueDer[0]==1) { 
			if (alturas[0]>alaDerecha) {
				var corte1 = new RVector(pos.y+alturas[1],pos.x+alaIzquierda+anchuraPlaca)
				var corte2 = new RVector(pos.y+alturas[1]-alaDerecha,pos.x+anchuraPlaca+alaDerecha+alaIzquierda)
				var corte3 = new RVector(pos.y,pos.x+anchuraPlaca+alaDerecha+alaIzquierda)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
				
			}else{
				var corte1 = new RVector(pos.y+alturas[1],pos.x+alaIzquierda+anchuraPlaca)
				var corte3 = new RVector(pos.y,pos.x+alaIzquierda+anchuraPlaca+alturas[1])
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
				op_corte.addObject(line,false);
			}
		}
		var corte4 = new RVector(pos.y,pos.x+alaIzquierda+anchuraPlaca)
		var corte5 = new RVector(pos.y,pos.x+alaIzquierda)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	else{ //Dibjujar piezo vertical
		
		var alturas=[altura1,altura2,altura3,altura4,altura5,altura6,altura7,altura8,altura9,altura10]
		var nPestanas=numeroPestanas003(alturas)
		
		var pliegueIzq=[pliegueIzq1,pliegueIzq2,pliegueIzq3,pliegueIzq4,pliegueIzq5,pliegueIzq6,pliegueIzq7,pliegueIzq8,pliegueIzq9,pliegueIzq10]
		var pliegueDer=[pliegueDer1,pliegueDer2,pliegueDer3,pliegueDer4,pliegueDer5,pliegueDer6,pliegueDer7,pliegueDer8,pliegueDer9,pliegueDer10]
		
		
		//PARTE IZQUIERDA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
		
		//Anchura primera
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y)
		var line = new RLineEntity(document, new RLineData( corte5 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
		if (pliegueIzq[0]==1) {
			if (altura1>alaIzquierda) {
				var corte2 = new RVector(pos.x,pos.y)
				var corte3 = new RVector(pos.x,pos.y+altura1-alaIzquierda)
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
			}else{
				var corte3 = new RVector(pos.x+alaIzquierda-altura1,pos.y)
				var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
				op_corte.addObject(line,false);
			}
			var corte4 = new RVector(pos.x+alaIzquierda,pos.y+altura1)
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
		}
		
		
		//Bucle anchuras intermedias
		var repeticiones=nPestanas-2
		var anchoA=alturas[0]
		for (n=1 ; n<repeticiones+1 ; n=n+1){
			if (pliegueIzq[n]==1) {
				var corte1 = new RVector(pos.x+alaIzquierda,pos.y+anchoA)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				if (alturas[n]>alaIzquierda*2) {
					var corte2 = new RVector(pos.x,pos.y+anchoA+alaIzquierda)
					var corte3 = new RVector(pos.x,pos.y+anchoA+alturas[n]-alaIzquierda)
					var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
					op_corte.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
					op_corte.addObject(line,false);
					
				}else{
					var corte3 = new RVector(pos.x+alaIzquierda-alturas[n]/2,pos.y+anchoA+alturas[n]/2)
					var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
					op_corte.addObject(line,false);
				}
				
				var corte4 = new RVector(pos.x+alaIzquierda,pos.y+anchoA+alturas[n])
				var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
				op_corte.addObject(line,false);
			}
			
			anchoA=anchoA+alturas[n]
		}	
		
		
		//Anchura ultima
		if (pliegueIzq[nPestanas]==1) { 
			if (alturas[nPestanas]>alaIzquierda) {
				var corte1 = new RVector(pos.x+alaIzquierda,pos.y+anchoA)
				var corte2 = new RVector(pos.x,pos.y+anchoA+alaIzquierda)
				var corte3 = new RVector(pos.x,pos.y+anchoA+alturas[nPestanas])
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
				
			}else{
				var corte3 = new RVector(pos.x+alaIzquierda-alturas[nPestanas],pos.y+anchoA+alturas[nPestanas])
				var line = new RLineEntity(document, new RLineData( corte4 , corte3 ));
				op_corte.addObject(line,false);
			}
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y+anchoA+alturas[nPestanas])
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		
		
		
		
		
		
		
		//PARTE DERECHA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
		//Anchura ultima
		var corte1 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+anchoA+alturas[nPestanas])
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		if (pliegueDer[nPestanas]==1) {
			if (alturas[nPestanas]>alaDerecha) {
				var corte2 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+anchoA+alturas[nPestanas])
				var corte3 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+anchoA+alaDerecha)
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
				
			}else{
				var corte3 = new RVector(pos.x+alaIzquierda+alturas[nPestanas]+anchuraPlaca,pos.y+anchoA+alturas[nPestanas])
				var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
				op_corte.addObject(line,false);
			}
			
			var corte4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+anchoA)
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
		}
		
		
		
		//Bucle anchuras intermedias
		var repeticiones=nPestanas-2
		var m=nPestanas-1
		//var anchoA=alturas[1]
		
		for (n=1 ; n=repeticiones+1 ; n=n+1){
			if (pliegueDer[m]==1) {
				var corte1 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+anchoA)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				if (alturas[m]>alaDerecha*2) {
					var corte2 = new RVector(pos.x+anchuraPlaca+alaDerecha+alaIzquierda,pos.y+anchoA-alaDerecha)
					var corte3 = new RVector(pos.x+anchuraPlaca+alaDerecha+alaIzquierda,pos.y+anchoA-alturas[m]+alaDerecha)
					var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
					op_corte.addObject(line,false);
					var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
					op_corte.addObject(line,false);
					
				}else{
					var corte3 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alturas[m]/2,pos.y+anchoA-alturas[m]/2)
					var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
					op_corte.addObject(line,false);
				}
			
				var corte4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+anchoA-alturas[m])
				var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
				op_corte.addObject(line,false);
			}
			
			anchoA=anchoA-alturas[m]
			m=m-1
		}	
		
		
		
		
		
		//Anchura primera
		if (pliegueDer[0]==1) { 
			if (alturas[0]>alaDerecha) {
				var corte1 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alturas[1])
				var corte2 = new RVector(pos.x+anchuraPlaca+alaDerecha+alaIzquierda,pos.y+alturas[1]-alaDerecha)
				var corte3 = new RVector(pos.x+anchuraPlaca+alaDerecha+alaIzquierda,pos.y)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
				op_corte.addObject(line,false);
				
			}else{
				var corte1 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alturas[1])
				var corte3 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alturas[1],pos.y)
				var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
				op_corte.addObject(line,false);
				var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
				op_corte.addObject(line,false);
			}
		}
		var corte4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y)
		var corte5 = new RVector(pos.x+alaIzquierda,pos.y)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	EAction.handleUserMessage("ha entrado 3333333333 -> ");
	
	
	
	return op_corte;
}



function numeroPestanas003(alturas){

	var nPestanas=0
	
	if (alturas[0]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[1]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[2]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[3]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[4]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[5]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[6]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[7]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[8]>0) {
		nPestanas=nPestanas+1
	}
	if (alturas[9]>0) {
		nPestanas=nPestanas+1
	}
	
	
	return nPestanas
	
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F4 - F5 // //////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado107(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	//Puntos trayectoria 
			//Son los mismos puntos que la figura 001 (el unico que cambia es fresado6 y fresado14)
	var fresado1 = new RVector(pos.x,pos.y+alaInferior) 
	var fresado2 = new RVector(pos.x+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	
	
	
	
	
	var fresado6 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y) //punto fresado abajo a la izquierda [hay que corregirlo]
	
	
	
	
	var fresado9 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	var fresado12 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
	var fresado13 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca)
	
	var fresado14 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca+pliegueSuperior)

	var line = new RLineEntity(document, new RLineData( fresado1 , fresado5 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado9 , fresado13 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado3 , fresado11 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
	op_fresado.addObject(line,false);

	
	
	
	//anchura1
	if (anchura1>pliegueSuperior){
		var fresado17 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado19 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
	        op_fresado.addObject(line,false);
        }
	}
	
	
	//anchura2
	if (anchura2>pliegueSuperior*2){		
		var fresado23 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
	    op_fresado.addObject(line,false);
		
		if (crearFresado==1){
			var fresado22 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
	        op_fresado.addObject(line,false);
			
			var fresado25 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado26 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	
	//anchura3
	if (anchura3>pliegueSuperior*2){
		var fresado29 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado30 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
	    op_fresado.addObject(line,false);
		

		if (crearFresado==1){
			var fresado28 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado27 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado28 , fresado27 ));
	        op_fresado.addObject(line,false);
			
			var fresado31 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado32 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	
	//anchura4
	if (anchura4>pliegueSuperior*2){
		var fresado35 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado35 , fresado14 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado34 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado33 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
	        op_fresado.addObject(line,false);
			
        }
	}
	
	
	
	return op_fresado;

}



function dibujarFresado108(modelo,di,pos,document){
	
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	//Puntos trayectoria 
	var fresado1 = new RVector(pos.x,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	var fresado6 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior)
	var fresado7 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior)
	var fresado8 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y)

	var fresado9 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	var fresado12 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
	var fresado13 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca)
	var fresado14 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca)
	var fresado15 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca)
	
	var fresado16 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	
	var line = new RLineEntity(document, new RLineData( fresado1 , fresado6 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado9 , fresado14 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado3 , fresado11 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado5 , fresado13 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado8 , fresado16 ));
	op_fresado.addObject(line,false);

	
	
	
	
	//anchura1
	if (anchura1>pliegueSuperior){
		var fresado17 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado19 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	

	//anchura2
	if (anchura2>pliegueSuperior*2) {
		var fresado23 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado22 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
	        op_fresado.addObject(line,false);
			
			var fresado25 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado26 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	
	//anchura3
	if (anchura3>pliegueSuperior*2){
		var fresado29 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado30 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
	    op_fresado.addObject(line,false);
		
		if (crearFresado==1){ 
			var fresado28 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado27 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
	        op_fresado.addObject(line,false);
			
			var fresado31 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado32 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	
	//anchura4
	if (anchura4>pliegueSuperior*2){
		var fresado35 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado36 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado34 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado33 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
	        op_fresado.addObject(line,false);
		
			var fresado37 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado38 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	
	//anchura5
	if (anchura5>pliegueSuperior*2){		
		var fresado41 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado41 , fresado16 ));
	    op_fresado.addObject(line,false);
		
		if (crearFresado==1){
			var fresado40 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado39 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
	        op_fresado.addObject(line,false);
				
        }
    }
	
	
	
	
	
	
	return op_fresado;

}



function dibujarCorte107(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte

	var repeticiones
	var anchuras
	var nAnchuras

	
	if (modelo==107){
		repeticiones=2
		anchuras=[anchura1,anchura2,anchura3,anchura4]
		nAnchuras=3 //numero de valores del vector "anchuras"
		anchura5=0
    }else if (modelo==108) {
		repeticiones=3
		anchuras=[anchura1,anchura2,anchura3,anchura4,anchura5]
		nAnchuras=4 //numero de valores del vector "anchuras"
    }
    
	
	
	
	
	
	
	
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Anchura primera
	if (anchura1>alaInferior){
		var corte1 = new RVector(pos.x,pos.y+alaInferior)
		var corte2 = new RVector(pos.x,pos.y)
		var corte3 = new RVector(pos.x+anchura1-alaInferior,pos.y)
        var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
	    op_corte.addObject(line,false);
	
		
    }else{
		var corte1 = new RVector(pos.x,pos.y+alaInferior)
		var corte3 = new RVector(pos.x,pos.y+alaInferior-anchura1)
        var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
	    op_corte.addObject(line,false);
    }
	var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior)
    var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);
	
	
	
	//Bucle anchuras intermedias
	//var anchuras={anchura1,anchura2,anchura3,anchura4}
	//var repeticiones=2 //math.length(anchuras -2)
	var anchoA=anchuras[0]
	for(var n=1; n<(repeticiones+1);n=n+1){
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
        var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
	    op_corte.addObject(line,false);
		
		if (anchuras[n]>alaInferior*2) {
			var corte2 = new RVector(pos.x+anchoA+alaInferior,pos.y)
			var corte3 = new RVector(pos.x+anchoA+anchuras[n]-alaInferior,pos.y)
            var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
            op_corte.addObject(line,false);
			
        }else{
			var corte3 = new RVector(pos.x+anchoA+anchuras[n]/2,pos.y+alaInferior-anchuras[n]/2)
            var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
	        op_corte.addObject(line,false);
		
        }
		
		var corte4 = new RVector(pos.x+anchoA+anchuras[n],pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		anchoA=anchoA+anchuras[n]
    }
	
	
	var corte6=corte4
	
	
	//Anchura ultima	
	if (anchuras[nAnchuras]>alaInferior){ //Para que acabe en pico o acabe en plano el ala inferior
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+anchoA+alaInferior,pos.y)
		
		if (alaInferior>alaDerecha){ //para evitar que el pico de abajo a la derecha sea muy muy grande
			
			var corte3 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y)
			var corte4 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-alaDerecha)
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior)

            var line = new RLineEntity(document, new RLineData( corte6 , corte1 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
            op_corte.addObject(line,false);


			
        }else {
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaInferior,pos.y)
            var line = new RLineEntity(document, new RLineData( corte6 , corte1 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte2 , corte5 ));
            op_corte.addObject(line,false);
        }

    }else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			
		if (alaInferior>alaDerecha){ //para evitar que el pico de abajo a la derecha sea muy muy grande
			var corte3 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			var corte4 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-anchuras[nAnchuras]+alaDerecha)
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-alaDerecha)
            var line = new RLineEntity(document, new RLineData( corte6 , corte1 ));
	        op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	        op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
	        op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	        op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
	        op_corte.addObject(line,false);
		
			
        }else {
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
            var line = new RLineEntity(document, new RLineData( corte6 , corte1 ));
	        op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	        op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte2 , corte5 ));
	        op_corte.addObject(line,false);

        }
		
    }
	
	var corte4 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
	var corteAux = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+alaDerecha)
	var corte6 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+alturaPlaca-alaDerecha)
	var corte7 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
	var corte8 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte9 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca+pliegueSuperior)

    var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
	op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte4 , corteAux ));
	op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corteAux , corte6 ));
	op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
	op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
	op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
	op_corte.addObject(line,false);
    

	
	
	
	
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	anchoA=anchura1+anchura2+anchura3+anchura4+anchura5
	
	//Anchura primera
	if (anchuras[nAnchuras]>pliegueSuperior){
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte2 = new RVector(pos.x+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte3 = new RVector(pos.x+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
	    op_corte.addObject(line,false);

    }else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+anchuras[nAnchuras])
		var corte3 = new RVector(pos.x+anchoA-anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
	    op_corte.addObject(line,false);
		
    }
	
	
	anchoA=anchoA-anchuras[nAnchuras]
	var m=repeticiones
	for (var n=1; n<(repeticiones+1) ;n=n+1){
		
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
	    op_corte.addObject(line,false);
		
		if (anchuras[m]>pliegueSuperior*2){
			var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte4 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte5 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
            op_corte.addObject(line,false);
			
        }else{
			var corte5 = new RVector(pos.x+anchoA-anchuras[m]/2,pos.y+alaInferior+alturaPlaca+anchuras[m]/2)
            var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
	        op_corte.addObject(line,false);
			
        }
		
		var corte3 = new RVector(pos.x+anchoA-anchuras[m],pos.y+alaInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte5 , corte3 ));
	    op_corte.addObject(line,false);
		
		
		anchoA=anchoA-anchuras[m]
		m=m-1
    }	
	
	
	var corte4=corte3
	
	
	
	//Anchura ultima
	if (anchura1>pliegueSuperior){
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corteaux = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
        var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
        op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
        op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
        op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte3 , corteaux ));
        op_corte.addObject(line,false);
	
		
    }else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		var corteaux = new RVector(pos.x+anchoA-anchura1,pos.y+alaInferior+alturaPlaca+anchura1)
        var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
        op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte1 , corteaux ));
        op_corte.addObject(line,false);

    }
	var corte4 = new RVector(pos.x,pos.y+alaInferior)
    var line = new RLineEntity(document, new RLineData( corteaux , corte4 ));
	op_corte.addObject(line,false);
	
	
	
	return op_corte;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F6 // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado109(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (var n=0; n<4 ;n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
		}
	} 
	
	
	//Puntos trayectoria 
   
	
	var fresado11 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior)
	var fresado12 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado15 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
	
	var fresado16 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+pliegueIzq)
	var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado18 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado19 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado20 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado22 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)

	var line = new RLineEntity(document, new RLineData( fresado11 , fresado15 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado22 , fresado17 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado17 , fresado16 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado11 , fresado18 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado19 , fresado12 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado13 , fresado20 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado21 , fresado14 ));
	op_fresado.addObject(line,false);

	
	
	
	
	
	//anchura1 - Inferior
	if (anchura1>pliegueInf1){
		var fresado10 = new RVector(pos.x+alaIzquierda,pos.y+pliegueInferior+alaInferior-pliegueIzq) 
		var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var fresado2 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var fresado3 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueInf1,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado1 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado11 ));
		op_fresado.addObject(line,false);

	} 
	
	//anchura2 - Inferior
	if (anchura2>(pliegueInf2*2)){
		var fresado4 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var fresado5 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado5 ));
		op_fresado.addObject(line,false);
	}
	
	//anchura3 - Inferior
	if (anchura3>(pliegueInf3*2)){
		var fresado6 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var fresado7 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado7 ));
		op_fresado.addObject(line,false);
		
	} 
	
	//anchura4 - Inferior
	if (anchura4>pliegueInf4){
		var fresado8 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var fresado9 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado9 ));
		op_fresado.addObject(line,false);
	} 
	
	
	

	
		

	
	//anchura1 - Superior
	if (anchura1>(pliegueSuperior*2)){
		var fresado25 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado26 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ //Esto es para hacer el fresado externo o no
			var fresado23 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado24 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
			op_fresado.addObject(line,false);
			
			var fresado27 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado28 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var fresado31 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado32 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado29 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado30 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
			op_fresado.addObject(line,false);
			
			var fresado33 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado34 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2){ 
		var fresado37 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado38 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
		op_fresado.addObject(line,false);
	   
		
		if (crearFresado==1){ 
			var fresado35 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado36 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
			op_fresado.addObject(line,false);
			
			var fresado39 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado40 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura4 - Superior
	if (anchura4>pliegueSuperior){
		var fresado43 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado44 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado41 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado42 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	
	
	return op_fresado;
}
    
 
 
function dibujarCorte109(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (var n=0 ; n<7 ; n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
		}
	}
	
	
	
	//Corte inferior anchura1
	var corte1 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior)
		
	if (anchura1>pliegueInf1){
		var corte2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-pliegueIzq)
		var corte3 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueIzq)
		var corte4 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var corte5 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var corte6 = new RVector(pos.x+alaIzquierda,pos.y+pliegueInferior-pliegueInf1)
		var corte7 = new RVector(pos.x+alaIzquierda+pliegueIzq-alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte8 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var corte9 = new RVector(pos.x+alaIzquierda+pliegueIzq+alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte10 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueInf1-alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte11 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+pliegueInferior)
		
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
	}
	
	
	//Corte inferior anchura2
	if (anchura2>pliegueInf2*2){
		var corte12 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueInf2+alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte14 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueInf2-alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte15 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);

	}else{
		var corte12 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior-anchura2/2)
		var corte15 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)

		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte15 ));
		op_corte.addObject(line,false);

	}
	
	//Corte inferior anchura3
	if (anchura3>pliegueInf3*2){
		var corte16 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueInf3+alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte18 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueInf3-alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte19 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
		op_corte.addObject(line,false);

	}else{
		var corte16 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior-anchura3/2)
		var corte19 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte19 ));
		op_corte.addObject(line,false);

	}
	
	//Corte inferior anchura4
	if (anchura4>pliegueInf4){
		var corte20 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var corte21 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueInf4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
		var corte22 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4)
		var corte23 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte19 , corte20 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte22 , corte23 ));
		op_corte.addObject(line,false);
	  

	}else{
		var corte20 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var corte21 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior+alaInferior-anchura4)
		var corte23 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte19 , corte20 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte21 , corte23 ));
		op_corte.addObject(line,false);


	}
	
	
	
	
	
	
	
	//Anchura 4 - Superior
	if (anchura4>pliegueSuperior){
		var corte24 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte25 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte26 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte27 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte23 , corte24 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte24 , corte25 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte25 , corte26 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte26 , corte27 ));
		op_corte.addObject(line,false);

	}else{
		var corte24 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura4)
		var corte27 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte23 , corte24 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte24 , corte27 ));
		op_corte.addObject(line,false);

	}
	
	
	//Anchura 3 - Superior
	if (anchura3>(pliegueSuperior*2)){
		var corte28 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
		op_corte.addObject(line,false);

	}else{
		var corte28 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3/2)
		var corte32 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte32 ));
		op_corte.addObject(line,false);

	}
	
	
	//Anchura 2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var corte33 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte34 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte37 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
		op_corte.addObject(line,false);

	}else{
		var corte33 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura2/2)
		var corte37 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
		op_corte.addObject(line,false);

	}
	
	
	//Anchura 1 - Superior
	if (anchura1>(pliegueSuperior*2)){
		var corte38 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte39 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte42 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte42 ));
		op_corte.addObject(line,false);

	}else{
		var corte38 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1/2)
		var corte42 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte42 ));
		op_corte.addObject(line,false);

	}
	
	
	
	
	var corte43 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueIzq)
	var corte44 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var corte45 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte46 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+pliegueIzq)
	var corte47 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+pliegueIzq)
	var corte48 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+pliegueInferior)

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
	



	return op_corte;

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F7 // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado110(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (var n=0; n<4 ;n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
        }
    }
	
	
	var fresado11 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado12 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
	
	
	
	var fresado16 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior) 
	var fresado17 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado18 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado19 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado20 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado22 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	
	
	if (anchura4>pliegueInf4){
		var fresado15 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior-pliegueInf4-alaInferior)
        var line = new RLineEntity(document, new RLineData( fresado15 , fresado22 ));
	    op_fresado.addObject(line,false);
		
    }else{
        var line = new RLineEntity(document, new RLineData( fresado14 , fresado22 ));
	    op_fresado.addObject(line,false);

    }
	    var line = new RLineEntity(document, new RLineData( fresado16 , fresado14 ));
	    op_fresado.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( fresado20 , fresado13 ));
	    op_fresado.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( fresado12 , fresado19 ));
	    op_fresado.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( fresado18 , fresado11 ));
	    op_fresado.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( fresado17 , fresado21 ));
	    op_fresado.addObject(line,false);
	
	
	
	
	
	
	//anchura1 - Inferior
	if (anchura1>pliegueInf1){
		//var fresado10 = new RVector(pos.x,pos.y+pliegueInferior+alaInferior) 
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		//var fresado2 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var fresado3 = new RVector(pos.x+anchura1-pliegueInf1,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		
		//dibujarFresado_auxiliar(doc,fresado10,fresado1)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
	    op_fresado.addObject(line,false);
		//dibujarFresado_auxiliar(doc,fresado2,fresado11)
    }
	
	//anchura2 - Inferior
	if (anchura2>(pliegueInf2*2)){
		var fresado4 = new RVector(pos.x+anchura1+pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var fresado5 = new RVector(pos.x+anchura1+anchura2-pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
        var line = new RLineEntity(document, new RLineData( fresado4 , fresado5 ));
	    op_fresado.addObject(line,false);
		
    }
	
	//anchura3 - Inferior
	if (anchura3>(pliegueInf3*2)){
		var fresado6 = new RVector(pos.x+anchura1+anchura2+pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var fresado7 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
        var line = new RLineEntity(document, new RLineData( fresado6 , fresado7 ));
	    op_fresado.addObject(line,false);
		
    }
	
	//anchura4 - Inferior
	if (anchura4>pliegueInf4){
		var fresado8 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var fresado9 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
        var line = new RLineEntity(document, new RLineData( fresado8 , fresado9 ));
	    op_fresado.addObject(line,false);
		
    } 
	
	
	

	
	

	
	//anchura1 - Superior
	if (anchura1>(pliegueSuperior*2)){
		var fresado25 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado26 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ //Esto es para hacer el fresado externo o no
			var fresado27 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado28 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
	        op_fresado.addObject(line,false);
		
        }
    }
	
	//anchura2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var fresado31 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado32 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado29 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado30 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
	        op_fresado.addObject(line,false);
			
			var fresado33 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado34 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2){
		var fresado37 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado38 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado35 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado36 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
	        op_fresado.addObject(line,false);
			
			var fresado39 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado40 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	//anchura4 - Superior
	if (anchura4>pliegueSuperior){ 
		var fresado43 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado44 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado41 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado42 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
	        op_fresado.addObject(line,false);
        }
    }
	
	
	
	return op_fresado;
}



function dibujarCorte110(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (var n=0; n<4 ;n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
        }
    }
	
	
	
	//Corte inferior anchura1
	var corte1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
	
	
	if (anchura1>pliegueInf1){
		var corte2 = new RVector(pos.x,pos.y+pliegueInferior-pliegueInf1)
		var corte3 = new RVector(pos.x+anchura1-pliegueInf1-alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	    op_corte.addObject(line,false);

    }else{
		var corte2 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-anchura1)
		var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte2 , corte4 ));
	    op_corte.addObject(line,false);
    }
	
	//Corte inferior anchura2
	if (anchura2>pliegueInf2*2){
		var corte12 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+anchura1+pliegueInf2+alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte14 = new RVector(pos.x+anchura1+anchura2-pliegueInf2-alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte15 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
	    op_corte.addObject(line,false);

    }else{
		var corte12 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior-anchura2/2)
		var corte15 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte13 , corte15 ));
	    op_corte.addObject(line,false);

    }
	
	
	//Corte inferior anchura3
	if (anchura3>pliegueInf3*2){
		var corte16 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+anchura1+anchura2+pliegueInf3+alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte18 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueInf3-alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte19 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
	    op_corte.addObject(line,false);

    }else{
		var corte16 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior-anchura3/2)
		var corte19 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte17 , corte19 ));
	    op_corte.addObject(line,false);

    }
	
	//Corte inferior anchura4
	if (anchura4>pliegueInf4){
		if (alaDerecha>pliegueInf4/2){
			var corte20 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
			var corte21 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueInf4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
			var corte22 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
			var corte23 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4+alaInferior)
			var corte24 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueInf4/2,pos.y+pliegueInferior-pliegueInf4+alaInferior+pliegueInf4/2)
			var corte26 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior+alaInferior)
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
            var line = new RLineEntity(document, new RLineData( corte24 , corte26 ));
            op_corte.addObject(line,false);
	
			
        }else{
			var corte20 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
			var corte21 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueInf4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
			var corte22 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
			var corte23 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4+alaInferior)
			var corte24 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+pliegueInferior-pliegueInf4+alaInferior+alaDerecha)
			var corte25 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+pliegueInferior-pliegueInf4+alaInferior+pliegueInferior-alaDerecha)
			var corte26 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4+alaInferior+pliegueInferior)
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

        }
    }else{ //anchura4<pliegueInf4
		var corte20 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var corte21 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior+alaInferior-anchura4)
		var corte26 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte19 , corte20 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte21 , corte26 ));
	    op_corte.addObject(line,false);

    }
	
	
	

	
	var corte27 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha)
	var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha)
	var corte29 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var corte30 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte31 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte32 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
	var corte33 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
	var corte34 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte35 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)

    var line = new RLineEntity(document, new RLineData( corte26 , corte27 ));
	op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
	op_corte.addObject(line,false);
	

	
	


	//Anchura 3 - Superior
	if (anchura3>(pliegueSuperior*2)){
		var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte35 , corte28 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
	    op_corte.addObject(line,false);

    }else{
		var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3/2)
		var corte32 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte35 , corte28 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte28 , corte32 ));
	    op_corte.addObject(line,false);

    }
	
	
	//Anchura 2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var corte33 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte34 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte37 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
	    op_corte.addObject(line,false);

    }else{
		var corte33 = new RVector(pos.x+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura2/2)
		var corte37 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte33 , corte37 ));
	    op_corte.addObject(line,false);

    }
	
	
	
	//Anchura 1 - Superior
	if (anchura1>(pliegueSuperior*2)){n
		var corte38 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte39 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
	    op_corte.addObject(line,false);

    }else{
		var corte38 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		var corte41 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte38 , corte41 ));
	    op_corte.addObject(line,false);
	
    }
	
    var line = new RLineEntity(document, new RLineData( corte41 , corte1 ));
	op_corte.addObject(line,false);
	
	
	
	return op_corte;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F8 // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado111(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4, pliegueInf5]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (var n=0 ; n<5 ; n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
        }
    }
	
	
	
	//Puntos trayectoria 

	
	var fresado11 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado12 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
	var fresado15 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior) //nuevo
	
	
	
	var fresado16 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior) 
	var fresado17 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado18 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado19 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado20 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado22 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca) //muevo
	
	var fresado23 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	
	
	
	
	
	if (anchura5>pliegueInf5){
		var fresado14b = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior-pliegueInf5-alaInferior)
        var line = new RLineEntity(document, new RLineData( fresado14b , fresado23 ));
	    op_fresado.addObject(line,false);
		
    }else{
        var line = new RLineEntity(document, new RLineData( fresado15 , fresado23 ));
	    op_fresado.addObject(line,false);
    }
	
	var line = new RLineEntity(document, new RLineData( fresado16 , fresado15 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado15 , fresado22 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado21 , fresado14 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado13 , fresado20 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado19 , fresado12 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado11 , fresado18 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado17 , fresado22 ));
	op_fresado.addObject(line,false);
	
	
	
	
	
	//anchura1 - Inferior
	if (anchura1>pliegueInf1){
		//var fresado10 = new RVector(pos.x,pos.y+pliegueInferior+alaInferior) 
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		//var fresado2 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var fresado3 = new RVector(pos.x+anchura1-pliegueInf1,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		
		//dibujarFresado_auxiliar(doc,fresado10,fresado1)
        var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
	    op_fresado.addObject(line,false);
		
		//dibujarFresado_auxiliar(doc,fresado2,fresado11)
    } 
	
	//anchura2 - Inferior
	if (anchura2>(pliegueInf2*2)){
		var fresado4 = new RVector(pos.x+anchura1+pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var fresado5 = new RVector(pos.x+anchura1+anchura2-pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
        var line = new RLineEntity(document, new RLineData( fresado4 , fresado5 ));
	    op_fresado.addObject(line,false);
		
    }
	
	//anchura3 - Inferior
	if (anchura3>(pliegueInf3*2)){
		var fresado6 = new RVector(pos.x+anchura1+anchura2+pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var fresado7 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
        var line = new RLineEntity(document, new RLineData( fresado6 , fresado7 ));
	    op_fresado.addObject(line,false);
    } 
	
	//anchura4 - Inferior
	if (anchura4>(pliegueInf4*2)){
		var fresado8 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var fresado9 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
        var line = new RLineEntity(document, new RLineData( fresado8 , fresado9 ));
	    op_fresado.addObject(line,false);
		
    } 
	
	//anchura4 - Inferior
	if (anchura5>pliegueInf5){
		var fresado10 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueInf5,pos.y+alaInferior+pliegueInferior-pliegueInf5)
		var fresado11 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior-pliegueInf5)
        var line = new RLineEntity(document, new RLineData( fresado10 , fresado11 ));
	    op_fresado.addObject(line,false);
		
    } 
	
	
	

	
	

	
	//anchura1 - Superior
	if (anchura1>(pliegueSuperior*2)){
		var fresado25 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado26 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){  //Esto es para hacer el fresado externo o no
			var fresado27 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado28 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
	        op_fresado.addObject(line,false);
        }
    }
	
	//anchura2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var fresado31 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado32 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado29 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado30 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
	        op_fresado.addObject(line,false);
			
			var fresado33 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado34 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2){
		var fresado37 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado38 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado35 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado36 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
	        op_fresado.addObject(line,false);
			
			var fresado39 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado40 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	//anchura4 - Superior
	if (anchura4>pliegueSuperior*2){
		var fresado43 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado44 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado41 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado42 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
	        op_fresado.addObject(line,false);
			
			var fresado45 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado46 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado45 , fresado46 ));
	        op_fresado.addObject(line,false);
        }
    }
	
	//anchura5 - Superior
	if (anchura5>pliegueSuperior){
		var fresado49 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado50 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado49 , fresado50 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado47 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado48 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado47 , fresado48 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	
	return op_fresado;
}



function dibujarCorte111(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4, pliegueInf5]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (var n=1;  n<5; n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
        }
    }
	
	

	
	//Corte inferior anchura1
	var corte1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
	
	
	if (anchura1>pliegueInf1){
		var corte2 = new RVector(pos.x,pos.y+pliegueInferior-pliegueInf1)
		var corte3 = new RVector(pos.x+anchura1-pliegueInf1-alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	    op_corte.addObject(line,false);

    }else{ 
		var corte2 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-anchura1)
		var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte2 , corte4 ));
	    op_corte.addObject(line,false);
		
    }
	
	
	//Corte inferior anchura2
	if (anchura2>pliegueInf2*2){
		var corte12 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+anchura1+pliegueInf2+alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte14 = new RVector(pos.x+anchura1+anchura2-pliegueInf2-alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte15 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
	    op_corte.addObject(line,false);

    }else{
		var corte12 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior-anchura2/2)
		var corte15 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte13 , corte15 ));
	    op_corte.addObject(line,false);

    }
	
	
	//Corte inferior anchura3
	if (anchura3>pliegueInf3*2){
		var corte16 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+anchura1+anchura2+pliegueInf3+alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte18 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueInf3-alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte19 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
	    op_corte.addObject(line,false);

    }else{
		var corte16 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior-anchura3/2)
		var corte19 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte17 , corte19 ));
	    op_corte.addObject(line,false);

    }
	
	//Corte inferior anchura4
	if (anchura4>pliegueInf4*2){
		var corte16 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueInf4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
		var corte18 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueInf4-alaInferior,pos.y+pliegueInferior-pliegueInf4)
		var corte19b = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte19 , corte16 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte18 , corte19b ));
	    op_corte.addObject(line,false);

    }else{
		var corte16 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4/2,pos.y+alaInferior+pliegueInferior-anchura4/2)
		var corte19b = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte19 , corte16 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte17 , corte19b ));
	    op_corte.addObject(line,false);

    }
	
	//Corte inferior anchura5
	if (anchura5>pliegueInf5){
		if (alaDerecha>pliegueInf5/2){
			var corte20 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
			var corte21 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueInf5+alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte22 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte23 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+pliegueInferior-pliegueInf5+alaInferior)
			var corte24 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueInf5/2,pos.y+pliegueInferior-pliegueInf5+alaInferior+pliegueInf5/2)
			var corte26 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+pliegueInferior+alaInferior)
            var line = new RLineEntity(document, new RLineData( corte19b , corte20 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte22 , corte23 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte23 , corte24 ));
            op_corte.addObject(line,false);
            var line = new RLineEntity(document, new RLineData( corte24 , corte26 ));
            op_corte.addObject(line,false);
	
			
        }else{
			var corte20 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
			var corte21 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueInf5+alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte22 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte23 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+pliegueInferior-pliegueInf5+alaInferior)
			var corte24 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+alaDerecha,pos.y+pliegueInferior-pliegueInf5+alaInferior+alaDerecha)
			var corte25 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+alaDerecha,pos.y+pliegueInferior-pliegueInf5+alaInferior+pliegueInferior-alaDerecha)
			var corte26 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+pliegueInferior-pliegueInf5+alaInferior+pliegueInferior)
            var line = new RLineEntity(document, new RLineData( corte19b , corte20 ));
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
            var line = new RLineEntity(document, new RLineData( corte22 , corte26 ));
            op_corte.addObject(line,false);
        }

        
        }else{ //anchura5<pliegueInf5
		var corte20 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
		var corte21 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+pliegueInferior+alaInferior-anchura5)
		var corte26 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior)
        var line = new RLineEntity(document, new RLineData( corte19b , corte20 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte21 , corte26 ));
	    op_corte.addObject(line,false);

        }
	
	
	
	
	
	
	
	
	var corte27 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha)
	var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha)
	var corte29 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var corte30 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte31 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte32 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
	var corte33 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
	var corte34 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte35 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)

    var line = new RLineEntity(document, new RLineData( corte26 , corte27 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
    op_corte.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
    op_corte.addObject(line,false);
	

	
	
	
	
	
	
	
	//Anchura 4 - Superior
	if (anchura4>(pliegueSuperior*2)){
		var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte35 , corte28 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
	    op_corte.addObject(line,false);

    }else{
		var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura4/2)
		var corte32 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte28 , corte32 ));
	    op_corte.addObject(line,false);

    }
	

	//Anchura 3 - Superior
	if (anchura3>(pliegueSuperior*2) ){
		var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32b = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte32 , corte28 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte31 , corte32b ));
	    op_corte.addObject(line,false);

    }else{
		var corte28 = new RVector(pos.x+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3/2)
		var corte32b = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte32 , corte28 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte28 , corte32b ));
	    op_corte.addObject(line,false);

    }
	
	
	//Anchura 2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var corte33 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte34 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte37 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte32b , corte33 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
	    op_corte.addObject(line,false);

    }else{
		var corte33 = new RVector(pos.x+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura2/2)
		var corte37 = new RVector(pos.x+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte32b , corte33 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte33 , corte37 ));
	    op_corte.addObject(line,false);

    }
	
	
	//Anchura 1 - Superior
	if (anchura1>(pliegueSuperior*2)){ 
		var corte38 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte39 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
	    op_corte.addObject(line,false);

    }else{
		var corte38 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		var corte41 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
        var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
	    op_corte.addObject(line,false);
        var line = new RLineEntity(document, new RLineData( corte37 , corte41 ));
	    op_corte.addObject(line,false);
    }
    var line = new RLineEntity(document, new RLineData( corte41 , corte1 ));
	op_corte.addObject(line,false);
	
	
	return op_corte;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F9 // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado113(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	//Puntos trayectoria	
	var fresado11 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
	var fresado12 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior)
	var fresado13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior)
	var fresado14 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado15 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	
	var fresado16 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	
	var fresado18 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+alturaPlaca)
	var fresado19 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado20 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
	var fresado22 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca)
	
	var line = new RLineEntity(document, new RLineData( fresado16 , fresado15 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado22 , fresado17 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado17 , fresado16 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado11 , fresado18 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado19 , fresado12 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado13 , fresado20 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado21 , fresado14 ));
	op_fresado.addObject(line,false);
	
	
	
	
	
	//anchura1 - Superior
	if (anchura1>(pliegueSuperior*2)) {
		var fresado25 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado26 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
		op_fresado.addObject(line,false);
	
		
		if (crearFresado==1) { //Esto es para hacer el fresado externo o no
			var fresado23 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado24 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
			op_fresado.addObject(line,false);
			var fresado27 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado28 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
		}
	}
	
	//anchura2 - Superior
	if (anchura2>(pliegueSuperior*2)) {
		var fresado31 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado32 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1) {
			var fresado29 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado30 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
			op_fresado.addObject(line,false);
			var fresado33 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado34 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
			op_fresado.addObject(line,false);
		}
	}
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2) {
		var fresado37 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado38 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1) {
			var fresado35 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado36 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
			op_fresado.addObject(line,false);
			var fresado39 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado40 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
			op_fresado.addObject(line,false);
		}
	}
	
	//anchura4 - Superior
	if (anchura4>pliegueSuperior) {
		var fresado43 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado44 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1) {
			var fresado41 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado42 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	
	
	
	return op_fresado; 
}



function dibujarCorte113(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	//Corte inferior
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	
	//Tramo pligue izquierda //Inferior
	if (pliegueIzq > alaInferior) {
		var corte2 = new RVector(pos.x+alaIzquierda,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+pliegueIzq-alaInferior,pos.y)
		var corte4 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
	} else {
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior-pliegueIzq)
		var line = new RLineEntity(document, new RLineData( corte1 , corte4 ));
		op_corte.addObject(line,false);
	}
	
	var corte5 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
	var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
	op_corte.addObject(line,false);
	
	
	
	//Tramo anchura 1 //Inferior
	if (anchura1 > alaInferior*2) { 
		var corte6 = new RVector(pos.x+alaIzquierda+pliegueIzq+alaInferior,pos.y)
		var corte7 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-alaInferior,pos.y)
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
	} else { 
		var corte7 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1/2,pos.y+alaInferior-anchura1/2)
		var line = new RLineEntity(document, new RLineData( corte5 , corte7 ));
		op_corte.addObject(line,false);
	}
	var corte8 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior)
	var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
	op_corte.addObject(line,false);
	
	
	//Tramo anchura 2 //Inferior
	if (anchura2 > alaInferior*2) { 
		var corte9 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+alaInferior,pos.y)
		var corte10 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-alaInferior,pos.y)
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
	} else { 
		var corte10 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2/2,pos.y+alaInferior-anchura2/2)
		var line = new RLineEntity(document, new RLineData( corte8 , corte10 ));
		op_corte.addObject(line,false);
	}
	var corte11 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior)
	var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
	op_corte.addObject(line,false);
	
	
	//Tramo anchura 3 //Inferior
	if (anchura3 > alaInferior*2) { 
		var corte12 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+alaInferior,pos.y)
		var corte13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-alaInferior,pos.y)
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		
	} else {
		var corte13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3/2,pos.y+alaInferior-anchura3/2)
		var line = new RLineEntity(document, new RLineData( corte11 , corte13 ));
		op_corte.addObject(line,false);
	}
	var corte14 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
	op_corte.addObject(line,false);
	
	
	
	//Tramo anchura 4 //Inferior
	if (anchura4 > alaInferior) { 
		var corte15 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+alaInferior,pos.y)
		var corte16 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y)
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
	} else {
		var corte16 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior-anchura4)
		var line = new RLineEntity(document, new RLineData( corte14 , corte16 ));
		op_corte.addObject(line,false);
	}


	
	
	
	
	
	
	
	
	//Anchura 4 - Superior
	if (anchura4>pliegueSuperior) {
		var corte24 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte25 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte26 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte27 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte16 , corte24 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte24 , corte25 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte25 , corte26 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte26 , corte27 ));
		op_corte.addObject(line,false);
	} else {
		var corte24 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca+anchura4)
		var corte27 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte16 , corte24 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte24 , corte27 ));
		op_corte.addObject(line,false);
	}
	
	
	//Anchura 3 - Superior
	if (anchura3>(pliegueSuperior*2)) {
		var corte28 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
		op_corte.addObject(line,false);
	} else {
		var corte28 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3/2,pos.y+alaInferior+alturaPlaca+anchura3/2)
		var corte32 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte32 ));
		op_corte.addObject(line,false);
	}
	
	
	//Anchura 2 - Superior
	if (anchura2>(pliegueSuperior*2)) {
		var corte33 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte34 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte37 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
		op_corte.addObject(line,false);
		
	} else {
		var corte33 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2/2,pos.y+alaInferior+alturaPlaca+anchura2/2)
		var corte37 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte37 ));
		op_corte.addObject(line,false);
		
	}
	
	
	//Anchura 1 - Superior
	if (anchura1>(pliegueSuperior*2)) {
		var corte38 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte39 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x+alaIzquierda+pliegueIzq+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte42 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte42 ));
		op_corte.addObject(line,false);
		
	} else {
		var corte38 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1/2,pos.y+alaInferior+alturaPlaca+anchura1/2)
		var corte42 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte42 ));
		op_corte.addObject(line,false);
	}
	
	
	
	
	var corte43 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueIzq)
	var corte44 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var corte45 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
	var corte46 = new RVector(pos.x,pos.y+alaInferior)
	
	
	var line = new RLineEntity(document, new RLineData( corte42 , corte43 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte43 , corte44 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte44 , corte45 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte45 , corte46 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte46 , corte1 ));
	op_corte.addObject(line,false);
	
	
	
	return op_corte; 
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F10 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado114(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior) 
	var fresado2 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	
	
	
	
	
	var fresado6 = new RVector(pos.x+alaIzquierda,pos.y) //punto fresado abajo a la izquierda
	
	
	
	
	var fresado9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	var fresado12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
	var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca)
	
	var fresado14 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	
	
	var line = new RLineEntity(document, new RLineData( fresado1 , fresado5 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado9 , fresado13 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado3 , fresado11 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
	op_fresado.addObject(line,false);

	
	
	
	
	//anchura1
	if (anchura1>pliegueSuperior){
		var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);

		if (crearFresado==1){
			var fresado19 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura2
	if (anchura2>pliegueSuperior*2){
		
		var fresado23 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){
			var fresado22 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
			var fresado25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura3
	if (anchura3>pliegueSuperior*2){
		var fresado29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
		op_fresado.addObject(line,false);

		if (crearFresado==1){  
			var fresado28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado27 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);

			var fresado31 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
			op_fresado.addObject(line,false);

		}
	}
	
	
	//anchura4
	if (anchura4>pliegueSuperior){
		var fresado35 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado36 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
			op_fresado.addObject(line,false);

		}
	}
	
	

	return op_fresado;  

}



function dibujarCorte114(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	//var repeticiones
	//var anchuras
	//var nAnchuras

	var repeticiones=2
	var anchuras=[anchura1,anchura2,anchura3,anchura4]
	var nAnchuras=3 //numero de valores del vector "anchuras"
	var anchura5=0

	
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte2 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
	var corte3 = new RVector(pos.x+alaIzquierda+anchura1-alaInferior,pos.y)
	var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
	
	var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);

	
	
	//Bucle anchuras intermedias
	//var anchuras={anchura1,anchura2,anchura3,anchura4}
	//var repeticiones=2 //math.length(anchuras -2)
	var anchoA=anchuras[0]
	for (n=1; n<(repeticiones+1);n=n+1){
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		if (anchuras[n]>alaInferior*2){ 
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]-alaInferior,pos.y)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);

		}else{
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]/2,pos.y+alaInferior-anchuras[n]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
			op_corte.addObject(line,false);
			
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n],pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		anchoA=anchoA+anchuras[n]
	}	
	
	
	
	
	//Anchura ultima	
	if (anchuras[nAnchuras]>alaInferior){ //Para que acabe en pico o acabe en plano el ala inferior
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);
	}
	
	
	
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	anchoA=anchura1+anchura2+anchura3+anchura4+anchura5
	
	//Anchura primera
	if (anchuras[nAnchuras]>pliegueSuperior){
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte4 ));
		op_corte.addObject(line,false);

	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca+anchuras[nAnchuras])
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4 ));
		op_corte.addObject(line,false);
	}
	
	
	anchoA=anchoA-anchuras[nAnchuras]
	var m=repeticiones
	for (n=1; n<(repeticiones+1); n=n+1){ 
		
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		if (anchuras[m]>pliegueSuperior*2){ 
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte4b = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
			op_corte.addObject(line,false);

		}else{
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]/2,pos.y+alaInferior+alturaPlaca+anchuras[m]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
			op_corte.addObject(line,false);
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
		op_corte.addObject(line,false);
	
		
		anchoA=anchoA-anchuras[m]
		m=m-1
	}	
	
	var corteAux=corte4
	
	//Anchura ultima
	if (anchura1>pliegueSuperior){ 
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var line = new RLineEntity(document, new RLineData( corteAux , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchura1,pos.y+alaInferior+alturaPlaca+anchura1)
		var line = new RLineEntity(document, new RLineData( corteAux , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4 ));
		op_corte.addObject(line,false);
	}
	
	
	
	var corte4b = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte5 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte6 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var corte7 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca-alaIzquierda)
	var corte8 = new RVector(pos.x,pos.y+alaInferior+alaIzquierda)
	var corte9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	
	var line = new RLineEntity(document, new RLineData( corte4 , corte4b ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
	op_corte.addObject(line,false);

	
	return op_corte; 
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F11 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function dibujarFresado115(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (n=1 ; n<4 ; n=n+1){
		if (pliegueInferior<plieguesInf[n]) {
			pliegueInferior=plieguesInf[n]
		}
	}
	
	
	
	//Puntos trayectoria	
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
	
	var fresado16 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior) 
	var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado18 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var fresado2 = new RVector(pos.x+alaIzquierda,pos.y)
	
	
	var line = new RLineEntity(document, new RLineData( fresado16 , fresado14 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado20 , fresado13 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado12 , fresado19 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado18 , fresado11 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado17 , fresado21 ));
	op_fresado.addObject(line,false);
	
	
	
	
	
	
	
	//anchura1 - Inferior
	if (anchura1>pliegueInf1) {
		var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var fresado3 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInf1,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
	} 
	
	//anchura2 - Inferior
	if (anchura2>(pliegueInf2*2)) {
		var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var fresado5 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado5 ));
		op_fresado.addObject(line,false);
	}
	
	//anchura3 - Inferior
	if (anchura3>(pliegueInf3*2)) {
		var fresado6 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var fresado7 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado7 ));
		op_fresado.addObject(line,false);
	} 
	
	//anchura4 - Inferior
	if (anchura4>pliegueInf4) {
		var fresado8 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var fresado9 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado9 ));
		op_fresado.addObject(line,false);
	} 
	
	
	

	
	

	
	//anchura1 - Superior
	if (anchura1>(pliegueSuperior*2)) {
		var fresado25 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado26 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1) { //Esto es para hacer el fresado externo o no
			var fresado27 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado28 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
		}
	}
	
	//anchura2 - Superior
	if (anchura2>(pliegueSuperior*2)) {
		var fresado31 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1) {
			var fresado29 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado30 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
			op_fresado.addObject(line,false);
			var fresado33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
			op_fresado.addObject(line,false);
		}
	}
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2) {
		var fresado37 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado38 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1) {
			var fresado35 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado36 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
			op_fresado.addObject(line,false);
			var fresado39 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado40 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
			op_fresado.addObject(line,false);
		}
	}
	
	//anchura4 - Superior
	if (anchura4>pliegueSuperior) {
		var fresado43 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado44 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1) {
			var fresado41 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado42 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	var fresado2 = new RVector(pos.x+alaIzquierda,pos.y)
	var fresado25 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var line = new RLineEntity(document, new RLineData( fresado2 , fresado25 ));
	op_fresado.addObject(line,false);
	
	
	
	return op_fresado; 
}







function dibujarCorte115(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (n=1 ; n<4 ; n=n+1){
		if (pliegueInferior<plieguesInf[n]) {
			pliegueInferior=plieguesInf[n]
		}
	}
	
	
	
	//Corte inferior anchura1
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y)
	
	if (anchura1>pliegueInf1) {
		var corte2 = new RVector(pos.x+alaIzquierda,pos.y+pliegueInferior-pliegueInf1)
		var corte3 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInf1-alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
	}else{ 
		var corte2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-anchura1)
		var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte4 ));
		op_corte.addObject(line,false);
	}
	
	
	//Corte inferior anchura2
	if (anchura2>pliegueInf2*2) {
		var corte12 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInf2+alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInf2-alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
	}else{
		var corte12 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior-anchura2/2)
		var corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte15 ));
		op_corte.addObject(line,false);
	}
	
	
	//Corte inferior anchura3
	if (anchura3>pliegueInf3*2) {
		var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInf3+alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInf3-alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
		op_corte.addObject(line,false);
	}else{
		var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior-anchura3/2)
		var corte19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte19 ));
		op_corte.addObject(line,false);
	}
	
	//Corte inferior anchura4
	if (anchura4>pliegueInf4) {
		var corte20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInf4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
		var corte22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4)
		var corte23 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4+alaInferior)
		var corte24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4+alaInferior)
		var corte25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4+alaInferior+pliegueInferior)
		var corte26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior-pliegueInf4+alaInferior+pliegueInferior)
		
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
		
	}else{ //anchura4<pliegueInf4
		var corte20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+pliegueInferior+alaInferior-anchura4)
		var corte26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte19 , corte20 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte21 , corte26 ));
		op_corte.addObject(line,false);
		
	}
	
	
	
	
	
	
	

	//Anchura 4 - Superior
	if (anchura4>pliegueSuperior) {
		var corte32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte35 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte26 , corte32 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		
	}else{ //anchura4<pliegueSuperior
		var corte32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura4)
		var corte35 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte26 , corte32 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte32 , corte35 ));
		op_corte.addObject(line,false);
	}



	//Anchura 3 - Superior
	if (anchura3>(pliegueSuperior*2)) {
		var corte28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte35 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3/2)
		var corte32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte35 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte32 ));
		op_corte.addObject(line,false);
		
	}
	
	
	//Anchura 2 - Superior
	if (anchura2>(pliegueSuperior*2)) {
		var corte33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte37 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura2/2)
		var corte37 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte37 ));
		op_corte.addObject(line,false);
		
	}
	
	
	//Anchura 1 - Superior
	if (anchura1>(pliegueSuperior*2)) {
		var corte38 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte39 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte38 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		var corte41 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte41 ));
		op_corte.addObject(line,false);
		
	}
	
	var corteAux=corte41;
	
	var corte40 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte41 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte42 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda)
	var corte43 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alaIzquierda)
	var corte44 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	var corte45 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-alaIzquierda)
	var corte46 = new RVector(pos.x,pos.y+alaInferior+alaIzquierda)
	var corte47 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte48 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
	var corte49 = new RVector(pos.x+alaIzquierda,pos.y)
	
	var line = new RLineEntity(document, new RLineData( corteAux , corte40 ));
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
	
	
	
	
	
	return op_corte; 
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F12 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function dibujarFresado116(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	anchura4=0
	anchura5=0
	
	//Puntos trayectoria 
			//Son los mismos puntos que la figura 001 (el unico que cambia es fresado6 y fresado14)
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior) 
	var fresado2 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	
	var fresado6 = new RVector(pos.x+alaIzquierda,pos.y) //punto fresado abajo a la izquierda
	
	var fresado7 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior)
	
	var fresado9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	var fresado12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
	
	var fresado14 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)

	var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior+alturaPlaca)
	
	
	var line = new RLineEntity(document, new RLineData( fresado1 , fresado7 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado9 , fresado13 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado7 , fresado13 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado3 , fresado11 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
	op_fresado.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
	op_fresado.addObject(line,false);
	
	
	
	
	//anchura1
	if (anchura1>pliegueSuperior){
		var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){ 
			var fresado19 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura2
	if (anchura2>pliegueSuperior*2){
		
		var fresado23 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){ 
			var fresado22 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
			
			var fresado25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura3
	if (anchura3>pliegueSuperior*2){
		var fresado29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){ 
			var fresado28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado27 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
			
			var fresado31 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	//anchura4
	if (anchura4>pliegueSuperior){
		var fresado35 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado36 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){ 
			var fresado34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	
	
	
	
	
	return op_fresado; 
}






function dibujarCorte116(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var repeticiones
	var anchuras
	var nAnchuras

	repeticiones=1
	anchuras=[anchura1,anchura2,anchura3]
	nAnchuras=2 //numero de valores del vector "anchuras"
	anchura5=0
	anchura4=0
	
	
	
	
	
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte2 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
	var corte3 = new RVector(pos.x+alaIzquierda+anchura1-alaInferior,pos.y)
	var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
	
	var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);
	
	
	//Bucle anchuras intermedias
	//var anchuras={anchura1,anchura2,anchura3,anchura4}
	//var repeticiones=2 //math.length(anchuras -2)
	var anchoA=anchuras[0]
	for (n=1 ; n<(repeticiones+1) ; n=n+1){
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		
		if (anchuras[n]>alaInferior*2){
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]-alaInferior,pos.y)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			
		}else{
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]/2,pos.y+alaInferior-anchuras[n]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
			op_corte.addObject(line,false);
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n],pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		anchoA=anchoA+anchuras[n]
	}	
	
	
	
	//Anchura ultima	
	if (anchuras[nAnchuras]>alaInferior){ //Para que acabe en pico o acabe en plano el ala inferior
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]-alaInferior,pos.y)
		var corte4b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
		op_corte.addObject(line,false);

	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]/2,pos.y+alaInferior-anchuras[nAnchuras]/2)
		var corte4b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte4b ));
		op_corte.addObject(line,false);
	}
	
	
	var corte1 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueDer,pos.y+alaInferior-pliegueDer)
	var corte2 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueDer,pos.y+alaInferior)
	var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueDer+alaDerecha,pos.y+alaInferior)
	var corte4 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueDer+alaDerecha,pos.y+alaInferior+alturaPlaca)
	var corte5 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueDer,pos.y+alaInferior+alturaPlaca)
	var corte6 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueDer,pos.y+alaInferior+alturaPlaca+pliegueDer)
	var corte7 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
	
	var line = new RLineEntity(document, new RLineData( corte4b , corte1 ));
	op_corte.addObject(line,false);
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
	

	
	
	
	
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	anchoA=anchura1+anchura2+anchura3
	
	//Anchura primera
	if (anchuras[nAnchuras]>pliegueSuperior){
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte5 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( corte7 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1, corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);

	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[nAnchuras]/2,pos.y+alaInferior+alturaPlaca+anchuras[nAnchuras]/2)
		var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte7 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
		op_corte.addObject(line,false);
	}
	
	
	
	//Anchuras intermedias
	anchoA=anchoA-anchuras[nAnchuras]
	var m=repeticiones
	for (n=1 ; n<(repeticiones+1) ; n=n+1){ 
		
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte5 , corte1 ));
		op_corte.addObject(line,false);

		if (anchuras[m]>pliegueSuperior*2){
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte5b = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4 , corte5b ));
			op_corte.addObject(line,false);

		}else{
			var corte5b = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]/2,pos.y+alaInferior+alturaPlaca+anchuras[m]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte5b ));
			op_corte.addObject(line,false);
			
		}
		
		var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte5b , corte5 ));
		op_corte.addObject(line,false);
	
		
		anchoA=anchoA-anchuras[m]
		m=m-1
	}
	
	
	//Anchura ultima
	if (anchura1>pliegueSuperior){
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var line = new RLineEntity(document, new RLineData( corte5 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);

		
	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchura1,pos.y+alaInferior+alturaPlaca+anchura1)
		var line = new RLineEntity(document, new RLineData( corte5 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4 ));
		op_corte.addObject(line,false);
	}
	
	
	var corte4b = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte5 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte6 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var corte7 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca-alaIzquierda)
	var corte8 = new RVector(pos.x,pos.y+alaInferior+alaIzquierda)
	var corte9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	
	var line = new RLineEntity(document, new RLineData( corte4 , corte4b ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
	op_corte.addObject(line,false);
	
	
	return op_corte; 
	
}








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F13 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function dibujarFresado117(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	EAction.handleUserMessage("ha entrado 11111111111111111 ");
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (var n=0; n<4 ;n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
        }
    }
	
	
	
	//Puntos trayectoria 
	
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	
	var fresado16 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior) 
	var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado18 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	
	
	
	var fresado2 = new RVector(pos.x+alaIzquierda,pos.y)
	
    var line = new RLineEntity(document, new RLineData( fresado16 , fresado14 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado12 , fresado19 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado18 , fresado11 ));
	op_fresado.addObject(line,false);
    var line = new RLineEntity(document, new RLineData( fresado17 , fresado21 ));
	op_fresado.addObject(line,false);

	

	
	
	//anchura1 - Inferior
	if (anchura1>pliegueInf1){
		//var fresado10 = new RVector(pos.x+alaIzquierda,pos.y+pliegueInferior+alaInferior) 
		var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		//var fresado2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var fresado3 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInf1,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		
		//dibujarFresado_auxiliar(doc,fresado10,fresado1)
        var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
	    op_fresado.addObject(line,false);

		//dibujarFresado_auxiliar(doc,fresado2,fresado11)
    }
	
	//anchura2 - Inferior
	if (anchura2>(pliegueInf2*2)){
		var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var fresado5 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
        var line = new RLineEntity(document, new RLineData( fresado4 , fresado5 ));
	    op_fresado.addObject(line,false);

    }
	
	//anchura3 - Inferior
	if (anchura3>(pliegueInf3)){
		var fresado6 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var fresado7 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior-pliegueInf3)
        var line = new RLineEntity(document, new RLineData( fresado6 , fresado7 ));
	    op_fresado.addObject(line,false);

    }
	
	
	
	
	
	//Puntos extra para esta pieza
	var fresado7 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior-pliegueInf3)
	var fresado8 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior-pliegueDer)
    var line = new RLineEntity(document, new RLineData( fresado7 , fresado8 ));
	op_fresado.addObject(line,false);

	
	var fresado9 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior+pliegueDer)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior+alturaPlaca)
    var line = new RLineEntity(document, new RLineData( fresado9 , fresado10 ));
	op_fresado.addObject(line,false);
	

    var line = new RLineEntity(document, new RLineData( fresado21 , fresado10 ));
	op_fresado.addObject(line,false);
	
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior)
    var line = new RLineEntity(document, new RLineData( fresado20 , fresado11 ));
	op_fresado.addObject(line,false);

	
	
	
	
	
	

	
	//anchura1 - Superior
	if (anchura1>(pliegueSuperior*2)){
		var fresado25 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado26 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ //Esto es para hacer el fresado externo o no
			var fresado27 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado28 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
	        op_fresado.addObject(line,false);
			
        }
    }
	
	//anchura2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var fresado31 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1) {
			var fresado29 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado30 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
	        op_fresado.addObject(line,false);
		
			var fresado33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
	        op_fresado.addObject(line,false);
		
        }
    }
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2){
		var fresado37 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado38 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
        var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
	    op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){
			var fresado35 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado36 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
            var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
	        op_fresado.addObject(line,false);
			
			var fresado39 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado40 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
            var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
	        op_fresado.addObject(line,false);
		
        }
    }
	
	
	var fresado2 = new RVector(pos.x+alaIzquierda,pos.y)
	var fresado25 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
    var line = new RLineEntity(document, new RLineData( fresado2 , fresado25 ));
	op_fresado.addObject(line,false);
	
	
	
	

	return op_fresado; 
}





function dibujarCorte117(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (n=1 ; n<4 ; n=n+1){
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
		}
	}
	
	
	
	//Corte inferior anchura1
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y)
	
	if (anchura1>pliegueInf1){
		var corte2 = new RVector(pos.x+alaIzquierda,pos.y+pliegueInferior-pliegueInf1)
		var corte3 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInf1-alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
	}else{ 
		var corte2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior-anchura1)
		var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte4 ));
		op_corte.addObject(line,false);
	}
	
	
	//Corte inferior anchura2
	if (anchura2>pliegueInf2*2){
		var corte12 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInf2+alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInf2-alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte12 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior-anchura2/2)
		var corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte15 ));
		op_corte.addObject(line,false);
	}
	
	
	//Corte inferior anchura3
	if (anchura3>pliegueInf3*2){
		var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInf3+alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-alaInferior,pos.y+pliegueInferior-pliegueInf3)
		
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior-anchura3/2)
		var corte18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
		
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		
	}
	
	
	
	var corte19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var corte20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior-pliegueDer)
	var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior)
	var corte22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer+alaDerecha,pos.y+alaInferior)
	var corte23 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer+alaDerecha,pos.y+alaInferior+pliegueInferior-pliegueDer)
	var corte24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior-pliegueDer)
	var corte25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var corte26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior+pliegueDer)
	var corte27 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer+alaDerecha,pos.y+alaInferior+pliegueInferior+pliegueDer)
	var corte28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueDer,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueDer)
	var corte31 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
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
	var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
	op_corte.addObject(line,false);
	var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
	op_corte.addObject(line,false);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var corteAux=corte31
	
	//Anchura 3 - Superior
	if (anchura3>(pliegueSuperior*2)){
		var corte28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corteAux , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3/2)
		var corte32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corteAux , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte32 ));
		op_corte.addObject(line,false);
	}
	
	
	//Anchura 2 - Superior
	if (anchura2>(pliegueSuperior*2)){
		var corte33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte37 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura2/2)
		var corte37 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte37 ));
		op_corte.addObject(line,false);
		
	}
	
	
	//Anchura 1 - Superior
	if (anchura1>(pliegueSuperior*2)){
		var corte38 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte39 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		
	}else{
		var corte38 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		var corte41 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte41 ));
		op_corte.addObject(line,false);
		
	}
	
	
	corteAux=corte41;
	
	var corte40 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte41 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte42 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda)
	var corte43 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alaIzquierda)
	var corte44 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	var corte45 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-alaIzquierda)
	var corte46 = new RVector(pos.x,pos.y+alaInferior+alaIzquierda)
	var corte47 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte48 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
	var corte49 = new RVector(pos.x+alaIzquierda,pos.y)
	
	var line = new RLineEntity(document, new RLineData( corteAux , corte40 ));
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
	
	
	
	return op_corte; 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F14 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function dibujarFresado118(modelo,di,pos,document){
	
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4, pliegueInf5]
	EAction.handleUserMessage("ha entrado 11111111111111111 ");
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (n=0;n<5;n=n+1){ 
		if (pliegueInferior<plieguesInf[n]){
			pliegueInferior=plieguesInf[n]
		}
	}
	
	
	
	//Puntos trayectoria 
	
	
	var fresado11 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado12 = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior)
	var fresado15 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior) //nuevo
	
	
	
	var fresado16 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior) 
	var fresado17 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado18 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado19 = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado20 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado22 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca) //muevo
	
	var fresado23 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	
	
	
	
	
	if (anchura5>pliegueInf5){ 
		var fresado14b = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior-pliegueInf5-alaInferior)
		var line = new RLineEntity(document, new RLineData( fresado14b , fresado23 ));
		op_fresado.addObject(line,false);

	}else{
		var line = new RLineEntity(document, new RLineData( fresado15 , fresado23 ));
		op_fresado.addObject(line,false);
	}
	
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado15 , fresado22 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado21 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado22 ));
		op_fresado.addObject(line,false);

	
	
	
	EAction.handleUserMessage("ha entrado 44444444444444444444444444 ");
	
	
	//anchura1 - Inferior
	if (anchura1>pliegueInf1){
		//var fresado10 = new RVector(pos.x,pos.y+pliegueInferior+alaInferior) 
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		//var fresado2 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		var fresado3 = new RVector(pos.x-anchura1+pliegueInf1,pos.y+alaInferior+pliegueInferior-pliegueInf1)
		
		//dibujarFresado_auxiliar(doc,fresado10,fresado1)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		
		//dibujarFresado_auxiliar(doc,fresado2,fresado11)
	}
	
	//anchura2 - Inferior
	if (anchura2>(pliegueInf2*2)){ 
		var fresado4 = new RVector(pos.x-anchura1-pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var fresado5 = new RVector(pos.x-anchura1-anchura2+pliegueInf2,pos.y+alaInferior+pliegueInferior-pliegueInf2)
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado5 ));
		op_fresado.addObject(line,false);

	}
	
	//anchura3 - Inferior
	if (anchura3>(pliegueInf3*2)){ 
		var fresado6 = new RVector(pos.x-anchura1-anchura2-pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var fresado7 = new RVector(pos.x-anchura1-anchura2-anchura3+pliegueInf3,pos.y+alaInferior+pliegueInferior-pliegueInf3)
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado7 ));
		op_fresado.addObject(line,false);
	} 
	
	//anchura4 - Inferior
	if (anchura4>(pliegueInf4*2)){ 
		var fresado8 = new RVector(pos.x-anchura1-anchura2-anchura3-pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var fresado9 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4+pliegueInf4,pos.y+alaInferior+pliegueInferior-pliegueInf4)
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado9 ));
		op_fresado.addObject(line,false);
		
	} 

	//anchura4 - Inferior
	if (anchura5>pliegueInf5){ 
		var fresado10 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueInf5,pos.y+alaInferior+pliegueInferior-pliegueInf5)
		var fresado11 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior-pliegueInf5)
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado11 ));
		op_fresado.addObject(line,false);
		
	} 
	
	
	

	EAction.handleUserMessage("ha entrado 555555555555555555555555555555555555555555555555 ");
	

	
	//anchura1 - Superior
	if (anchura1>(pliegueSuperior*2)){ 
		var fresado25 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado26 = new RVector(pos.x-anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ //Esto es para hacer el fresado externo o no
			var fresado27 = new RVector(pos.x-anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado28 = new RVector(pos.x-anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura2 - Superior
	if (anchura2>(pliegueSuperior*2)){ 
		var fresado31 = new RVector(pos.x-anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado32 = new RVector(pos.x-anchura1-anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado29 = new RVector(pos.x-anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado30 = new RVector(pos.x-anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
			op_fresado.addObject(line,false);
			
			var fresado33 = new RVector(pos.x-anchura1-anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado34 = new RVector(pos.x-anchura1-anchura2+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado33 , fresado34 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura3 - Superior
	if (anchura3>pliegueSuperior*2){
		var fresado37 = new RVector(pos.x-anchura1-anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado38 = new RVector(pos.x-anchura1-anchura2-anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado37 , fresado38 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado35 = new RVector(pos.x-anchura1-anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado36 = new RVector(pos.x-anchura1-anchura2-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado35 , fresado36 ));
			op_fresado.addObject(line,false);
			
			var fresado39 = new RVector(pos.x-anchura1-anchura2-anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado40 = new RVector(pos.x-anchura1-anchura2-anchura3+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado39 , fresado40 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura4 - Superior
	if (anchura4>pliegueSuperior*2){ 
		var fresado43 = new RVector(pos.x-anchura1-anchura2-anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado44 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado43 , fresado44 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado41 = new RVector(pos.x-anchura1-anchura2-anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado42 = new RVector(pos.x-anchura1-anchura2-anchura3-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado41 , fresado42 ));
			op_fresado.addObject(line,false);
			
			var fresado45 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado46 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado45 , fresado46 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura5 - Superior
	if (anchura5>pliegueSuperior){ 
		var fresado49 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado50 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado49 , fresado50 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado47 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var fresado48 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( fresado47 , fresado48 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	
	return op_fresado;
	
	
	
	
	
}




function dibujarCorte118(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	var plieguesInf=[pliegueInf1, pliegueInf2, pliegueInf3, pliegueInf4, pliegueInf5]
	
	//sacar el mayor pliegue
	pliegueInferior=pliegueInf1
	for (n=0;n<5;n=n+1){ 
		if (pliegueInferior<plieguesInf[n]){ 
			pliegueInferior=plieguesInf[n]
		}
	}
	

	
	//Corte inferior anchura1
	var corte1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
	
	
	if (anchura1>pliegueInf1){ 
		var corte2 = new RVector(pos.x,pos.y+pliegueInferior-pliegueInf1)
		var corte3 = new RVector(pos.x-anchura1+pliegueInf1+alaInferior,pos.y+pliegueInferior-pliegueInf1)
		var corte4 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);

	}else{ 
		var corte2 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior-anchura1)
		var corte4 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte4 ));
		op_corte.addObject(line,false);

	}
	
	
	//Corte inferior anchura2
	if (anchura2>pliegueInf2*2){ 
		var corte12 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x-anchura1-pliegueInf2-alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte14 = new RVector(pos.x-anchura1-anchura2+pliegueInf2+alaInferior,pos.y+pliegueInferior-pliegueInf2)
		var corte15 = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);

	}else{
		var corte12 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior)
		var corte13 = new RVector(pos.x-anchura1-anchura2/2,pos.y+alaInferior+pliegueInferior-anchura2/2)
		var corte15 = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte15 ));
		op_corte.addObject(line,false);

	}
	
	
	//Corte inferior anchura3
	if (anchura3>pliegueInf3*2){ 
		var corte16 = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x-anchura1-anchura2-pliegueInf3-alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte18 = new RVector(pos.x-anchura1-anchura2-anchura3+pliegueInf3+alaInferior,pos.y+pliegueInferior-pliegueInf3)
		var corte19 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
		op_corte.addObject(line,false);

	}else{
		var corte16 = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x-anchura1-anchura2-anchura3/2,pos.y+alaInferior+pliegueInferior-anchura3/2)
		var corte19 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte19 ));
		op_corte.addObject(line,false);

	}
	
	//Corte inferior anchura4
	if (anchura4>pliegueInf4*2){ 
		var corte16 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x-anchura1-anchura2-anchura3-pliegueInf4-alaInferior,pos.y+pliegueInferior-pliegueInf4)
		var corte18 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4+pliegueInf4+alaInferior,pos.y+pliegueInferior-pliegueInf4)
		var corte19b = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte19 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19b ));
		op_corte.addObject(line,false);

	}else{
		var corte16 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior)
		var corte17 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4/2,pos.y+alaInferior+pliegueInferior-anchura4/2)
		var corte19b = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte19 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte19b ));
		op_corte.addObject(line,false);

	}
	
	//Corte inferior anchura5
	if (anchura5>pliegueInf5){ 
		if (alaDerecha>pliegueInf5){ 
			var corte20 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior)
			var corte21 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueInf5-alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte22 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte23 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+pliegueInferior-pliegueInf5+alaInferior)
			var corte24 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-pliegueInf5/2,pos.y+pliegueInferior-pliegueInf5+alaInferior+pliegueInf5/2)
			var corte26 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+pliegueInferior+alaInferior)
			var line = new RLineEntity(document, new RLineData( corte19b , corte20 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte22 , corte23 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte23 , corte24 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte24 , corte26 ));
			op_corte.addObject(line,false);

			
		}else{
			var corte20 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior)
			var corte21 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueInf5-alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte22 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-alaInferior,pos.y+pliegueInferior-pliegueInf5)
			var corte23 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+pliegueInferior-pliegueInf5+alaInferior)
			var corte24 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-alaDerecha,pos.y+pliegueInferior-pliegueInf5+alaInferior+alaDerecha)
			var corte25 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-alaDerecha,pos.y+pliegueInferior-pliegueInf5+alaInferior+pliegueInferior-alaDerecha)
			var corte26 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+pliegueInferior-pliegueInf5+alaInferior+pliegueInferior)
			var line = new RLineEntity(document, new RLineData( corte19b , corte20 ));
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

		}
	}else{ //anchura5<pliegueInf5
		var corte20 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior)
		var corte21 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+pliegueInferior+alaInferior-anchura5)
		var corte26 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( corte19b , corte20 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte21 , corte26 ));
			op_corte.addObject(line,false);

	}
	
	
	

		var corte27 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha)
		var corte28 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha)
		var corte29 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var corte30 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte31 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-anchura5,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte33 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte34 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte35 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
			var line = new RLineEntity(document, new RLineData( corte26 , corte27 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte27 , corte28 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
			op_corte.addObject(line,false);
	

	
	
	
	
	//Anchura 4 - Superior
	if (anchura4>(pliegueSuperior*2)){ 
		var corte28 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x-anchura1-anchura2-anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x-anchura1-anchura2-anchura3-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
			var line = new RLineEntity(document, new RLineData( corte35 , corte28 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
			op_corte.addObject(line,false);
		

	}else{
		var corte28 = new RVector(pos.x-anchura1-anchura2-anchura3-anchura4/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura4/2)
		var corte32 = new RVector(pos.x-anchura1-anchura2-anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			var line = new RLineEntity(document, new RLineData( corte35 , corte28 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte28 , corte32 ));
			op_corte.addObject(line,false);

	}
	

	//Anchura 3 - Superior
	if (anchura3>(pliegueSuperior*2)){ 
		var corte28 = new RVector(pos.x-anchura1-anchura2-anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte29 = new RVector(pos.x-anchura1-anchura2-anchura3+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte30 = new RVector(pos.x-anchura1-anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte31 = new RVector(pos.x-anchura1-anchura2-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte32b = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			var line = new RLineEntity(document, new RLineData( corte32 , corte28 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte31 , corte32b ));
			op_corte.addObject(line,false);

	}else{
		var corte28 = new RVector(pos.x-anchura1-anchura2-anchura3/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3/2)
		var corte32b = new RVector(pos.x-anchura1-anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			var line = new RLineEntity(document, new RLineData( corte32 , corte28 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte28 , corte32b ));
			op_corte.addObject(line,false);
			

	}
	
	
	//Anchura 2 - Superior
	if (anchura2>(pliegueSuperior*2)){ 
		var corte33 = new RVector(pos.x-anchura1-anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte34 = new RVector(pos.x-anchura1-anchura2+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x-anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x-anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte37 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			var line = new RLineEntity(document, new RLineData( corte32b , corte33 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
			op_corte.addObject(line,false);

	}else{
		var corte33 = new RVector(pos.x-anchura1-anchura2/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura2/2)
		var corte37 = new RVector(pos.x-anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			var line = new RLineEntity(document, new RLineData( corte32b , corte33 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte33 , corte37 ));
			op_corte.addObject(line,false);
	}
	
	
	//Anchura 1 - Superior
	if (anchura1>(pliegueSuperior*2)){ 
		var corte38 = new RVector(pos.x-anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte39 = new RVector(pos.x-anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte39 , corte40 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
			op_corte.addObject(line,false);

	}else{
		var corte38 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		var corte41 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
			var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte38 , corte41 ));
			op_corte.addObject(line,false);
	
	}
			var line = new RLineEntity(document, new RLineData( corte41 , corte1 ));
			op_corte.addObject(line,false);


    return op_corte;
	
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F15 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado119(modelo,di,pos,document){
	

	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	//Puntos trayectoria 
	var fresado1 = new RVector(pos.x,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x,pos.y)
	var fresado3 = new RVector(pos.x+anchura1,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado6 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	var fresado7 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior)
	var fresado8 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca)
	var fresado9 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado10 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado11 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca)
	var fresado12 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado13 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado14 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
	var fresado15 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado16 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado17 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	var fresado18 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado19 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado20 = new RVector(pos.x+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado21 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado22 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado23 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)

		var line = new RLineEntity(document, new RLineData( fresado2 , fresado22 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado20 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado22 , fresado21 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado19 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado16 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado8 ));
		op_fresado.addObject(line,false);


	return op_fresado; 

}


function dibujarCorte119(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	

		var corte1 = new RVector(pos.x,pos.y+alaInferior)
		var corte3 = new RVector(pos.x+anchura1,pos.y+alaInferior)
		var corte4 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior)
		var corte5 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior)
		var corte6 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
		var corte10 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte11 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+alturaPlaca)
		var corte12 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte13 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte14 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alaInferior+alturaPlaca)
		var corte15 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte16 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte17 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
		var corte18 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte19 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte20 = new RVector(pos.x+anchura1,pos.y+alaInferior+alturaPlaca)
		var corte21 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte22 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte23 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
		var corte24 = new RVector(pos.x-alaInferior,pos.y)
		var corte25 = new RVector(pos.x+anchura1-alaInferior,pos.y)
		var corte26 = new RVector(pos.x+anchura1+alaInferior,pos.y)
		var corte27 = new RVector(pos.x+anchura1+anchura2-alaInferior,pos.y)
		var corte28 = new RVector(pos.x+anchura1+anchura2+alaInferior,pos.y)
		var corte29 = new RVector(pos.x+anchura1+anchura2+anchura3-alaInferior,pos.y)
		var corte30 = new RVector(pos.x+anchura1+anchura2+anchura3+alaInferior,pos.y)
		var corte31 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-alaInferior,pos.y)
		var corte32 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+alaInferior,pos.y)
		var corte33 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y)
		var corte34 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+anchura5,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte35 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte36 = new RVector(pos.x+anchura1+anchura2+anchura3+anchura4-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte37 = new RVector(pos.x+anchura1+anchura2+anchura3+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte38 = new RVector(pos.x+anchura1+anchura2+anchura3-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte39 = new RVector(pos.x+anchura1+anchura2+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte40 = new RVector(pos.x+anchura1+anchura2-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte41 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte42 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte43 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte44 = new RVector(pos.x-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte45 = new RVector(pos.x-alaIzquierda,pos.y+alaInferior+alturaPlaca-alaIzquierda)
		var corte46 = new RVector(pos.x-alaIzquierda,pos.y+alaInferior+alaIzquierda)

		
	
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte24 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte24 , corte25 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte25 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte26 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte26 , corte27 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte27 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte28 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte32 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte36 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte37 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte15 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte39 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte18 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte19 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte19 , corte20 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte21 , corte42 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte42 , corte43 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte43 , corte22 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte22 , corte44 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte44 , corte23 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte23 , corte45 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte45 , corte46 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte46 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
	return op_corte; 

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F16 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado120(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	var fresado1 = new RVector(pos.x,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior)
	
	var fresado8 = new RVector(pos.x+anchura1+anchura2,pos.y)
	
	var fresado9 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	
	var fresado16 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	
	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9, fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado16 ));
		op_fresado.addObject(line,false);
	

	
	
	
	//anchura1
	if (anchura1>pliegueSuperior){ 
		var fresado17 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado19 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	
	//anchura2
	if (anchura2>pliegueSuperior*2){ 
		var fresado23 = new RVector(pos.x+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+anchura1+anchura2,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado22 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
			
		}
	}
	return op_fresado;
}

function dibujarCorte120(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var repeticiones
	var anchuras
	var nAnchuras

	
	if (modelo==107){ 
		repeticiones=2
		anchuras=[anchura1,anchura2,anchura3,anchura4]
		nAnchuras=4 //numero de valores del vector "anchuras"
		anchura5=0
	}else if (modelo==108){ 
		repeticiones=3
		anchuras=[anchura1,anchura2,anchura3,anchura4,anchura5]
		nAnchuras=5 //numero de valores del vector "anchuras"
	}
	
	repeticiones=0
	anchuras=[anchura1,anchura2]
	nAnchuras=1 //numero de valores del vector "anchuras"
	anchura5=0
	anchura4=0
	anchura3=0
	
	
	
	
	
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	
	//Anchura primera
	if (anchura1>alaInferior){ 
		var corte1 = new RVector(pos.x,pos.y+alaInferior)
		var corte2 = new RVector(pos.x,pos.y)
		var corte3 = new RVector(pos.x+anchura1-alaInferior,pos.y)
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);


	}else{
		var corte1 = new RVector(pos.x,pos.y+alaInferior)
		var corte3 = new RVector(pos.x,pos.y+alaInferior-anchura1)
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

	}
	var corte4 = new RVector(pos.x+anchura1,pos.y+alaInferior)
	var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
	op_corte.addObject(line,false);

	
	
	var anchoA=anchuras[0]
	
	
	EAction.handleUserMessage("ha entrado 33333333333333333333333333333333333333333 ");
	
	
	//Anchura ultima	
	if (anchuras[nAnchuras]>alaInferior){ //Para que acabe en pico o acabe en plano el ala inferior
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+anchoA+alaInferior,pos.y)
		
		if (alaInferior>alaDerecha){  //para evitar que el pico de abajo a la derecha sea muy muy grande
			
			var corte3 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y)
			var corte4b = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-alaDerecha)
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
			op_corte.addObject(line,false);

			
		}else{ 
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaInferior,pos.y)
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte5 ));
			op_corte.addObject(line,false);
        }
		

		}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			
		if (alaInferior>alaDerecha){ //para evitar que el pico de abajo a la derecha sea muy muy grande
			var corte3 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			var corte4b = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-anchuras[nAnchuras]+alaDerecha)
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-alaDerecha)
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
			op_corte.addObject(line,false);
		

			
		}else{ 
			var corte5 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte5 ));
			op_corte.addObject(line,false);

		}
		
		}
		EAction.handleUserMessage("ha entrado 44444444444444444444444444444444444444444444444444444444 ");
	
	var corte4 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
	var corte5b = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+alaDerecha)
	var corte6 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+alturaPlaca-alaDerecha)
	var corte7 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
	var corte8 = new RVector(pos.x+anchoA+anchuras[nAnchuras]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte9 = new RVector(pos.x+anchoA+anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	
		var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5b , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
	

	EAction.handleUserMessage("ha entrado 55555555555555555555555555555555555555555555555 ");
	
	
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	anchoA=anchura1+anchura2
	
	//Anchura primera
	if (anchuras[nAnchuras]>pliegueSuperior){ 
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte2 = new RVector(pos.x+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte3 = new RVector(pos.x+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);

	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca+anchuras[nAnchuras])
		var corte3 = new RVector(pos.x+anchoA-anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

	}
	
	
	anchoA=anchoA-anchuras[nAnchuras]
	var m=repeticiones+1
	for (var n=0; n<(repeticiones+1);n=n+1){ 
		EAction.handleUserMessage("ha entrado 6666666666666666666666666666666666666 ");
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
		
		if (anchuras[m]>pliegueSuperior*2){ 
			var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte4 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte5 = new RVector(pos.x+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
			op_corte.addObject(line,false);
		EAction.handleUserMessage("ha entrado 777777777777777777777777777777777777777 ");
		}else{
			var corte2 = new RVector(pos.x+anchoA-anchuras[m]/2,pos.y+alaInferior+alturaPlaca+anchuras[m]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
			op_corte.addObject(line,false);
		EAction.handleUserMessage("ha entrado 8888888888888888888888888888888888 ");
		}
		
		var corte4 = new RVector(pos.x+anchoA-anchuras[m],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
		op_corte.addObject(line,false);
		
		
		anchoA=anchoA-anchuras[m]
		m=m-1
		EAction.handleUserMessage("ha entrado 99999999999999999999999999999999 ");
	}	
	
	("ha entrado 1010101010101010101010110 ");
	//Anchura ultima
	if (anchura1>pliegueSuperior){ 
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4b = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
		op_corte.addObject(line,false);

		
	}else{
		var corte1 = new RVector(pos.x+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte4b = new RVector(pos.x+anchoA-anchura1,pos.y+alaInferior+alturaPlaca+anchura1)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte4b ));
		op_corte.addObject(line,false);

	}
	var corte4 = new RVector(pos.x,pos.y+alaInferior)
	var line = new RLineEntity(document, new RLineData( corte4b , corte4 ));
	op_corte.addObject(line,false);
	
	
	return op_corte; 


}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F17 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado121(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2)
	var fresado5 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2+pliegueInf1)
	var fresado6 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2+pliegueInf1)
	var fresado7 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca)
	var fresado8 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca)
	var fresado9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior)
	
	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado10));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado10 ));
		op_fresado.addObject(line,false);

	return op_fresado; 

}

function dibujarCorte121(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	//Tramo inferior
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2)
	var corte2 = new RVector(pos.x+alaIzquierda-pliegueInf2,pos.y+alaInferior)	
	
	var corte3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte4 = new RVector(pos.x+alaIzquierda,pos.y)
	var corte5 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y)
	var corte6 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
	
	var corte7 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueInf2,pos.y+alaInferior)
	var corte8 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2)
	
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
	

	
	
	//Tramo pliegueInf1 - derecha
	if (pliegueInf1/2 > alaDerecha){ 
		var corte9_a = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+pliegueInf2+alaDerecha)
		var corte9 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+pliegueInf2+pliegueInf1-alaDerecha)
		
		var line = new RLineEntity(document, new RLineData( corte8 , corte9_a ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9_a , corte9 ));
		op_corte.addObject(line,false);


	
	}else{ 
		var corte9 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueInf1/2,pos.y+alaInferior+pliegueInf2+pliegueInf1/2)
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		
		
	}
	
	var corte10 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2+pliegueInf1)
	var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
	op_corte.addObject(line,false);
	
	
	
	
	//Tramo ala derecha
	var corte11 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+pliegueInf2+pliegueInf1+alaDerecha)
	var corte12 = new RVector(pos.x+alaIzquierda+anchuraPlaca+alaDerecha,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca-alaDerecha)
	var corte13 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11, corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);

	
	
	
	//Tramo superior
	var corte14 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueSuperior,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior)
	var corte15 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior)
	var corte16 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior+alaSuperior)
	var corte17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior+alaSuperior)
	var corte18 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior)
	var corte19 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca+pliegueSuperior)
	var corte20 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca)
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

	
	
	//Tramo ala izquierda
	var corte21 = new RVector(pos.x,pos.y+alaInferior+pliegueInf2+pliegueInf1+alturaPlaca-alaIzquierda)
	var corte22 = new RVector(pos.x,pos.y+alaInferior+pliegueInf2+pliegueInf1+alaIzquierda)
	var corte23 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInf2+pliegueInf1)
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte21 , corte22 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte22 , corte23 ));
		op_corte.addObject(line,false);

	
	
	
	//Tramo pliegueInf1 - izquierda
	if (pliegueInf1/2 > alaIzquierda){ 
		var corte24_a = new RVector(pos.x,pos.y+alaInferior+pliegueInf2+pliegueInf1-alaIzquierda)
		var corte24 = new RVector(pos.x,pos.y+alaInferior+pliegueInf2+alaIzquierda)
		
		var line = new RLineEntity(document, new RLineData( corte23 , corte24_a ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte24_a , corte24 ));
		op_corte.addObject(line,false);


	
	}else{ 
		var corte24 = new RVector(pos.x+alaIzquierda-pliegueInf1/2,pos.y+alaInferior+pliegueInf2+pliegueInf1/2)
		var line = new RLineEntity(document, new RLineData( corte23 , corte24 ));
		op_corte.addObject(line,false);
		
		
	}
	var line = new RLineEntity(document, new RLineData( corte24 , corte1 ));
	op_corte.addObject(line,false);
	

	return op_corte; 

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F18 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado123(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior) 
	
	var fresado2 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
	
	var fresado4 = new RVector(pos.x+alaIzquierda,pos.y) 
	
	
	
	
	
	var fresado6 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y) 
	
	
	
	
	var fresado9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+alturaPlaca)
	
	var fresado12 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var fresado14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+alturaPlaca+pliegueSuperior)

		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
		op_fresado.addObject(line,false);
	


	

	
	//anchura1
	if (anchura1>pliegueSuperior){ 
		var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado19 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
			
		}
	}
	

	//anchura2
	if (anchura2>pliegueSuperior*2){ 		
		var fresado23 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado22 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
			
		}
	}


	return op_fresado; 

}




function dibujarCorte123(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	anchura3=0 //[borrar]
	anchura4=0 //[borrar]
	anchura5=0
	
	
	var repeticiones
	var anchuras
	var nAnchuras

	
	
	
	
	repeticiones=0
	anchuras=[anchura1,anchura2]
	nAnchuras=1 //numero de valores del vector "anchuras"
	
	

	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	
	//Anchura primera
	if (anchura1>alaInferior){ 
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+anchura1-alaInferior,pos.y)
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

		
	}else{
		var corte3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior-anchura1)
		
	}
	var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);

	
	
	//Bucle anchuras intermedias
	//var anchuras={anchura1,anchura2,anchura3,anchura4}
	//var repeticiones=2 //math.length(anchuras -2)
	var anchoA=anchuras[0]
	for (n=1; n<(repeticiones+1); n=n+1){ 
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		
		if (anchuras[n]>alaInferior*2){ 
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]-alaInferior,pos.y)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);

			
		}else{
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]/2,pos.y+alaInferior-anchuras[n]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
			op_corte.addObject(line,false);
			
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n],pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
		
		
		anchoA=anchoA+anchuras[n]
	}	
	
	
	
	
	//Anchura ultima	
	if (anchuras[nAnchuras]>alaInferior){  //Para que acabe en pico o acabe en plano el ala inferior
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
		
		if (alaInferior>alaDerecha){ //para evitar que el pico de abajo a la derecha sea muy muy grande
			
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y)
			var corte4b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-alaDerecha)
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
			op_corte.addObject(line,false);

		}else {
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaInferior,pos.y)
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte5 ));
			op_corte.addObject(line,false);

		}

	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			
		if (alaInferior>alaDerecha){ //para evitar que el pico de abajo a la derecha sea muy muy grande
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			var corte4b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-anchuras[nAnchuras]+alaDerecha)
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior-alaDerecha)
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
			op_corte.addObject(line,false);

			
		}else{ 
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+anchuras[nAnchuras],pos.y+alaInferior-anchuras[nAnchuras])
			var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte5 ));
			op_corte.addObject(line,false);

		}
		
	}
	
	
	//PARTE DERECHA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	var corte4 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
	var corte5b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+alaDerecha)
	var corte6 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+alturaPlaca-alaDerecha)
	var corte7 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
	var corte8 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte9 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	
		var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5b , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
	

	
	
	
	
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	anchoA=anchura1+anchura2+anchura3+anchura4+anchura5
	
	//Anchura primera
	if (anchuras[nAnchuras]>pliegueSuperior){ 
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);

	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca+anchuras[nAnchuras])
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[nAnchuras],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

	}
	
	
	anchoA=anchoA-anchuras[nAnchuras]
	var m=repeticiones+1
	for (n=1; n<(repeticiones+1) ; n=n+1){
		
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
		
		if (anchuras[m]>pliegueSuperior*2){ 
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
			op_corte.addObject(line,false);

		}else{
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]/2,pos.y+alaInferior+alturaPlaca+anchuras[m]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
			op_corte.addObject(line,false);
			
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m],pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
		op_corte.addObject(line,false);
		
		
		anchoA=anchoA-anchuras[m]
		m=m-1
	}	
	var corte5 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
	var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
		op_corte.addObject(line,false);
	//Anchura ultima
	if (anchura1>pliegueSuperior){
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4b = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
		op_corte.addObject(line,false);

		
	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+alturaPlaca)
		var corte4b = new RVector(pos.x+alaIzquierda+anchoA-anchura1,pos.y+alaInferior+alturaPlaca+anchura1)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4b ));
		op_corte.addObject(line,false);

	}
	
	
	
	
	//PARTE IZQUIERDA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( corte4b , corte4 ));
		op_corte.addObject(line,false);
	
	
	if (pliegueSuperior>=alaIzquierda){ 
		var corte5 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte6 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+alaIzquierda)
		var corte7 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);

	}else{
		var corte5 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+alturaPlaca+pliegueSuperior)
		var corte7 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte7 ));
		op_corte.addObject(line,false);
	}
	
	
	var corte8 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca-alaIzquierda)
	var corte9 = new RVector(pos.x,pos.y+alaInferior+alaIzquierda)
	var corte10 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte7, corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);

	
	
	if (alaInferior>=alaIzquierda){ 
		var corte11 = new RVector(pos.x,pos.y+alaInferior-alaIzquierda)
		var corte12 = new RVector(pos.x,pos.y)
		var corte13 = new RVector(pos.x+alaIzquierda,pos.y)
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);

	}else{
		var corte11 = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
		var corte13 = new RVector(pos.x+alaIzquierda,pos.y)
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte13 ));
		op_corte.addObject(line,false);

	}
	
	
	
	
	
	
	
	var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	

	

	return op_corte; 

	
	
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F19 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function dibujarFresado124(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+anchura1)
	
	var fresado2 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaDerecha,pos.y+alaInferior)
	
	var fresado5 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado6 = new RVector(pos.x+alaIzquierda,pos.y)
	
	var fresado7 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado8 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	
	
	
	
	var fresado9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado12 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var fresado14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)

	
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado12 ));
		op_fresado.addObject(line,false);

	
	
	
	
	//anchura1
	if (anchura1>pliegueSuperior){ 
		var fresado17 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado18 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado19 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	
	//anchura2
	if (anchura2>pliegueSuperior*2){ 	
		var fresado23 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado22 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado21 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
			
		}
	}
	

	return op_fresado; 

}



function dibujarCorte124(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	anchura3=0 //[borrar]
	anchura4=0 //[borrar]
	anchura5=0
	
	
	var repeticiones
	var anchuras
	var nAnchuras

	
	
	
	repeticiones=0
	anchuras=[anchura1,anchura2]
	nAnchuras=1 //numero de valores del vector "anchuras"
	
	
	EAction.handleUserMessage("ha entrado 11111111111111111111111111111111111111111111111111111111 ");
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	
	//Anchura primera
	if (anchura1>alaInferior){ 
		var corte1 = new RVector(pos.x+alaIzquierda,pos.y)
		var corte3 = new RVector(pos.x+alaIzquierda+anchura1-alaInferior,pos.y)
		
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

		
	}else{
		var corte3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior-anchura1)
		
	}
	var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
	
	EAction.handleUserMessage("ha entrado 222222222222222222222222222222222222222222 ");
	
	//Bucle anchuras intermedias
	//var anchuras={anchura1,anchura2,anchura3,anchura4}
	//var repeticiones=2 //math.length(anchuras -2)
	var anchoA=anchuras[0]
	for (var n=1; n<(repeticiones+1); n=n+1){
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		
		if (anchuras[n]>alaInferior*2){ 
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]-alaInferior,pos.y)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			
		}else{
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n]/2,pos.y+alaInferior-anchuras[n]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
			op_corte.addObject(line,false);
			
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[n],pos.y+alaInferior)///////4//////
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_corte.addObject(line,false);
	
		
		anchoA=anchoA+anchuras[n]
	}	
	
	
	EAction.handleUserMessage("ha entrado 3333333333333333333333333333333333333333333333333333 ");
	
	//Anchura ultima
	
	var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior)
	var corte2 = new RVector(pos.x+alaIzquierda+anchoA+alaInferior,pos.y)
	
	var corte3b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]-alaInferior,pos.y)
	var corte4b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior)
	var corte5b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaInferior,pos.y)
	var corte6 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y)
	var corte7 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+pliegueInferior-alaDerecha)
	var corte8 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior+pliegueInferior)	
	
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3b, corte4b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4b , corte5b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5b , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);


	
	EAction.handleUserMessage("ha entrado 4444444444444444444444444444444444444444444444 ");
	
	//PARTE DERECHA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	var corte4 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior+pliegueInferior)
	var corte5 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha)
	var corte6 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha)
	var corte7 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte8b = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras]+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte9 = new RVector(pos.x+alaIzquierda+anchoA+anchuras[nAnchuras],pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	
		var line = new RLineEntity(document, new RLineData( corte8 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8b , corte9 ));
		op_corte.addObject(line,false);
	

	
	
	
	EAction.handleUserMessage("ha entrado 55555555555555555555555555555555555555555555555555555555 ");
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	anchoA=anchura1+anchura2+anchura3+anchura4+anchura5
	
	//Anchura primera
	if (anchuras[nAnchuras]>pliegueSuperior){ 
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);

	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchuras[nAnchuras])
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[nAnchuras],pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte9 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);
	}
	
	
	EAction.handleUserMessage("ha entrado 66666666666666666666666666666666666666666666666666");
	//repeticiones=0
	anchoA=anchoA-anchuras[nAnchuras]
	var m=repeticiones+1
	for (var n=1; n<(repeticiones+1); n=n+1){ 
		
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
		
		if (anchuras[m]>pliegueSuperior*2){ 
			var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
			op_corte.addObject(line,false);

		}else{
			var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchuras[m]/2)
			var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
			op_corte.addObject(line,false);
			
		}
		
		var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m],pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
		op_corte.addObject(line,false);
		
		
		anchoA=anchoA-anchuras[m]
		m=m-1
	}	
	var corte5 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
	op_corte.addObject(line,false);
	EAction.handleUserMessage("ha entrado 77777777777777777777777777777777777777777777 ");
	//Anchura ultima
	if (anchura1>pliegueSuperior){ 
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var corte4b = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
		op_corte.addObject(line,false);

		
	}else{
		var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var corte4b = new RVector(pos.x+alaIzquierda+anchoA-anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4b ));
		op_corte.addObject(line,false);
	}
	
	
	EAction.handleUserMessage("ha entrado 8888888888888888888888888888888888888888888 ");
	
	//PARTE IZQUIERDA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( corte4b , corte4 ));
		op_corte.addObject(line,false);
	
	
	if (pliegueSuperior>=alaIzquierda){
		var corte5 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte6 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda)
		var corte7 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_corte.addObject(line,false);

	}else{
		var corte5 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var corte7 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte7 ));
		op_corte.addObject(line,false);

	}
	
	
	var corte8 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda)
	var corte9 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+anchura1+alaIzquierda)
	var corte10 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var corte11 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte10 , corte11 ));
		op_corte.addObject(line,false);

	
	
	
	
	if (alaInferior>=alaIzquierda){
		var corte11b = new RVector(pos.x,pos.y+alaInferior-alaIzquierda)
		var corte12 = new RVector(pos.x,pos.y)
		var corte13 = new RVector(pos.x+alaIzquierda,pos.y)
		var line = new RLineEntity(document, new RLineData( corte11 , corte11b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11b , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);

	}else{
		var corte11b = new RVector(pos.x+alaIzquierda-alaInferior,pos.y)
		var corte13 = new RVector(pos.x+alaIzquierda,pos.y)
		var line = new RLineEntity(document, new RLineData( corte11 , corte11b ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11b , corte13 ));
		op_corte.addObject(line,false);

	}
	
	
/*		EAction.handleUserMessage("ha entrado 999999999999999999999999999999999999999999999999999999 ");
*/
	return op_corte; 

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F20 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado125(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado6 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	var fresado7 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior)
	
	var fresado8 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+altura1)
	var fresado9 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+altura1)
	var fresado10 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+altura1)
	var fresado11 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+altura1)
	var fresado12 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+altura2)
	var fresado13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+altura2)
	var fresado14 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+altura2)
	var fresado15 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior+altura2)
	
	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado12 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado14 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado12 , fresado15 ));
		op_fresado.addObject(line,false);
	
	


	return op_fresado; 

	
	
}


function dibujarCorte125(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior-pliegueIzq)
	var corte3 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
	var corte4 = new RVector(pos.x+alaIzquierda+pliegueIzq+alaInferior,pos.y)
	var corte5 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-alaInferior,pos.y)
	var corte6 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior)
	var corte7 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+alaInferior,pos.y)
	var corte8 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2-alaInferior,pos.y)
	var corte9 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior)
	var corte10 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+alaInferior,pos.y)
	var corte11 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-alaInferior,pos.y)
	var corte12 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var corte13 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+alaInferior,pos.y)
	var corte14 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4-alaInferior,pos.y)
	var corte15 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	var corte16 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior-pliegueDer)
	var corte17 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior)
	var corte18 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer+alaDerecha,pos.y+alaInferior)
	var corte19 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer+alaDerecha,pos.y+alaInferior+altura2)
	var corte20 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior+altura2)
	var corte21 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4+pliegueDer,pos.y+alaInferior+altura2+pliegueDer)
	var corte22 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+altura2)
	var corte23 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+anchura4-alaSuperior,pos.y+alaInferior+altura2+alaSuperior)
	var corte24 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3+alaSuperior,pos.y+alaInferior+altura2+alaSuperior)
	var corte25 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3,pos.y+alaInferior+altura2)
	var corte26 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2+anchura3-alaSuperior,pos.y+alaInferior+altura2+alaSuperior)
	var corte27 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+altura2+alaSuperior)
	var corte28 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+anchura2,pos.y+alaInferior+altura1+alaSuperior)
	var corte29 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1+alaSuperior,pos.y+alaInferior+altura1+alaSuperior)
	var corte30 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1,pos.y+alaInferior+altura1)
	var corte31 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchura1-alaSuperior,pos.y+alaInferior+altura1+alaSuperior)
	var corte32 = new RVector(pos.x+alaIzquierda+pliegueIzq+alaSuperior,pos.y+alaInferior+altura1+alaSuperior)
	var corte33 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+altura1)
	var corte34 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+altura1+pliegueIzq)
	var corte35 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+altura1)
	var corte36 = new RVector(pos.x,pos.y+alaInferior+altura1)
	var corte37 = new RVector(pos.x,pos.y+alaInferior)
	
	
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
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte37 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte37 , corte1 ));
		op_corte.addObject(line,false);
	

	
	

	return op_corte; 

/*	*/
	
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F21 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado126(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	//Puntos trayectoria 
	
	
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca,pos.y+alaInferior)
	
	var fresado4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var fresado5 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+alturaPlaca)
	var fresado6 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
	

	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado6 ));
		op_fresado.addObject(line,false);

	

	return op_fresado; 

	
}


function dibujarCorte126(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior-pliegueIzq)
	var corte3 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
	var corte4 = new RVector(pos.x+alaIzquierda+pliegueIzq+alaInferior,pos.y)
	var corte5 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca-alaInferior,pos.y)
	var corte6 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca,pos.y)
	var corte7 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca,pos.y+alaInferior+alturaPlaca+alaSuperior)
	var corte8 = new RVector(pos.x+alaIzquierda+pliegueIzq+alaSuperior,pos.y+alaInferior+alturaPlaca+alaSuperior)
	var corte9 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+alturaPlaca)
	var corte10 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca+pliegueIzq)
	var corte11 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var corte12 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
	var corte13 = new RVector(pos.x,pos.y+alaInferior)
	
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
		var line = new RLineEntity(document, new RLineData( corte13 , corte1 ));
		op_corte.addObject(line,false);


	
	
	

	return op_corte; 

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F22 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function dibujarFresado127(modelo,di,pos,document){
	
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	//Puntos trayectoria 
	
	
	var fresado1 = new RVector(pos.x,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer,pos.y+alaInferior)
	
	var fresado5 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca)
	var fresado6 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var fresado7 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
	var fresado8 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer,pos.y+alaInferior+alturaPlaca)
	
	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado8 ));
		op_fresado.addObject(line,false);
	

	

	return op_fresado; 

}


function dibujarCorte127(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	var corte1 = new RVector(pos.x,pos.y+alaInferior)
	var corte2 = new RVector(pos.x,pos.y+alaInferior-alaIzquierda)
	var corte3 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte4 = new RVector(pos.x+alaIzquierda+alaInferior,pos.y)
	var corte5 = new RVector(pos.x+alaIzquierda+anchuraPlaca-alaInferior,pos.y)
	var corte6 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
	var corte7 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer,pos.y+alaInferior-pliegueDer)
	var corte8 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer,pos.y+alaInferior)
	var corte9 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer+alaDerecha,pos.y+alaInferior)
	var corte10 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer+alaDerecha,pos.y+alaInferior+alturaPlaca)
	var corte11 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer,pos.y+alaInferior+alturaPlaca)
	var corte12 = new RVector(pos.x+alaIzquierda+anchuraPlaca+pliegueDer,pos.y+alaInferior+alturaPlaca+pliegueDer)
	var corte13 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
	var corte14 = new RVector(pos.x+alaIzquierda+anchuraPlaca-alaSuperior,pos.y+alaInferior+alturaPlaca+alaSuperior)
	var corte15 = new RVector(pos.x+alaIzquierda+alaSuperior,pos.y+alaInferior+alturaPlaca+alaSuperior)
	var corte16 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
	var corte17 = new RVector(pos.x,pos.y+alaInferior+alturaPlaca+alaIzquierda)
	
	
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
		var line = new RLineEntity(document, new RLineData( corte17 , corte1 ));
		op_corte.addObject(line,false);

	return op_corte; 

	
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F23 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function dibujarFresado128(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	

	//Puntos fresado
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior) 
	var fresado2 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior)
	
	var fresado5 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	var fresado6 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado7 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	
	var fresado8 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado9 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var fresado11 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var fresado12 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var fresado14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	

		var line = new RLineEntity(document, new RLineData( fresado1 , fresado11 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado10 ));
		op_fresado.addObject(line,false);

	
	
		
	
	//anchura1 //superior
	if (anchura1>pliegueSuperior){ 
		//var fresado12 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado12 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado19 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado20 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior+margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado19 , fresado20 ));
			op_fresado.addObject(line,false);
			
		}
	}
	

	//anchura2 //superior
	if (anchura2>pliegueSuperior){ 
		//var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado13 , fresado14 ));
		op_fresado.addObject(line,false);
	
		
		if (crearFresado==1){ 
			var fresado21 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			var fresado22 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior-margenFresado,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
		
		}
	}
	
	
	
	//anchura1 //inferior
	if (anchura1>pliegueInferior){ 
		//var fresado12 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){  
			var fresado15 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior+margenFresado,pos.y+alaInferior)
			var fresado16 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior+margenFresado,pos.y)
			var line = new RLineEntity(document, new RLineData( fresado15 , fresado16 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	//anchura2 //inferior
	if (anchura2>pliegueInferior){ 
		//var fresado12 = new RVector(pos.x+alaIzquierda+anchura1-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){  
			var fresado17 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior-margenFresado,pos.y+alaInferior)
			var fresado18 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior-margenFresado,pos.y)
			var line = new RLineEntity(document, new RLineData( fresado17 , fresado18 ));
			op_fresado.addObject(line,false);
		}
	}
	
	
	
	

	return op_fresado; 

}




function dibujarCorte128(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	 var repeticiones
	 var anchuras
	 var nAnchuras

	repeticiones=0
	anchuras=[anchura1,anchura2]
	nAnchuras=1 //numero de valores del vector "anchuras"	
	
	
	
	
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	 var corte1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	 var corte2 = new RVector(pos.x+alaIzquierda,pos.y)
	 var corte3 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y)
	 var corte4 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
	 var corte5 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	 var corte6 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
	 var corte7 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y)
	 var corte8 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y)
	
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

	

	
	//PARTE SUPERIOR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 var anchoA=anchura1+anchura2
	
	//Anchura primera
	if (anchuras[nAnchuras]>pliegueSuperior){ 
		 var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		 var corte2 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		 var corte3 = new RVector(pos.x+alaIzquierda+anchoA-(anchuras[nAnchuras]-pliegueSuperior),pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		 
		var line = new RLineEntity(document, new RLineData( corte8 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);

	}else{
		 var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchuras[nAnchuras])
		 var corte3 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[nAnchuras],pos.y+alaInferior+pliegueInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( corte8 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte3 ));
		op_corte.addObject(line,false);

	}
	
	anchoA=anchoA-anchuras[nAnchuras]
	 var m=repeticiones
	for (var n=1; n<(repeticiones+1); n=n+1){ 
		
		 var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		 var line = new RLineEntity(document, new RLineData( corte3 , corte1 ));
		op_corte.addObject(line,false);
	
		
		if (anchuras[m]>pliegueSuperior*2){
			 var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			 var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			 var corte4b = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
			 var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
			 var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
			op_corte.addObject(line,false);
			var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
			op_corte.addObject(line,false);
			
			var line = new RLineEntity(document, new RLineData( corte4b , corte5 ));
			op_corte.addObject(line,false);
		}else{
			 var corte5 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m]/2,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchuras[m]/2)
			
			 var line = new RLineEntity(document, new RLineData( corte1 , corte5 ));
			op_corte.addObject(line,false);

		}
	
		 var corte4 = new RVector(pos.x+alaIzquierda+anchoA-anchuras[m],pos.y+alaInferior+pliegueInferior+alturaPlaca)
		 var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));

		op_corte.addObject(line,false);

		
		anchoA=anchoA-anchuras[m]
		m=m-1
	}	
	var corte5 = new RVector(pos.x+alaIzquierda+anchura1+pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte4 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var line = new RLineEntity(document, new RLineData( corte5 , corte4 ));
			op_corte.addObject(line,false);
	//Anchura ultima
	if (anchura1>pliegueSuperior){ 
		 var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		 var corte2 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		 var corte3 = new RVector(pos.x+alaIzquierda+anchoA-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		 var corte4b = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior+alaSuperior)
		 var line = new RLineEntity(document, new RLineData( corte4 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4b ));
		op_corte.addObject(line,false);

		
	}else{
		 var corte1 = new RVector(pos.x+alaIzquierda+anchoA,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		 var corte4b = new RVector(pos.x+alaIzquierda+anchoA-anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		 var line = new RLineEntity(document, new RLineData( corte6 , corte1 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte1 , corte4b ));
		op_corte.addObject(line,false);

	}
	
		
	
	 var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	 var corte5 = new RVector(pos.x+alaIzquierda-pliegueSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
	 var corte6 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	 var corte7 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda)
	 var corte8 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alaIzquierda)
	 var corte9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	 var corte10 = new RVector(pos.x+alaIzquierda-pliegueInferior,pos.y+alaInferior)
	 var corte11 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	 
		var line = new RLineEntity(document, new RLineData( corte4b , corte4 ));
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


	return op_corte; 

}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F24 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado137(modelo,di,pos,document){

	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado

	//Puntos fresado
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior,pos.y+alaInferior)
	var fresado6 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior,pos.y+alaInferior)
	var fresado7 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInferior,pos.y+alaInferior)
	var fresado8 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	var fresado9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var fresado12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado15 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	

	var fresado19
	if (anchura1>alaSuperior){ 
		fresado19 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	}else{ 
		fresado19 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
	}
	
	
	var fresado20
	if (anchura4>alaSuperior){
		fresado20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	}else{ 
		fresado20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura4)
	}

	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado19 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado16 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado12 , fresado17 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado20 ));
		op_fresado.addObject(line,false);
	

	
	
	
	
	//anchura1
	if (anchura1>pliegueInferior){ 
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
	
		
		if (crearFresado==1){ 
			var fresado21 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior+margenFresado,pos.y)
			var fresado22 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior+margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
		}
	}
	

	//anchura2 
	if (anchura2>pliegueInferior*2){ 
		
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){ 
			var fresado23 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior-margenFresado,pos.y)
			var fresado24 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior-margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
			op_fresado.addObject(line,false);
			
			var fresado25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior+margenFresado,pos.y)
			var fresado26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior+margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	
	
	//anchura3 
	if (anchura3>pliegueInferior*2){ 
		
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado6 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){ 
			var fresado27 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior-margenFresado,pos.y)
			var fresado28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior-margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
	
			
			var fresado29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior+margenFresado,pos.y)
			var fresado30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior+margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado29 , fresado30 ));
			op_fresado.addObject(line,false);

		}
	}
	
	//anchura4 //inferior
	if (anchura4>pliegueInferior){ 
		
		var line = new RLineEntity(document, new RLineData( fresado7 , fresado8 ));
		op_fresado.addObject(line,false);

		
		if (crearFresado==1){ 
			var fresado31 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInferior-margenFresado,pos.y)
			var fresado32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInferior-margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado31 , fresado32 ));
			op_fresado.addObject(line,false);

		}
	}
	
	

	return op_fresado; 

}



function dibujarCorte137(modelo,di,pos,document){
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y)
	var corte2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte3 = new RVector(pos.x+alaIzquierda-pliegueInferior,pos.y+alaInferior)
	var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	var corte5 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alaIzquierda)
	var corte6 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda)
	var corte7 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte8 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda)
	
	
	
	var corte9
	var corte10
	if (anchura1>alaSuperior){ 
		corte9 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		corte10 = new RVector(pos.x+alaIzquierda+anchura1-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	}else {
		corte9 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		corte10 = new RVector(pos.x+alaIzquierda+anchura1-anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
	}
	
	
	
	var corte11 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte12 = new RVector(pos.x+alaIzquierda+anchura1+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	var corte13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	var corte14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	var corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	var corte17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	
	var corte18
	var corte19
	if (anchura4>alaSuperior){ 
		corte18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		corte19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	}else{ 
		corte18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura4)
		corte19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura4)
	}
	
	
	
	var corte40 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaDerecha)
	var corte41 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte42 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha)
	var corte20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha)
	var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior+pliegueInferior)
	var corte22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior+pliegueInferior-alaDerecha)
	var corte23 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4+alaDerecha,pos.y+alaInferior)
	var corte24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y+alaInferior)
	var corte25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+anchura4,pos.y)
	var corte26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInferior,pos.y)
	var corte27 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInferior,pos.y+alaInferior)
	var corte28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var corte29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior,pos.y+alaInferior)
	var corte30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior,pos.y)
	var corte31 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior,pos.y)
	var corte32 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior,pos.y+alaInferior)
	var corte33 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var corte34 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior,pos.y+alaInferior)
	var corte35 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior,pos.y)
	var corte36 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y)
	var corte37 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var corte43 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
	var corte38 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
	var corte39 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y)
	
	
	
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
		op_corte.addObject(line,false)
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
		var line = new RLineEntity(document, new RLineData( corte19 , corte40 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte40 , corte41 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte41 , corte42 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte42 , corte20 ));
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
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte36 , corte43 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte43 , corte37 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte37 , corte38 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte38 , corte39 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte39 , corte1 ));
		op_corte.addObject(line,false);
		
	

	return op_corte; 

}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F25 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarFresado138(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	

	
	//Puntos fresado
	var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var fresado2 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
	var fresado3 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
	var fresado4 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior,pos.y+alaInferior)
	var fresado5 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior,pos.y+alaInferior)
	//var fresado6 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior,pos.y+alaInferior)
	//var fresado7 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+pliegueInferior,pos.y+alaInferior)
	var fresado8 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var fresado9 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	var fresado10 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var fresado11 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	//var fresado12 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var fresado14 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado15 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	//var fresado17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var fresado18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	
	var fresado19
	if (anchura1>alaSuperior){ 
		fresado19 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	}else{ 
		fresado19 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
	}
	
	
	var fresado20
	if (anchura3>alaSuperior){ 
		fresado20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	}else{ 
		fresado20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3)
	}
	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado8 ));
		op_fresado.addObject(line,false);
		/*var line = new RLineEntity(document, new RLineData( fresado7 , fresado8 ));
		op_fresado.addObject(line,false);*/
		var line = new RLineEntity(document, new RLineData( fresado9 , fresado13 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado14 , fresado18 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado19 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado10 , fresado15 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado11 , fresado16 ));
		op_fresado.addObject(line,false);
		/*var line = new RLineEntity(document, new RLineData( fresado12 , fresado17 ));
		op_fresado.addObject(line,false);*/
		var line = new RLineEntity(document, new RLineData( fresado8 , fresado20 ));
		op_fresado.addObject(line,false);
	

	
	
	
	//anchura1
	if (anchura1>pliegueInferior){ 
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
		if (crearFresado==1){ 
			var fresado21 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior+margenFresado,pos.y)
			var fresado22 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior+margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado21 , fresado22 ));
			op_fresado.addObject(line,false);
			
		}
	}
	
	
	//anchura2 
	if (anchura2>pliegueInferior*2){ 
		
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		
		if (crearFresado==1){  
			var fresado23 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior-margenFresado,pos.y)
			var fresado24 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior-margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado23 , fresado24 ));
			op_fresado.addObject(line,false);
			
			
			var fresado25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior+margenFresado,pos.y)
			var fresado26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior+margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado25 , fresado26 ));
			op_fresado.addObject(line,false);

		}
	}
	
	
	
	//anchura3 
	if (anchura3>pliegueInferior*2){ 
		
		var line = new RLineEntity(document, new RLineData( fresado5 , fresado8 ));
		op_fresado.addObject(line,false);

		
		if (crearFresado==1){ 
			var fresado27 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior-margenFresado,pos.y)
			var fresado28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior-margenFresado,pos.y+alaInferior)
			var line = new RLineEntity(document, new RLineData( fresado27 , fresado28 ));
			op_fresado.addObject(line,false);
			
			
			//var fresado29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior+margenFresado,pos.y)
			//var fresado30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3-pliegueInferior+margenFresado,pos.y+alaInferior)
			//dibujarFresado_auxiliar(doc,fresado29,fresado30)
		}
	}
	
	return op_fresado
}



function dibujarCorte138(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	//PARTE INFERIOR//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
	var corte1 = new RVector(pos.x+alaIzquierda,pos.y)
	var corte2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
	var corte3 = new RVector(pos.x+alaIzquierda-pliegueInferior,pos.y+alaInferior)
	var corte4 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior)
	var corte5 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alaIzquierda)
	var corte6 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaIzquierda)
	var corte7 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte8 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaIzquierda)
	
	
	var corte9
	var corte10
	if (anchura1>alaSuperior){ 
		corte9 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		corte10 = new RVector(pos.x+alaIzquierda+anchura1-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	}else{ 
		corte9 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
		corte10 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura1)
	}
	
	
	
	var corte11 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte12 = new RVector(pos.x+alaIzquierda+anchura1+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	var corte13 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
	var corte14 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	
	var corte15
	var corte16
	if (anchura3>alaSuperior){
		corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+alaSuperior,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaSuperior)
		
	}else{
		corte15 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3)
		corte16 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+anchura3)
	}
	
	
	var corte17 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca+alaDerecha)
	var corte18 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior+alturaPlaca)
	var corte19 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaDerecha,pos.y+alaInferior+pliegueInferior+alturaPlaca-alaDerecha)
	var corte20 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaDerecha,pos.y+alaInferior+pliegueInferior+alaDerecha)
	var corte21 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior+pliegueInferior)
	var corte22 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaDerecha,pos.y+alaInferior+pliegueInferior-alaDerecha)
	var corte23 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3+alaDerecha,pos.y+alaInferior)
	var corte24 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y+alaInferior)
	var corte25 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+anchura3,pos.y)
	var corte26 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior,pos.y)
	var corte27 = new RVector(pos.x+alaIzquierda+anchura1+anchura2+pliegueInferior,pos.y+alaInferior)
	var corte28 = new RVector(pos.x+alaIzquierda+anchura1+anchura2,pos.y+alaInferior+pliegueInferior)
	var corte29 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior,pos.y+alaInferior)
	var corte30 = new RVector(pos.x+alaIzquierda+anchura1+anchura2-pliegueInferior,pos.y)
	var corte31 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y)
	var corte32 = new RVector(pos.x+alaIzquierda+anchura1+pliegueInferior,pos.y+alaInferior)
	var corte33 = new RVector(pos.x+alaIzquierda+anchura1,pos.y+alaInferior+pliegueInferior)
	var corte34 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y+alaInferior)
	var corte35 = new RVector(pos.x+alaIzquierda+anchura1-pliegueInferior,pos.y)
	var corte36 = new RVector(pos.x+alaIzquierda,pos.y)
	
	
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
		var line = new RLineEntity(document, new RLineData( corte28 , corte29 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte29 , corte30 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte30 , corte31 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte31 , corte32 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte32 , corte33 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte33 , corte34 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte34 , corte35 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte35 , corte36 ));
		op_corte.addObject(line,false);
		




	return op_corte; 

}

	
	
	
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////// // MODELO F26 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
function dibujarFresado139(modelo,di,pos,document){
	
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	
	//Puntos fresado
	var fresado1 = new RVector(pos.x,pos.y)
	var fresado2 = new RVector(pos.x,pos.y+pliegueInferior)
	var fresado3 = new RVector(pos.x-anchura3,pos.y+pliegueInferior)
	var fresado4 = new RVector(pos.x-anchura3-anchura2,pos.y+pliegueInferior)
	var fresado5 = new RVector(pos.x-anchura3-anchura2-anchura1,pos.y+pliegueInferior)
	var fresado6 = new RVector(pos.x-anchura3-anchura2-anchura1,pos.y+pliegueInferior+alturaPlaca)
	var fresado7 = new RVector(pos.x-anchura3-anchura2,pos.y+pliegueInferior+alturaPlaca)
	var fresado8 = new RVector(pos.x-anchura3,pos.y+pliegueInferior+alturaPlaca)
	var fresado9 = new RVector(pos.x,pos.y+pliegueInferior+alturaPlaca)
	var fresado10 = new RVector(pos.x,pos.y+pliegueInferior+alturaPlaca+pliegueSuperior)
	
	
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado10 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado6 , fresado9 ));
		op_fresado.addObject(line,false);
	
		return op_fresado;
}	
	
	
function dibujarCorte139(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	//Parte inferior
	var hipot1=pliegueInferior/(Math.cos((Math.PI/180)*(42.5)))
	var difer1=Math.sqrt(Math.pow(hipot1,2)-Math.pow(pliegueInferior,2))
	//Parte superior
	var hipot2=pliegueSuperior/(Math.cos((Math.PI/180)*(42.5)))
	var difer2=Math.sqrt(Math.pow(hipot2,2)-Math.pow(pliegueSuperior,2))
	
	var corte11 = new RVector(pos.x-anchura3+difer1,pos.y)
	var corte12 = new RVector(pos.x-anchura3-difer1,pos.y)
	var corte13 = new RVector(pos.x-anchura3-anchura2+difer1,pos.y)
	var corte14 = new RVector(pos.x-anchura3-anchura2-difer1,pos.y)
	var corte15 = new RVector(pos.x-anchura3-anchura2-anchura1,pos.y)
	var corte16 = new RVector(pos.x-anchura3-anchura2-anchura1,pos.y+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte17 = new RVector(pos.x-anchura3-anchura2-difer2,pos.y+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte18 = new RVector(pos.x-anchura3-anchura2+difer2,pos.y+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte19 = new RVector(pos.x-anchura3-difer2,pos.y+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte20 = new RVector(pos.x-anchura3+difer2,pos.y+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte21 = new RVector(pos.x+pliegueSuperior,pos.y+pliegueInferior+alturaPlaca+pliegueSuperior)
	var corte22 = new RVector(pos.x+alaDerecha,pos.y+pliegueInferior+alturaPlaca-alaDerecha)
	var corte23 = new RVector(pos.x+alaDerecha,pos.y+pliegueInferior+alaDerecha)
	var corte24 = new RVector(pos.x+pliegueInferior,pos.y)
	
	var corte3 = new RVector(pos.x-anchura3,pos.y+pliegueInferior)
	var corte4 = new RVector(pos.x-anchura3-anchura2,pos.y+pliegueInferior)
	var corte7 = new RVector(pos.x-anchura3-anchura2,pos.y+pliegueInferior+alturaPlaca)
	var corte8 = new RVector(pos.x-anchura3,pos.y+pliegueInferior+alturaPlaca)
	var corte9 = new RVector(pos.x,pos.y+pliegueInferior+alturaPlaca)
	var corte2 = new RVector(pos.x,pos.y+pliegueInferior)



	
	
		var line = new RLineEntity(document, new RLineData( corte24 , corte11 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte11 , corte3 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte12 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte12 , corte13 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte13 , corte4 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte14 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte14 , corte15 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte15 , corte16 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte16 , corte17 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte17 , corte7 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte18));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte18 , corte19 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte19 , corte8 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte20 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte20 , corte21 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte21 , corte9 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte22 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte22 , corte23 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte23 , corte2 ));
		op_corte.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte24 ));
		op_corte.addObject(line,false);
		
		
		
		return op_corte;
	
	
}	
	
	
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




	



//EAction.handleUserMessage("ha entrado 33333333333333333333333333333333333333333 ");



	
	
	
	





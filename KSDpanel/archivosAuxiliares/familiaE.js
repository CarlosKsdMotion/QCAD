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
function guardarParametrosE(modelo){
	
	
	if (modelo==50){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloE0.ui" );
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
		
		
		//Parametros especificos E0
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		altura3 = parseInt(widgets["altura3UI"].text);
		altura4 = parseInt(widgets["altura4UI"].text);
		altura5 = parseInt(widgets["altura5UI"].text);
		
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		margenM1 = parseInt(widgets["margenM1UI"].text);
		margenM2 = parseInt(widgets["margenM2UI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
	}
	
	
	
	
	
	else if (modelo==51){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloE1.ui" );
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
		
		
		//Parametros especificos E1
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		altura3 = parseInt(widgets["altura3UI"].text);
		altura4 = parseInt(widgets["altura4UI"].text);
		altura5 = parseInt(widgets["altura5UI"].text);
		
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		margenM1 = parseInt(widgets["margenM1UI"].text);
		margenM2 = parseInt(widgets["margenM2UI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
	}
	
	
	
	
	
	
	else if (modelo==52){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloE2.ui" );
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
		
		
		//Parametros especificos E2
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		altura3 = parseInt(widgets["altura3UI"].text);
		altura4 = parseInt(widgets["altura4UI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		
		margenM1 = parseInt(widgets["margenM1UI"].text);
		margenM2 = parseInt(widgets["margenM2UI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
	}
	
	
	
	
	
	if (modelo==53){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloE3.ui" );
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
		
		
		//Parametros especificos E3
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		altura3 = parseInt(widgets["altura3UI"].text);
		altura4 = parseInt(widgets["altura4UI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		
		margenM1 = parseInt(widgets["margenM1UI"].text);
		margenM2 = parseInt(widgets["margenM2UI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
	}
	
	
	
	
	
	
	else if (modelo==54){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloE4.ui" );
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
		
		
		//Parametros especificos E4
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		altura3 = parseInt(widgets["altura3UI"].text);
		altura4 = parseInt(widgets["altura4UI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		
		margenM1 = parseInt(widgets["margenM1UI"].text);
		margenM2 = parseInt(widgets["margenM2UI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
		
		
		
	}
	
	
	
	
	
	
	
	else if (modelo==55){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloE5.ui" );
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
		
		
		//Parametros especificos E5
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		altura3 = parseInt(widgets["altura3UI"].text);
		altura4 = parseInt(widgets["altura4UI"].text);
		
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		
		margenM1 = parseInt(widgets["margenM1UI"].text);
		margenM2 = parseInt(widgets["margenM2UI"].text);
		
		crearFresado = widgets["crearFresadoUI"].checked;
		margenFresado = parseInt(widgets["margenFresadoUI"].text);
		
	}
	
	
	
	
	
	
};











/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//--------------------DIBUJAR FRESADO (TIPO E)--------------------
function dibujarFresadoE(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	
	/*var Contour = Contour(0.0)
	var fresado1
	var fresado2
	var fresado3
	var fresado4*/
		
	if (modelo==50){ //[E0]
		var fresado1 = new RVector(pos.x+margenM1,pos.y+altura5)
		var fresado2 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura5+altura4)
		var fresado2 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5+altura4)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura5+altura4+altura3)
		var fresado2 = new RVector(pos.x+margenM1+margenM2+anchuraPlaca,pos.y+altura5+altura4+altura3)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x+margenM1,pos.y+altura5+altura4+altura3+altura2)
		var fresado2 = new RVector(pos.x+margenM1+margenM2+anchuraPlaca,pos.y+altura5+altura4+altura3+altura2)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==51) { //[E1]
		var fresado1 = new RVector(pos.x+margenM1,pos.y+altura5)
		var fresado2 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x+margenM1,pos.y+altura5+altura4)
		var fresado2 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura5+altura4+altura3)
		var fresado2 = new RVector(pos.x+margenM1+margenM2+anchuraPlaca,pos.y+altura5+altura4+altura3)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura5+altura4+altura3+altura2)
		var fresado2 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5+altura4+altura3+altura2)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==52) { //[E2]
		var fresado1 = new RVector(pos.x,pos.y+altura4)
		var fresado2 = new RVector(pos.x+anchura2,pos.y+altura4)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura4+altura3)
		var fresado2 = new RVector(pos.x+anchura2+margenM2,pos.y+altura4+altura3)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x+margenM1,pos.y+altura4+altura3+altura2)
		var fresado2 = new RVector(pos.x+anchura2+margenM2,pos.y+altura4+altura3+altura2)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
	}else if (modelo==53) { //[E3]
		var fresado1 = new RVector(pos.x+margenM1,pos.y+altura4)
		var fresado2 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura4+altura3)
		var fresado2 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4+altura3)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura4+altura3+altura2)
		var fresado2 = new RVector(pos.x+margenM1+anchura2-margenM2,pos.y+altura4+altura3+altura2)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
		
	}else if (modelo==54 || modelo==55) { //[E4][E5]
		var fresado1 = new RVector(pos.x+margenM1,pos.y+altura4)
		var fresado2 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura4+altura3)
		var fresado2 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+altura4+altura3+altura2)
		var fresado2 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3+altura2)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
	}
	
	
	
	
	
	return op_fresado;
}








//--------------------DIBUJAR CORTE (TIPO E)--------------------
function dibujarCorteE(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte
	
	
	
	if (modelo==50) { //[E0]
		var corte1 = new RVector(pos.x+margenM1,pos.y)
		var corte2 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y)
		var corte3 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5+altura4)
		var corte4 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4+altura3)
		var corte5 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4+altura3+altura2)
		var corte6 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2-altura1,pos.y+altura5+altura4+altura3+altura2+altura1)
		var corte7 = new RVector(pos.x+margenM1,pos.y+altura5+altura4+altura3+altura2+altura1)
		var corte8 = new RVector(pos.x+margenM1,pos.y+altura5+altura4+altura3+altura2)
		var corte9 = new RVector(pos.x,pos.y+altura5+altura4+altura3)
		var corte10 = new RVector(pos.x,pos.y+altura5+altura4)
		var corte11 = new RVector(pos.x+margenM1,pos.y+altura5)
		
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
		var line = new RLineEntity(document, new RLineData( corte11 , corte1 ));
		op_corte.addObject(line,false);
		
		
	}else if (modelo==51) { //[E1]
		var corte1 = new RVector(pos.x+margenM1,pos.y)
		var corte2 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y)
		var corte3 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5)
		var corte4 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4)
		var corte5 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4+altura3)
		var corte6 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5+altura4+altura3+altura2)
		var corte7 = new RVector(pos.x+margenM1+anchuraPlaca,pos.y+altura5+altura4+altura3+altura2+altura1)
		var corte8 = new RVector(pos.x+altura1,pos.y+altura5+altura4+altura3+altura2+altura1)
		var corte9 = new RVector(pos.x,pos.y+altura5+altura4+altura3+altura2)
		var corte10 = new RVector(pos.x,pos.y+altura5+altura4+altura3)
		var corte11 = new RVector(pos.x+margenM1,pos.y+altura5+altura4)
		
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
		var line = new RLineEntity(document, new RLineData( corte11 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
	}else if (modelo==52) { //[E2]
		var corte1 = new RVector(pos.x,pos.y+altura4)
		var corte2 = new RVector(pos.x+anchura1,pos.y)
		var corte3 = new RVector(pos.x+anchura2,pos.y)
		var corte4 = new RVector(pos.x+anchura2,pos.y+altura4)
		var corte5 = new RVector(pos.x+anchura2+margenM2,pos.y+altura4+altura3)
		var corte6 = new RVector(pos.x+anchura2+margenM2,pos.y+altura4+altura3+altura2)
		var corte7 = new RVector(pos.x+anchura2+margenM2-altura1,pos.y+altura4+altura3+altura2+altura1)
		var corte8 = new RVector(pos.x+margenM1,pos.y+altura4+altura3+altura2+altura1)
		var corte9 = new RVector(pos.x+margenM1,pos.y+altura4+altura3+altura2)
		var corte10 = new RVector(pos.x,pos.y+altura4+altura3)
		
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
		var line = new RLineEntity(document, new RLineData( corte10 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
	}else if (modelo==53) { //[E3] 
		var corte1 = new RVector(pos.x+margenM1,pos.y+altura4)
		var corte2 = new RVector(pos.x+margenM1,pos.y)
		var corte3 = new RVector(pos.x+margenM1+anchura2-anchura1,pos.y)
		var corte4 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4)
		var corte5 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4+altura3)
		var corte6 = new RVector(pos.x+margenM1+anchura2-margenM2,pos.y+altura4+altura3+altura2)
		var corte7 = new RVector(pos.x+margenM1+anchura2-margenM2,pos.y+altura4+altura3+altura2+altura1)
		var corte8 = new RVector(pos.x+altura1,pos.y+altura4+altura3+altura2+altura1)
		var corte9 = new RVector(pos.x,pos.y+altura4+altura3+altura2)
		var corte10 = new RVector(pos.x,pos.y+altura4+altura3)
		
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
		var line = new RLineEntity(document, new RLineData( corte10 , corte1 ));
		op_corte.addObject(line,false);
		
		
	}else if (modelo==54) { //[E4]
		var corte1 = new RVector(pos.x+margenM1,pos.y+altura4)
		var corte2 = new RVector(pos.x+margenM1+anchura1,pos.y)
		var corte3 = new RVector(pos.x+margenM1+anchura2,pos.y)
		var corte4 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4)
		var corte5 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3)
		var corte6 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3+altura2)
		var corte7 = new RVector(pos.x+margenM1+anchura2+margenM2-altura1,pos.y+altura4+altura3+altura2+altura1)
		var corte8 = new RVector(pos.x+altura1,pos.y+altura4+altura3+altura2+altura1)
		var corte9 = new RVector(pos.x,pos.y+altura4+altura3+altura2)
		var corte10 = new RVector(pos.x,pos.y+altura4+altura3)
		
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
		var line = new RLineEntity(document, new RLineData( corte10 , corte1 ));
		op_corte.addObject(line,false);
		
		
		
	}else if (modelo==55) { //[E5]
		var corte1 = new RVector(pos.x+margenM1,pos.y+altura4)
		var corte2 = new RVector(pos.x+margenM1,pos.y)
		var corte3 = new RVector(pos.x+margenM1+anchura2-anchura1,pos.y)
		var corte4 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4)
		var corte5 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3)
		var corte6 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3+altura2)
		var corte7 = new RVector(pos.x+margenM1+anchura2+margenM2-altura1,pos.y+altura4+altura3+altura2+altura1)
		var corte8 = new RVector(pos.x+altura1,pos.y+altura4+altura3+altura2+altura1)
		var corte9 = new RVector(pos.x,pos.y+altura4+altura3+altura2)
		var corte10 = new RVector(pos.x,pos.y+altura4+altura3)
		
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
		var line = new RLineEntity(document, new RLineData( corte10 , corte1 ));
		op_corte.addObject(line,false);
		
	}
	
	
	
	
	return op_corte;
}


















//--------------------DIBUJAR FRESADO (TIPO E)--------------------
function dibujarFresadoExteriorE(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	

	
	EAction.handleUserMessage("x1= " +y2);
	
	if (modelo==50) { //[E0]
		
		//-----FRESADO EXTERIOR parte IZQUIERDA-------
		//Tramo superior
		beta = Math.atan(altura2/margenM1) //Esto es lo unico que cambia Math.atan(tamaño en x[horizontal] /tamaño en y[vertical])
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		
		var corte1 = new RVector(pos.x+margenM1-x1,pos.y+altura5+altura4+altura3+altura2)
		var corte2 = new RVector(pos.x,pos.y+altura5+altura4+altura3+y2)
		
		//Tramo medio
		var corte3 = new RVector(pos.x-margenFresado,pos.y+altura5+altura4+altura3)
		var corte4 = new RVector(pos.x-margenFresado,pos.y+altura5+altura4)
		
		//Tramo inferior
		beta = Math.atan(altura4/margenM1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		
		
		var corte5 = new RVector(pos.x,pos.y+altura5+altura4-y2)
		var corte6 = new RVector(pos.x+margenM1-x1,pos.y+altura5)
		
		//Dibujar puntos calculados
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		
		
		
		//-----FRESADO EXTERIOR parte DERECHA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2-altura1+x1,pos.y+altura5+altura4+altura3+altura2+altura1)
		var corte6 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4+altura3+altura2+y2)
		
		var corte7 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2+margenFresado,pos.y+altura5+altura4+altura3+altura2)
		var corte8 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2+margenFresado,pos.y+altura5+altura4+altura3)
		
		beta = Math.atan(altura3/margenM2)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte9 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4+altura3-y2)
		var corte10 = new RVector(pos.x+margenM1+anchuraPlaca+x1,pos.y+altura5+altura4)
		
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
		
		
	}else if (modelo==51) { //[E1]
		//-----FRESADO EXTERIOR parte IZQUIERDA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte1 = new RVector(pos.x+altura1-x1,pos.y+altura5+altura4+altura3+altura2+altura1)
		var corte2 = new RVector(pos.x,pos.y+altura5+altura4+altura3+altura2+y2)
		
		//Tramo medio
		var corte3 = new RVector(pos.x-margenFresado,pos.y+altura5+altura4+altura3+altura2)
		var corte4 = new RVector(pos.x-margenFresado,pos.y+altura5+altura4+altura3)
		
		//Tramo inferior
		beta = Math.atan(altura3/margenM1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x,pos.y+altura5+altura4+altura3-y2)
		var corte6 = new RVector(pos.x+margenM1-x1,pos.y+altura5+altura4)
		
		//Dibujar puntos calculados
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		
		
		//-----FRESADO EXTERIOR parte DERECHA-------
		//Tramo superior
		beta = Math.atan(altura2/margenM2)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x+margenM1+anchuraPlaca+x1,pos.y+altura5+altura4+altura3+altura2)
		var corte6 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4+altura3+y2)
		
		var corte7 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2+margenFresado,pos.y+altura5+altura4+altura3)
		var corte8 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2+margenFresado,pos.y+altura5+altura4)
		
		beta = Math.atan(altura4/margenM2)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte9 = new RVector(pos.x+margenM1+anchuraPlaca+margenM2,pos.y+altura5+altura4-y2)
		var corte10 = new RVector(pos.x+margenM1+anchuraPlaca+x1,pos.y+altura5)
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
		
		
		
		
	}else if (modelo==52) { //[E2]
		//-----FRESADO EXTERIOR parte IZQUIERDA-------
		//Tramo superior
		var corte1 = new RVector(pos.x+margenM1-margenFresado,pos.y+altura4+altura3+altura2+altura1)
		var corte2 = new RVector(pos.x+margenM1-margenFresado,pos.y+altura4+altura3+altura2+margenFresado)
		
		//Tramo medio
		beta = Math.atan(altura2/margenM1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte3 = new RVector(pos.x+margenM1-x1,pos.y+altura4+altura3+altura2)
		var corte4 = new RVector(pos.x,pos.y+altura4+altura3+y2)
		
		//Tramo inferior
		var corte5 = new RVector(pos.x-margenFresado,pos.y+altura4+altura3)
		var corte6 = new RVector(pos.x-margenFresado,pos.y+altura4)
		
		
		
		//Dibujar puntos calculados
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		//-----FRESADO EXTERIOR parte DERECHA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x+anchura2+margenM2-altura1+x1,pos.y+altura4+altura3+altura2+altura1)
		var corte6 = new RVector(pos.x+anchura2+margenM2,pos.y+altura4+altura3+altura2+y2)
		
		var corte7 = new RVector(pos.x+anchura2+margenM2+margenFresado,pos.y+altura4+altura3+altura2)
		var corte8 = new RVector(pos.x+anchura2+margenM2+margenFresado,pos.y+altura4+altura3)
		
		beta = Math.atan(altura3/margenM2)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte9 = new RVector(pos.x+anchura2+margenM2,pos.y+altura4+altura3-y2)
		var corte10 = new RVector(pos.x+anchura2+x1,pos.y+altura4)
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
		
	}else if (modelo==53) { //[E3]
		//-----FRESADO EXTERIOR parte IZQUIERDA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte1 = new RVector(pos.x+altura1-x1,pos.y+altura4+altura3+altura2+altura1)
		var corte2 = new RVector(pos.x,pos.y+altura4+altura3+altura2+y2)
		
		//Tramo medio
		var corte3 = new RVector(pos.x-margenFresado,pos.y+altura4+altura3+altura2)
		var corte4 = new RVector(pos.x-margenFresado,pos.y+altura4+altura3)
		
		//Tramo inferior
		beta = Math.atan(altura3/margenM1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x,pos.y+altura4+altura3-y2)
		var corte6 = new RVector(pos.x+margenM1-x1,pos.y+altura4)
		
		//Dibujar puntos calculados
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		
		
		
		//-----FRESADO EXTERIOR parte DERECHA-------
		//Tramo superior
		var corte5 = new RVector(pos.x+margenM1+anchura2-margenM2+margenFresado,pos.y+altura4+altura3+altura2+altura1)
		var corte6 = new RVector(pos.x+margenM1+anchura2-margenM2+margenFresado,pos.y+altura4+altura3+altura2+margenFresado)
		
		beta = Math.atan(altura2/margenM2)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte7 = new RVector(pos.x+margenM1+anchura2-margenM2+x1,pos.y+altura4+altura3+altura2)
		var corte8 = new RVector(pos.x+margenM1+anchura2,pos.y+altura4+altura3+y2)
		
		var corte9 = new RVector(pos.x+margenM1+anchura2+margenFresado,pos.y+altura4+altura3)
		var corte10 = new RVector(pos.x+margenM1+anchura2+margenFresado,pos.y+altura4)
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
		
		
	}else if (modelo==54) { //[E4] 
		//-----FRESADO EXTERIOR parte IZQUIERDA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte1 = new RVector(pos.x+altura1-x1,pos.y+altura4+altura3+altura2+altura1)
		var corte2 = new RVector(pos.x,pos.y+altura4+altura3+altura2+y2)
		
		//Tramo medio
		var corte3 = new RVector(pos.x-margenFresado,pos.y+altura4+altura3+altura2)
		var corte4 = new RVector(pos.x-margenFresado,pos.y+altura4+altura3)
		
		//Tramo inferior
		beta = Math.atan(altura3/margenM1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x,pos.y+altura4+altura3-y2)
		var corte6 = new RVector(pos.x+margenM1-x1,pos.y+altura4)
		
		//Dibujar puntos calculados
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		
		
		
		//-----FRESADO EXTERIOR parte DERECHA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x+margenM1+anchura2+margenM2-altura1+x1,pos.y+altura4+altura3+altura2+altura1)
		var corte6 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3+altura2+y2)
		
		var corte7 = new RVector(pos.x+margenM1+anchura2+margenM2+margenFresado,pos.y+altura4+altura3+altura2)
		var corte8 = new RVector(pos.x+margenM1+anchura2+margenM2+margenFresado,pos.y+altura4+altura3)
		
		beta = Math.atan(altura3/margenM2)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte9 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3-y2)
		var corte10 = new RVector(pos.x+margenM1+anchura2+x1,pos.y+altura4)
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_fresado.addObject(line,false);
		
		
		
		
		
		
		
		
		
		
		
	}else if (modelo==55) { //[E5]
		//-----FRESADO EXTERIOR parte IZQUIERDA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte1 = new RVector(pos.x+altura1-x1,pos.y+altura4+altura3+altura2+altura1)
		var corte2 = new RVector(pos.x,pos.y+altura4+altura3+altura2+y2)
		
		//Tramo medio
		var corte3 = new RVector(pos.x-margenFresado,pos.y+altura4+altura3+altura2)
		var corte4 = new RVector(pos.x-margenFresado,pos.y+altura4+altura3)
		
		//Tramo inferior
		beta = Math.atan(altura3/margenM1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x,pos.y+altura4+altura3-y2)
		var corte6 = new RVector(pos.x+margenM1-x1,pos.y+altura4)
		
		//Dibujar puntos calculados
		var line = new RLineEntity(document, new RLineData( corte1 , corte2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte2 , corte3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte3 , corte4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte4 , corte5 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		
		
		
		//-----FRESADO EXTERIOR parte DERECHA-------
		//Tramo superior
		beta = Math.atan(altura1/altura1)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte5 = new RVector(pos.x+margenM1+anchura2+margenM2-altura1+x1,pos.y+altura4+altura3+altura2+altura1)
		var corte6 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3+altura2+y2)
		
		var corte7 = new RVector(pos.x+margenM1+anchura2+margenM2+margenFresado,pos.y+altura4+altura3+altura2)
		var corte8 = new RVector(pos.x+margenM1+anchura2+margenM2+margenFresado,pos.y+altura4+altura3)
		
		beta = Math.atan(altura3/margenM2)
		var x1 = margenFresado/Math.sin(beta)
		var alfa = Math.PI/2 - beta		
		var y2 = margenFresado/Math.sin(alfa)
		
		var corte9 = new RVector(pos.x+margenM1+anchura2+margenM2,pos.y+altura4+altura3-y2)
		var corte10 = new RVector(pos.x+margenM1+anchura2+x1,pos.y+altura4)
		
		var line = new RLineEntity(document, new RLineData( corte5 , corte6 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte6 , corte7 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte7 , corte8 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte8 , corte9 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( corte9 , corte10 ));
		op_fresado.addObject(line,false);
		
		
		
		
	}
	
	
	
	
	return op_fresado;
}






























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
function guardarParametrosD(modelo){
	
	
	if (modelo==40){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD0.ui" );
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
		
		
		//Parametros especificos D0
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
	}
	
	else if (modelo==41){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD1.ui" );
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
		
		
		//Parametros especificos D1
		altura1 = parseInt(widgets["altura1UI"].text);
		altura2 = parseInt(widgets["altura2UI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
	}
	
	else if (modelo==42){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD2.ui" );
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
		
		
		//Parametros especificos D2
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
	}
	
	if (modelo==43){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD3.ui" );
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
		
		
		//Parametros especificos D3
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		pliegueSuperior = parseInt(widgets["pliegueSuperiorUI"].text);
		pliegueInferior = parseInt(widgets["pliegueInferiorUI"].text);
		
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
	}

	else if (modelo==44){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD4.ui" );
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
		
		
		//Parametros especificos D4
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		
	}

	else if (modelo==45){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD5.ui" );
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
		
		
		//Parametros especificos D5
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		anchura4 = parseInt(widgets["anchura4UI"].text);
	}

	else if (modelo==46){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD6.ui" );
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
		
		
		//Parametros especificos D6
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		
	}

	else if (modelo==47){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD7.ui" );
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
		
		
		//Parametros especificos D7
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchuraPlaca = parseInt(widgets["anchuraPlacaUI"].text);
		
		alaIzquierda = parseInt(widgets["alaIzquierdaUI"].text);
		alaDerecha = parseInt(widgets["alaDerechaUI"].text);
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		alaInferior = parseInt(widgets["alaInferiorUI"].text);
		
		pliegueIzq = parseInt(widgets["pliegueIzquierdaUI"].text);
		pliegueDer = parseInt(widgets["pliegueDerechaUI"].text);
	}
	
	else if (modelo==48){
		//ABRIR INTERFAZ SECUNDARIA
		var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/interfacesSecundarias" , "KSDpanel_modeloD8.ui" );
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
		
		
		//Parametros especificos D7
		alturaPlaca = parseInt(widgets["alturaPlacaUI"].text);
		anchura1 = parseInt(widgets["anchura1UI"].text);
		anchura2 = parseInt(widgets["anchura2UI"].text);
		anchura3 = parseInt(widgets["anchura3UI"].text);
		
		alaSuperior = parseInt(widgets["alaSuperiorUI"].text);
		

	}
	
	
	
};











/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//--------------------DIBUJAR FRESADO (TIPO D)--------------------
function dibujarFresadoD(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_fresado = new RAddObjectsOperation();
	di.setCurrentLayer("Fresado"); //Seleccionar la capa de fresado
	
	
	if (modelo==41) { //[DH1]
		var fresado1 = new RVector(pos.x,pos.y+alaInferior)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+altura1)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior+altura1)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+altura1+altura2)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior+altura1+altura2)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
	
	}else if (modelo==42) { //[DH2]
		var fresado1 = new RVector(pos.x,pos.y+alaInferior)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
	}else if (modelo==43) { //[DH3]
		var fresado1 = new RVector(pos.x,pos.y+alaInferior)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior+pliegueInferior)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior+pliegueInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var fresado2 = new RVector(pos.x+anchuraPlaca,pos.y+alaInferior+pliegueInferior+alturaPlaca+pliegueSuperior)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
	
	}else if (modelo==44) { //[DH4]
		var fresado1 = new RVector(pos.x+anchura1,pos.y)
		var fresado2 = new RVector(pos.x+anchura1,pos.y+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
	}else if (modelo==45) { //[DH5]
		var fresado1 = new RVector(pos.x+anchura1,pos.y)
		var fresado2 = new RVector(pos.x+anchura1,pos.y+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x+anchura1+anchura2,pos.y)
		var fresado2 = new RVector(pos.x+anchura1+anchura2,pos.y+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y)
		var fresado2 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);	
		
	}else if (modelo==46) { //[DH6]
		var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var fresado2 = new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior)
		var fresado3=new RVector(pos.x+alaIzquierda+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		var fresado4=new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado1 ));
		op_fresado.addObject(line,false);
		
	}else if (modelo==47) { //[DH7]
		var fresado1 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior)
		var fresado2 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca,pos.y+alaInferior)
		var fresado3 = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca,pos.y+alaInferior+alturaPlaca)
		var fresado4 = new RVector(pos.x+alaIzquierda+pliegueIzq,pos.y+alaInferior+alturaPlaca)
		
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado2 , fresado3 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado3 , fresado4 ));
		op_fresado.addObject(line,false);
		var line = new RLineEntity(document, new RLineData( fresado4 , fresado1 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior)
		var fresado2 = new RVector(pos.x+alaIzquierda,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		var fresado1 = new RVector(pos.x+alaIzquierda+pliegueDer+anchuraPlaca+pliegueIzq,pos.y+alaInferior)
		var fresado2 = new RVector(pos.x+alaIzquierda+pliegueDer+anchuraPlaca+pliegueIzq,pos.y+alaInferior+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
	}else if (modelo==48){//[DH8]
		var fresado1 = new RVector(pos.x+anchura1,pos.y)
		var fresado2 = new RVector(pos.x+anchura1,pos.y+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
		var fresado1 = new RVector(pos.x+anchura1+anchura2,pos.y)
		var fresado2 = new RVector(pos.x+anchura1+anchura2,pos.y+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
		
		var fresado1 = new RVector(pos.x,pos.y+alturaPlaca)
		var fresado2 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alturaPlaca)
		var line = new RLineEntity(document, new RLineData( fresado1 , fresado2 ));
		op_fresado.addObject(line,false);
		
	
	}
	
	
	
	
	
	return op_fresado;
}




//--------------------DIBUJAR CORTE (TIPO D)--------------------
function dibujarCorteD(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_corte = new RAddObjectsOperation();
	di.setCurrentLayer("Corte"); //Seleccionar la capa de corte



    //Modelo 40(cuadrado simple)
    if (modelo == 40) {//[DH]
        var corte1 = new RVector(pos.x, pos.y)
        var corte2 = new RVector(pos.x + anchuraPlaca, pos.y)
        var corte3 = new RVector(pos.x + anchuraPlaca, pos.y + alturaPlaca)
        var corte4 = new RVector(pos.x, pos.y + alturaPlaca)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte1));
        op_corte.addObject(line, false);


    } else if (modelo == 41) {//[DH1]
        var corte1 = new RVector(pos.x, pos.y)
        var corte2 = new RVector(pos.x + anchuraPlaca, pos.y)
        var corte3 = new RVector(pos.x + anchuraPlaca, pos.y + alaInferior + altura1 + altura2 + alaSuperior)
        var corte4 = new RVector(pos.x, pos.y + alaInferior + altura1 + altura2 + alaSuperior)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte1));
        op_corte.addObject(line, false);


    } else if (modelo == 42) {//[DH2]
        var corte1 = new RVector(pos.x, pos.y)
        var corte2 = new RVector(pos.x + anchuraPlaca, pos.y)
        var corte3 = new RVector(pos.x + anchuraPlaca, pos.y + alaInferior + pliegueInferior + alturaPlaca)
        var corte4 = new RVector(pos.x, pos.y + alaInferior + pliegueInferior + alturaPlaca)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte1));
        op_corte.addObject(line, false);


    } else if (modelo == 43) {//[DH3]
        var corte1 = new RVector(pos.x, pos.y)
        var corte2 = new RVector(pos.x + anchuraPlaca, pos.y)
        var corte3 = new RVector(pos.x + anchuraPlaca, pos.y + alaInferior + pliegueInferior + alturaPlaca + pliegueSuperior + alaSuperior)
        var corte4 = new RVector(pos.x, pos.y + alaInferior + pliegueInferior + alturaPlaca + pliegueSuperior + alaSuperior)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte1));
        op_corte.addObject(line, false);

    } else if (modelo == 44) {//[Dh4]
        var corte1 = new RVector(pos.x, pos.y)
        var corte2 = new RVector(pos.x + anchura1 + anchura2, pos.y)
        var corte3 = new RVector(pos.x + anchura1 + anchura2, pos.y + alturaPlaca)
        var corte4 = new RVector(pos.x, pos.y + alturaPlaca)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte1));
        op_corte.addObject(line, false);

    } else if (modelo == 45) {//[DH5]
        var corte1 = new RVector(pos.x, pos.y)
        var corte2 = new RVector(pos.x + anchura1 + anchura2 + anchura3 + anchura4, pos.y)
        var corte3 = new RVector(pos.x + anchura1 + anchura2 + anchura3 + anchura4, pos.y + alturaPlaca)
        var corte4 = new RVector(pos.x, pos.y + alturaPlaca)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte1));
        op_corte.addObject(line, false);

    } else if (modelo == 46) {//[DH6]
        var corte1 = new RVector(pos.x + alaIzquierda, pos.y + alaInferior)
        var corte2 = new RVector(pos.x + alaIzquierda, pos.y)
        var corte3 = new RVector(pos.x + alaIzquierda + anchuraPlaca, pos.y)
        var corte4 = new RVector(pos.x + alaIzquierda + anchuraPlaca, pos.y + alaInferior)
        var corte5 = new RVector(pos.x + alaIzquierda + anchuraPlaca + alaDerecha, pos.y + alaInferior)
        var corte6 = new RVector(pos.x + alaIzquierda + anchuraPlaca + alaDerecha, pos.y + alaInferior + alturaPlaca)
        var corte7 = new RVector(pos.x + alaIzquierda + anchuraPlaca, pos.y + alaInferior + alturaPlaca)
        var corte8 = new RVector(pos.x + alaIzquierda + anchuraPlaca, pos.y + alaInferior + alturaPlaca + alaSuperior)
        var corte9 = new RVector(pos.x + alaIzquierda, pos.y + alaInferior + alturaPlaca + alaSuperior)
        var corte10 = new RVector(pos.x + alaIzquierda, pos.y + alaInferior + alturaPlaca)
        var corte11 = new RVector(pos.x, pos.y + alaInferior + alturaPlaca)
        var corte12 = new RVector(pos.x, pos.y + alaInferior)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte5));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte5, corte6));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte6, corte7));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte7, corte8));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte8, corte9));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte9, corte10));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte10, corte11));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte11, corte12));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte12, corte1));
        op_corte.addObject(line, false);



    } else if (modelo == 47) {//[DH7]
        var corte1 = new RVector(pos.x, pos.y + alaInferior)
        var corte2 = new RVector(pos.x + alaIzquierda + pliegueIzq, pos.y + alaInferior)
        var corte3 = new RVector(pos.x + alaIzquierda + pliegueIzq, pos.y)
        var corte4 = new RVector(pos.x + alaIzquierda + pliegueIzq + anchuraPlaca, pos.y)
        var corte5 = new RVector(pos.x + alaIzquierda + pliegueIzq + anchuraPlaca, pos.y + alaInferior)
        var corte6 = new RVector(pos.x + alaIzquierda + pliegueIzq + anchuraPlaca + pliegueDer + alaDerecha, pos.y + alaInferior)
        var corte7 = new RVector(pos.x + alaIzquierda + pliegueIzq + anchuraPlaca + pliegueDer + alaDerecha, pos.y + alaInferior + alturaPlaca)
        var corte8 = new RVector(pos.x + alaIzquierda + pliegueIzq + anchuraPlaca, pos.y + alaInferior + alturaPlaca)
        var corte9 = new RVector(pos.x + alaIzquierda + pliegueIzq + anchuraPlaca, pos.y + alaInferior + alturaPlaca + alaSuperior)
        var corte10 = new RVector(pos.x + alaIzquierda + pliegueIzq, pos.y + alaInferior + alturaPlaca + alaSuperior)
        var corte11 = new RVector(pos.x + alaIzquierda + pliegueIzq, pos.y + alaInferior + alturaPlaca)
        var corte12 = new RVector(pos.x, pos.y + alaInferior + alturaPlaca)

        var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte5));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte5, corte6));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte6, corte7));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte7, corte8));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte8, corte9));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte9, corte10));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte10, corte11));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte11, corte12));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte12, corte1));
        op_corte.addObject(line, false);
    }
	
	else if (modelo==48){//[DH8
		var corte1 = new RVector(pos.x,pos.y)
		var corte2 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y)
		var corte3 = new RVector(pos.x+anchura1+anchura2+anchura3,pos.y+alturaPlaca+alaSuperior)
		var corte4 = new RVector(pos.x+anchura1+anchura2+alaSuperior,pos.y+alturaPlaca+alaSuperior)
		var corte5 = new RVector(pos.x+anchura1+anchura2,pos.y+alturaPlaca)
		var corte6 = new RVector(pos.x+anchura1+anchura2-alaSuperior,pos.y+alturaPlaca+alaSuperior)
		var corte7 = new RVector(pos.x+anchura1+alaSuperior,pos.y+alturaPlaca+alaSuperior)
		var corte8 = new RVector(pos.x+anchura1,pos.y+alturaPlaca)
		var corte9 = new RVector(pos.x+anchura1-alaSuperior,pos.y+alturaPlaca+alaSuperior)
		var corte10 = new RVector(pos.x,pos.y+alturaPlaca+alaSuperior)
		
		var line = new RLineEntity(document, new RLineData(corte1, corte2));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte2, corte3));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte3, corte4));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte4, corte5));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte5, corte6));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte6, corte7));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte7, corte8));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte8, corte9));
        op_corte.addObject(line, false);
        var line = new RLineEntity(document, new RLineData(corte9, corte10));
        op_corte.addObject(line, false);
		var line = new RLineEntity(document, new RLineData(corte10, corte1));
        op_corte.addObject(line, false);
		
	}


	return op_corte;
}







































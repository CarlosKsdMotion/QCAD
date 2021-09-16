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

include("scripts/EAction.js");
include("archivosAuxiliares/variablesGlobales.js");
include("archivosAuxiliares/funcionesAuxiliares.js");
include("archivosAuxiliares/familiaA.js");
include("archivosAuxiliares/familiaB.js");
include("archivosAuxiliares/familiaC.js");
include("archivosAuxiliares/familiaD.js");
include("archivosAuxiliares/familiaE.js");
include("archivosAuxiliares/familiaF.js");
include("archivosAuxiliares/familiaG.js");
include("archivosAuxiliares/familiaOtrosSistemas.js");






// [constructor]
/*
 * \class KSDpanel
 * \ingroup ecma_misc_examples_draw
 */
function KSDpanel(guiAction){
    EAction.call(this, guiAction);
}




// [inheritance]
KSDpanel.prototype = new EAction();

KSDpanel.includeBasePath = includeBasePath;




// [State]
KSDpanel.State = {
    SettingPosition : 0
};








/*

// init Global Options
KSDpanel.prototype = function (w) {
    switch (w.objectName) {
        case "prueba123":
            w.addItems(["manual", "FC", "40a", "60a", "80a"]);
            //w.setEditText("Pick Nozzle");
            break;
        case "prueba456":
            w.addItems(["manual", "16ga", "14ga", "12ga", "11ga", "3/16", "1/4", "3/8", "1/2", "5/8"]);
            //w.setEditText("16ga");
            break;

    }
};





*/





// [beginEvent]  --  SE EJECUTA CUANDO EL USUARIO CLICKA SOBRE LA EL GADGET
KSDpanel.prototype.beginEvent = function () {

    EAction.prototype.beginEvent.call(this);


    // ----- LLAMADA A LA INTERFAZ PRINCIPAL ----- //
    var dialog = WidgetFactory.createWidget(KSDpanel.includeBasePath, "KSDpanel_v2.ui");
	//var dialog = WidgetFactory.createWidget(KSDpanel.includeBasePath, "KSDpanel_previsualizacion.ui");
    //var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath , "KSDpanel.ui" );
    //var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/prueba2" , "dialog.ui" );
    //var dialog = WidgetFactory.createWidget( KSDpanel.includeBasePath +"/KSDpanel_interfazPrincipal" , "KSDpanel.ui" );


    //Se establecen los valores que se han puesto el el widget anteriormente
    WidgetFactory.restoreState(dialog);


	/*while(dialog.exec()==true){
		EAction.handleUserMessage("ha entrado");
		
		WidgetFactory.saveState(dialog);
		var widgets = getWidgets(dialog);
		
		if (widgets["modeloPanelA6"].checked){
			EAction.handleUserMessage("A6 marcado");
		}
		
		
		
		if (dialog.exec()==false){
			dialog.destroy();
			EAction.activateMainWindow();
			// User hit cancel:
			this.terminate();
			break;
			return;
		}
		
	}*/

    dialog.modeloPanelCH.setChecked(true);
	
    /*if (dialog.modeloPanelA0.checked) {
        EAction.handleUserMessage("HA ENTRADO");
    }*/


    /*MyPositionDialog {
        modeloPanelA0 {
            checked: true
            text: qsTr("First")
        }
        modeloPanelA1 {
            text: qsTr("Second")
        }
        modeloPanelA2 {
            text: qsTr("Third")
        }
    }*/
	


    //if (dialog.on_pushButton_clicked() == true) { 
    //if (dialog.pushButton.clicked == true){ 
    //if (dialog.pushButton.checkState == true){ 
    //if (dialog.modeloPanelA1.checkState == true) {

        //dialog.textoSalida.setText("hola, esto es una prueba _ version2");

        //dialog.pushButton.setVisible(false);

    //}

    
	
	
	if (dialog.exec()==false){
        dialog.destroy();
        EAction.activateMainWindow();
        // User hit cancel:
        this.terminate();
		break;
        return;
	}
	
	
	
	//Cuando el usuario pulsa 'OK' se almacenan todos los valores en 'widgets'
	WidgetFactory.saveState(dialog);
	var widgets = getWidgets(dialog);
	
	
	 
	
	
	
	// ----- GUARDAR VALOR 'MODELO' ----- //
	if (widgets["modeloPanelA0"].checked){ //TIPO A
		modelo=0;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA1"].checked){
		modelo=1;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA2"].checked){
		modelo=2;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA3"].checked){
		modelo=3;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA4"].checked){
		modelo=4;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA5"].checked){
		modelo=5;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA6"].checked){
		modelo=6;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA7"].checked){
		modelo=7;
		guardarParametrosA(modelo);
	}else if (widgets["modeloPanelA8"].checked){
		modelo=8;
		guardarParametrosA(modelo);
	}
	
	else if (widgets["modeloPanelB0"].checked){ //TIPO B
		modelo=9;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB1"].checked){
		modelo=10;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB2"].checked){
		modelo=11;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB3"].checked){
		modelo=12;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB4"].checked){
		modelo=13;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB5"].checked){
		modelo=14;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB6"].checked){
		modelo=15;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB7"].checked){
		modelo=16;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB8"].checked){
		modelo=17;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB9"].checked){
		modelo=18;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB10"].checked){
		modelo=19;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB11"].checked){
		modelo=20;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB12"].checked){
		modelo=21;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB13"].checked){
		modelo=22;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB14"].checked){
		modelo=23;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB15"].checked){
		modelo=24;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB16"].checked){
		modelo=25;
		guardarParametrosB(modelo);
	}else if (widgets["modeloPanelB17"].checked){
		modelo=26;
		guardarParametrosB(modelo);
	}
	
	else if (widgets["modeloPanelC0"].checked){ //TIPO C
		modelo=27;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC1"].checked){
		modelo=28;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC2"].checked){
		modelo=29;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC3"].checked){
		modelo=30;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC4"].checked){
		modelo=31;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC5"].checked){
		modelo=32;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC6"].checked){
		modelo=33;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC7"].checked){
		modelo=34;
		guardarParametrosC(modelo);
	}else if (widgets["modeloPanelC8"].checked){
		modelo=35;
		guardarParametrosC(modelo);
	}
	
	else if (widgets["modeloPanelD0"].checked){ //TIPO D
		modelo=40;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD1"].checked){
		modelo=41;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD2"].checked){
		modelo=42;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD3"].checked){
		modelo=43;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD4"].checked){
		modelo=44;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD5"].checked){
		modelo=45;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD6"].checked){
		modelo=46;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD7"].checked){
		modelo=47;
		guardarParametrosD(modelo);
	}else if (widgets["modeloPanelD8"].checked){
		modelo=48;
		guardarParametrosD(modelo);
	}
	
	else if (widgets["modeloPanelE0"].checked){ //TIPO E
		modelo=50;
		guardarParametrosE(modelo);
	}else if (widgets["modeloPanelE1"].checked){
		modelo=51;
		guardarParametrosE(modelo);
	}else if (widgets["modeloPanelE2"].checked){
		modelo=52;
		guardarParametrosE(modelo);
	}else if (widgets["modeloPanelE3"].checked){
		modelo=53;
		guardarParametrosE(modelo);
	}else if (widgets["modeloPanelE4"].checked){
		modelo=54;
		guardarParametrosE(modelo);
	}else if (widgets["modeloPanelE5"].checked){
		modelo=55;
		guardarParametrosE(modelo);
	}
	
	
	
	
	
	else if (widgets["modeloPanelG1"].checked){ //TIPO G
		modelo=104;
		guardarParametrosG(modelo);
	}else if (widgets["modeloPanelG2"].checked){
		modelo=105;
		guardarParametrosG(modelo);
	}else if (widgets["modeloPanelG3"].checked){
		modelo=106;
		guardarParametrosG(modelo);
	}else if (widgets["modeloPanelG4"].checked){
		modelo=112;
		guardarParametrosG(modelo);
	}else if (widgets["modeloPanelG5"].checked){
		modelo=122;
		guardarParametrosG(modelo);
	}else if (widgets["modeloPanelG6"].checked){
		modelo=136;
		guardarParametrosG(modelo);
	}
	
	
	
	
	else if (widgets["modeloPanelF1"].checked){ //TIPO F
		modelo=101;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF2"].checked){
		modelo=102;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF3"].checked){
		modelo=103;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF4"].checked){
		modelo=107;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF5"].checked){
		modelo=108;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF6"].checked){
		modelo=109;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF7"].checked){
		modelo=110;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF8"].checked){
		modelo=111;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF9"].checked){
		modelo=113;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF10"].checked){
		modelo=114;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF11"].checked){
		modelo=115;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF12"].checked){
		modelo=116;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF13"].checked){
		modelo=117;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF14"].checked){
		modelo=118;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF15"].checked){
		modelo=119;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF16"].checked){
		modelo=120;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF17"].checked){
		modelo=121;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF18"].checked){
		modelo=123;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF19"].checked){
		modelo=124;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF20"].checked){
		modelo=125;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF21"].checked){
		modelo=126;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF22"].checked){
		modelo=127;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF23"].checked){
		modelo=128;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF24"].checked){
		modelo=137;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF25"].checked){
		modelo=138;
		guardarParametrosF(modelo);
	}else if (widgets["modeloPanelF26"].checked){
		modelo=139;
		guardarParametrosF(modelo);
	}
	
	
	
	
	
	
	else if (widgets["modeloPanelCH"].checked){ //TIPO STB (OTROS SISTEMAS)
		modelo=129;
		guardarParametrosSTB(modelo);
	}else if (widgets["modeloPanelSZ"].checked){
		modelo=130;
		guardarParametrosSTB(modelo);
	}else if (widgets["modeloPanelREM"].checked){
		modelo=131;
		guardarParametrosSTB(modelo);
	}else if (widgets["modeloPanelPEG"].checked){
		modelo=132;
		guardarParametrosSTB(modelo);
	}
	
	
	EAction.handleUserMessage("modelo=" +modelo );
	
	
	
	
	
	//Cerrar interfaz
    dialog.destroy();
    EAction.activateMainWindow();
	
	
	
	
	
	// ----- CREACION DE CAPAS ----- //
	var di = this.getDocumentInterface();
    var document = this.getDocument();

    //Crear capa "Fresado"
    var op = new RModifyObjectsOperation();
    var linetypeId = document.getLinetypeId("CONTINUOUS");
    var layer = new RLayer(document, "Fresado", false, false, new RColor("green"), linetypeId, RLineweight.Weight000);
    op.addObject(layer);
    //EAction.handleUserMessage(qsTr("Añadida la capa \"Fresado\""));
    di.applyOperation(op);
	
	//Crear capa "Corte"
	var op = new RModifyObjectsOperation();
    var linetypeId = document.getLinetypeId("CONTINUOUS");
	var layer = new RLayer(document, "Corte", false, false, new RColor("red"), linetypeId, RLineweight.Weight000);
    op.addObject(layer);
    //EAction.handleUserMessage(qsTr("Añadida la capa \"Corte\""));
    di.applyOperation(op);
	
	//Crear capa "Taladros"
	var op = new RModifyObjectsOperation();
    var linetypeId = document.getLinetypeId("CONTINUOUS");
	var layer = new RLayer(document, "Taladros", false, false, new RColor("white"), linetypeId, RLineweight.Weight000); //blue
    op.addObject(layer);
    //EAction.handleUserMessage(qsTr("Añadida la capa \"Corte\""));
    di.applyOperation(op);
	
	//Crear capa "Texto"
	var op = new RModifyObjectsOperation();
    var linetypeId = document.getLinetypeId("CONTINUOUS");
	var layer = new RLayer(document, "Texto", false, false, new RColor("white"), linetypeId, RLineweight.Weight000);
    op.addObject(layer);
    //EAction.handleUserMessage(qsTr("Añadida la capa \"Texto\""));
    di.applyOperation(op);
	
	
	
	
	
	EAction.handleUserMessage(qsTr("Haz click para dibujar el panel."));
	
    this.setState(KSDpanel.State.SettingPosition);
	
};
































// [setState]
KSDpanel.prototype.setState = function(state) {
    EAction.prototype.setState.call(this, state);
	
    // set crosshair cursor for choosing the coordinate:
    this.setCrosshairCursor();
	
    // we are interested in coordinates the user clicks (as opposed to entities):
    this.getDocumentInterface().setClickMode(RAction.PickCoordinate);
	
    // status bar user information:
    var appWin = RMainWindowQt.getMainWindow();
    var tr = qsTr("Position");
    this.setLeftMouseTip(tr); //aceptar
    this.setCommandPrompt(tr);
    this.setRightMouseTip(EAction.trCancel); //cancelar
	
    // show the snap toolbar, so the user can choose an alternative snap tool if desired:
    EAction.showSnapTools();
};









// [coordinateEvent]
KSDpanel.prototype.coordinateEvent = function(event) {
	
    //Se guarda la posicion de donde se hace click
    var pos = event.getModelPosition(); 
	var di = this.getDocumentInterface();
	
    //Mueve el cero relativo a la posicion donde se hace click
    this.getDocumentInterface().setRelativeZero(pos);
	
	//Definicion de variables
	var op_corte = new RAddObjectsOperation();
	var op_fresado = new RAddObjectsOperation();
	var op_taladros = new RAddObjectsOperation();
	var op_texto = new RAddObjectsOperation();
	
	
	
	
	//Ajuste (temporal) de las variables
	if (modelo==0 || modelo==1 || modelo==4 || modelo==6){
		pliegueInferior=0;
	}
	
	
	
	//DIBUJAR BANDEJAS
	if (modelo>=0 && modelo<=8){ //TIPO A
		op_fresado = dibujarFresadoA(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteA(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		op_taladros = dibujarTaladrosA(modelo,di,pos,this.getDocument()); //Dibujar taladros
		this.getDocumentInterface().applyOperation(op_taladros);
	}
	
	
	
	
	else if (modelo>=9 && modelo<=26){ //TIPO B
		op_fresado = dibujarFresadoB(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteB(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		op_taladros = dibujarTaladrosB(modelo,di,pos,this.getDocument()); //Dibujar taladros
		this.getDocumentInterface().applyOperation(op_taladros);
	}
	
	
	
	
	else if (modelo>=27 && modelo<=35){ //TIPO C
		op_fresado = dibujarFresadoC(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteC(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		op_taladros = dibujarTaladrosC(modelo,di,pos,this.getDocument()); //Dibujar taladros
		this.getDocumentInterface().applyOperation(op_taladros);
	}
	
	

	
	else if (modelo>=40 && modelo<=48){ //TIPO D
		op_fresado = dibujarFresadoD(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteD(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		//op_taladros = dibujarTaladrosD(modelo,di,pos,this.getDocument()); //Dibujar taladros
		//this.getDocumentInterface().applyOperation(op_taladros);
	}
	
	else if (modelo>=50 && modelo<=55){ //TIPO E
		op_fresado = dibujarFresadoE(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteE(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		op_fresado = dibujarFresadoExteriorE(modelo,di,pos,this.getDocument()); //Dibujar fresado exterior
		this.getDocumentInterface().applyOperation(op_fresado);
	}
	
	else if (modelo==101){ //Panel F1
		op_fresado = dibujarFresado101(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte101(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==102){ //Panel F2
		op_fresado = dibujarFresado102(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte102(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==103){ //Panel F3
		op_fresado = dibujarFresado103(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte103(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==107){ //Panel F4
		op_fresado = dibujarFresado107(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte107(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==108){ //Panel F5
		op_fresado = dibujarFresado108(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte107(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==109){ //Panel F6
		op_fresado = dibujarFresado109(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte109(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==110){ //Panel F7
		op_fresado = dibujarFresado110(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte110(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==111){ //Panel F8
		op_fresado = dibujarFresado111(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte111(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==113){ //Panel F9
		op_fresado = dibujarFresado113(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte113(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==114){ //Panel F10
		op_fresado = dibujarFresado114(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte114(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==115){ //Panel F11
		op_fresado = dibujarFresado115(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte115(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==116){ //Panel F12
		op_fresado = dibujarFresado116(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte116(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	else if (modelo==117){ //Panel F13
		op_fresado = dibujarFresado117(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte117(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==118){ //Panel F14
		op_fresado = dibujarFresado118(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte118(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==119){ //Panel F15
		op_fresado = dibujarFresado119(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte119(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==120){ //Panel F16
		op_fresado = dibujarFresado120(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte120(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==121){ //Panel F17
		op_fresado = dibujarFresado121(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte121(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==123){ //Panel F18
		op_fresado = dibujarFresado123(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte123(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==124){ //Panel F19
		op_fresado = dibujarFresado124(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte124(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==125){ //Panel F20
		op_fresado = dibujarFresado125(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte125(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
	}else if (modelo==126){ //Panel F21
		op_fresado = dibujarFresado126(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte126(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
	}else if (modelo==127){ //Panel F22
		op_fresado = dibujarFresado127(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte127(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
	}else if (modelo==128){ //Panel F23
		op_fresado = dibujarFresado128(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte128(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
	}else if (modelo==137){ //Panel F24
		op_fresado = dibujarFresado137(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		op_corte = dibujarCorte137(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
	}else if (modelo==138){ //Panel F25
		op_fresado = dibujarFresado138(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte138(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}else if (modelo==139){ //Panel F26
		op_fresado = dibujarFresado139(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorte139(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
	}
	
	
	
	/*else if ((modelo>=101 && modelo<=103) || (modelo>=107 && modelo<=111) || (modelo>=113 && modelo<=121) || (modelo>=123 && modelo<=128) ){ //TIPO F
	
	
		op_fresado = dibujarFresadoF(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteF(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		//op_fresado = dibujarFresadoExteriorF(modelo,di,pos,this.getDocument()); //Dibujar fresado exterior
		//this.getDocumentInterface().applyOperation(op_fresado);
	}*/
	
	
	
	else if (modelo==104 || modelo==105 || modelo==106 || modelo==112 || modelo==122 || modelo==136){ //TIPO G
		
		op_fresado = dibujarFresadoG(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteG(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		//op_fresado = dibujarFresadoExteriorG(modelo,di,pos,this.getDocument()); //Dibujar fresado exterior
		//this.getDocumentInterface().applyOperation(op_fresado);
	}
	
	
	
	
	
	else if (modelo>=129 && modelo<=132){ //TIPO STB (OTROS SISTEMAS)
		op_fresado = dibujarFresadoSTB(modelo,di,pos,this.getDocument()); //Dibujar fresado
		this.getDocumentInterface().applyOperation(op_fresado);
		
		op_corte = dibujarCorteSTB(modelo,di,pos,this.getDocument()); //Dibujar corte
		this.getDocumentInterface().applyOperation(op_corte);
		
		op_taladros = dibujarTaladrosSTB(modelo,di,pos,this.getDocument()); //Dibujar taladros
		this.getDocumentInterface().applyOperation(op_taladros);
	}
	
	
	
	
	
	op_texto = dibujarTexto(modelo,di,pos,this.getDocument()); //Dibujar texto
	this.getDocumentInterface().applyOperation(op_texto);
	
	
	
	
	this.terminate(); //Terminar proceso
	
};















/*KSDpanel.prototype.coordinateEventPreview = function(event) {
    this.updatePreview();
	switch (this.state) {
    case KSDpanel.State.SettingPosition:
        this.pos = event.getModelPosition();
        this.updatePreview();
        break;
    default:
        break;
    }
};*/












//! [init]
KSDpanel.init = function(basePath) {
    var action = new RGuiAction(qsTr("Panel ejemplo"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/KSDpanel.js");
    action.setIcon(basePath + "/KSDpanel.svg");
    
	action.setStatusTip(qsTr("Draw three points"));
    action.setDefaultShortcut(new QKeySequence("k"));
    action.setDefaultCommands(["point3"]);
    action.setGroupSortOrder(73100);
    action.setSortOrder(400);
    action.setWidgetNames(["MyScriptsMenu"]);
};
//! [init]
//! [main]







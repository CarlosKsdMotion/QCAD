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





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//--------------------DIBUJAR TEXTO--------------------
function dibujarTexto(modelo,di,pos,document){
	
	//ESTABLECER CAPA
	var op_texto = new RAddObjectsOperation();
	di.setCurrentLayer("Texto"); //Seleccionar la capa de corte
	
	
	//DIBUJAR TEXTO
	if (modelo==0){ //TIPO A
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)
		var texto_panel = "PANEL A0"
	}
	else if (modelo==1){
		var texto_panel = "PANEL A1"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)	
	}
	else if (modelo==2){
		var texto_panel = "PANEL A2"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==3){
		var texto_panel = "PANEL A3"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==4){
		var texto_panel = "PANEL A4"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)	
	}
	else if (modelo==5){
		var texto_panel = "PANEL A5"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==6){
		var texto_panel = "PANEL A6"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)	
	}
	else if (modelo==7){
		var texto_panel = "PANEL A7"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==8){
		var texto_panel = "PANEL A8"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	
	
	
	
	else if (modelo==9){ //TIPO B
		var texto_panel = "PANEL B0"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==10){
		var texto_panel = "PANEL B1"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==11){
		var texto_panel = "PANEL B2"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==12){
		var texto_panel = "PANEL B3"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==13){
		var texto_panel = "PANEL B4"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==14){
		var texto_panel = "PANEL B5"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==15){
		var texto_panel = "PANEL B6"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==16){
		var texto_panel = "PANEL B7"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==17){
		var texto_panel = "PANEL B8"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==18){
		var texto_panel = "PANEL B9"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==19){
		var texto_panel = "PANEL B10"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==20){
		var texto_panel = "PANEL B11"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==21){
		var texto_panel = "PANEL B12"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==22){
		var texto_panel = "PANEL B13"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==23){
		var texto_panel = "PANEL B14"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==24){
		var texto_panel = "PANEL B15"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==25){
		var texto_panel = "PANEL B16"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==26){
		var texto_panel = "PANEL B17"
		var posicion = new RVector(pos.x+alaIzquierda+anchura1/2+anchura2/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	
	
	
	
	else if (modelo==27){ //TIPO C
		var texto_panel = "PANEL C0"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==28){
		var texto_panel = "PANEL C1"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==29){
		var texto_panel = "PANEL C2"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==30){
		var texto_panel = "PANEL C3"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==31){
		var texto_panel = "PANEL C4"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==32){
		var texto_panel = "PANEL C5"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==33){
		var texto_panel = "PANEL C6"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==34){
		var texto_panel = "PANEL C7"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2, pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==35){
		var texto_panel = "PANEL C8"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraIzq/2+anchuraCentro/2+anchuraDerecha/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	
	
	else if (modelo==40){ //TIPO D
		var texto_panel = "PANEL D0"
		var posicion = new RVector(pos.x+anchuraPlaca, pos.y+alturaPlaca)	
	}
	else if (modelo==41){
		var texto_panel = "PANEL D1"
		var posicion = new RVector(pos.x+anchuraPlaca , pos.y+alaInferior+(altura2+altura1)/2)	
	}
	else if (modelo==42){
		var texto_panel = "PANEL D2"
		var posicion = new RVector(pos.x+anchuraPlaca , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==43){
		var texto_panel = "PANEL D3"
		var posicion = new RVector(pos.x+anchuraPlaca , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}
	else if (modelo==44){
		var texto_panel = "PANEL D4"
		var posicion = new RVector(pos.x+anchura1/2+anchura2/2 , pos.y+alturaPlaca/2)	
	}
	else if (modelo==45){
		var texto_panel = "PANEL D5"
		var posicion = new RVector(pos.x+anchura1/2+anchura2/2+anchura3+2+anchura4/2 , pos.y+alturaPlaca/2)	
	}
	else if (modelo==46){
		var texto_panel = "PANEL D6"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)	
	}
	else if (modelo==47){
		var texto_panel = "PANEL D7"
		var posicion = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==48){
		var texto_panel = "PANEL D8"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3)/2 , pos.y+alturaPlaca/2)	
	}
	
	
	
	
	else if (modelo==50){ //TIPO E
		var texto_panel = "PANEL E0"
		var posicion = new RVector(pos.x+(margenM1+margenM2+anchuraPlaca)/2, pos.y+(altura1+altura2+altura3+altura4+altura5)/2)	
	}
	else if (modelo==51){
		var texto_panel = "PANEL E1"
		var posicion = new RVector(pos.x+(margenM1+margenM2+anchuraPlaca)/2, pos.y+(altura1+altura2+altura3+altura4+altura5)/2)	
	}
	else if (modelo==52){
		var texto_panel = "PANEL E2"
		var posicion = new RVector(pos.x+(anchura2+margenM2)/2, pos.y+(altura1+altura2+altura3+altura4)/2)	
	}
	else if (modelo==53){
		var texto_panel = "PANEL E3"
		var posicion = new RVector(pos.x+(anchura2+margenM1)/2, pos.y+(altura1+altura2+altura3+altura4)/2)	
	}
	else if (modelo==54){
		var texto_panel = "PANEL E4"
		var posicion = new RVector(pos.x+(anchura2+margenM2+margenM1)/2, pos.y+(altura1+altura2+altura3+altura4)/2)	
	}
	else if (modelo==55){
		var texto_panel = "PANEL E5"
		var posicion = new RVector(pos.x+(anchura2+margenM2+margenM1)/2, pos.y+(altura1+altura2+altura3+altura4)/2)	
	}
	
	
	else if (modelo==101){ //TIPO F
		var texto_panel = "PANEL F1"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==102){ 
		var texto_panel = "PANEL F2"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4+anchura5+anchura6+anchura7)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==103){ 
		var texto_panel = "PANEL F3"
		var posicion = new RVector(pos.x+anchuraPlaca/2 , pos.y+(altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8+altura9+altura10)/2)	
	}else if (modelo==107){ 
		var texto_panel = "PANEL F4"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==108){ 
		var texto_panel = "PANEL F5"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4+anchura5)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==109){ 
		var texto_panel = "PANEL F6"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+pliegueInf3+alturaPlaca/2)	
	}else if (modelo==110){ 
		var texto_panel = "PANEL F7"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}else if (modelo==111){ 
		var texto_panel = "PANEL F8"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4+anchura5)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}else if (modelo==113){ 
		var texto_panel = "PANEL F9"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==114){ 
		var texto_panel = "PANEL F10"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==115){ 
		var texto_panel = "PANEL F11"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}else if (modelo==116){ 
		var texto_panel = "PANEL F12"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==117){ 
		var texto_panel = "PANEL F13"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3)/2 , pos.y+alaInferior+pliegueInf3+alturaPlaca/2)	
	}else if (modelo==118){ 
		var texto_panel = "PANEL F14"
		var posicion = new RVector(pos.x-(anchura1+anchura2+anchura3+anchura4+anchura5)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}
	
	else if (modelo==119){ 
		var texto_panel = "PANEL F15"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4+anchura5)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}
	else if (modelo==120){ 
		var texto_panel = "PANEL F16"
		var posicion = new RVector(pos.x-(anchura1+anchura2+anchura3+anchura4+anchura5)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}
	else if (modelo==121){ 
		var texto_panel = "PANEL F17"
		var posicion = new RVector(pos.x-(anchura1+anchura2+anchura3+anchura4+anchura5)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}
	else if (modelo==123){ 
		var texto_panel = "PANEL F18"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4+anchura5)/2 , pos.y+alaInferior+pliegueInf2+alturaPlaca/2)	
	}else if (modelo==124){ 
		var texto_panel = "PANEL F19"
		var posicion = new RVector(pos.x+(anchura1+anchura2)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==125){ 
		var texto_panel = "PANEL F20"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==126){ 
		var texto_panel = "PANEL F21"
		var posicion = new RVector(pos.x+alaIzquierda+pliegueIzq+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==127){ 
		var texto_panel = "PANEL F22"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2 , pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==128){ 
		var texto_panel = "PANEL F23"
		var posicion = new RVector(pos.x+(alaIzquierda+anchura1+anchura2)/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}else if (modelo==137){ 
		var texto_panel = "PANEL F24"
		var posicion = new RVector(pos.x+(alaIzquierda+anchura1+anchura2+anchura3+anchura4)/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}else if (modelo==138){ 
		var texto_panel = "PANEL F25"
		var posicion = new RVector(pos.x+alaIzquierda+(anchura1+anchura2+anchura3)/2 , pos.y+alaInferior+pliegueInferior+alturaPlaca/2)	
	}else if (modelo==139){ 
		var texto_panel = "PANEL F26"
		var posicion = new RVector(pos.x-(anchura1+anchura2+anchura3)/2 , pos.y+pliegueInferior+alturaPlaca/2)	
	}
	
	
	
	
	
	
	
	else if (modelo==104){ //TIPO G
		var texto_panel = "PANEL G1"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2, pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==105){
		var texto_panel = "PANEL G2"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca-margenL/2/2, pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==106){
		var texto_panel = "PANEL G3"
		var posicion = new RVector(pos.x+alaIzquierda+margenL-anchuraPlaca/2, pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==112){
		var texto_panel = "PANEL G4"
		var posicion = new RVector(pos.x+alaIzquierda+pliegueIzq1+pliegueIzq2+pliegueIzq3+anchuraPlaca/2, pos.y+pliegueInf1+pliegueInf2+pliegueInf3+altura2/2)	
	}else if (modelo==122){
		var texto_panel = "PANEL G5"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2, pos.y+alaInferior+alturaPlaca/2)	
	}else if (modelo==136){
		var texto_panel = "PANEL G6"
		var posicion = new RVector(pos.x+(anchura1+anchura2+anchura3)/2, pos.y+altura1/2)	
	}
	
	
	
	
	
	else if (modelo==129){ //TIPO STB
		var texto_panel = "PANEL STB-T-CH"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2, pos.y+alaInferior+Math.max(pliegueInf1,pliegueInf2,pliegueInf3,pligueInf4,pliegueInf5,pliegueInf6,pliegueInf7)+alturaPlaca/2)	
	}
	else if (modelo==130){
		var texto_panel = "PANEL STB-T-SZ"
		var posicion = new RVector(pos.x+alaIzquierda+anchuraPlaca/2, pos.y+alaInferior+alturaPlaca/2)	
	}
	else if (modelo==131){
		var texto_panel = "PANEL STB-T-REM"
		var posicion = new RVector(pos.x+anchuraPlaca/2, pos.y+alturaPlaca/2)	
	}
	else if (modelo==132){
		var texto_panel = "PANEL STB-T-PEG"
		var posicion = new RVector(pos.x+anchuraPlaca/2, pos.y+alturaPlaca/2)	
	}
	
	
	
	
	
	//var texto_panel = textoDescriptivo   //Para que el mensaje sea el que pone el cliente en la casilla
	
	var text = new RTextEntity( 
		document,
		new RTextData(
			  posicion,         // position x
			  posicion,         // alignment point y
			  alturaPlaca/12,   // height
			  0.0,              // text width (ignored for now)
			  RS.VAlignTop,     // alignments
			  RS.HAlignCenter,
			  RS.LeftToRight,
			  RS.Exact,
			  1.0,              // line spacing factor
			  texto_panel,      // the text
			  "Arial",          // font
			  false,            // bold
			  false,            // italic
			  0.0,              // angle
			  false             // simple text without formatting
			)
		);
	op_texto.addObject(text);
	
	return op_texto;
}























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




//DECLARACION VARIABLES GLOBALES
var anchuraPlaca=1000;
var alturaPlaca=500;

var alaIzquierda=45;
var alaDerecha = alaIzquierda;
var alaSuperior=20;
var alaInferior=30;

var pliegueSuperior=45;
var pliegueInferior = 45;
var pliegueIzq = 45;
var pliegueDer = 45;

var margenA=57;
var margenB=108;

var distanciaAlas=4

var altura1=1200
var altura2=800
var altura3=800
var altura4=800

var anchuraIzq=500
var anchuraCentro=1000
var anchuraDerecha=500



//BOTAS DE CUELGUE
var alturaBotaDeCuelgue=56
var anchoBota=18.5

//Entradas comunes a todos los modelos [AH][BH][CH]
var crearBotas=1 //Crear o no botas
var parametroBotas=0 //Poner las botas en funcion del numero o de la distancia
var distanciaEntreBotas=500 //Distancia maxima entre botas 
var numeroBotas=3 //Numero de botas en cada lateral




//MODELO -- Esto hay que leerlo de la interfaz
var modelo=0


//TALADROS
var crearTaladros = 0
var diametroTaladros = 4
var distanciaBorde = 5

var crearColiso = 0
var taladroColiso = 0
var colisoColiso = 0
var anchuraColiso = 4
var alturaColiso = 15

//RIGIDIZADOR
var crearRigidizador=0
var compensacionGrosorComposite=4






//Variables pieza Familia G4
var pliegueSup1 = 10
var pliegueSup2 = 25
var pliegueSup3 = 50

var pliegueIzq1 = 10
var PliegueIzq2 = 25
var pliegueIzq3 = 50

var pliegueDer1 = 10
var pliegueDer2 = 25
var pliegueDer3 = 50

var pliegueInf1 = 10
var pliegueInf2 = 25
var pliegueInf3 = 50








import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
import {MundoAR} from './MundoAR.js';
import {ContextoAR} from './ContextoAR.js';
import {cargarModelo} from './CargarModelo.js';
//import { Reflector } from 'https://unpkg.com/three@0.122.0/examples/jsm/objects/Reflector.js';

var mundo;
var modelos = [];
var posiciones = [];
var contextoAR;

function iniciar(){
	console.log("V4");
    mundo = new MundoAR();
    contextoAR = new ContextoAR(mundo);
    //mundo.iluminar();
    mundo.iluminarConFoto('./hdr/fondoRedu.png',false);




    /*for(var i=0;i<5;i++){
        if(i!=2){
            var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
            var material = new THREE.MeshStandardMaterial( {color: 0xfffff*Math.random()} );
            modelos[i] = new THREE.Mesh( geometry, material );
            modelos[i].position.set((i*2)-4,0,0);
            mundo.escena.add( modelos[i] );
        }else{
            modelos[i] = new THREE.Object3D();
            cargarModelo('./modelo/espada.glb',mundo,modelos[i]);
        }
    }*/



    var descriptor = contextoAR.crearDescriptor('descriptor/cara');

    /*var geometriaCubo = new THREE.BoxBufferGeometry( 75, 75, 75 );
    var material = new THREE.MeshStandardMaterial( {color: 0xffffff*Math.random(0), roughness: 1, metalness: 0} );
    modelos[0] = new THREE.Mesh( geometriaCubo, material );
    modelos[0].position.z-= 80;
    modelos[0].position.x+= 60;
    modelos[0].position.y+= 37.5;
    descriptor.add( modelos[0] );*/

    modelos[0] = new THREE.Object3D();
	posiciones[0] = new THREE.Object3D();
    cargarModelo('./modelo/ARBOL.glb',descriptor,posiciones[0],modelos[0]);
    modelos[0].scale.x=35
    modelos[0].scale.y=35
    modelos[0].scale.z=35
    //modelos[0].position.z-= 80;
    //modelos[0].position.x+= 60;
    //modelos[0].position.y+= 17.5;
/*
    var vidrio = new THREE.MeshPhysicalMaterial( {
        color: 0xffffff,
        metalness: 0,
        roughness: 0,
        alphaTest: 0.5,
        depthWrite: false,
        envMapIntensity:1,
        transmission: 0.9, // use material.transmission for glass materials
        opacity: 1, // set material.opacity to 1 when material.transmission is non-zero
        transparent: true
    } );

    modelos[1] = new THREE.Mesh( geometriaCubo, vidrio );
    modelos[1].position.x+=1.2;
    mundo.escena.add( modelos[1] );

    var material = new THREE.MeshStandardMaterial( {color: 0xffffff, roughness: 0, metalness: 1} );
    modelos[3] = new THREE.Mesh( geometriaCubo, material );
    modelos[3].position.x-=1.2;
    mundo.escena.add( modelos[3] );

    var piso = new THREE.PlaneBufferGeometry( 5,5 );
	const espejo = new Reflector( piso, {
		clipBias: 0.003,
		textureWidth: window.innerWidth * window.devicePixelRatio,
		textureHeight: window.innerHeight * window.devicePixelRatio,
		color: 0x889999
	} );
    espejo.position.y-=0.6;
    espejo.rotateX(-Math.PI/2);
    mundo.escena.add( espejo );

    //var piso = new THREE.PlaneBufferGeometry( 5,5 );
	const espejo2 = new Reflector( piso, {
		clipBias: 0.003,
		textureWidth: window.innerWidth * window.devicePixelRatio,
		textureHeight: window.innerHeight * window.devicePixelRatio,
		color: 0x889999
	} );
    espejo2.position.y-=0.65;
    espejo2.rotateX(Math.PI/2);
    mundo.escena.add( espejo2 );


    var geometriaEsfera = new THREE.SphereBufferGeometry( 0.5 );
    var material = new THREE.MeshStandardMaterial( {color: 0xffffff*Math.random(0), roughness: 1, metalness: 0} );

    modelos[4] = new THREE.Mesh( geometriaEsfera, material );
    modelos[4].position.y-=1.5;
    mundo.escena.add( modelos[4] );*/
}

function animar(){
    requestAnimationFrame(animar);
	 modelos[0].position.lerp(posiciones[0].position,0.2);
	 modelos[0].rotation.lerp(posiciones[0].rotation,0.2);
    /*for(var i=0;i<1;i++){
        modelos[i].rotation.y+=0.01;
        modelos[i].rotation.x+=0.001;
        modelos[i].rotation.z+=0.005;
    }*/
    contextoAR.actualizar();
    mundo.dibujar();
}

iniciar();
animar();

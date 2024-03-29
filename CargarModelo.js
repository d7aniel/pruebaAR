import { GLTFLoader } from 'https://unpkg.com/three@0.122.0/examples/jsm/loaders/GLTFLoader.js';

export function cargarModelo(archivo,marcador,objetoVacio,objetoModelo){
    var loader = new GLTFLoader();
    loader.load(archivo,function(gltf){
        objetoModelo.add(gltf.scene);
        marcador.add(objetoVacio);
    });
}

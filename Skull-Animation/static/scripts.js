//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
/*
function iniciar(){
    var cena = new THREE.Scene();
    var LARGURA = window.innerWidth;
    var ALTURA = window.innerHeight;

    //1º parâmetro é o campo de visão, 2º é o tamanho da janela (para os objetos não ficarem destorcidos),
    //3º é a distância da lente com relação ao elemento, 4º é o limite de distância de renderização
    var camera = new THREE.PerspectiveCamera(45, LARGURA/ALTURA, 1, 1000);

    camera.position.z = 50; //Profundidade

    //antilias é para evitar serrilhado no objeto renderizado
    var renderer = new THREE.WebGLRenderer({antilias:true}); //Instanciar objeto para renderização

    renderer.setSize(LARGURA, ALTURA);

    //Aplica o objeto no body para renderização
    document.body.appendChild(renderer.domElement);

    renderer.setClearColor(0x1F5A94);

    const loader = new GLTFLoader();

    loader.load( 'path/to/model.glb', function ( gltf ) {

        scene.add( gltf.scene );

    }, undefined, function ( error ) {

        console.error( error );

    } );
}*/
function iniciar(){
    
}

window.onload = iniciar;
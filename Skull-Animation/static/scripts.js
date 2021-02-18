function iniciar(){
    var scene, camera, renderer, skull;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x434246);
    
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1000);
    //camera.rotation.y = 45/180*Math.PI;
    //camera.position.x = window.innerWidth/2;
    //camera.position.y = window.innerHeight/2;
    camera.position.z = 11;
    
    //controls = new THREE.OrbitControls(camera);
    //controls.addEventListener('change', renderer);
    
    hlight = new THREE.AmbientLight (0xECECF4,3);
    scene.add(hlight);
    
    /*directionalLight = new THREE.DirectionalLight(0xffffff,15);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);*/
    /*
    light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    scene.add(light);
    
    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    scene.add(light2);
    
    light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    scene.add(light3);
    
    light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,500);
    scene.add(light4);
    */
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
    let loader = new THREE.GLTFLoader();
    loader.load('models/skull/scene.gltf', function(gltf){
      skull = gltf.scene.children[0];
      skull.scale.set(1.5,1.5,1.5);
      
      scene.add(gltf.scene);
    });

    function minhaFuncao(){
        hlight = new THREE.AmbientLight (0xB163E6,0.05);
        scene.add(hlight);
    }
    
    function animate() {
        renderer.render(scene,camera);

        if(skull){
            skull.rotation.x += 0.02;
            skull.rotation.y += 0.01;
            skull.rotation.z += 0.02;
        }

        setTimeout(minhaFuncao, 5000);

        requestAnimationFrame(animate);
    }
    
    animate();
}

window.onload = iniciar;
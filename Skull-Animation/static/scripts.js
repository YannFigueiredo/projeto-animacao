function iniciar(){
    var scene, camera, renderer, skull;
    var cores = [0x434246, 0xFBF8D9];
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x434246);
    
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1000);
    camera.position.z = 11;
    
    hlight = new THREE.AmbientLight (0xECECF4,3);
    scene.add(hlight);
    
    directionalLight = new THREE.DirectionalLight(0xffffff,8);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
    let loader = new THREE.GLTFLoader();
    loader.load('models/skull/scene.gltf', function(gltf){
      skull = gltf.scene.children[0];
      skull.scale.set(1.5,1.5,1.5);
      
      scene.add(gltf.scene);
    });
    
    var controle = true;
    
    function animate() {
        renderer.render(scene, camera);

        if(skull){
            skull.rotation.x += 0.02;
            skull.rotation.y += 0.01;
            skull.rotation.z += 0.02;
        }
        
        if(controle == true){
            let cena2 = setTimeout(function() {
                scene.background = new THREE.Color(cores[Math.floor((Math.random() * cores.length))]);
                document.getElementById('h1-titulo').innerHTML = 'Esse fim pode chegar em um piscar de olhos...';
            }, 5000);
        }
        
        let cena3 = setTimeout(function(){
            controle = false;

            cores.splice(0, 2);
        
            document.getElementById('h1-titulo').innerHTML = 'Devemos fazer valer cada passo na estrada da vida.';
            
            hlight = new THREE.AmbientLight (0x9BCF35,0.01);
            scene.add(hlight);

            if(skull){
                skull.rotation.x += 0.02;
                skull.rotation.y += 0.03;
                skull.rotation.z += 0.02;
            }
            
            let loader = new THREE.TextureLoader();
            loader.load('textures/paisagem.jpg', function(texture)
            {
             scene.background = texture;  
            });
        }, 9000);
        requestAnimationFrame(animate);
    }
    
    animate();
}

window.onload = iniciar;
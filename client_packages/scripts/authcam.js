let sceneryCamera = mp.cameras.new('default', new mp.Vector3(1838.55, 243.56,866.23), new mp.Vector3(0,0,0), 40);
sceneryCamera.pointAtCoord(1838.55, 243.56,866.23); //Changes the rotation of the camera to point towards a location
sceneryCamera.setActive(true);
mp.game.cam.renderScriptCams(true, false, 0, true, false);
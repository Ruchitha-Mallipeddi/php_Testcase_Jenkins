pipeline {
  agent any
  	stages {
		
		
		
		stage('build') {
			wrap([$class: 'Xvfb', additionalOptions: '', assignedLabels: '', autoDisplayName: true, debug: true, displayNameOffset: 0, installationName: 'XVFB', parallelBuild: true, screen: '1024x758x24', timeout: 25]) {
        steps {
                                sh 'npm install -g yarn'
    				sh 'yarn install'
    				sh 'yarn test:headless'
			} 
        }
  			
  			}
	
	}
  	
}

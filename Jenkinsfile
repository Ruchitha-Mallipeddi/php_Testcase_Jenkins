pipeline {
  agent any
  	stages {
		
		
		withEnv(['/home/z/cypress-PHPTravels-app/node-modules/bin']){
		stage('build') {
			
  			steps {
                               
    				sh 'yarn install'
    				sh 'yarn test:headless'
			}
  			}
		}
	}
  	
}

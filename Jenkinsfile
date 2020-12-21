pipeline {
  agent any
  	stages {
		
		
		withEnv(['/home/z/cypress-PHPTravels-app/node_modules/bin']){
		stage('build') {
			
  			steps {
                                sh 'npm install -g yarn'
    				sh 'yarn install'
    				sh 'yarn test:headless'
			}
  			}
		}
	}
  	
}

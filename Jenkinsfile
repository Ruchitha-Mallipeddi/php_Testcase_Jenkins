pipeline {
  agent any
  	stages {
		
		
		stage('build') {
			withEnv(['PATH+NODE=/home/z/cypress-PHPTravels-app/node_modules/bin']) {
  			steps {
                                sh "npm install -g yarn"
    				sh 'yarn install'
    				sh 'yarn test:headless'
  			}
		}
    
  	}
}
}

pipeline {
  agent any
  	stages {
		
		
		withEnv(['export PATH=/usr/local/bin']){
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

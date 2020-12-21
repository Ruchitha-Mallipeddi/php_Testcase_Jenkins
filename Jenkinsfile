pipeline {
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                                sh 'npm install -g yarn'
    				sh 'yarn install'
		                sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:6.1.0
    				sh 'yarn test:headless'
			} 
        }
  			
  			}
	
	
}

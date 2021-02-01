pipeline {
	triggers {
        githubPush()
    }
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                                sh 'sudo npm install -g yarn'
    				sh 'yarn install'
		               
    				sh 'yarn test:headless'
		                
			} 
        }
  			
  			}
	
	
}

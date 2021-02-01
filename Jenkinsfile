pipeline {
	triggers {
        githubPush()
    }
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                               
    				sh 'yarn install'
		               
    				sh 'yarn test:headless'
		                
			} 
        }
  			
  			}
	
	
}

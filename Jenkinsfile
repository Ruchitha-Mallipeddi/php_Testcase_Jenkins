pipeline {
	triggers {
        githubPush()
    }
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                                
    				sh 'npm install'
		               
    				sh 'npm test:headless'
		                
			} 
        }
  			
  			}
	
	
}

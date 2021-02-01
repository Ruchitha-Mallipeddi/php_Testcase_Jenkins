pipeline {
	triggers {
        githubPush()
    }
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                                
    				sh 'npx cypress run'
		                
			} 
        }
  			
  			}
	
	
}

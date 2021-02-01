pipeline {
	triggers {
        githubPush()
    }
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {
                                 sh 'npm i'
    				 sh 'npm run cypress:ci'
		                
			} 
        }
  			
  			}
	
	
}

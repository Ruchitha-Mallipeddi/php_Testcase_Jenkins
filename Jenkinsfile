pipeline {
	
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {                               
    				sh 'yarn install'	               
    				


		                
			} 
        }
		stage('run tests') {
			
        steps {
                               	               
    				sh 'yarn add salty-cypress-testrail-reporter --save-dev'	                
		                sh 'yarn cypress run --reporter salty-cypress-testrail-reporter'


		                
			} 
        }
  			
  			}
	
	
}


pipeline {
  agent any
  	stages {
		
		stage('build')  {
                  
  			steps {
    				sh 'yarn install'
    				sh 'yarn test:headless'
  			}
		}
    stage('E2E Tests') {
    sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
}
  	}
}


pipeline {
  agent any
  	stages {
		stage('Run E2E tests') {
  dir("cypress-e2e-tests") {
    lock("cypress-e2e-tests-${env.NODE_NAME}") {
      sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
    }
  }
}
		stage('build') {
  			steps {
    				sh 'yarn install'
    				sh 'yarn test:headless'
  			}
		}
    
  	}
}

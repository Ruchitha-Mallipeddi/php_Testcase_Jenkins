pipeline {
  agent any
  	stages {
		
		
		
		stage('build') {
			
  			steps {
                                sh 'npm install -g yarn'
    				sh 'yarn install'
    				sh 'yarn test:headless'
			}
  			}
		parallel {
        // start several test jobs in parallel, and they all
        // will use Cypress Dashboard to load balance any found spec files
        stage('tester A') {
          steps {
            echo "Running build ${env.BUILD_ID}"
            sh "npm run e2e:record:parallel"
          }
        }
}
	}
  	
}

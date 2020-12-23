node('master'){
    stage('Clone sources') {
        git credentialsId: 'CREDENTIALSID', url: 'GIT URL'
    }
    stage('install dependencies') {
        sh 'yarn install'
    }
    stage('run tests') {
      
      sh 'yarn run test'
    }

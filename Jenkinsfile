pipeline {
  agent any
  stages {

    stage ('Install dependencies') {
        steps {
            sh 'npm install --global yarn'
        }
    }
    stage('build') {
      steps {
        sh 'CYPRESS_CACHE_FOLDER=$HOME/.cache/Cypress yarn install'
      }
    }
    stage('test') {
      steps {
        sh 'CYPRESS_CACHE_FOLDER=$HOME/.cache/Cypress yarn test'
      }
    }
  }
}

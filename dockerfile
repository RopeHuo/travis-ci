
FROM nginx
COPY ./index.html /root/docker_study/automation_pipeline_project/travis-ci
COPY ./dist /root/docker_study/automation_pipeline_project/travis-ci/dist
EXPOSE 80

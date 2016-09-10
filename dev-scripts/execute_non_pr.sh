docker build -t="scriptnull/wordist.xyz:build.travis.$TRAVIS_BUILD_NUMBER" .
docker tag scriptnull/wordist.xyz:build.travis.$TRAVIS_BUILD_NUMBER scriptnull/wordist.xyz:latest
docker login -e="$DOCKER_EMAIL" -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD";
# docker push scriptnull/wordist.xyz:build.travis.$TRAVIS_BUILD_NUMBER;
docker push scriptnull/wordist.xyz:latest

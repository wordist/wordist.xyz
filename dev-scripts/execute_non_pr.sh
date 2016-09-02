docker build -t="scriptnull/wordist.xyz:build.travis.$TRAVIS_BUILD_NUMBER" ..
docker login -e="$DOCKER_EMAIL" -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD";
docker push scriptnull/wordist.xyz:build.travis.$TRAVIS_BUILD_NUMBER;

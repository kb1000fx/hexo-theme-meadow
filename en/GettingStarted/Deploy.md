## Github Page
Install [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)
```
$ npm install hexo-deployer-git --save
```

Add the following configurations to `_config.yml` file in the `Site` folder:
```YML
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  branch: <branch>
```

Use `hexo g -d` to deploy

## Tencent Cloud COS
Install [hexo-deployer-cos](https://github.com/sdlzhd/hexo-deployer-cos)
```
$ npm install hexo-deployer-cos --save
```

Add the following configurations to `_config.yml` file in the `Site` folder:
```YML
deploy:
  type: cos
  secretId: yourSecretId
  secretKey: yourSecretKey
  bucket: yourBucket
  region: yourRegion
```

Use `hexo g -d` to deploy
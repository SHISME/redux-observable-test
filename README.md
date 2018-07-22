typescript + react + redux + react-router + redux-observable + rxjs 构建项目

基于 create-react-app 构建的项目，使用 `create-react-app my-app --scripts-version=react-scripts-ts` 构建的项目就是用typescript 构建的 react 项目。

## 注意点

## 反向代理第三方接口

在练习的时候，我们可能需要访问一下第三方接口，直接访问第三方接口会报跨域的错误，所以我们需要通过方向代理来防止跨域，
正好 create-react-app 有给我们提供这样一个配置

```
  "proxy": {
    "/movie/top250": {
      "target": "http://api.douban.com/v2",
      "secure": false,
      "changeOrigin": true // 必须设置这个，否者无法进行代理
    }
  }

```

在 package.json 中加入上面的配置,我们就可以通过 http://api.douban.com/v2/movie/top250 访问豆瓣的接口而不报跨域错误了

### redux-observable

目前很多中文教程是这样使用 rxjs 中的 operators 的。

```javascript

export const exampleEpic = (action$:ActionsObservable<any>) => {
    return action$.ofType(EXAMPLE_TYPE)
           .map((value) => {console.log(value)})
           .mapTo({type:NEXT_ACTION_TYPE})
};

```

但是这是 rxjs 5 以前的用法。

在 rxjs 6 operators 并不会挂载到 Observable 对象上了。而是需要通过 pipe方法去调用你需要用到的 operator

```javascript

export const exampleEpic = (action$:ActionsObservable<any>) => {
    return action$.ofType(EXAMPLE_TYPE)
           .pipe(
              map((value) => {console.log(value)}),
              mapTo({type:NEXT_ACTION_TYPE}),
           )
};

```